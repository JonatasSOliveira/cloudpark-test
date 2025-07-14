import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginPage } from '@/presentation/pages/Login/LoginPage';
import { TicketListPage } from '@/presentation/pages/Ticket/List/TicketListPage';
import { TicketFormPage } from '@/presentation/pages/Ticket/Form/TicketFormPage';

export type RootStackParamList = {
  Login: undefined;
  TicketList: undefined;
  TicketForm: undefined;
};

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['cloudpark-test://'],
  config: {
    screens: {
      Login: 'login',
      TicketList: 'tickets',
      TicketForm: 'tickets/form',
    },
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="TicketList" component={TicketListPage} />
        <Stack.Screen name="TicketForm" component={TicketFormPage} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
