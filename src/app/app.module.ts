import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { LibraryServiceService } from './service/library-service.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddBooksComponent,
    NavBarComponent,
    ManageBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { 
        path: 'login', 
        component: LoginComponent
      },
      { 
        path: '', 
        component: LoginComponent
      },
      { 
        path: 'home', 
        component: HomeComponent
      },
      { 
        path: 'nav-bar', 
        component: NavBarComponent
      },
      { 
        path: 'books/add', 
        component: AddBooksComponent
      },
      { 
        path: 'books/edit', 
        component: ManageBooksComponent
      },
      { 
        path: 'books/edit/:id', 
        component: AddBooksComponent
      },
      { 
        path: 'books/delete', 
        component: ManageBooksComponent
      },
      { 
        path: 'books/delete/:id', 
        component: ManageBooksComponent
      }
    ]),
  ],
  bootstrap: [AppComponent],

  exports: [
    FormsModule,
    NgbModule.forRoot().ngModule,
  ],
  providers: [
    LibraryServiceService
  ]
})
export class AppModule { }
