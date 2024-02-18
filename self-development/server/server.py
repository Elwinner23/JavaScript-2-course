from flask import Flask, jsonify, request
from flask_cors import CORS  # Импортируем Flask-CORS

import g4f
import time

app = Flask(__name__)
CORS(app)  # Добавляем CORS к приложению

def get_gpt_response(user_message):
    max_retries = 3
    retries = 0

    while retries < max_retries:
        try:
            response = g4f.ChatCompletion.create(
                model=g4f.models.gemini_pro,
                messages=[{"role": "user", "content": user_message}],
                stream=True,
            )

            result_messages = [message for message in response]
            return {"result": result_messages}

        except Exception as e:
            print(f"Error: {e}")
            retries += 1
            time.sleep(1)  # Подождать 1 секунду перед повторным запросом

    return {"result": ["Ошибка: Не удалось получить ответ от GPT"]}

@app.route('/')
def index():
    user_message = request.args.get('user_message', 'Привет')

    response = get_gpt_response(user_message)

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)