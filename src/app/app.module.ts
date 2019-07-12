import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DuckComponent } from './duck/duck.component';
import { SurfboardService } from './surfboard.service';


@NgModule({
  declarations: [
    AppComponent,
    DuckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SurfboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
