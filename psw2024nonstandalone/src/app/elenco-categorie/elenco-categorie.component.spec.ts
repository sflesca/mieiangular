import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoCategorieComponent } from './elenco-categorie.component';

describe('ElencoCategorieComponent', () => {
  let component: ElencoCategorieComponent;
  let fixture: ComponentFixture<ElencoCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElencoCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElencoCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
