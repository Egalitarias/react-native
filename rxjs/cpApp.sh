#!/bin/bash

if [ $# -ne 2 ]; then
    echo "Specify FROMPROJECT TOPROJECT"
    exit 0
fi

if [ ! -d "${1}" ]; then
    echo "Could not find project directory, ${1}, bye"
    exit 0
fi

if [ ! -d "${2}" ]; then
    echo "Could not find project directory ${2}, bye"
    exit 0
fi

echo "Copying..."
cp -R "${1}/App" "${2}"

