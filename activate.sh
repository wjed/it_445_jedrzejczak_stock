#!/bin/bash
# Activation script for Git Bash
export VIRTUAL_ENV="$(pwd)/.venv"
export PATH="$VIRTUAL_ENV/Scripts:$PATH"
unset PYTHON_HOME
echo "Virtual environment activated. Use 'deactivate' to exit."

# Create deactivate function
deactivate() {
    export PATH="$(echo $PATH | sed 's|'$VIRTUAL_ENV'/Scripts:||')"
    unset VIRTUAL_ENV
    unset -f deactivate
    echo "Virtual environment deactivated."
}