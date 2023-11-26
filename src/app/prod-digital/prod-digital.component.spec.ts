import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDigitalComponent } from './prod-digital.component';

describe('ProdDigitalComponent', () => {
  let component: ProdDigitalComponent;
  let fixture: ComponentFixture<ProdDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
