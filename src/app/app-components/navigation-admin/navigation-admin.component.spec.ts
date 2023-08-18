import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAdminComponent } from './navigation-admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationAdminComponent', () => {
  let component: NavigationAdminComponent;
  let fixture: ComponentFixture<NavigationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationAdminComponent],
      imports:[
        MatSidenavModule,
        MatListModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: []
    }).compileComponents();
    fixture = TestBed.createComponent(NavigationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
