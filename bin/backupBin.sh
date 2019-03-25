#!/bin/bash

cp ~/bin/* /src/egalitarias/cbh/bin/
cd /src/egalitarias/cbh
git add bin/*
git commit -m "bin scripts"
git push

