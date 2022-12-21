import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface UnreadNoticationRequest {
  notificationId: string;
}

type UnreadNoticationResponse = void;

@Injectable()
export class UnreadNotication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNoticationRequest,
  ): Promise<UnreadNoticationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
