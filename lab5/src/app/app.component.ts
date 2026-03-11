import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly categories: Category[];
  protected selectedCategory: Category | null = null;
  protected selectedProducts: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  protected selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectedProducts = this.productService.getProductsByCategory(category.id);
  }

  protected handleDeleteProduct(productId: number): void {
    this.selectedProducts = this.selectedProducts.filter(
      (product) => product.id !== productId,
    );
  }
}