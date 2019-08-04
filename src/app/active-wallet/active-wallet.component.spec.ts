import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWalletComponent } from './active-wallet.component';

describe('ActiveWalletComponent', () => {
  let component: ActiveWalletComponent;
  let fixture: ComponentFixture<ActiveWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
