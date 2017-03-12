import { ExampleNgContentModule } from './example-ng-content/example-ng-content.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ExampleNgContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
