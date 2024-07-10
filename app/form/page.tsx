'use client'
// import React, { useState } from 'react';

// const LoanEligibilityForm = () => {
//   const [gender, setGender] = useState('');
//   const [applicantIncome, setApplicantIncome] = useState('');
//   const [coapplicantIncome, setCoapplicantIncome] = useState('');
//   const [maritalStatus, setMaritalStatus] = useState('');
//   const [education, setEducation] = useState('');
//   const [dependentsNumber, setDependentsNumber] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');
//   const [loanAmountTerm, setLoanAmountTerm] = useState('');
//   const [creditHistory, setCreditHistory] = useState('good');
//   const [selfEmployed, setSelfEmployed] = useState(false);
//   const [propertyArea, setPropertyArea] = useState('');

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-8">Fill This Form and Check Loan Eligibility</h1>
//       <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
//             Gender
//           </label>
//           <div className="relative">
//             <select
//               id="gender"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="applicantIncome">
//             Applicant Income
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="applicantIncome"
//             type="number"
//             value={applicantIncome}
//             onChange={(e) => setApplicantIncome(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="coapplicantIncome">
//             Coapplicant Income
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="coapplicantIncome"
//             type="number"
//             value={coapplicantIncome}
//             onChange={(e) => setCoapplicantIncome(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="loanAmount">
//             Loan Amount
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="loanAmount"
//             type="number"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="loanAmountTerm">
//             Loan Amount Term (in months)
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="loanAmountTerm"
//             type="number"
//             value={loanAmountTerm}
//             onChange={(e) => setLoanAmountTerm(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="maritalStatus">
//             Marital Status
//           </label>
//           <div className="relative">
//             <select
//               id="maritalStatus"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={maritalStatus}
//               onChange={(e) => setMaritalStatus(e.target.value)}
//             >
//               <option value="">Select Marital Status</option>
//               <option value="single">Single</option>
//               <option value="married">Married</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="education">
//             Education
//           </label>
//           <div className="relative">
//             <select
//               id="education"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={education}
//               onChange={(e) => setEducation(e.target.value)}
//             >
//               <option value="">Select Education Level</option>
//               <option value="graduate">Graduate</option>
//               <option value="not-graduate">Not Graduate</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="dependentsNumber">
//             Dependents Number (0, 1, 2, 3+)
//           </label>
//           <div className="relative">
//             <select
//               id="dependentsNumber"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={dependentsNumber}
//               onChange={(e) => setDependentsNumber(e.target.value)}
//             >
//               <option value="">Select Number of Dependents</option>
//               <option value="0">0</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3+">3+</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="creditHistory">
//             Credit History
//           </label>
//           <div className="flex items-center">
//             <input
//               id="creditHistoryGood"
//               type="radio"
//               name="creditHistory"
//               value="good"
//               checked={creditHistory === 'good'}
//               onChange={(e) => setCreditHistory(e.target.value)}
//               className="mr-2 leading-tight"
//             />
//             <label htmlFor="creditHistoryGood" className="text-gray-700 mr-4">
//               Good
//             </label>
//             <input
//               id="creditHistoryBad"
//               type="radio"
//               name="creditHistory"
//               value="bad"
//               checked={creditHistory === 'bad'}
//               onChange={(e) => setCreditHistory(e.target.value)}
//               className="mr-2 leading-tight"
//             />
//             <label htmlFor="creditHistoryBad" className="text-gray-700">
//               Bad
//             </label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="selfEmployed">
//             Self-Employed
//           </label>
//           <div className="flex items-center">
//             <input
//               id="selfEmployed"
//               type="checkbox"
//               checked={selfEmployed}
//               onChange={(e) => setSelfEmployed(e.target.checked)}
//               className="mr-2 leading-tight"
//             />
//             <label htmlFor="selfEmployed" className="text-gray-700">
//               Yes
//             </label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="propertyArea">
//             Property Area
//           </label>
//           <div className="relative">
//             <select
//               id="propertyArea"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={propertyArea}
//               onChange={(e) => setPropertyArea(e.target.value)}
//             >
//               <option value="">Select Property Area</option>
//               <option value="urban">Urban</option>
//               <option value="semiurban">Semi-Urban</option>
//               <option value="rural">Rural</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <button
            
//             className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Check Eligibility
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoanEligibilityForm;
'use client';
import React, { useState } from 'react';
import { submitLoanApplication } from '@/api/api';   // Adjust the import path as necessary

