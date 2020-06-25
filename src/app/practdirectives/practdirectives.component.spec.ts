import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractdirectivesComponent } from './practdirectives.component';

describe('PractdirectivesComponent', () => {
  let component: PractdirectivesComponent;
  let fixture: ComponentFixture<PractdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
