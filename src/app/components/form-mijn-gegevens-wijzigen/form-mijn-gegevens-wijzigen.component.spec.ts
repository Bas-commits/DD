import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMijnGegevensWijzigenComponent } from './form-mijn-gegevens-wijzigen.component';

describe('FormMijnGegevensWijzigenComponent', () => {
  let component: FormMijnGegevensWijzigenComponent;
  let fixture: ComponentFixture<FormMijnGegevensWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMijnGegevensWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMijnGegevensWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
