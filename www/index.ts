import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, Plugin, CordovaCheck, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

@Plugin({
  pluginName: 'WindowBringer',
  plugin: 'cordova-bring-to-front',  
  repo: 'https://github.com/thiagoburgo/cordova-bring-to-front',
  platforms: ['Android']
})
@Injectable()
export class WindowBringer extends IonicNativePlugin {

    @Cordova()
    bringToFront(successCallback:any, errorCallback:any) { return; }

}