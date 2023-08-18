import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-components/header/header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { HomeComponent } from './app-components/home/home.component';


describe('AppComponent', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AuthModule,
        MaterialModule,
        UserProfileModule
        ], 
      declarations: [AppComponent, HeaderComponent, HomeComponent,],
      providers: []
    }).compileComponents()
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-auth-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-auth-example');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;    
    const logoText = compiled.querySelector('.logo')?.textContent;
    expect(logoText).toContain('Angular Authentication Example');
  });
});
