import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNoticationRequest {
  notificationId: string;
}

type ReadNoticationResponse = void;

@Injectable()
export class ReadNotication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNoticationRequest,
  ): Promise<ReadNoticationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
