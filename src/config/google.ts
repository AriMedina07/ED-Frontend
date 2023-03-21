import { gapi } from 'gapi-script';

export const googleConfig = (clientID: string) => {
   const start = () => {
      gapi.auth2.init({
         client_id: clientID,
      });
   };
   gapi.load('client:auth2', start);
};
