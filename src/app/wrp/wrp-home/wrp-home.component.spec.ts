import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrpHomeComponent } from './wrp-home.component';

describe('WrpHomeComponent', () => {
  let component: WrpHomeComponent;
  let fixture: ComponentFixture<WrpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
