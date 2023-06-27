# --------------------------------------------------------------
# import required modules

import pickle
from flask import Flask,request,render_template,redirect,url_for
import sklearn

#
#
# --------------------------------------------------------------
# import projects apps
#
from projects_apps.brain_stroke import brain_stroke_method
from projects_apps.cirrhosis import cirrhosis_method



# --------------------------------------------------------------
# create flask app
#
#
app =Flask(__name__)
#
# --------------------------------------------------------------
# all routes
#
# index page /main route

@app.route('/',methods=['POST','GET'])
def index():
    return render_template('stack.html')


# --------------------------------------------------------------
# brain stroke
@app.route('/brain_stroke',methods=['POST','GET'])
def brain_stroke():
    model = pickle.load(open('projects_models/brain_stroke.pkl', 'rb'))
    path = 'brain_stroke.html'
    if request.method == 'POST':
        msg =brain_stroke_method(request, model)
        return render_template(path,msg =msg)
    return render_template(path)


# --------------------------------------------------------------
# cirrhosis
@app.route('/cirrhosis',methods=['POST','GET'])
def cirrhosis():
    model = pickle.load(open('projects_models/cirrhosis.pkl', 'rb'))
    path = 'cirrhosis.html'
    if request.method == 'POST':
        msg =cirrhosis_method(request, model)
        return render_template(path,res =msg)
    return render_template(path)






# --------------------------------------------------------------
# main run

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')
# --------------------------------------------------------------
