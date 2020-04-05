import { Module } from '@nestjs/common';
import { DBModule } from './db/db.module';
import { SharedModule } from './shared/shared.module';
import { GraphqlModule } from './graphql/graphql.module';
import { ControllerModule } from './controllers/controller.module';

@Module({
  imports: [
    GraphqlModule,
    DBModule,
    SharedModule,
    ControllerModule,
  ],
})
export class AppModule {}
