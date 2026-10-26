import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js'; // <- додали .js

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany();
  }

  create(createProductDto: any) {
    return 'This action adds a new product';
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: any) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}