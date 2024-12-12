import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProjectdComponent } from './dialog-add-projectd.component';

describe('DialogAddProjectdComponent', () => {
  let component: DialogAddProjectdComponent;
  let fixture: ComponentFixture<DialogAddProjectdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddProjectdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddProjectdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
