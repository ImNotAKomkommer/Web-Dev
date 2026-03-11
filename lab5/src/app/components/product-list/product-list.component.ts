import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
  @Output() readonly deleteProduct = new EventEmitter<number>();

  protected handleDeleteProduct(productId: number): void {
    this.deleteProduct.emit(productId);
  }
}