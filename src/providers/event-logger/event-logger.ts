import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

/*
  Generated class for the EventLoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventLoggerProvider {


    constructor(public fba: FirebaseAnalytics) {
      console.log('Hello EventLoggerProvider Provider');
    }
    
    FBlogEvent(name:string,value:any){
      this.fba.logEvent(name, { pram:value })
      .then((res: any) => {console.log(res);})
      .catch((error: any) => console.error(error));
    }
}

