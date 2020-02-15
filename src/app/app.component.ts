import { Component, OnInit } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private channelName: string;
  public systemHealth: string;
  private wiaAuthKey: string;
  public messages: any[];
  public title: string;
  // public emod: string;

  constructor(private pubnub: PubNubAngular) {
  }

  ngOnInit() {
    // subscribe when OnInit fires
    this.channelName = 'wia-channel';
    this.wiaAuthKey = 'd_sk_a2ar3i8M3loJsFhC7oKL9iIH';
    this.systemHealth = 'healthy';
    this.title = 'Wia';
    // this.emod = 'production';

    this.pubnub.init({
      publishKey : 'pub-c-a43427d6-3f60-4523-b00e-baaf42d8bb5e',
      subscribeKey : 'sub-c-02b18324-4e97-11ea-814d-0ecb550e9de2',
      ssl : true} );

    this.pubnub.subscribe({channels: [this.channelName], triggerEvents: true});
    this.messages = this.pubnub.getMessage(this.channelName, function(msg) {
      // no handler necessary, dynamic collection of msg objects
    });
  }

  publish() {
    const message = {
      event: {name: 'system_health', data: this.systemHealth},
      authKey: this.wiaAuthKey
    };
    this.pubnub.publish({channel: this.channelName, message});
  }

}



// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Wia';
// }
