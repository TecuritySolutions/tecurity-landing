import axios from 'axios';

export const submitLoanApplication = async (formData) => {
  const url = 'http://localhost:5000/Loan_Application';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error making loan application:', error);
    throw error;
  }
};
