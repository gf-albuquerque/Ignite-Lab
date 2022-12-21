import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNoticationsRequest {
  recipientId: string;
}

interface CountRecipientNoticationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNoticationsRequest,
  ): Promise<CountRecipientNoticationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
