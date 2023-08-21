# AngularAuthExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Description

Angular 16 Authentication and Authorization boilerplate with Role Based Access Control, HttpOnly Cokie and JWT  with next features:
- User Registration and User Login forms with validation and JWT authentication using access token and refresh token; 
- Main page with header bar, toggling side navigation menu button, displaying user’s profile button and logout button;
- Role Based Access Control for authenticated users;
- Simple implementation of dynamic routing depending on the role of the authenticated user: each role of user (Admin role and User role) has own side navigation menu panel;
- Refresh access token feature based on AuthInterceptor implementation;
- Displaying list of users demo only for Admin role;
- Forbidden, Not Found and Other Server Error components with handling of logic when the user tries to access forbidden resources or to resources that do not exist

## Backend Example for this solution
The source code of the backend for this boilerpate based on NestJS, PostgresQL and TypeORM hosted at this link https://github.com/AndrewNedoluzhko/nestjs-auth-postgres-typeorm

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
