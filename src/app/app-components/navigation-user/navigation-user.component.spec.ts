import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUserComponent } from './navigation-user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

describe('NavigationUserComponent', () => {
  let component: NavigationUserComponent;
  let fixture: ComponentFixture<NavigationUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationUserComponent],
      imports:[
        MatSidenavModule,
        MatListModule
      ],
      providers: []
    }).compileComponents();
    fixture = TestBed.createComponent(NavigationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
