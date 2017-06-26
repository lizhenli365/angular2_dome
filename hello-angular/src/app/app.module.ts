import { BrowserModule } from '@angular/platform-browser';//浏览器
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],//依赖注入
  bootstrap: [AppComponent]
})
export class AppModule { }
