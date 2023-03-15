import { useState, useEffect } from 'react';
import GoogleLogin, {
   GoogleLoginResponse,
   GoogleLoginResponseOffline,
} from 'react-google-login';
import { googleConfig } from '../../../config/google';
import { GoogleResponse } from '@/interfaces/login';

import logo from './logo.png';

const Login = () => {
   const [userName, setUserName] = useState<string>();
   const [userId, setUserId] = useState<RegExpMatchArray | null>();

   const clientID =
      '208713035832-2sfbs568pddgakc2is364vkio5u38813.apps.googleusercontent.com';

   useEffect(() => {
      googleConfig(clientID);
   }, []);

   const onSuccess = (
      res: GoogleLoginResponse | GoogleLoginResponseOffline | GoogleResponse,
   ) => {
      setUserName('');
      // const email = res.profileObj.email;
      const id = email.match(/\d+/g);
      setUserId(id);
      console.log(res.code);
   };

   const onFailure = (res: any) => {
      console.log(res);
   };

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   //    const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      //   setError(false);
      try {
         //await auth.signInWithEmailAndPassword(email, password);
         //push to dashboard
      } catch (error) {
         //setError(true);
      }
      setLoading(false);
   };

   return (
      <div className="flex h-screen w-screen items-center justify-center">
         <form
            onSubmit={handleSubmit}
            className="flex flex-col h-auto w-auto p-12 bg-white rounded-md shadow-md items-center"
         >
            <img src={logo} alt="logo" className="w-72" />

            <input
               type="text"
               placeholder="Usuario"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="mt-24 pl-4 h-11 w-60 border-solid border border-black rounded-md"
            />
            <input
               type="password"
               placeholder="Contraseña"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="mt-8 mb-6 pl-4 h-11 w-60 border-solid border border-black rounded-md"
            />
            <button
               type="submit"
               disabled={loading}
               className=" rounded-md w-48 h-10 bg-blue-400 "
            >
               Iniciar sesión
            </button>
            <p className="my-2">ó</p>
            <GoogleLogin
               clientId={clientID}
               onSuccess={onSuccess}
               onFailure={onFailure}
               cookiePolicy={'single_host_policy'}
            />
            {userName && <p>Nombre: {userName}</p>}
            {userId && <p>Matrícula: {userId}</p>}
         </form>
      </div>
   );
};

export default Login;
