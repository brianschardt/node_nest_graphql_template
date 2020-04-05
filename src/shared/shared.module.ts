import { Module, HttpModule } from '@nestjs/common';
import { UserService } from './services/user.service';
import { DBModule } from '../db/db.module';
@Module({
  imports: [
    HttpModule,
    DBModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserService
  ]
})
export class SharedModule {}
