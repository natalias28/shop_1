import { Injectable, NotFoundException } from '@nestjs/common';
import { STATIC_PRODUCTS, Product } from './products.data.js';

@Injectable()
export class ProductsService {
  private products: Product[] = STATIC_PRODUCTS;

  findAll(category?: string, section?: string, search?: string): Product[] {
    let result = [...this.products];

    if (category && category.toLowerCase() !== 'all') {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (section && section.toLowerCase() !== 'all') {
      result = result.filter(
        (p) => p.section.toLowerCase() === section.toLowerCase(),
      );
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    return result;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  getCategories(): string[] {
    const categories = Array.from(new Set(this.products.map((p) => p.category)));
    return ['all', ...categories];
  }

  getSections(): string[] {
    const sections = Array.from(new Set(this.products.map((p) => p.section)));
    return ['all', ...sections];
  }
}
