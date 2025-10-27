import { useAuth } from 'react-oidc-context';

// API base URL - updated with the actual API Gateway URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://zbp7knav5a.execute-api.us-east-1.amazonaws.com/prod';

// Standalone API call function for use outside of React components
export const apiCall = async (endpoint, method = 'GET', data = null) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Try multiple possible OIDC storage keys
  let token = null;
  const possibleKeys = [
    `oidc.user:https://cognito-idp.us-east-1.amazonaws.com/us-east-1_hmo1NV9TO:1n94am2jirka95privfedg42tu`,
    `oidc.user:${window.location.origin}`,
    'oidc.user'
  ];
  
  for (const key of possibleKeys) {
    const oidcStorage = localStorage.getItem(key);
    if (oidcStorage) {
      try {
        const userData = JSON.parse(oidcStorage);
        if (userData.access_token) {
          token = userData.access_token;
          break;
        }
      } catch (e) {
        console.warn(`Failed to parse OIDC storage for key ${key}:`, e);
      }
    }
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (data && (method === 'POST' || method === 'PUT')) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const useApiService = () => {
  const auth = useAuth();

  const getAuthHeaders = () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (auth.isAuthenticated && auth.user?.access_token) {
      headers.Authorization = `Bearer ${auth.user.access_token}`;
    }

    return headers;
  };

  const apiCall = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          // Token might be expired, try to refresh
          if (auth.isAuthenticated) {
            await auth.signinSilent();
            // Retry with new token
            config.headers = {
              ...getAuthHeaders(),
              ...options.headers,
            };
            const retryResponse = await fetch(url, config);
            if (!retryResponse.ok) {
              throw new Error(`API call failed: ${retryResponse.status}`);
            }
            return await retryResponse.json();
          }
        }
        throw new Error(`API call failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  };

  return {
    // GET requests
    get: (endpoint) => apiCall(endpoint, { method: 'GET' }),
    
    // POST requests
    post: (endpoint, data) => apiCall(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    
    // PUT requests
    put: (endpoint, data) => apiCall(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    
    // DELETE requests
    delete: (endpoint) => apiCall(endpoint, { method: 'DELETE' }),
  };
};

// Specific API methods
export const chatApi = {
  sendMessage: async (message, apiService) => {
    return await apiService.post('/chat', { message });
  },
  
  getHistory: async (apiService) => {
    return await apiService.get('/chat');
  },
};

export const scheduleApi = {
  saveSchedule: async (scheduleData, apiService) => {
    return await apiService.post('/schedule', scheduleData);
  },
  
  getSchedule: async (apiService) => {
    return await apiService.get('/schedule');
  },
};

export const profileApi = {
  getProfile: async (apiService) => {
    return await apiService.get('/profile');
  },
  
  saveProfile: async (profileData, apiService) => {
    return await apiService.post('/profile', profileData);
  },
};