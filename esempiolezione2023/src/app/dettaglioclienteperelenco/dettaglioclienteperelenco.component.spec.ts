/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DettaglioclienteperelencoComponent } from './dettaglioclienteperelenco.component';

describe('DettaglioclienteperelencoComponent', () => {
  let component: DettaglioclienteperelencoComponent;
  let fixture: ComponentFixture<DettaglioclienteperelencoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioclienteperelencoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioclienteperelencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
