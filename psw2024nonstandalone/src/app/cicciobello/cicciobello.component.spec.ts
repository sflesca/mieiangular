import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicciobelloComponent } from './cicciobello.component';

describe('CicciobelloComponent', () => {
  let component: CicciobelloComponent;
  let fixture: ComponentFixture<CicciobelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CicciobelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CicciobelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
