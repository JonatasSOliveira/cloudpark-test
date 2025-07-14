import { OneSignal, LogLevel } from 'react-native-onesignal';
import Constants from 'expo-constants';

export class OneSignalProvider {
  public static init(): void {
    try {
      OneSignal.Debug.setLogLevel(LogLevel.Verbose);
      OneSignal.initialize(Constants.expoConfig?.extra?.oneSignalAppId || '');
      OneSignal.Notifications.requestPermission(false);
    } catch (error) {
      console.error('Erro ao iniciar OneSignal', error);
    }
  }
}
