import { Component, OnInit } from '@angular/core';

interface Child {
  name: string;
  age: number | null;
}
interface Employee{
  id: number;
  name: string;
  active: boolean;
  stamp: number | null;
  children: Child[] | null
}

@Component({
  selector: 'rendering-flows',
  templateUrl: './renderingflows.component.html',
  styleUrls: ['./renderingflows.component.scss'],
})
export class RenderingflowsComponent implements OnInit {
  age: string = '';
  constructor() {}

  ngOnInit(): void {}

  handleChange(param: any) {
    this.age = param.target.value;
  }

  employees: Employee[] = [
    {
      id: 1,
      name: 'emad',
      active: true,
      stamp: 1508330494000,
      children: [{
        name: 'Badshah',
        age: 20
      }]
    },
    {
      id: 2,
      name: 'hassan',
      active: false,
      stamp: null,
      children: null
    },
    {
      id: 2,
      name: 'khan',
      active: false,
      stamp: null,
      children: [{
        name: 'Khan Sahab',
        age: null
      }]
    },
  ];
}
