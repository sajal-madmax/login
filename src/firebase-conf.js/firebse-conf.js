
import { initializeApp } from "firebase/app" ;
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD_ubAVFagtj8RHLw0l9mi0_0fnrzLBRQ8",
  authDomain: "react-authentication-3633e.firebaseapp.com",
  projectId: "react-authentication-3633e",
  storageBucket: "react-authentication-3633e.appspot.com",
  messagingSenderId: "674436141015",
  appId: "1:674436141015:web:af2eac2d029adb1e348592",
  measurementId: "G-95GEERZT7N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;