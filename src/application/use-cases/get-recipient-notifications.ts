import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRecipientNoticationsRequest {
  recipientId: string;
}

interface GetRecipientNoticationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNoticationsRequest,
  ): Promise<GetRecipientNoticationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
