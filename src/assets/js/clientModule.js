let PORT = 41234;
let HOST = '192.168.1.9';

const datagram = window.require('dgram');

const client = datagram.createSocket('udp4');

// console.log('Client Module');

// function signOut(){
//     let mySignOutMessage = 'signingOut';

//     let myPacket = new CustomPacket(CustomPacket.SIGN_OUT());

//     myPacket.setData(mySignOutMessage);

//     let packetString = JSON.stringify(myPacket);

//     let request = new Buffer(packetString);

//     client.send(request, 0, request.length, PORT, HOST, function(error, bytes){
//         console.log('sending');
//         if(error) throw error;

//         console.log('UDP message sent to ' + HOST + ': ' + PORT);
//     })
// }

// function signInUser(username, email){
//     //let user = new User(username, email);

//     let user = {
//         'username': username,
//         'email': email
//     }
    
//     console.log(user);

//     let userString = JSON.stringify(user);

//     //let myPacket = new CustomPacket(CustomPacket.SIGN_IN());

//     let myPacket = {
//         'type': 'signIn',
//         'payload': userString
//     }

//     //myPacket.setData(userString);

//     let packetString = JSON.stringify(myPacket);

//     let request = new Buffer(packetString);

//     client.send(request, 0, request.length, PORT, HOST, function(error, bytes){
//         console.log('sending');
//         if(error) throw error;
//         //let signInForm = document.getElementById('mySignInForm');
//         //signInForm.style.display = 'none';

//         console.log('UDP message sent to ' + HOST + ': ' + PORT);
//     })
// }

// function sendMessage(message){
//     let messageString = JSON.stringify(message);

//     let myPacket = new CustomPacket(CustomPacket.MESSAGE());

//     myPacket.setData(messageString);

//     let packetString = JSON.stringify(myPacket);

//     let request = new Buffer(packetString);

//     client.send(request, 0, request.length, PORT, HOST, function(error, bytes){
//         console.log('sending message');

//         if(error)
//             throw error;
//         console.log('UDP message sent to: ' + HOST + ': ' + PORT);
//     });
// }


// function updateUserList(userList){
//     console.log('updating user listing...');
//     let myStuff = document.getElementById('userListContainer');
//     myStuff.innerHTML = '';
//     for(let user of userList){
//         myStuff.innerHTML = myStuff.innerHTML + '<p class="online-user" id="user"> ' + user.user.username + '</p>';
//     }
// }

// signInUser("Winston Duke", "iwasinblackpanther@wakandaforever.com");
// console.log('Helllo there');
//let message = new Message('192.168.1.5', '192.168.1.14', 41234, 41234, '0000', 'Hello World');


// client.on('message', function(message, remote){

//     console.log('Received from: ' + remote.address + ': ' + remote.port);
    
//     let packet = JSON.parse(message);
    
//     if(packet.type.localeCompare('online_user_list') === 0){
//         let userList = JSON.parse(packet.payload);
//         console.log(userList);
//         //updateUserList(userList);
//     }
// });

module.exports = client;
