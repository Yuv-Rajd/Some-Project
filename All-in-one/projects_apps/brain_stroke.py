import pickle
from flask import Flask, request, render_template, redirect, url_for


def brain_stroke_method(request, model):
    # convert data to float
    name = request.form['name']
    gender = float(request.form['gender'])
    age = float(request.form['age'])
    hyp = float(request.form['hyp'])
    hrt = float(request.form['hrt'])
    mrd = float(request.form['mrd'])
    wrk = float(request.form['wrk'])
    res = float(request.form['res'])
    glc = float(request.form['glc'])
    bmi = float(request.form['bmi'])
    smk = float(request.form['smk'])

    data_input = [[gender, age, hyp, hrt, mrd, wrk, res, glc, bmi, smk]]
    print(data_input)

    # predict the data
    res = model.predict(data_input)

    # find res
    if res[0] == 0:
        msg = f"{name}! dont worry you are all right"
    else:
        msg = f"Hey {name}! please contact your Doctor!"

    return  msg
