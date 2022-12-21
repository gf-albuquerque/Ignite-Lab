import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotication } from '@application/use-cases/cancel-notification';
import { CountRecipientNotications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotication } from '@application/use-cases/read-notification';
import { UnreadNotication } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotication,
    CountRecipientNotications,
    GetRecipientNotications,
    ReadNotication,
    UnreadNotication,
  ],
})
export class HttpModule {}
