#!/bin/bash

# Add font 
if [ ! -e package.json ]; then
    echo "Run this script from within a React Native project, bye"
    exit 0
fi

echo "Adding detox..."

brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
npm install detox --save-dev
npm install mocha --save-dev
detox init -r mocha

echo "detox build"
echo "detox test"
