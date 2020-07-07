import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmatterComponent } from './mainmatter.component';

describe('MainmatterComponent', () => {
  let component: MainmatterComponent;
  let fixture: ComponentFixture<MainmatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
