import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import ProtectedRoute from '../components/ProtectedRoute';
import { useApiService } from '../services/api';

const Account = () => {
  const auth = useAuth();
  const apiService = useApiService();
  
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    username: '',
    profileColor: '#4C1D95', // Default JMU Purple
    profileIcon: '👤',
    bio: ''
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const profileColors = [
    { name: 'JMU Purple', value: '#4C1D95' },
    { name: 'JMU Gold', value: '#C69214' },
    { name: 'Blue', value: '#2563EB' },
    { name: 'Green', value: '#059669' },
    { name: 'Red', value: '#DC2626' },
    { name: 'Orange', value: '#EA580C' },
    { name: 'Pink', value: '#DB2777' },
    { name: 'Indigo', value: '#4F46E5' }
  ];

  const profileIcons = ['👤', '🎓', '💻', '📚', '🚀', '⭐', '🎯', '💡', '🔥', '✨'];

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setIsLoading(true);
      const data = await apiService.get('/profile');
      if (data && data.profile) {
        setProfile(prev => ({ ...prev, ...data.profile }));
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      // If profile doesn't exist, we'll use defaults
    } finally {
      setIsLoading(false);
    }
  };

  const saveProfile = async () => {
    try {
      setIsSaving(true);
      setMessage('');
      
      await apiService.post('/profile', { profile });
      setMessage('Profile saved successfully!');
      
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      setMessage('Error saving profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-jmuOffWhite flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-jmuPurple mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-jmuOffWhite">
        {/* Page Header */}
        <section className="bg-jmuPurple text-white py-16">
          <div className="jmu-container text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Account Settings
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Customize your profile and manage your account preferences.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="jmu-section">
          <div className="jmu-container max-w-4xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              
              {/* Profile Preview */}
              <div className="bg-gradient-to-r from-jmuPurple to-purple-600 px-8 py-12 text-white text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: profile.profileColor }}
                >
                  {profile.profileIcon}
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">
                  {profile.firstName && profile.lastName 
                    ? `${profile.firstName} ${profile.lastName}`
                    : profile.username || 'Your Name'
                  }
                </h2>
                <p className="text-purple-100 mb-1">@{profile.username || 'username'}</p>
                <p className="text-purple-200 text-sm">{auth.user?.profile?.email}</p>
                {profile.bio && (
                  <p className="text-purple-100 text-sm mt-3 max-w-md mx-auto">{profile.bio}</p>
                )}
              </div>

              {/* Form */}
              <div className="p-8">
                {message && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    message.includes('Error') 
                      ? 'bg-red-50 border border-red-200 text-red-700'
                      : 'bg-green-50 border border-green-200 text-green-700'
                  }`}>
                    {message}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                      Personal Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={profile.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jmuPurple focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={profile.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jmuPurple focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <input
                          type="text"
                          value={profile.username}
                          onChange={(e) => handleInputChange('username', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jmuPurple focus:border-transparent"
                          placeholder="Choose a username"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          value={profile.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jmuPurple focus:border-transparent"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Profile Customization */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                      Profile Customization
                    </h3>

                    <div className="space-y-6">
                      {/* Profile Icon */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profile Icon
                        </label>
                        <div className="grid grid-cols-5 gap-2">
                          {profileIcons.map((icon) => (
                            <button
                              key={icon}
                              onClick={() => handleInputChange('profileIcon', icon)}
                              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-200 ${
                                profile.profileIcon === icon
                                  ? 'bg-jmuPurple text-white shadow-md'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                              }`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Profile Color */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profile Color
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {profileColors.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => handleInputChange('profileColor', color.value)}
                              className={`w-12 h-12 rounded-lg transition-all duration-200 ${
                                profile.profileColor === color.value
                                  ? 'ring-2 ring-gray-400 ring-offset-2'
                                  : 'hover:scale-105'
                              }`}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Information */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                    Account Information
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Email:</span>
                        <span className="ml-2 text-gray-600">{auth.user?.profile?.email}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Account Type:</span>
                        <span className="ml-2 text-gray-600">JMU Student</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={saveProfile}
                    disabled={isSaving}
                    className="jmu-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? 'Saving...' : 'Save Profile'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default Account;