import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeHomeComponent } from './leetcode-home.component';

describe('LeetcodeHomeComponent', () => {
  let component: LeetcodeHomeComponent;
  let fixture: ComponentFixture<LeetcodeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeetcodeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeetcodeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
