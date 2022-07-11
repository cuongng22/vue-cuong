import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai06NgIfComponent } from './bai06-ng-if.component';

describe('Bai06NgIfComponent', () => {
  let component: Bai06NgIfComponent;
  let fixture: ComponentFixture<Bai06NgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai06NgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai06NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
