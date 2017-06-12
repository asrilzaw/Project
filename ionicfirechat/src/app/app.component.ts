import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let config = {
		  apiKey: "AIzaSyCHAe6duCd3k_Nn2B6bZue6D8QpF-0WxTI",
		  authDomain: "web-mobile-10.firebaseapp.com",
		  databaseURL: "https://web-mobile-10.firebaseio.com",
		  projectId: "web-mobile-10",
		  storageBucket: "web-mobile-10.appspot.com",
		  messagingSenderId: "41133515776"
    };
    firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}