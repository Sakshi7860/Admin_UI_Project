import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EztopsOffsetComponent } from './eztops-offset.component';

describe('EztopsOffsetComponent', () => {
  let component: EztopsOffsetComponent;
  let fixture: ComponentFixture<EztopsOffsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EztopsOffsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EztopsOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
