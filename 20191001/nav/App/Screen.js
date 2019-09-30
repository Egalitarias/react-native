import { Platform } from "react-native";

export function IosNotchPadding() {
  return Platform.OS === "ios" ? 30 : 0;
}
