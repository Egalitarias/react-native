# React Native

## Components (26th March 2019) ##

Checkout the [github repo](https://github.com/Egalitarias/react-native.git)

Open a terminal, run yarn install to install the dependencies, run an emulator and start metro
```
cd /src/github/egalitarias/react-native/20190326/basic
yarn install
../../bin/runEmulator.sh 
../../bin/androidStartMetro.sh
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

### Code Snippets ###

Structuring components, index.ts
```
export * from "./WelcomeText";
export * from "./InstructionText";
```
