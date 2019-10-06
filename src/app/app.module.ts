import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { CameraProvider } from '../providers/camera/camera';
import { PostsProvider } from '../providers/posts/posts';
import { WooProvider } from '../providers/woo/woo';

import { NgxStripeModule } from 'ngx-stripe';
import { Configure } from '../providers/configure/configure';
import { EventLoggerProvider } from '../providers/event-logger/event-logger';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { RemoteConfigProvider } from '../providers/remote-config/remote-config';
import { FirebaseConfig } from '@ionic-native/firebase-config';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    // replace key with your Stripe publishable key
    NgxStripeModule.forRoot('pk_test_07YFA0DDYu5miC2ijbhzWOXw')
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    CameraProvider,
    PostsProvider,
    WooProvider,
    Configure,
    EventLoggerProvider,
    FirebaseAnalytics,
    FirebaseConfig,
    RemoteConfigProvider
  ]
})
export class AppModule {}
