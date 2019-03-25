#!/bin/bash

# https://medium.com/@vdelacou/add-react-navigation-to-react-native-typescript-app-d1cf855b3fe7

# Use ios-deploy to deploy to Apple devices
#npm install -g ios-deploy

if [ $# -ne 1 ]; then
    echo "Specify project name"
    exit -1
fi

if [ -d "${1}" ]; then
    echo "Project already exists"
    echo "Remove the project using:"
    echo "rm -rf \"${1}\""
    echo "Not overwriting project, bye"
    exit -1 
fi

pwd=`pwd`

echo "Creating project at [${pwd}/${1}]"
react-native init "${1}"
if [ ! -d "${1}" ]; then
    echo "Failed to create react native app, bye"
    exit -1 
fi
cd "${1}"
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

mkdir .vscode
cat <<EOT >> .vscode/launch.json
{
  "configurations": [
    {
      "name": "Debug Android",
      "program": "\${workspaceRoot}/.vscode/launchReactNative.js",
      "type": "reactnative",
      "request": "launch",
      "platform": "android",
      "sourceMaps": true,
      "outDir": "\${workspaceRoot}/.vscode/.react"
    }
  ]
}

EOT

