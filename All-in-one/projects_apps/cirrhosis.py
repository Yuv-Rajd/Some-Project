import pickle
from flask import Flask,request,render_template,redirect,url_for
import sklearn


def cirrhosis_method(request, model):

    Age  = int(request.form['Age'])
    Sex  = int(request.form['Sex'])
    ALB  = int(request.form['ALB'])
    ALP  = int(request.form['ALP'])
    ALT  = int(request.form['ALT'])
    AST  = int(request.form['AST'])
    BIL  = int(request.form['BIL'])
    CHE  = int(request.form['CHE'])
    # CHOL= int(request.form['CHOL'])
    CHOL=1
    CREA=1
    # CREA = int(request.form['CREA'])
    GGT  = int(request.form['GGT'])
    PROT = int(request.form['PROT'])

    data_input=[[Age,Sex,ALB,ALP,ALT,AST,BIL,CHE,CHOL,CREA,GGT,PROT]]
    print(data_input)

    # predict the data
    res =model.predict(data_input)

    # find res
    if res[0]==0 or res[0]==1:
        msg=f"Yes , you have disease"

    else :
        msg = f"dont worry, you are all right"

    return msg


