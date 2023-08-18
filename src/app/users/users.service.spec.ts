import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import {  HttpClientModule } from '@angular/common/http';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';

describe('UsersService', () => {  
  let service: UsersService;  
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        UsersService
      ],
      declarations:[
        ListOfUsersComponent
      ]
    });
    
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
