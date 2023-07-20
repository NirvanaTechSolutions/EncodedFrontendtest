import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloadingComponent } from './homeloading.component';

describe('HomeloadingComponent', () => {
  let component: HomeloadingComponent;
  let fixture: ComponentFixture<HomeloadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeloadingComponent]
    });
    fixture = TestBed.createComponent(HomeloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
