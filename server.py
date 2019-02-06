from flask import Flask,render_template

app = Flask(__name__)


@app.route('/')
def snake_game():
    return render_template('snakeGame_TW.html')


if __name__=='__main__':
    app.run(debug=True)

