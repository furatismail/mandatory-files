import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { expectText, findEl } from '../spec-helpers/element.spec-helper';

import { MyFormComponent } from './my-form.component';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFormComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('failed submit if all fields empty', () => {
    const onSubmitSpy = spyOn(component, 'onSubmit');
    const form = findEl(fixture, 'form');
    form.triggerEventHandler("submit", {});
    fixture.detectChanges();
    expectText(fixture, 'nameError', 'This field is required');
    expectText(fixture, 'accountError', 'Fields are required');
    expect(form.classes['ng-invalid']).toBe(true);
    expect(onSubmitSpy).toHaveBeenCalled();
  })
});
