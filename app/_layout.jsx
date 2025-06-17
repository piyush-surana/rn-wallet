import {tokenCache} from "@clerk/clerk-expo/token-cache"
import SafeScreen from "@/component/SafeScreen";
import {ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot>

        </Slot>
      </SafeScreen>
      <StatusBar style="dark"/>
    </ClerkProvider>
    
  );
}
