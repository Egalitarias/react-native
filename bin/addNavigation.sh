#!/bin/bash 

# Install react-navigation
if [ -e package.json ]; then
    yarn add react-navigation
    yarn add react-native-gesture-handler
    react-native link react-native-gesture-handler
    yarn add @types/react-navigation
else
    echo "Run this script from within a React Native project, bye"
    exit 0
fi

