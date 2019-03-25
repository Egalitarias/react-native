#!/bin/bash

if [ $# -eq 0 ]; then
    cat ~/.ssh/config
    exit 0
fi

check=`cat ~/.ssh/config | grep IdentityFile | grep -v "#" | grep adapptor | wc -l`

chmod +wr ~/.ssh/config

if [ ${check} == 1 ]; then
    echo "Changing to egalitarias"
    cp ~/.ssh/config_egalitarias ~/.ssh/config
else
    echo "Changing to adapptor"
    cp ~/.ssh/config_adapptor ~/.ssh/config
fi

chmod 400 ~/.ssh/config
cat ~/.ssh/config

