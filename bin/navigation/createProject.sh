#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Specify project name"
    exit -1
fi

pwd=`pwd`
scriptPath=`dirname ${0}`
src="${scriptPath}/src"
echo "${src}"
if [ ! -d "${src}" ]; then
    echo "Cant find ${src} directory, bye"
    exit 0
fi

${scriptPath}/../createProject.sh "${1}"
if [ $? -ne 0 ]; then
    exit -1
fi


cd "${1}"
pwd
${scriptPath}/../addNavigation.sh
rm App.js
cp -r "${src}/" .

