# React Native

## Components (26th March 2019) ##

Why babel & JSX?  Because it makes writing code easier

[babeljs.io](https://babeljs.io/repl)


Why use Components
* Inline JSX, stylesheets and functions gets really complex really quickly, not fun
* Break up your JSX into managble, reusable components
* Classes (encapsulate data and functions)
* Pass in props
* Each component has its own state (instead of using one monolithic state)
* Each compoent has its own lifecycle
* Can agregate components using JSX

Ask for React Native presenters, all are welcome

Checkout the [github repo](https://github.com/Egalitarias/react-native.git)

Open a terminal, run yarn install to install the dependencies, run an emulator and start metro
```
cd /src/github/egalitarias/react-native/20190326/basic
yarn install
../../bin/runEmulator.sh 
../../bin/androidStartMetro.sh
```

Open another terminal, run logcat
```
adb logcat | grep ReactNativeJS
```

Open another terminal, run the project
```
cd /src/github/egalitarias/react-native/20190326/basic
react-native run-android
```

### Functional Components ###

[Free Code Camp Functional Components](https://guide.freecodecamp.org/react-native/functional-vs-class-components/)

```
// Functional Component (no props, no state)
const Version = () => {
  return <Text>Version 1.0.1</Text>;
};
```

### Components ###

Component without props and state

```
import React, { Component } from "react";
import { Dimensions, View } from "react-native";

export class Padding extends Component {
  render() {
    return <View style={{ height: Dimensions.get("window").width * 0.05 }} />;
  }
}
```

Component with styling props

```
import React, { Component } from "react";
import { Text, TextStyle } from "react-native";

interface Props {
  style: TextStyle;
}
export class WelcomeText extends Component<Props> {
  render() {
    return <Text style={this.props.style}>{this.props.children}</Text>;
  }
}
```

### Code Snippets ###

Structuring components, index.ts
```
export * from "./WelcomeText";
export * from "./InstructionText";
```

Passing a handler to a component using props
```
interface Props {
  setButtonOnPress: () => void;
}
```
