import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Loader
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }
}
