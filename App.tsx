import './global.css';

import React, { useEffect } from 'react';
import { AppNavigator } from './src/presentation/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { ServiceFacade } from '@/application/facades/ServiceFacade';

export default function App() {
  useEffect(() => {
    ServiceFacade.notificationListenerService.init();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#192834" />
      <AppNavigator />
    </>
  );
}
