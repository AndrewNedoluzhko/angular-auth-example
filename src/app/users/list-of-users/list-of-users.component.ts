import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.interface';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit{
  
  users!:User[];
  //'role', 
  displayedColumn: string[]= ['firstname', 'lastname', 'email', 'phoneNumber', 'role', 'createdAt'];
  dataSource = new MatTableDataSource<User>(this.users);
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatTable, {static: false}) table!: MatTable<User>;

  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  ngOnInit(){    
    this.fetchUsers();
  }

  fetchUsers(){
    this.usersService.getAll()
      .subscribe((data: User[])=> {
        this.users= data;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator= this.paginator;
        this.dataSource.sort = this.sort;
      })    
  }
}
