// Desc: This file contains helper functions that are used in the application

// Function to truncate email
export const truncateEmail = (email: string) => {
    if (!email) return ''; // Handle the case where email is null
    const parts = email.split('@');
    //only upto max 10 characters
    return parts[0].substring(0, 10) + '.';
  };
