#!/bin/bash 

# Install react-navigation
if [ -e package.json ]; then
    npm install react-navigation
    npm install react-native-gesture-handler
    react-native link react-native-gesture-handler
    npm install @types/react-navigation
else
    echo "Run this script from within a React Native project, bye"
    exit 0
fi

