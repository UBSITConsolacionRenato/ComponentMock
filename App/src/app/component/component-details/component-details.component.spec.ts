import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDetailsComponent } from './component-details.component';

describe('ComponentDetailsComponent', () => {
  let component: ComponentDetailsComponent;
  let fixture: ComponentFixture<ComponentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDetailsComponent]
    });
    fixture = TestBed.createComponent(ComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
