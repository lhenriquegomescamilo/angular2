import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { DirectiveSwitchModule } from './directive-switch/directive-switch.module';
import { DirectivesNgifComponent } from './directives-ngif/directives-ngif.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesNgifComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DirectiveSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
