import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { NoSpecController } from './no--spec/no--spec.controller';
import { AuthController } from './no--spec/auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    BookModule,
    AuthModule

  ],
  controllers: [AppController, NoSpecController, AuthController],
  providers: [AppService],
})
export class AppModule {}
