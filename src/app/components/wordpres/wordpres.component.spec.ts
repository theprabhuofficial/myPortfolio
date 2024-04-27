import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpresComponent } from './wordpres.component';

describe('WordpresComponent', () => {
  let component: WordpresComponent;
  let fixture: ComponentFixture<WordpresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordpresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
