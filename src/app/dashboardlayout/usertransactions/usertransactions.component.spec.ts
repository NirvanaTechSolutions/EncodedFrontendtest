import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertransactionsComponent } from './usertransactions.component';

describe('UsertransactionsComponent', () => {
  let component: UsertransactionsComponent;
  let fixture: ComponentFixture<UsertransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsertransactionsComponent]
    });
    fixture = TestBed.createComponent(UsertransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
