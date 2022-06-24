import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent implements OnInit {
  ngOnInit(): void {
  }

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
  changeColor(element: any) {
    element.style.background = 'red';
  }
  addClass(element: any) {
    element.classList.add('boom');
  }

  validateAge(age: any) {
    if (parseInt(age.value) > 18) {
      age.classList.remove('green');
      age.classList.add('red');
    } else {
      age.classList.remove('red');
      age.classList.add('green');
    }
  }

}
