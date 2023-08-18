import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserProfileComponent } from './display-user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

describe('DisplayUserProfileComponent', () => {
  let component: DisplayUserProfileComponent;
  let fixture: ComponentFixture<DisplayUserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MaterialModule
       ],
      declarations: [DisplayUserProfileComponent]
    });
    fixture = TestBed.createComponent(DisplayUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
