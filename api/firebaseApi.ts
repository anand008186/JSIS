// firebaseApi.ts
import firebase from "@/firebase.config"; // Import the initialized Firebase app
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const auth = firebase.auth();
const db = firebase.firestore();

export const handleEmployeeLogin = async (employeeId: string, password: string) => {
  console.log('Employee ID:', employeeId);
  console.log('Password:', password);

    await auth.signInWithEmailAndPassword(employeeId, password);
    console.log('Login successful');
  
};

// Function to handle admin login
export const handleAdminLogin = async (employeeId: string, password: string) => {
  await auth.signInWithEmailAndPassword(employeeId, password);
};

export const handleSubmitForm = async (formData: any, userEmail: string) => {
  try {
    const formWithUserData = {
      ...formData,
      userEmail,
      status: 'pending', // Initial status
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Timestamp for when the form was created
    };
    console.log('Form data with user info:', formWithUserData);
    await db.collection('forms').add(formWithUserData);
    // Success, handle the response (e.g., show a success message)
  } catch (error) {
    console.error('Error storing data:', error);
    // Handle errors (e.g., display an error message)
  }
};

// Function to retrieve form data
export const getFormData = async () => {
  try {
    const querySnapshot = await db.collection('forms').get();
    const data = querySnapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    // Handle errors (e.g., display an error message)
  }
};

// Function to handle form approval/rejection using form _id from Firestore
export const handleApproveReject = async (formId: string, status: string) => {
  try {
    await db.collection('forms').doc(formId).update({ status });
    // Success, handle the response (e.g., show a success message)
  } catch (error) {
    console.error('Error updating form:', error);
    // Handle errors (e.g., display an error message)
  }
};