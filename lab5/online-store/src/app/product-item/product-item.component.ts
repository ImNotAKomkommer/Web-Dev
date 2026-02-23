import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  deleteProduct = output<number>();

  likeProduct(): void {
    // Since product is an object, incrementing nested field updates UI
    this.product().likes++;
  }

  removeProduct(): void {
    const confirmed = confirm(`Delete "${this.product().name}"?`);
    if (confirmed) {
      this.deleteProduct.emit(this.product().id);
    }
  }

  shareWhatsApp(): void {
    const p = this.product();
    const text = encodeURIComponent(`${p.name} - ${p.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(): void {
    const p = this.product();
    const text = encodeURIComponent(p.name);
    const url = encodeURIComponent(p.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}