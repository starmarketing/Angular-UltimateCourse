import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingflowsComponent } from './renderingflows.component';

describe('RenderingflowsComponent', () => {
  let component: RenderingflowsComponent;
  let fixture: ComponentFixture<RenderingflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingflowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
