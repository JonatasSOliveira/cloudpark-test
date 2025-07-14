import { NotificaitonListenerPortOut } from '@/ports/ports-out/NotificaitonListener.port-out';
import { OneSignalProvider } from 'infra/onesignal/Provider';

export class OneSignalNotificationListenerAdapter implements NotificaitonListenerPortOut {
  init(): void {
    OneSignalProvider.init();
  }
}
