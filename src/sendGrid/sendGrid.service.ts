/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// // import { SendGrid } from './sendgrid.model';
// import * as SendGrid from '@sendgrid/mail';

// @Injectable()
// export class SendGridService {
//     constructor(
//         // @InjectModel('SendGrid') private readonly sendGridModel: Model<SendGrid>,
//     ) { }

//     async sendEmailToManager() {

//     }

//     async sendEmail() {

//         SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

//         const msg = {
//             to: 'r9743740@gmail.com',
//             from: 'r9743740@gmail.com', // Use the email address or domain you verified above
//             subject: 'Sending with Twilio SendGrid is Fun',
//             text: 'and easy to do anywhere, even with Node.js',
//             html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//         };

//         (async () => {
//             try {
//                 await SendGrid.send(msg);
//             } catch (error) {
//                 console.error(error);

//                 if (error.response) {
//                     console.error(error.response.body)
//                 }
//             }
//         })();
//         // debugger
//         // const apiKey = process.env.REACT_APP_SENDGRID_API_KEY;
//         // // const apiKey = process.env.SENDGRID_API_KEY;
//         // try {
//         //     await axios.post('https://api.sendgrid.com/v3/mail/send', {
//         //         'personalizations': [{
//         //             'to': [{
//         //                 'email': 'r9743740@gmail.com',
//         //                 'name': 'Ruty Cohen'
//         //             }],
//         //             'subject': 'I looking for you!!!',
//         //         }],
//         //         'content': [{
//         //             'type': 'text/plain',
//         //             'value': 'Heya!'
//         //         }],
//         //         'from': {
//         //             'email': 'r9743740@gmail.com',
//         //             'name': 'Ruchami Berenstain'
//         //         },
//         //         'reply_to': {
//         //             'email': 'r9743740@gmail.com',
//         //             'name': 'Ruchami Berenstain'
//         //         }
//         //     }, {
//         //         // 'Content-Type': 'application/json',
//         //         headers: {'Authorization': `Bearer ${apiKey}`},
//         //     })
//         // } catch (err) { console.log(err); }

//     }
// }


// //ES6
// // sgMail
// //   .send(msg)
// //   .then(() => {}, error => {
// //     console.error(error);

// //     if (error.response) {
// //       console.error(error.response.body)
// //     }
// //   });
// //ES8


import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor() {
    // Don't forget this one.
    // The apiKey is required to authenticate our
    // request to SendGrid API.
    SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    // SendGrid.setApiKey(this.configService.get<string>(process.env.SENDGRID_API_KEY));
  }
// private readonly configService: ConfigService
  async send(mail: SendGrid.MailDataRequired) {
    console.log(mail);
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
    console.log(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}