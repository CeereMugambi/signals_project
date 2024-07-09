import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultusersComponent } from './adultusers.component';

describe('AdultusersComponent', () => {
  let component: AdultusersComponent;
  let fixture: ComponentFixture<AdultusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdultusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
