#!/bin/bash

check=`adb devices | grep device | grep -v List | wc -l`
if [ ${check} -ne 1 ]; then
    echo "Make sure one Android device is connected, bye"
    exit 0
fi

echo "Device:"
adb devices
echo "adb reverse tcp:8081 tcp:8081"
adb reverse tcp:8081 tcp:8081

