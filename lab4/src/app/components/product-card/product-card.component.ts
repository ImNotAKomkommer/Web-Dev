import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  protected currentImageIndex = 0;

  protected get currentImage(): string {
    return this.product.images[this.currentImageIndex] || this.product.image;
  }

  protected get fullStars(): number[] {
    const fullStarCount = Math.floor(this.product.rating);
    return Array.from({ length: fullStarCount }, (_, index) => index);
  }

  protected get emptyStars(): number[] {
    const emptyStarCount = 5 - Math.ceil(this.product.rating);
    return Array.from({ length: emptyStarCount }, (_, index) => index);
  }

  protected selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  protected showPreviousImage(): void {
    const lastIndex = this.product.images.length - 1;
    this.currentImageIndex =
      this.currentImageIndex === 0 ? lastIndex : this.currentImageIndex - 1;
  }

  protected showNextImage(): void {
    this.currentImageIndex =
      this.currentImageIndex === this.product.images.length - 1
        ? 0
        : this.currentImageIndex + 1;
  }

  protected openWhatsAppShare(): void {
    const message = `Check out this product: ${this.product.link}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(shareUrl, '_blank');
  }

  protected openTelegramShare(): void {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;

    window.open(shareUrl, '_blank');
  }
}