import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceJsonServerProvider } from 'src/providers/api-service-jsonserver';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ApiServiceProviderFirebase } from 'src/providers/api-service-firebase';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,     HttpClientModule,
    IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [ ApiServiceJsonServerProvider,
    ApiServiceProviderFirebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
