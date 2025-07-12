import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "@/presentation/pages/Login/LoginPage";
import { SafeAreaProvider } from "react-native-safe-area-context";


export type RootStackParamList = {
  Login: undefined;
  TicketList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} options={{ title: "Login" }} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
