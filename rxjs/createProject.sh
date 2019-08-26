#!/bin/bash

# Use ios-deploy to deploy to Apple devices
#npm install -g ios-deploy

if [ $# -ne 1 ]; then
    echo "Specify project name"
    exit 0
fi

if [ -d "${0}" ]; then
    echo "Project already exists, bye"
    exit 0
fi

react-native init ${1} 
cd ${1}
npm install

yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
yarn add --dev @types/react @types/react-native


npm install --save-dev babel-eslint eslint eslint-plugin-react

cat <<EOT >> .eslintrc
{
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        // overrides
    }
}
EOT

# Make sure ESLint is working in Visual Studio Code
rm -rf node_modules
yarn install

