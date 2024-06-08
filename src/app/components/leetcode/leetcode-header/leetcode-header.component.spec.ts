import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeHeaderComponent } from './leetcode-header.component';

describe('LeetcodeHeaderComponent', () => {
  let component: LeetcodeHeaderComponent;
  let fixture: ComponentFixture<LeetcodeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeetcodeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeetcodeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
