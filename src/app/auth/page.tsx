"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext, FirebaseAuth, GoogleProvider } from "../Firebase";
import { Button, Logo, PageCont, PageContOverlay } from "../globalStyles";

const Auth = () => {
  const router = useRouter();

  const signup = () => {
    signInWithPopup(FirebaseAuth, GoogleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) throw new Error("No credential");
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.error({ errorCode, errorMessage, email, credential });
      });
  };

  const authContext = useContext(AuthContext);
  useEffect(() => {
    if (authContext.user) router.replace("/home");
  }, [authContext, router]);

  return (
    <PageCont>
      <PageContOverlay />
      <Button $primary onClick={signup}>
        <FaGoogle />
        Sign up with Google
      </Button>
      <Logo src="/schedule/logo.svg" />
    </PageCont>
  );
};

export default Auth;
