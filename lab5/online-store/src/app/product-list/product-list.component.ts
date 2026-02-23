import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();

  onDeleteProduct(productId: number): void {
    const updated = this.products().filter((p) => p.id !== productId);

    // IMPORTANT:
    // input() is read-only, so we can't mutate parent value directly.
    // We keep a local rendered list for deletion behavior.
    this.localProducts = updated;
  }

  localProducts: Product[] | null = null;

  get renderedProducts(): Product[] {
    return this.localProducts ?? this.products();
  }
}