import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import Home from "./src/screens/Home";
import dark from "./src/theme/dark";
import light from "./src/theme/light";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={dark}>
      <Home />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
