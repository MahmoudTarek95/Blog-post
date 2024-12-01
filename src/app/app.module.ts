import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EmptyStatusComponent } from './components/empty-status/empty-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    BlogCardComponent,
    BlogDetailsComponent,
    BlogListComponent,
    LoadingComponent,
    EmptyStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
