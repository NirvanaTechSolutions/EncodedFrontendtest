import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardloadingComponent } from './cardloading.component';

describe('CardloadingComponent', () => {
  let component: CardloadingComponent;
  let fixture: ComponentFixture<CardloadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardloadingComponent]
    });
    fixture = TestBed.createComponent(CardloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
