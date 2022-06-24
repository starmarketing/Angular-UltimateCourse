import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practice';
  total: any = '';

  changeText() {
    this.title = 'hahhaha';
  }
  changeTextWithNgModelChange(value: any) {
    this.title = value;
  }
  generateTotal(event: any) {
    if (!isNaN(event.target.value)) {
      this.total = parseInt(event.target.value) * 2;
    }
  }

  getValue(value: any) {
    this.title = value;
  }

}
