#!/bin/bash

# Add font 
if [ ! -e package.json ]; then
    echo "Run this script from within a React Native project, bye"
    exit 0
fi

if [ $# -eq 0 ]; then 
    echo "Specify font file, bye"
    exit 0
fi

if [ ! -e "${1}" ]; then
    echo "Counld not find font at ${1}, bye"
    exit 0
fi

function addRnpm() {
cat <<EOT >> "${1}" 
  },
  "rnpm": {
    "assets": [
      "./assets/fonts/"
    ]
  }
}
EOT
}

basename=`basename ${1}`
echo ${basename}
check=`cat package.json | grep \"rnpm\" | wc -l`
if [ ${check} -eq 0 ]; then
    echo "Adding rnmp"
    len=`cat package.json | wc -l`
    pos=`expr ${len} - 2`
    tmp=package.json.tmp
    cat package.json | head -n ${pos} > "${tmp}"
    addRnpm "${tmp}"
    cp "${tmp}" package.json
    rm -rf "${tmp}"
else
    echo "rnpm already exists"
fi

if [ ! -d assets/fonts ]; then
    mkdir -p assets/fonts
fi

cp "${1}" assets/fonts
mkdir -p android/app/src/main/assets/fonts
react-native link


cat << EOF
Add the following to Xcode method AppDelegate.m  - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  for(NSString *fontfamilyname in [UIFont familyNames])
  {
    NSLog(@"family:'%@'",fontfamilyname);
    for(NSString *fontName in [UIFont fontNamesForFamilyName:fontfamilyname])
    {
      NSLog(@"\tfont:'%@'",fontName);
    }
    NSLog(@"-------------");
  }

Run the project in Xcode and search for the font family name in the console

In your React Native project, use the style property fontFamily: FAMILYINAME
<Text style={{fontFamily: FONTFAMILY}}>Some text</Text>

on Mac fc-list will list all fonts and their faily name
cp FONTPATH /Library/Fonts
fc-list | grep SEARCH 

eg.
cp assets/fonts/AlexBrush-Regular.ttf /Library/Fonts
fc-list | grep Alex
/Library/Fonts/AlexBrush-Regular.ttf: Alex Brush:style=Regular

EOF


