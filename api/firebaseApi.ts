// firebaseApi.ts
import firebase from "@/firebase.config"; // Import the initialized Firebase app
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const auth = firebase.auth();
const db = firebase.firestore();

// Function to handle employee login
export const handleEmployeeLogin = async (employeeId: string, password: string) => {
  console.log('Employee ID:', employeeId);
  console.log('Password:', password);
  try {
    await auth.signInWithEmailAndPassword(employeeId, password);

    console.log('Login successful');
    // Successful login, navigate to the home screen
  } catch (error) {
    console.error('Login error:', error);
    // Handle login errors (e.g., display an error message)
  }
};

// Function to handle admin login
export const handleAdminLogin = async (employeeId: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(employeeId, password);
    // Successful login, navigate to the home screen
  } catch (error) {
    console.error('Login error:', error);
    // Handle login errors (e.g., display an error message)
  }
};

// Function to store form data
export const handleSubmitForm = async (formData: any) => {
  try {
    await db.collection('employees').add(formData);
    // Success, handle the response (e.g., show a success message)
  } catch (error) {
    console.error('Error storing data:', error);
    // Handle errors (e.g., display an error message)
  }
};

// Function to retrieve form data
export const getFormData = async () => {
  try {
    const querySnapshot = await db.collection('employees').get();
    const data = querySnapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    // Handle errors (e.g., display an error message)
  }
};