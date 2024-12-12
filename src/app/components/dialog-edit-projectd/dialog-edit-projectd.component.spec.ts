import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditProjectdComponent } from './dialog-edit-projectd.component';

describe('DialogEditProjectdComponent', () => {
  let component: DialogEditProjectdComponent;
  let fixture: ComponentFixture<DialogEditProjectdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditProjectdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditProjectdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
