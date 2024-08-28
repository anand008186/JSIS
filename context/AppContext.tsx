import React, { createContext, useState, useEffect, ReactNode } from 'react';
import firebase from '@/firebase.config'; // Import the initialized Firebase app
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export interface AppContextProps {
  currentUser: firebase.User | null;
  role: string | null;
  employeeHistory: any[];
  adminRequests: any[];
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUserRole: () => Promise<void>;
  fetchEmployeeHistory: () => Promise<void>;
  fetchAdminRequests: () => Promise<void>;
}



export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [employeeHistory, setEmployeeHistory] = useState<any[]>([]);
  const [adminRequests, setAdminRequests] = useState<any[]>([]);
  const auth = firebase.auth();
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await auth.signOut();
  };

  const fetchUserRole = async () => {
    if (currentUser) {
      const userDoc = await db.collection('EmployeeInfo').doc(currentUser.uid).get();
      if (userDoc.exists) {
        setRole(userDoc.data()?.role);
      }
    }
  };

  const fetchEmployeeHistory = async () => {
    const querySnapshot = await db.collection('employeeHistory').get();
    const data = querySnapshot.docs.map(doc => doc.data());
    setEmployeeHistory(data);
  };

  const fetchAdminRequests = async () => {
    const querySnapshot = await db.collection('adminRequests').get();
    const data = querySnapshot.docs.map(doc => doc.data());
    setAdminRequests(data);
  };

  return (
    <AppContext.Provider value={{ currentUser, role, employeeHistory, adminRequests, login, logout, fetchUserRole, fetchEmployeeHistory, fetchAdminRequests }}>
      {children}
    </AppContext.Provider>
  );
};