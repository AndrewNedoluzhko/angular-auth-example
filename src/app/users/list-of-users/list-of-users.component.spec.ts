import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUsersComponent } from './list-of-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../users.service';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListOfUsersComponent', () => {
  let component: ListOfUsersComponent;
  let fixture: ComponentFixture<ListOfUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule ],
      declarations: [ListOfUsersComponent],
      providers: [UsersService]
    });
    fixture = TestBed.createComponent(ListOfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
