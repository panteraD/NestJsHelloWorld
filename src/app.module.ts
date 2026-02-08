import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module'; // Imoport new module

@Module({
  imports: [DatabaseModule], // Add to imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}