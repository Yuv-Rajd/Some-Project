from flask import Flask, redirect, render_template, request, send_from_directory, url_for
import cv2
from keras.models import load_model
from PIL import Image
import numpy as np
import os

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

NAME = ""
PATH = "data"
i = 0
j = 0

@app.route('/detector', methods=['POST'])
def detector():
    global j
    if j == 0:
        global model2
        model2 = load_model("static/models/model_2.h5")
    # model2 = load_model("static\models\model_2.h5")
    image = request.files['image']
    name = request.form.get('name')
    global NAME
    NAME = name
    print(f"Name = {name}")
    path = fr'static/user_images/{name}.jpg'
    global PATH
    PATH = path
    image.save(path)
    image = Image.open(image.stream)
    image = image.resize((224, 224))
    image.save(path)
    # ___________________________________________

    img = cv2.imread(path)
    gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    cv2.imwrite('static/gray.jpg', gray_image)
    # apply the Canny edge detection
    edges = cv2.Canny(img, 100, 200)
    cv2.imwrite('static/edges.jpg', edges)
    # apply thresholding to segment the image
    retval2, threshold2 = cv2.threshold(gray_image, 200, 255, cv2.THRESH_BINARY)
    cv2.imwrite('static/threshold.jpg', threshold2)
    # apply the sharpening kernel to the image
    kernel_sharpening = np.array([[-1, -1, -1],
                                  [-1, 9, -1],
                                  [-1, -1, -1]])
    sharpened = cv2.filter2D(img, -1, kernel_sharpening)
    cv2.imwrite('static/sharpened.jpg', sharpened)
    # ________________________________________________________________


    image = image.convert('RGB')
    image = cv2.imread(path)
    img = np.array(image) / 255.0
    img = np.expand_dims(img, axis=0)
    result = model2.predict(img)
    result = result.squeeze()
    if result > 0.5:
        print("Tumor")
        p = result.squeeze() * 100
        return render_template('detector.html', data=[f"Tumor detected", name])
    else:
        p = 100 - (result.squeeze() * 100)
        print("No tumor")
        return render_template('detector.html', data=[f"No Tumor detected", name])


@app.route('/load_img')
def load_img():
    # return render_template('index.html', data=PATH)
    global PATH, NAME
    print(PATH, NAME)
    full_filename = os.path.join(app.config['UPLOAD_FOLDER'], f'{NAME}.jpg')
    print(full_filename)
    render_template('prediction1.html', name=NAME)
    # return redirect(url_for('static', path=PATH), code=301)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
    app.config['UPLOAD_FOLDER'] = PATH
    # app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 1
