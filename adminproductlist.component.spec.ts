import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductlistComponent } from './adminproductlist.component';

describe('AdminproductlistComponent', () => {
  let component: AdminproductlistComponent;
  let fixture: ComponentFixture<AdminproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
