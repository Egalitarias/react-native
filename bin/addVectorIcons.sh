#!/bin/bash

# Install vector icons
if [ -e package.json ]; then
    npm install react-native-vector-icons
    npm install @types/react-native-vector-icons --save-dev
    react-native link react-native-vector-icons
else
    echo "Run this script from within a React Native project, bye"
    exit 0
fi

