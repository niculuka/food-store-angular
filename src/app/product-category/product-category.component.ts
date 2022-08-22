import { Component, OnInit } from '@angular/core';
import { categories } from '../model/category-data';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  categories: Array<Category> = categories;

  constructor() { }

  ngOnInit(): void {
  }

}
