import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileInfoComponent } from './user-profile-info.component';

describe('UserProfileInfoComponent', () => {
  let component: UserProfileInfoComponent;
  let fixture: ComponentFixture<UserProfileInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileInfoComponent]
    });
    fixture = TestBed.createComponent(UserProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
