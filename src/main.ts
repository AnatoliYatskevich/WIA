import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {PubNubAngular} from 'pubnub-angular2';

if (environment.production) {
  enableProdMode();
}

declare global {
  interface Window {
    app: any;
  }
}

// console.log((new Date()).toLocaleString() + '--------------------------------->>>>>>>>>>>>>>>Test console--------------->>>>>>>');

let app = window.app;
app = {
  app_component: new AppComponent(new PubNubAngular()),
  app_module: new AppModule()
};

app.app_component.ngOnInit();

console.log(Object.getOwnPropertyNames(app.app_module));
console.log(app.app_module);

document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(app.app_module);
});

// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
