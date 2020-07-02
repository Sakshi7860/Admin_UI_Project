import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokrecsAccountComponent } from './brokrecs-account.component';

describe('BrokrecsAccountComponent', () => {
  let component: BrokrecsAccountComponent;
  let fixture: ComponentFixture<BrokrecsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokrecsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokrecsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
