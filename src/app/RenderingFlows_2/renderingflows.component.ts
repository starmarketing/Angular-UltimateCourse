import { Component, OnInit } from '@angular/core';

interface Employee{
  id: number;
  name: string;
  active: boolean;
  stamp: number | null;
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
      stamp: 1508330494000
    },
    {
      id: 2,
      name: 'khan',
      active: false,
      stamp: null
    },
  ];
}
