import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js'; // <- додали .js
import { ProductsController } from './products.controller.js'; // <- додали .js
import { PrismaModule } from '../prisma/prisma.module.js'; // <- додали .js

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}