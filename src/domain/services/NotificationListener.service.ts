import { NotificationListenerPortIn } from '@/ports/ports-in/NotificationListener.port-in';
import { NotificaitonListenerPortOut } from '@/ports/ports-out/NotificaitonListener.port-out';

export class NotificationListenerService implements NotificationListenerPortIn {
  constructor(private notificationListener: NotificaitonListenerPortOut) {}

  init(): void {
    this.notificationListener.init();
  }
}
