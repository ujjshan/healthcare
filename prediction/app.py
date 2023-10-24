from flask import Flask,render_template,request
import pickle
import pandas as pd
import numpy as np
app=Flask(__name__)

model=pickle.load(open("model1.pkl","rb"))
data=pd.read_csv("cleaned_data.csv")

@app.route('/')
def index():
    symptom1 = sorted(data['Symptom 1'].unique())
    symptom2 = sorted(data['Symptom 2'].unique())
    symptom3 = sorted(data['Symptom 3'].unique())
    symptom4 = sorted(data['Symptom 4'].unique())
    symptom5 = sorted(data['Symptom 5'].unique())
    # symptoms = [sorted(data[f'Symptom {i}'].unique()) for i in range(1, 6)]this can be also used
    
    return render_template('index.html',symptom1=symptom1, symptom2=symptom2,symptom3=symptom3,symptom4=symptom4,symptom5=symptom5)

@app.route('/predict', methods=['POST'])
def predict():
    # Symptom_1 = request.form.get('symptom_1')
    # Symptom_2 = request.form.get('symptom_2')
    # Symptom_3 = request.form.get('symptom_3')
    # Symptom_4 = request.form.get('symptom_4')
    # Symptom_5 = request.form.get('symptom_5')
    symptoms = [request.form.get(f'symptom_{i}') for i in range(1, 6)]
    
    input= np.array(symptoms,dtype=object).reshape(1,5)
    # input= np.array([Symptom_1, Symptom_2,Symptom_3, Symptom_4,Symptom_5],dtype=object).reshape(1,5)
    
    prediction=model.predict(input)
    
    
    
    # prediction=model.predict(pd.DataFrame([[Symptom_1,Symptom_2,Symptom_3,Symptom_4,Symptom_5]],columns=['Symptom 1','Symptom 2','Symptom 3','Symptom 4','Symptom 5']))
    return str((prediction[0]))

if __name__=="__main__":
    app.run(port=5501,debug=True)