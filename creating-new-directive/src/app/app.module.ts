import { DirectiveCustomModule } from './directive-custom/directive-custom.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundYellowDirective } from './shared/background-yellow.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundYellowDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DirectiveCustomModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
