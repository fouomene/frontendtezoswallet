import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferValueComponent } from './transfer-value.component';

describe('TransferValueComponent', () => {
  let component: TransferValueComponent;
  let fixture: ComponentFixture<TransferValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
