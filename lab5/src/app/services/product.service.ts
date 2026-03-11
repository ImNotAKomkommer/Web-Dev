import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // Smartphones
    {
      id: 1,
      name: 'Samsung Galaxy M15 5G 6/128',
      description:
        'A practical 5G smartphone with a bright display and a large battery. Good for study, social media, and daily use.',
      price: 89990,
      rating: 4.8,
      image: 'https://placehold.co/600x400?text=Samsung+Galaxy+M15',
      images: [
        'https://placehold.co/600x400?text=Samsung+Front',
        'https://placehold.co/600x400?text=Samsung+Back',
        'https://placehold.co/600x400?text=Samsung+Display',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-m15-5g-6-gb-128-gb-seryi-118092017/',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Realme Note 50 4/256',
      description:
        'An affordable smartphone with a large screen and generous storage. Suitable for messaging, videos, and everyday tasks.',
      price: 69990,
      rating: 4.7,
      image: 'https://placehold.co/600x400?text=Realme+Note+50',
      images: [
        'https://placehold.co/600x400?text=Realme+Front',
        'https://placehold.co/600x400?text=Realme+Back',
        'https://placehold.co/600x400?text=Realme+Side',
      ],
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-256-gb-chernyi-podarok-129010520/',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Nothing Phone (1) 8/128',
      description:
        'A stylish phone with a unique transparent design and OLED display. It offers smooth performance and a modern interface.',
      price: 149990,
      rating: 4.8,
      image: 'https://placehold.co/600x400?text=Nothing+Phone+1',
      images: [
        'https://placehold.co/600x400?text=Nothing+Front',
        'https://placehold.co/600x400?text=Nothing+Back',
        'https://placehold.co/600x400?text=Nothing+Glyph',
      ],
      link: 'https://kaspi.kz/shop/p/nothing-phone-1-8-gb-128-gb-chernyi-105706208/',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'Apple iPhone 13 128GB',
      description:
        'A reliable smartphone with strong performance, quality cameras, and a premium display. Popular for long-term everyday use.',
      price: 289990,
      rating: 4.9,
      image: 'https://placehold.co/600x400?text=iPhone+13',
      images: [
        'https://placehold.co/600x400?text=iPhone+13+Front',
        'https://placehold.co/600x400?text=iPhone+13+Back',
        'https://placehold.co/600x400?text=iPhone+13+Side',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 13C 8/256',
      description:
        'A budget-friendly phone with a large display and high storage capacity. Useful for media, messaging, and school needs.',
      price: 64990,
      rating: 4.6,
      image: 'https://placehold.co/600x400?text=Redmi+13C',
      images: [
        'https://placehold.co/600x400?text=Redmi+Front',
        'https://placehold.co/600x400?text=Redmi+Back',
        'https://placehold.co/600x400?text=Redmi+Camera',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-115844349/',
      likes: 0,
      categoryId: 1,
    },

    // Laptops
    {
      id: 6,
      name: 'Lenovo ThinkBook 14 Gen 7',
      description:
        'A modern laptop for work and study with a fast SSD and practical display size. Good for office work and multitasking.',
      price: 429990,
      rating: 4.9,
      image: 'https://placehold.co/600x400?text=Lenovo+ThinkBook+14',
      images: [
        'https://placehold.co/600x400?text=ThinkBook+Open',
        'https://placehold.co/600x400?text=ThinkBook+Keyboard',
        'https://placehold.co/600x400?text=ThinkBook+Ports',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-thinkbook-14-gen-7-14-16-gb-ssd-512-gb-bez-os-21mr0050ru-121406564/',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 7,
      name: 'Oyan Lite X14 14.1"',
      description:
        'A lightweight laptop intended for basic productivity and online learning. Good for documents, browsing, and communication.',
      price: 119990,
      rating: 4.5,
      image: 'https://placehold.co/600x400?text=Oyan+Lite+X14',
      images: [
        'https://placehold.co/600x400?text=Oyan+Open',
        'https://placehold.co/600x400?text=Oyan+Keyboard',
        'https://placehold.co/600x400?text=Oyan+Profile',
      ],
      link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 8,
      name: 'Apple MacBook Air 13 M1 8/256',
      description:
        'A thin and efficient laptop with strong battery life and a premium build. Great for study, coding, and creative work.',
      price: 399990,
      rating: 4.9,
      image: 'https://placehold.co/600x400?text=MacBook+Air+M1',
      images: [
        'https://placehold.co/600x400?text=MacBook+Open',
        'https://placehold.co/600x400?text=MacBook+Keyboard',
        'https://placehold.co/600x400?text=MacBook+Side',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 9,
      name: 'ASUS Vivobook 15 X1504VA',
      description:
        'A practical everyday laptop with a larger screen and modern internals. Suitable for documents, lectures, and entertainment.',
      price: 259990,
      rating: 4.7,
      image: 'https://placehold.co/600x400?text=ASUS+Vivobook+15',
      images: [
        'https://placehold.co/600x400?text=Vivobook+Front',
        'https://placehold.co/600x400?text=Vivobook+Keyboard',
        'https://placehold.co/600x400?text=Vivobook+Side',
      ],
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504va-bq719-15-6-16-gb-ssd-512-gb-bez-os-90nb10j2-m00w60-114058052/',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 10,
      name: 'HP 15-fd0095ci',
      description:
        'An everyday laptop for students and home users with a comfortable screen size. Good for office apps, browsing, and meetings.',
      price: 219990,
      rating: 4.6,
      image: 'https://placehold.co/600x400?text=HP+15',
      images: [
        'https://placehold.co/600x400?text=HP+Open',
        'https://placehold.co/600x400?text=HP+Keyboard',
        'https://placehold.co/600x400?text=HP+Display',
      ],
      link: 'https://kaspi.kz/shop/p/hp-15-fd0095ci-15-6-16-gb-ssd-512-gb-dos-a1vv2ea-132082829/',
      likes: 0,
      categoryId: 2,
    },

    // Headphones
    {
      id: 11,
      name: 'Hoco W55',
      description:
        'Wireless over-ear headphones for casual listening and study sessions. They provide Bluetooth connectivity and a comfortable fit.',
      price: 18990,
      rating: 4.6,
      image: 'https://placehold.co/600x400?text=Hoco+W55',
      images: [
        'https://placehold.co/600x400?text=Hoco+Front',
        'https://placehold.co/600x400?text=Hoco+Folded',
        'https://placehold.co/600x400?text=Hoco+Side',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hoco-w55-serebristyi-131623200/',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 12,
      name: 'Beats Powerbeats Pro 2',
      description:
        'Premium wireless earphones designed for active use and everyday listening. They are compact, sporty, and easy to carry.',
      price: 129990,
      rating: 4.9,
      image: 'https://placehold.co/600x400?text=Powerbeats+Pro+2',
      images: [
        'https://placehold.co/600x400?text=Beats+Case',
        'https://placehold.co/600x400?text=Beats+Earbuds',
        'https://placehold.co/600x400?text=Beats+Use',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-beats-powerbeats-pro-2-chernyi-138023824/',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 13,
      name: 'Apple AirPods 3',
      description:
        'True wireless earphones with a compact case and easy ecosystem integration. Convenient for calls, music, and daily mobility.',
      price: 89990,
      rating: 4.8,
      image: 'https://placehold.co/600x400?text=AirPods+3',
      images: [
        'https://placehold.co/600x400?text=AirPods+Case',
        'https://placehold.co/600x400?text=AirPods+Open',
        'https://placehold.co/600x400?text=AirPods+Closeup',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-102667782/',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 14,
      name: 'JBL Tune 520BT',
      description:
        'Bluetooth on-ear headphones with a lightweight design and recognizable sound profile. Suitable for daily listening and travel.',
      price: 24990,
      rating: 4.7,
      image: 'https://placehold.co/600x400?text=JBL+Tune+520BT',
      images: [
        'https://placehold.co/600x400?text=JBL+Front',
        'https://placehold.co/600x400?text=JBL+Side',
        'https://placehold.co/600x400?text=JBL+Fold',
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-520bt-chernyi-109999321/',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 15,
      name: 'Sony WH-CH520',
      description:
        'Wireless headphones with long battery life and a simple everyday design. Great for lectures, calls, and music on the go.',
      price: 29990,
      rating: 4.8,
      image: 'https://placehold.co/600x400?text=Sony+WH-CH520',
      images: [
        'https://placehold.co/600x400?text=Sony+Front',
        'https://placehold.co/600x400?text=Sony+Side',
        'https://placehold.co/600x400?text=Sony+Detail',
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-ch520-chernyi-109274904/',
      likes: 0,
      categoryId: 3,
    },

    // Tablets
    {
      id: 16,
      name: 'Samsung Galaxy Tab A9 8/128',
      description:
        'A compact tablet for reading, video, browsing, and light multitasking. It is convenient for students and home media use.',
      price: 109990,
      rating: 4.7,
      image: 'https://placehold.co/600x400?text=Galaxy+Tab+A9',
      images: [
        'https://placehold.co/600x400?text=Tab+A9+Front',
        'https://placehold.co/600x400?text=Tab+A9+Back',
        'https://placehold.co/600x400?text=Tab+A9+Display',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-8-gb-128-gb-wi-fi-seryi-sm-x110nzaacau-114175051/',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 17,
      name: 'Apple iPad 10.9 2022 64GB Wi-Fi',
      description:
        'A modern tablet with a large bright display and smooth performance. Useful for note-taking, media, and everyday applications.',
      price: 239990,
      rating: 4.9,
      image: 'https://placehold.co/600x400?text=iPad+10.9+2022',
      images: [
        'https://placehold.co/600x400?text=iPad+Front',
        'https://placehold.co/600x400?text=iPad+Back',
        'https://placehold.co/600x400?text=iPad+Angle',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-64gb-sinii-mpq13rk-a-107264547/',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 18,
      name: 'Xiaomi Redmi Pad SE 8/256',
      description:
        'A large-screen Android tablet with good storage and a balanced design. Suitable for videos, study materials, and general home use.',
      price: 119990,
      rating: 4.8,
      image: 'https://placehold.co/600x400?text=Redmi+Pad+SE',
      images: [
        'https://placehold.co/600x400?text=Redmi+Pad+Front',
        'https://placehold.co/600x400?text=Redmi+Pad+Back',
        'https://placehold.co/600x400?text=Redmi+Pad+Display',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-8-gb-256-gb-wi-fi-seryi-113880662/',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 19,
      name: 'Lenovo Tab M10 Plus 128GB',
      description:
        'A family-friendly tablet with a convenient format for reading, streaming, and daily apps. Good for basic entertainment and study.',
      price: 99990,
      rating: 4.6,
      image: 'https://placehold.co/600x400?text=Lenovo+Tab+M10+Plus',
      images: [
        'https://placehold.co/600x400?text=Lenovo+Tab+Front',
        'https://placehold.co/600x400?text=Lenovo+Tab+Back',
        'https://placehold.co/600x400?text=Lenovo+Tab+Display',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-128-gb-wi-fi-seryi-113381334/',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 20,
      name: 'Huawei MatePad 11.5 6/128',
      description:
        'A modern tablet with a large display for study, documents, and entertainment. It offers a clean design and solid everyday usability.',
      price: 149990,
      rating: 4.7,
      image: 'https://placehold.co/600x400?text=Huawei+MatePad+11.5',
      images: [
        'https://placehold.co/600x400?text=MatePad+Front',
        'https://placehold.co/600x400?text=MatePad+Back',
        'https://placehold.co/600x400?text=MatePad+Screen',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-6-gb-128-gb-wi-fi-seryi-112706214/',
      likes: 0,
      categoryId: 4,
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products
      .filter((product) => product.categoryId === categoryId)
      .map((product) => ({ ...product }));
  }
}