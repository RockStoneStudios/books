import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BooksModule,
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : `${process.env.DB_HOST}` || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3307,
      username : `${process.env.DB_USERNAME}` || 'user',
      password : `${process.env.DB_PASSWORD}` || 'root',
      database : `${process.env.DB_DATABASE}` || 'book_crud',
      autoLoadEntities : true,
      synchronize : true
    }),
    UserModule,
    AuthModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
