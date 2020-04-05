import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENV } from '../shared/configs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: ENV.DATABASE_TYPE as any,
      host: ENV.DATABASE_HOST,
      port: ENV.DATABASE_PORT as any,
      username: ENV.DATABASE_USERNAME,
      password: ENV.DATABASE_PASSWORD,
      database: ENV.DATABASE_NAME,
      synchronize: true,
      dropSchema: true,
      logging: true,
      entities: [
        __dirname + '/entities/*.entity.*',
      ],
      migrations: [
        __dirname + '/migrations/*',
      ],
    }),
  ],
  exports:[
    TypeOrmModule
  ]
})
export class DBModule {}
