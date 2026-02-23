import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Online Store';
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategoryId = category.id;
    this.selectedProducts = this.productService.getProductsByCategory(category.id);
  }

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }

  get selectedCategoryName(): string {
    return this.categories.find((c) => c.id === this.selectedCategoryId)?.name ?? '';
  }
}