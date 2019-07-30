import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BloggingListComponent } from './components/blogging-list/blogging-list.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BloggingDetailComponent } from './components/blogging-detail/blogging-detail.component';
import { UrlConstantsService } from './service/url-constants.service';
import { BloggingService } from './service/blogging.service';
import { HttpService } from './service/http.service';
import { BloggingAddComponent } from './components/blogging-add/blogging-add.component';
import { BloggingEditComponent } from './components/blogging-edit/blogging-edit.component';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BloggingListComponent,
    LoginComponent,
    ErrorComponent,
    BloggingDetailComponent,
    BloggingAddComponent,
    BloggingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    BloggingService,
    UrlConstantsService,
    {provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
