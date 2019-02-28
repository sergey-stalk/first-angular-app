/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountrisListComponent } from './countrisList.component';

describe('CountrisListComponent', () => {
  let component: CountrisListComponent;
  let fixture: ComponentFixture<CountrisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountrisListComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
