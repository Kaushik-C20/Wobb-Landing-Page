import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    'Beauty',
    'Fashion',
    'Health',
    'Fitness',
    'Fashion Accessory',
    'Food',
    'Pets',
    'Travel',
    'Lifestyle',
    'Entertainment',
    'Luxury',
    'Electronics'
  ];

}
