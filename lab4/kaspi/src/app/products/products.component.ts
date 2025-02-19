import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hbf/83172191535134.jpg?format=gallery-medium',
      name: 'Samsung Galaxy Z Flip5',
      description: 'Смартфон Samsung Galaxy Z Flip5 512GB зеленый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip5-8-gb-512-gb-zelenyi-112861663/?m=842064&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYa30A8rp60gsVyW6SCgFO4oxjyfr7b1PlTbxsxZgU8xXRf4GYgtlEaAi_3EALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h25/83172192813086.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h72/83172193828894.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/h6a/83172194910238.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h4f/83172195696670.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfd/h2d/83172197072926.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium',
      name: 'iPhone 14 Pro 128GB',
      description: 'Смартфон Apple iPhone 14 Pro 128GB фиолетовый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?m=12071010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYQzA-4clv4Iflf1wOc6kgDO5Qhd0RzM3YF615cBrnx3OuGxZ8bUGQaAsaZEALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h94/64434420252702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h07/64434423136286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/hdb/64434426511390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h85/h67/64434428805150.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h71/87129348046878.jpg?format=gallery-medium',
      name: 'Xiaomi 13T Pro 512GB',
      description: 'Смартфон Xiaomi 13T Pro 512GB синий',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-13t-pro-12-gb-512-gb-chernyi-113419674/?m=17306165&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYZVu71gjhvI1miih20FvaH70-xOJW_Vd1t2MLsOKgE1ytwo_toFr4aAttMEALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/h99/87129348079646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hfd/87129348112414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h3a/87129348145182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/h22/87129348177950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h89/87129348210718.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h2e/86319870771230.jpg?format=gallery-medium',
      name: ' iPhone 15 Pro Max 512Gb ',
      description: 'Смартфон Apple iPhone 15 Pro Max 512Gb черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-512gb-chernyi-113138396/?m=3932001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZVSXt4zmiI-Rzl2V4M-QI0457DeX_7lxh9bKEzHGxcgF5T-UJTZS4aAsaYEALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h94/86319870803998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h60/86319870836766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/haa/86319870869534.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p25/15673696.png?format=gallery-medium',
      name: 'MacBook Pro 14',
      description: 'MacBook Pro 14 2024 / 24 Гб / SSD 1000 Гб / macOS / MX2J3',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-1000-gb-macos-mx2j3-132140673/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZOpn5P3XcedHrp8uOt5xjdsTJw4uwAE7LdvoOFmiOymxS42YACkDgaAl5lEALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p03/p25/15673700.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p74/p25/15673704.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p25/15673708.png?format=gallery-medium'

      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hab/85673253928990.png?format=gallery-medium',
      name: 'MacBook Air 13',
      description: 'MacBook Air 13 2024 13.6" / 8 Гб / SSD 256 Гб / macOS / MRXV3',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxv3-118189620/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYFLo4jVtI3Zu-U04fRw_tOxMZ2k_A3L02ZW6FljLm9pgqYdL4e7zUaAge-EALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h72/85673253994526.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/h4c/85673254060062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h44/85673254191134.png?format=gallery-medium'
      ]
    },
    
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p01/17948532.png?format=gallery-medium',
      name: 'HP Spectre x360 ',
      description: 'Ноутбук HP Spectre x360 16-aa0002ci 16" / 32 Гб / SSD 1000 Гб / Win 11 Home / A16KFEA',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-16-aa0002ci-16-32-gb-ssd-1000-gb-win-11-home-a16kfea-132810607/?m=30027560&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZO2r5oUgbvGJS8WTg8VGjk7HGeZk3DYGxNwiMBIvxgS9Ri-T3GrHQaAj_6EALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p01/17948537.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p01/17948542.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p01/17948544.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1a/p02/17948545.png?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h78/87155503595550.png?format=gallery-medium',
      name: 'ASUS Zenbook S 14 ',
      description: 'Ноутбук ASUS Zenbook S 14 OLED 14" / 32 Гб / SSD 1024 Гб / Win 11 / UX5406SA-PV050W / 90NB14F1-M007W0',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/asus-zenbook-s-14-oled-14-32-gb-ssd-1024-gb-win-11-ux5406sa-pv050w-90nb14f1-m007w0-123713911/?m=SoftMaster&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYE3GVSBhb_0nDt6MUuZPFzGKfYLXjtZsEo18RHmtYyyFADNeJCRkYaAuMgEALw_wcB',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hb0/87155503661086.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h6c/87155503726622.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hbd/87155503792158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hb6/87155503857694.png?format=gallery-medium',


      ]
    },
    
  ];

  
  shareProduct(link: string) {
    const message = `Check out this product: ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    window.open(telegramUrl, '_blank');
  }
}
