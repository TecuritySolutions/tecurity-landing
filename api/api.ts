import axios from 'axios';

export const submitLoanApplication = async (formData: any) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post('/api/Loan_Application', formData,{ headers });
    return response.data;
  } catch (error) {
    console.error('Error making loan application:', error);
    throw error;
  }
};