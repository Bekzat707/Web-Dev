import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kaspi-app';
  categories = ['Electronics', 'Clothing', 'Books', 'Furniture'];
  selectedCategory: string | null = null;
  products: Product[] = [];

  allProducts: { [key: string]: Product[] } = {
    Electronics: [
      { id: 1, name: 'iPhone 14 Pro 128GB',rating: 5.0, likes: 20, description: 'Смартфон Apple iPhone 14 Pro 128GB фиолетовый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?m=12071010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYQzA-4clv4Iflf1wOc6kgDO5Qhd0RzM3YF615cBrnx3OuGxZ8bUGQaAsaZEALw_wcB' },
      { id: 2, name: 'MacBook Pro 14',rating:4.0, likes: 9, description: 'MacBook Pro 14 2024 / 24 Гб / SSD 1000 Гб / macOS / MX2J3', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p25/15673696.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-1000-gb-macos-mx2j3-132140673/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZOpn5P3XcedHrp8uOt5xjdsTJw4uwAE7LdvoOFmiOymxS42YACkDgaAl5lEALw_wcB' },
      { id: 3, name: 'MacBook Air 13', rating:4.5,likes: 11, description: 'MacBook Air 13 2024 13.6" / 8 Гб / SSD 256 Гб / macOS / MRXV3', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hab/85673253928990.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxv3-118189620/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYFLo4jVtI3Zu-U04fRw_tOxMZ2k_A3L02ZW6FljLm9pgqYdL4e7zUaAge-EALw_wcB' },
      { id: 4, name: 'Samsung Galaxy Z Flip5',rating:4.8, likes: 18, description: 'Смартфон Samsung Galaxy Z Flip5 512GB зеленый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hbf/83172191535134.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip5-8-gb-512-gb-zelenyi-112861663/?m=842064&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYa30A8rp60gsVyW6SCgFO4oxjyfr7b1PlTbxsxZgU8xXRf4GYgtlEaAi_3EALw_wcB' },
    ],
    Clothing:[
      { id: 1, name: 'Футболка',rating: 4.9,likes: 10, description: 'Футболка Tespe черный', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hbc/86391516758046.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/futbolka-tespe-atk0173-chernyi-52-103962777/?c=750000000' },
      { id: 2, name: 'Брюки',rating:4.6, likes: 8, description: 'Спортивные брюки Urban Outfit черный', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p17/17584131.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-urban-outfit-as0539ub-chernyi-l-108460592/?c=750000000' },
      { id: 3, name: 'Повседневный костюм',rating:4.8, likes: 3, description: 'Повседневный костюм ALPIKA черный', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h59/85444924375070.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/povsednevnyi-kostjum-alpika-sport06-chernyi-46-117465437/?c=750000000' },
      { id: 4, name: 'Бомбер',rating:4.5, likes: 4, description: 'Бомбер ZENGR черный', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h63/hc5/85575654670366.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/bomber-zengr-vet11-chernyi-2xl-113559909/?c=750000000' },
    ],
    Books:[
      { id:1 , name: 'Адамзаттың асыл тәжі',rating:4.6 ,likes:99 , description: 'Книга Дамира Өмірзаққызы Ибрагим: Адамзаттың асыл тәжі', categoryId:1 , imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5f/86166055419934.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/damira-m-rza-yzy-ibragim-adamzatty-asyl-t-zh--119954682/?c=750000000' },
      { id:2 , name: 'Бейсен және болмыс',rating:4.6, likes: 77, description: 'Книга Керімбай С., Құспан А.: Бейсен және болмыс', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h88/85767456817182.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/ker-mbai-s-span-a-beisen-zh-ne-bolmys-103354158/?c=750000000' },
      { id:3 , name: 'Кемел адам',rating:4.6, likes: 88, description: 'Книга Жолдыбайұлы Қ.: Кемел адам', categoryId:1 , imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000' },
      { id:4 , name: 'Sen', rating:4.6,likes:66 , description: 'Книга Азамат Скаков: Sen. Әдет қалыптастыру әліппесі', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h4b/83690331635742.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/azamat-skakov-sen-det-alyptastyru-l-ppes--113255159/?c=750000000' }
    ],
    Furniture:[
      { id: 1, name: 'Диван',rating:4.6, likes: 12 , description: 'Диван прямой Nasip Raiana, обивка ткань, 85х230х70 см, светло-коричневый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000' },
      { id: 2, name: 'Стол письменный',rating:4.6 ,likes: 14, description: 'Стол письменный с надстройкой 40x114x140 см, stolpis002', categoryId: 2, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/?c=750000000' },
      { id: 3, name: 'Стол письменный',rating:4.6 ,likes: 15, description: 'Стол письменный ZETA Токио, 50x86x75 см, белый', categoryId: 3, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pc1/26548527.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-zeta-tokio-50x86x75-sm-belyi-115222548/?c=750000000' },
      { id: 4, name: 'Комлект, стол 200х80 см + 8 стульев',rating:4.6, likes: 19, description: 'Комплект на 8 персон Лиза темно-серый, стол 200х80 см + 8 стульев', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h87/hed/80948212400158.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/komplekt-na-8-person-liza-temno-seryi-stol-200h80-sm-8-stul-ev-110568062/?c=750000000' }
    ]
  };
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.products = this.allProducts[category] || [];
  }

  handleLike(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) product.likes++;
  }

  handleRemove(productId: number) {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}