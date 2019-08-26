#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Specify project name"
    exit -1
fi

pwd=`pwd`
scriptPath=`dirname ${0}`
cd "${scriptPath}"
scriptPath=`pwd`
cd "${pwd}"
src="${scriptPath}/src"
echo "src: [${src}]"
if [ ! -d "${src}" ]; then
    echo "Cant find ${src} directory, bye"
    exit 0
fi

${scriptPath}/../createProject.sh "${1}"
if [ $? -ne 0 ]; then exit -1; fi

cd "${1}"
${scriptPath}/../addNavigation.sh
if [ $? -ne 0 ]; then exit -1; fi

rm -rf App.js
if [ -d "${src}" ]; then
    cp -r "${src}/" .
else
    echo "Did not find directory ${src}, bye"
    exit 0
fi

echo "Create project complete"
echo ""
echo ""
echo "   *****************************************"
echo "   * iOS install build and run:            *"
echo "   * cd ${1}                               *"
echo "   * npm install                           *"
echo "   * cd ios; pod install; cd ..            *"
echo "   * react-native run-ios                  *"
echo "   *****************************************"

