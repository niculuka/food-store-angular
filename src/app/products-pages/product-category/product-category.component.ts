import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/shared/data/category.data';
import { Category } from 'src/app/shared/model/category.model';

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
