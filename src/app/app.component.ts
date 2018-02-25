import { Component, NgZone } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { ClientService } from '../core/clientService';
import { FormsModule } from '@angular/forms';
import { User } from '../core/User';
import { Packet } from '../core/Packet';
import { Message } from '../core/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  userList: Array<Object>;

  selectedChatUser: Object;

  receivedMessageContent: string;

  messageContent: string;

  constructor(private clientService: ClientService, private zone: NgZone){

    this.userList = [];

    this.receivedMessageContent = '';
    
    clientService.getClient().on('message', (message, remote) => {
      console.log('Received from => ' + remote.address + ': ' + remote.port);

      //Convert response from server from byte array to string
      let responseString = String.fromCharCode.apply(String, message);

      let response = JSON.parse(responseString);

      if(response.type.localeCompare(Packet.ONLINE_USER_LIST) === 0){
        console.log('Received user list');

        let userListString = response.payload;

        let receivedUserList = JSON.parse(userListString);


        for(let currentUser of receivedUserList){
          
          this.zone.run(() => {
            this.userList.push(currentUser);
          })
          
        }

      }
    })

    let user = new User('Gerard Rique', 'grique25@gmail.com');

    clientService.sendSignInRequest(user);
  }

  public selectUser(user): void{
    this.selectedChatUser = user;
    console.log(this.selectedChatUser);
  }

  public sendMessage(): void{
    console.log('Sending message...');
    this.clientService.sendMessage(this.messageContent, this.selectedChatUser['ipAdress'], this.selectedChatUser['portNumber']);
  }
}
