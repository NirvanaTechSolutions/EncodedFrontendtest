import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LackingComponent } from './lacking.component';

describe('LackingComponent', () => {
  let component: LackingComponent;
  let fixture: ComponentFixture<LackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LackingComponent]
    });
    fixture = TestBed.createComponent(LackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
