// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, User, getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// Initialize Firebase
export const FirebaseApp = initializeApp(
  JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG!)
);
export const FirebaseAuth = getAuth();
export const GoogleProvider = new GoogleAuthProvider();

export const AuthContext = createContext({
  user: null as User | null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const usubs = FirebaseAuth.onAuthStateChanged((user) => {
      console.log("Firebase auth changed:", user);
      setUser(user);
    });
    return () => {
      usubs();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
