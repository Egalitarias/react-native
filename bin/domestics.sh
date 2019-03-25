#!/bin/bash

echo ""
echo "Warning: This script will perform a clean build on Domestics at /src/cbh-domestics-react"
echo -n "You will lose all code changes not pushed, do you want to continue y/n[n]? "
read response
response=`echo ${response} | tr [A-Z] [a-z]`
echo ${response}

if [ ! "${response}" == "y" ]; then
    echo "Nothing done, bye"
    exit 0
fi

if [ $# == 1 ]; then
    commit=$1
    echo "Using commit: ${commit}"
elif [ $# == 2 ]; then
    remote="${1}"
    branch="${2}"
    echo "Using remote ${remote} branch ${branch}"
fi

check=`cat ~/.ssh/config | grep IdentityFile | grep -v "#" | grep adapptor | wc -l`
if [ ${check} -ne 1 ]; then
    echo "~/.ssh/config is not configured for Adapptor"
    exit 0
fi

src=/src/adapptor/
dir=cbh-domestics-react
cd "${src}"

if [ -d "${dir}" ]; then
    echo "Removing git repo"
    rm -rf "${dir}"
fi

git clone git@bitbucket.org:adapptor/cbh-domestics-react.git

if [ ! -d "${dir}" ]; then
    echo "git clone failed, bye"
    exit 0
fi

cd "${dir}"

if [ "${commit}" != "" ]; then
    git checkout "${commit}"
    if [ $? -ne 0 ]; then
        echo "git checkout ${commit} failed, bye"
        exit 0
    fi
elif [ "${remote}" != "" ]; then
    git checkout -b "${branch}" "${remote}/${branch}"
    if [ $? -ne 0 ]; then
        echo "git checkout -b ${branch} ${remote}/${branch} failed, bye"
        exit 0
    fi
fi

yarn install

if [ ! -d ios ]; then
    echo "Missing ios directory"
    exit 0
fi

cd ios
pod install
cd .. 
fastlane ios prepare
echo "Build the Xcode project using the command: "
echo "cd /src/adapptor/cbh-domestics-react/; cd ios; xcodebuild -workspace CBHDomesticsReact.xcworkspace  -scheme CBHDomesticsReactDev build"
echo ""
echo "Deploy Android using the command: "
echo "cd /src/adapptor/cbh-domestics-react/; cd android ; ./gradlew installDevDebug"

