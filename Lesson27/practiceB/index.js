import cors from "C:\Users\Daria\OneDrive\Рабочий стол\kod\JavaScript-2-course\Lesson27\practiceB\node_modules\cors\lib\index.js"
const http = require('http');


// Функция для генерации случайного статус-кода
function getRandomStatusCode() {
   const statusCodes = [200, 201, 400, 401, 404, 500]; // Пример возможных статус-кодов
   const randomIndex = Math.floor(Math.random() * statusCodes.length);
   return statusCodes[randomIndex];
}


// Создание HTTP-сервера
const server = http.createServer((req, res) => {
   const statusCode = getRandomStatusCode();


   // Установка случайного статус-кода
   res.writeHead(statusCode, {'Content-Type': 'text/plain'});


   // Отправка ответа
   res.end("Response with status code: ${statusCode}\n");
});

 server.use(cors())
const port = 3000;
// Слушаем порт 3000
server.listen(port, () => {
   console.log("Server running at http://localhost:${port}/");
});