const LoanEligibilityForm = () => {
  const [genders_type, setGendersType] = useState('');
  const [applicantIncome, setApplicantIncome] = useState('');
  const [coapplicantIncome, setCoapplicantIncome] = useState('');
  const [marital_status, setMaritalStatus] = useState('');
  const [education_status, setEducationStatus] = useState('');
  const [dependents, setDependents] = useState('');
  const [loan_amnt, setLoanAmnt] = useState('');
  const [term_d, setTermD] = useState('');
  const [creditHistory, setCreditHistory] = useState('good');
  const [self_employment, setSelfEmployment] = useState(false);
  const [propertyArea, setPropertyArea] = useState('');
  const [residential_assets, setResidentialAssets] = useState('');
  const [commercial_assets, setCommercialAssets] = useState('');
  const [bank_asset, setBankAsset] = useState('');
  const [cible, setCible] = useState('');
  const [prediction, setPrediction] = useState(null);
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = {
      genders_type,
      marital_status,
      dependents,
      education_status,
      self_employment: self_employment ? 1 : 0,
      applicantIncome: parseFloat(applicantIncome),
      loan_amnt: parseFloat(loan_amnt),
      term_d: parseInt(term_d),
      residential_assets: parseFloat(residential_assets),
      commercial_assets: parseFloat(commercial_assets),
      bank_asset: parseFloat(bank_asset),
      cible: parseFloat(cible),
    };
  
    try {
      const result = await submitLoanApplication(formData);
      setPrediction(result.prediction);
      console.log("RESULT - ", result.prediction);
      
    } catch (error) {
      console.error('I am here:', error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Fill This Form and Check Loan Eligibility</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="genders_type">
            Gender
          </label>
          <div className="relative">
            <select
              id="genders_type"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={genders_type}
              onChange={(e) => setGendersType(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="applicantIncome">
            Applicant Income
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="applicantIncome"
            type="number"
            value={applicantIncome}
            onChange={(e) => setApplicantIncome(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="coapplicantIncome">
            Coapplicant Income
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coapplicantIncome"
            type="number"
            value={coapplicantIncome}
            onChange={(e) => setCoapplicantIncome(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="loan_amnt">
            Loan Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="loan_amnt"
            type="number"
            value={loan_amnt}
            onChange={(e) => setLoanAmnt(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="term_d">
            Loan Amount Term (in months)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="term_d"
            type="number"
            value={term_d}
            onChange={(e) => setTermD(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="marital_status">
            Marital Status
          </label>
          <div className="relative">
            <select
              id="marital_status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={marital_status}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">Select Marital Status</option>
              <option value="YES">Married</option>
              <option value="NO">Single</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="education_status">
            Education
          </label>
          <div className="relative">
            <select
              id="education_status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={education_status}
              onChange={(e) => setEducationStatus(e.target.value)}
            >
              <option value="">Select Education Level</option>
              <option value="GRADUATED">Graduate</option>
              <option value="NOT GRADUATED">Not Graduate</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dependents">
            Dependents (0, 1, 2, 3+)
          </label>
          <div className="relative">
            <select
              id="dependents"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
            >
              <option value="">Select Number of Dependents</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="creditHistory">
            Credit History
          </label>
          <div className="flex items-center">
            <input
              id="creditHistoryGood"
              type="radio"
              name="creditHistory"
              value="good"
              checked={creditHistory === 'good'}
              onChange={(e) => setCreditHistory(e.target.value)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="creditHistoryGood" className="text-gray-700 mr-4">
              Good
            </label>
            <input
              id="creditHistoryBad"
              type="radio"
              name="creditHistory"
              value="bad"
              checked={creditHistory === 'bad'}
              onChange={(e) => setCreditHistory(e.target.value)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="creditHistoryBad" className="text-gray-700">
              Bad
            </label>
          </div>
        </div> */}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="self_employment">
            Self-Employed
          </label>
          <div className="flex items-center">
            <input
              id="self_employment"
              type="checkbox"
              checked={self_employment}
              onChange={(e) => setSelfEmployment(e.target.checked)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="self_employment" className="text-gray-700">
              Yes
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="residential_assets">
            Residential Assets
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="residential_assets"
            type="number"
            value={residential_assets}
            onChange={(e) => setResidentialAssets(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="commercial_assets">
            Commercial Assets
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="commercial_assets"
            type="number"
            value={commercial_assets}
            onChange={(e) => setCommercialAssets(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bank_asset">
            Bank Asset
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bank_asset"
            type="number"
            value={bank_asset}
            onChange={(e) => setBankAsset(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cible">
            Cible
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cible"
            type="number"
            value={cible}
            onChange={(e) => setCible(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Check Eligibility
          </button>
        </div>
      </form>
      {prediction && <div className="mt-8 p-4 font-bold text-white text-2xl"> {prediction}</div>}
    </div>
  );
};

export default LoanEligibilityForm;
