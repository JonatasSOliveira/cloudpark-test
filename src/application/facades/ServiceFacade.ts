import { BFFTicketAdapter } from '@/adapters/bff/Ticket.adapter';
import { BFFAuthAdapter } from '@/adapters/bff/Auth.adapter';
import { AuthService } from '@/domain/services/Auth.service';
import { TicketService } from '@/domain/services/Ticket.service';
import { TicketCategoryService } from '@/domain/services/TicketCategory.service';
import { BFFTicketCategoryAdapter } from '@/adapters/bff/TicketCategory.adapter';
import { AuthPortIn } from '@/ports/ports-in/Auth.port-in';
import { TicketPortIn } from '@/ports/ports-in/Ticket.port-in';
import { TicketCategoryPortIn } from '@/ports/ports-in/TicketCategory.port-in';
import { NotificationListenerPortIn } from '@/ports/ports-in/NotificationListener.port-in';
import { NotificationListenerService } from '@/domain/services/NotificationListener.service';
import { OneSignalNotificationListenerAdapter } from '@/adapters/onesignal/NotificationListener.adapter';

class LazyServiceFacade {
  private _authService?: AuthPortIn;
  private _ticketService?: TicketPortIn;
  private _ticketCategoryService?: TicketCategoryPortIn;
  private _notificationListenerService?: NotificationListenerPortIn;

  get authService(): AuthPortIn {
    if (!this._authService) {
      this._authService = new AuthService(new BFFAuthAdapter());
    }
    return this._authService;
  }

  get ticketService(): TicketPortIn {
    if (!this._ticketService) {
      this._ticketService = new TicketService(new BFFTicketAdapter());
    }
    return this._ticketService;
  }

  get ticketCategoryService(): TicketCategoryPortIn {
    if (!this._ticketCategoryService) {
      this._ticketCategoryService = new TicketCategoryService(new BFFTicketCategoryAdapter());
    }
    return this._ticketCategoryService;
  }

  get notificationListenerService(): NotificationListenerPortIn {
    if (!this._notificationListenerService) {
      this._notificationListenerService = new NotificationListenerService(
        new OneSignalNotificationListenerAdapter()
      );
    }
    return this._notificationListenerService;
  }
}

export const ServiceFacade = new LazyServiceFacade();
