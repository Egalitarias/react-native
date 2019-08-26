#!/bin/bash

if [ -e package.json ]; then
    yarn add redux react-redux
    yarn add @types/react-redux
    yarn add redux-thunk
else
    echo "Run this script from within a React Native project, bye"
    exit 0
fi


