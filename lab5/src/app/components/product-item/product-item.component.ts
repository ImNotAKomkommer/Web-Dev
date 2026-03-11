import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() readonly deleteProduct = new EventEmitter<number>();

  protected currentImageIndex = 0;

  protected get currentImage(): string {
    return this.product.images[this.currentImageIndex] || this.product.image;
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

  protected likeProduct(): void {
    this.product.likes += 1;
  }

  protected removeProduct(): void {
    this.deleteProduct.emit(this.product.id);
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

  protected getStars(): string[] {
    const filledStars = Math.round(this.product.rating);
    return Array.from({ length: 5 }, (_, index) =>
      index < filledStars ? '★' : '☆',
    );
  }
}