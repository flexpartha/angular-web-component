import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SlugContentComponent } from './slug-content/slug-content.component';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SlugContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,SlugContentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(SlugContentComponent, { injector });
        customElements.define('news-widget', el);
  }
  ngDoBootstrap() {}
 }

