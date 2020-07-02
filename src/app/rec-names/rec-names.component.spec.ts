import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecNamesComponent } from './rec-names.component';

describe('RecNamesComponent', () => {
  let component: RecNamesComponent;
  let fixture: ComponentFixture<RecNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
