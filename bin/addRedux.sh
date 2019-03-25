#!/bin/bash

if [ -e package.json ]; then
    npm install redux react-redux
    npm install @types/react-redux
else
    echo "Run this script from within a React Native project, bye"
    exit 0
fi


