from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pickle
from sklearn.preprocessing import StandardScaler
import numpy as np

app = Flask(__name__)
CORS(app)

with open('models/LR_3.pkl', 'rb') as f:
    dt = pickle.load(f)
ss = StandardScaler()
genders_to_int = {'MALE':1,
                  'FEMALE':0}

married_to_int = {'YES':1,
                  'NO':0}

education_to_int = {'GRADUATED':1,
                  'NOT GRADUATED':0}

dependents_to_int = {'0':0,
                      '1':1,
                      '2':2,
                      '3+':3}

self_employment_to_int = {'YES':1,
                          'NO':0}                      


@app.route('/form', methods=["GET"])
def prediction():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

@app.route("/Loan_Application", methods=['POST'])
def Loan_Application():
   if request.method == 'POST':
        data = request.get_json()  # Assuming the request payload is in JSON format
        genders_type = data.get('genders_type')
        marital_status = data.get('marital_status')
        dependents = int(data.get('dependents', 0))  # Handle missing values
        education_status = data.get('education_status')
        self_employment = int(data.get('self_employment', 0))
        applicantIncome = float(data.get('applicantIncome', 0.0))
        loan_amnt = float(data.get('loan_amnt', 0.0))
        term_d = int(data.get('term_d', 0))
        residential_assets = float(data.get('residential_assets', 0.0))
        commercial_assets = float(data.get('commercial_assets', 0.0))
        bank_asset = float(data.get('bank_asset', 0.0))
        cible = float(data.get('cible', 0.0))

        x = np.array([
            applicantIncome, loan_amnt, term_d, cible,
            residential_assets, commercial_assets, bank_asset,
            dependents, self_employment
        ]).reshape(1, -1)

        pred = dt.predict(x)[0]
        if pred == 1:
            res = '🎊🎊 Congratulations! Your Loan Will Be Approved 🎊🎊'
        else:
            res = 'Your Loan Will Be Denied 😔'

        output_dict = {
            'Applicant Income': applicantIncome,
            'Loan Amount': loan_amnt,
            'Loan Amount Term': term_d,
            'CIBIL Score': cible,
        }

        return jsonify({'prediction': res, 'original_input': output_dict})

if __name__ == "__main__":
    app.run(debug=True)

