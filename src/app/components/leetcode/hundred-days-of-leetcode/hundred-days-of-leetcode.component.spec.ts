import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HundredDaysOfLeetcodeComponent } from './hundred-days-of-leetcode.component';

describe('HundredDaysOfLeetcodeComponent', () => {
  let component: HundredDaysOfLeetcodeComponent;
  let fixture: ComponentFixture<HundredDaysOfLeetcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HundredDaysOfLeetcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HundredDaysOfLeetcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
