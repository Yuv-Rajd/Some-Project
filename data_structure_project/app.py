# --------------------------------------------------------------
from flask import Flask,request,render_template,redirect,url_for,jsonify
import sklearn


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
    return render_template('index.html')



# --------------------------------------------------------------
# routers
@app.route("/queue")
def queue():
    return render_template("first.html", items=queue)


@app.route("/stack")
def stack():
    return render_template("stack.html")



# --------------------------------------------------------------
# stack methods

@app.route('/push', methods=['POST'])
def push():
    # get the element to push from the request data
    element = request.json['element']
    # add the element to the top of the stack
    stack.append(element)
    # return the updated stack as JSON
    return jsonify(stack=stack)

@app.route('/pop')
def pop():
    # check if the stack is empty
    if len(stack) == 0:
        # if the stack is empty, return an error message as JSON
        return jsonify(error='Stack is empty')
    else:
        # if the stack is not empty, pop the top element and return it as JSON
        element = stack.pop()
        return jsonify(stack=stack, element=element)

@app.route('/top')
def top():
    # check if the stack is empty
    if len(stack) == 0:
        # if the stack is empty, return an error message as JSON
        return jsonify(error='Stack is empty')
    else:
        # if the stack is not empty, return the top element as JSON
        element = stack[-1]
        return jsonify(element=element)

# --------------------------------------------------------------
# queue
@app.route("/enqueue", methods=["POST"])
def enqueue():
    item = request.form["item"]
    queue.append(item)
    return jsonify(queue=queue)

@app.route("/hhh", methods=["GET"])
def hhhh():
    message = request.args.get('message')
    print(message)
    response = {'message': message}
    return jsonify(response)


@app.route("/dequeue", methods=["POST"])
def dequeue():
    if len(queue) == 0:
        return jsonify(error="Queue is empty")

    item = queue.pop(0)
    return jsonify(queue=queue, item=item)

@app.route("/front")
def front():
    if len(queue) == 0:
        return jsonify(error="Queue is empty")

    item = queue[0]
    return jsonify(item=item)









# --------------------------------------------------------------
# main run

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')
# --------------------------------------------------------------
