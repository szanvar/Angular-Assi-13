import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ControlMessagesComponent } from './control-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
