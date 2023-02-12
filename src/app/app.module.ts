import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { DisplayComponent } from './display/display.component';
import { ChildComponent } from './registrationform/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    DisplayComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
