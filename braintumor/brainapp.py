import os
import tensorflow as tf
from keras.preprocessing import image
from PIL import Image
import cv2
import numpy as np
from keras.models import load_model
from flask import Flask,request,render_template
from werkzeug.utils import secure_filename

app = Flask(__name__,template_folder='braintemp',static_folder='brainstatic')
model = load_model('BrainTumor10Epochs.h5')




@app.route('/', methods=['GET'])
def index():
    return render_template('brain.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        file_path="./brainimages/"+f.filename
        f.save(file_path)

        image = cv2.imread(file_path)
        image = Image.fromarray(image,'RGB')
        image = image.resize((64,64)) 
        input_image = np.expand_dims(image, axis=0)
        result=model.predict(input_image)
        if result[0][0]==0:
            return "NO Brain Tumor"
        elif result[0][0]==1:
            return "Brain Tumor detected"
    return None
if __name__ == '__main__':
    app.run(port=5505,debug=True)