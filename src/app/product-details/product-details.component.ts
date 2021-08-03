import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //product = products;
  product: Product | undefined;

  //Injecting Cart Service
  //constructor(private cartService: CartService) {}

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  //ngOnInit() {}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product added!');
  }
}
