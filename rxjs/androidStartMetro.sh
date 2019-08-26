#!/bin/bash

if [ ! -e yarn.lock ]; then
    echo "Current directory is no a React Native project, bye"
    exit 0
fi

echo "adb reverse tcp:8081 tcp:8081"
adb reverse tcp:8081 tcp:8081
yarn start

