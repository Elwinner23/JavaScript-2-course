const express = require('express')
const app = express()
const port = 3000

// Функция для генерации случайного статус-кода
function getRandomStatusCode() {
   const statusCodes = [200, 201, 400, 401, 404, 500]; // Пример возможных статус-кодов
   const randomIndex = Math.floor(Math.random() * statusCodes.length);
   return statusCodes[randomIndex];
}

app.get('/code', (req,res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Request-Method', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
   res.setHeader('Access-Control-Allow-Headers', '*');

   const statusCode = getRandomStatusCode();
   res.writeHead(statusCode, {'Content-Type': 'text/plain'});

   res.end(`Response with status code: ${statusCode}\n`);
})

app.listen(port, () =>{
   console.log(`Сервер запущен http://localhost:${port}/`);
})
