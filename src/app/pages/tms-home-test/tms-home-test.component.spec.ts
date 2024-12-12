import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsHomeTestComponent } from './tms-home-test.component';

describe('TmsHomeTestComponent', () => {
  let component: TmsHomeTestComponent;
  let fixture: ComponentFixture<TmsHomeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TmsHomeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmsHomeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
