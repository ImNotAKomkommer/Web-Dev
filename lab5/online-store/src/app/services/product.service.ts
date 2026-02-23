import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      categoryId: 1,
      name: 'Apple iPhone 13 128GB',
      description: 'Popular iPhone with powerful A15 chip and great camera.',
      price: 329990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h53/64082972745758.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-102298404/',
      likes: 0,
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Samsung Galaxy A54 5G',
      description: 'Balanced mid-range phone with AMOLED display.',
      price: 189990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h53/79946510811166.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-109892102/',
      likes: 0,
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Xiaomi Redmi Note 13',
      description: 'Affordable smartphone with solid battery life.',
      price: 99990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/haf/85040025628702.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-8-gb-256-gb-chernyi-115939488/',
      likes: 0,
    },
    {
      id: 4,
      categoryId: 1,
      name: 'HONOR X8a',
      description: 'Stylish smartphone with large display and camera setup.',
      price: 109990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h5f/69635685027870.jpg',
      link: 'https://kaspi.kz/shop/p/honor-x8a-6-gb-128-gb-chernyi-108166441/',
      likes: 0,
    },
    {
      id: 5,
      categoryId: 1,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Samsung phone with premium performance.',
      price: 399990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h45/69635658297374.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8-gb-256-gb-chernyi-108915698/',
      likes: 0,
    },

    // Laptops (categoryId: 2)
    {
      id: 6,
      categoryId: 2,
      name: 'Lenovo IdeaPad 3',
      description: 'Reliable laptop for study and everyday use.',
      price: 249990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h6c/64452486357022.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15iau7-82rk00xmru-seryi-108573615/',
      likes: 0,
    },
    {
      id: 7,
      categoryId: 2,
      name: 'ASUS VivoBook 15',
      description: 'Thin laptop with modern design and good screen.',
      price: 289990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h53/85704063823902.jpg',
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504va-bq123-i5-1335u-16-gb-512-gb-ssd-seryi-117760069/',
      likes: 0,
    },
    {
      id: 8,
      categoryId: 2,
      name: 'HP 15',
      description: 'Comfortable laptop for office tasks and browsing.',
      price: 269990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h2a/65110346031134.jpg',
      link: 'https://kaspi.kz/shop/p/hp-15-fd0026ci-i5-1334u-16-gb-512-gb-ssd-seryi-113992252/',
      likes: 0,
    },
    {
      id: 9,
      categoryId: 2,
      name: 'Acer Aspire 5',
      description: 'Popular choice for students and developers.',
      price: 299990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h7d/84767317610526.jpg',
      link: 'https://kaspi.kz/shop/p/acer-aspire-5-a515-57-57wq-i5-12450h-16-gb-512-gb-ssd-seryi-116714938/',
      likes: 0,
    },
    {
      id: 10,
      categoryId: 2,
      name: 'Apple MacBook Air 13 M1',
      description: 'Lightweight laptop with excellent battery life.',
      price: 469990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h3f/63882200117278.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-mgn63-seryi-100797845/',
      likes: 0,
    },

    // Headphones (categoryId: 3)
    {
      id: 11,
      categoryId: 3,
      name: 'Apple AirPods 2',
      description: 'Wireless earbuds with Apple ecosystem support.',
      price: 69990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h64/63846049345566.jpg',
      link: 'https://kaspi.kz/shop/p/apple-airpods-2-with-charging-case-mv7n2ru-a-belyi-4804717/',
      likes: 0,
    },
    {
      id: 12,
      categoryId: 3,
      name: 'JBL Tune 510BT',
      description: 'Bluetooth on-ear headphones with strong bass.',
      price: 24990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/hdb/64382356332574.jpg',
      link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-100645422/',
      likes: 0,
    },
    {
      id: 13,
      categoryId: 3,
      name: 'Xiaomi Redmi Buds 4 Lite',
      description: 'Budget TWS earbuds for daily use.',
      price: 11990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hb6/69655159160862.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-lite-belyi-108111885/',
      likes: 0,
    },
    {
      id: 14,
      categoryId: 3,
      name: 'Sony WH-CH520',
      description: 'Wireless headphones with long battery life.',
      price: 29990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/ha2/80306093023262.jpg',
      link: 'https://kaspi.kz/shop/p/sony-wh-ch520-chernyi-110869205/',
      likes: 0,
    },
    {
      id: 15,
      categoryId: 3,
      name: 'Samsung Galaxy Buds FE',
      description: 'Comfortable earbuds with ANC support.',
      price: 34990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/hc8/84555905081374.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-fe-grafit-116164946/',
      likes: 0,
    },

    // Tablets (categoryId: 4)
    {
      id: 16,
      categoryId: 4,
      name: 'Apple iPad 10.2 2021',
      description: 'Classic iPad for study, media, and apps.',
      price: 179990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h95/64334134652958.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-2-2021-wi-fi-64gb-seryi-102301598/',
      likes: 0,
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Samsung Galaxy Tab A9',
      description: 'Compact Android tablet for entertainment.',
      price: 89990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h70/84939404402718.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-wi-fi-8-gb-128-gb-seryi-115862219/',
      likes: 0,
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Xiaomi Redmi Pad SE',
      description: 'Affordable tablet with large screen and battery.',
      price: 99990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h50/84469088489502.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-8-gb-256-gb-seryi-115330872/',
      likes: 0,
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Lenovo Tab M10',
      description: 'Practical family tablet for everyday tasks.',
      price: 109990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/hf7/64369200873502.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-3rd-gen-4-gb-128-gb-seryi-104328019/',
      likes: 0,
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Apple iPad Air 2022',
      description: 'Powerful premium tablet with M1 chip.',
      price: 379990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h0f/64431868698654.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-64gb-fioletovyi-104235804/',
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProducts(): Product[] {
    return this.products.map((p) => ({ ...p }));
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products
      .filter((p) => p.categoryId === categoryId)
      .map((p) => ({ ...p }));
  }
}