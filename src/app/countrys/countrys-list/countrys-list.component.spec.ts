import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountrysListComponent } from './countrys-list.component';

describe('CountrysListComponent', () => {
  let component: CountrysListComponent;
  let fixture: ComponentFixture<CountrysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountrysListComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
