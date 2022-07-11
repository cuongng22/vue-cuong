import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai05EvenbindingComponent } from './bai05-evenbinding.component';

describe('Bai05EvenbindingComponent', () => {
  let component: Bai05EvenbindingComponent;
  let fixture: ComponentFixture<Bai05EvenbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai05EvenbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai05EvenbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
