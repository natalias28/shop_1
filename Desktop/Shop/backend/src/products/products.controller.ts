import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service.js';
import type { Product } from './products.data.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('categories')
  getCategories(): string[] {
    return this.productsService.getCategories();
  }

  @Get('sections')
  getSections(): string[] {
    return this.productsService.getSections();
  }

  @Get()
  findAll(
    @Query('category') category?: string,
    @Query('section') section?: string,
    @Query('search') search?: string,
  ): Product[] {
    return this.productsService.findAll(category, section, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Product {
    return this.productsService.findOne(id);
  }
}
