import { Component } from '@angular/core';
import { NavController, ModalController, Events, IonicPage } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { FirebaseConfig } from '@ionic-native/firebase-config';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginModal: any;
  loggedin: boolean = false

  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
    public storage: Storage,
    public events: Events,
    public fbc: FirebaseConfig
  	) {

    console.log('home page')
    this.fbc.update(0)
     .then((res: any) => console.log(res))
     .catch((inner: any) => console.error(inner))
    this.fbc.getBoolean('test_param')
     .then((res: any) => console.log(res))
     .catch((error: any) => console.error(error))
     console.log("post getString")

    events.subscribe('user:login', data => {
      this.setLoginData(data);
    });

  }

  ionViewDidEnter() {

    this.storage.get('user_login').then( data => {
      if( data ) {
        // do checks here
        this.loggedin = true
      } else {
        this.loggedin = false
      }
    })

  	
  }

  pushPage(page) {

    this.navCtrl.push( page );
    
  }

  openLoginModal() {

    this.loginModal = this.modalCtrl.create( 'LoginModalPage' );
    
    this.loginModal.present();

  }

  setLoginData( data ) {

    if( data.logout ) {
      this.loggedin = false
    } else if( data.success ) {
      this.loggedin = true
    }

  }

}