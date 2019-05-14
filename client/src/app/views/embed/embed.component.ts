import { Component, OnInit } from '@angular/core';
    import Chatkit  from '@pusher/chatkit-client';
    import axios from 'axios';
import { SessionVM } from '../../view-model/session/session-vm';
import { deserialize } from 'class-transformer';

    @Component({
      selector: 'app-embed',
      templateUrl: './embed.component.html',
      styleUrls: ['./embed.component.scss']
    })

    export class EmbedComponent {
      
      title = 'Angular Chatroom';
      messages = [];
      users = [];
      currentUser: any;

      _username: string = '';

      get username(): string {
        return this._username;
      }
      set username(value: string) {
        this._username = value;
      }

      _message: string = '';
      get message(): string {
        return this._message;
      }
      set message(value: string) {
        this._message = value;
      }

      sendMessage() {
        const { message, currentUser } = this;
        currentUser.sendMessage({
          text: message,
          roomId: '21150536',
        });
        this.message = '';
      }
      
      addUser() {
        const currentUser = localStorage.getItem('currentUser');
        const session = deserialize(SessionVM, currentUser);
        const { username } = this;
        axios.post('http://localhost:3000/users/newUserChat', { username })
          .then(() => {
            const tokenProvider = new Chatkit.TokenProvider({
              url: 'http://localhost:3000/users/auth',
              headers: {
                "x-api-key":"123@mom_and_baby_tool",
                "x-access-token":session.token
            }
            });

            // const tokenProvider = {
            //   "alg": "HS256",
            //    "typ": "JWT",
            //   "instance": "d3b47aed-c439-4dc3-ae2a-06e6cf178edb",
            //   "iss": "api_keys/0a4c726a-991e-4c9e-8ff0-02b715f115d7:R0cMAfGfDoNMkNi23hOUMz8dHCbyzs476CEd4ZKqxMA=",
            //   "iat": 1508752709,
            //   "exp": 1508839109,
            //   "sub": { username }
            // };
           // const tokenProvider = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZSI6ImQzYjQ3YWVkLWM0MzktNGRjMy1hZTJhLTA2ZTZjZjE3OGVkYiIsImlzcyI6ImFwaV9rZXlzLzBhNGM3MjZhLTk5MWUtNGM5ZS04ZmYwLTAyYjcxNWYxMTVkNzpSMGNNQWZHZkRvTk1rTmkyM2hPVU16OGRIQ2J5enM0NzZDRWQ0WktxeE1BPSIsImlhdCI6MTUwODc1MjcwOSwiZXhwIjoxNTA4ODM5MTA5LCJzdWIiOjEyfQ.8WH0ORs9tGiqC-C951vlOyZ5ZRGTMPZHwkkod8cTvd0";
           // console.log(tokenProvider);
            const chatManager = new Chatkit.ChatManager({
              instanceLocator: 'v1:us1:d3b47aed-c439-4dc3-ae2a-06e6cf178edb',
              userId: username,
              tokenProvider
            });

            return chatManager
              .connect()
              .then(currentUser => {
                currentUser.subscribeToRoom({
                  roomId: '21150536',
                  messageLimit: 100,
                  hooks: {
                    onMessage: message => {
                      this.messages.push(message);
                    },
                    onPresenceChanged: (state, user) => {
                      this.users = currentUser.users.sort((a, b) => {
                        if (a.presence.state === 'online') return -1;

                        return 1;
                      });
                    },
                  },
                });

                this.currentUser = currentUser;
                this.users = currentUser.users;
              });
          })
            .catch(error => console.error(error))
      }
    }