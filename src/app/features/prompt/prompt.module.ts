import { NgModule } from '@angular/core';
import { PromptEditorComponent } from './components/prompt-editor/prompt-editor.component';
import { PromptListComponent } from './components/promt-list/prompt-list.component';
import { PromptRouting } from './prompt-routing.module';
declare const FB: any;
@NgModule({
  declarations: [PromptEditorComponent, PromptListComponent],
  imports: [PromptRouting],
})
export class PromptModule {
  constructor() {
    
  }

  // connectFacebook() {
  //   (window as any).fbAsyncInit = function () {
  //     FB.init({
  //       appId: '616786400428551',
  //       cookie: true,
  //       xfbml: true,
  //       version: 'v17.0',
  //     });

  //     FB.AppEvents.logPageView();
  //   };

  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0] as HTMLElement;
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s) as HTMLScriptElement;
  //     js.id = id;
  //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
  //     fjs.parentNode!.insertBefore(js, fjs);
  //   })(document, 'script', 'facebook-jssdk');
  // }
  // // getLoginStatus(){

  // //   FB.getLoginStatus(function(response: any) {
  // //     statusChangeCallback(response);
  // // })
  // // }
  // checkLoginState() {
  //   FB.getLoginStatus(function (response: any) {
  //     console.log(response);
  //   });
  // }
}
