import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<Product>();

  newProduct: Product = {
    image: '',
    name: '',
    description: '',
    rating: 0,
    link: '',
    gallery: []
  };

  addProduct() {
    if (this.newProduct.name && this.newProduct.description && this.newProduct.image) {
      this.productAdded.emit(this.newProduct);
      this.newProduct = { image:'', name: '', description: '', rating: 0, link: '', gallery: [] };
    }
  }
}