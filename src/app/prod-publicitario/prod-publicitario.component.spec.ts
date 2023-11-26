import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPublicitarioComponent } from './prod-publicitario.component';

describe('ProdPublicitarioComponent', () => {
  let component: ProdPublicitarioComponent;
  let fixture: ComponentFixture<ProdPublicitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPublicitarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdPublicitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
