import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNoticationRequest {
  notificationId: string;
}

type CancelNoticationResponse = void;

@Injectable()
export class CancelNotication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNoticationRequest,
  ): Promise<CancelNoticationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
