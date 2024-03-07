// Функция для имитации запроса данных из базы данных
function fetchFromDB() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userFromDB = { id: 1, name: "John Doe", from: "Database" };
        //resolve(userFromDB); // Расскомментируйте эту строку для успешного выполнения
        reject("Ошибка: Данные из базы данных недоступны!"); // Расскомментируйте эту строку для симуляции ошибки
      }, 1000);
    });
  }
  
  // Функция для имитации запроса данных из внешнего API
  function fetchFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userFromAPI = { id: 2, name: "Jane Smith", from: "API" };
        //resolve(userFromAPI); // Расскомментируйте эту строку для успешного выполнения
        reject("Ошибка: Данные из внешнего API недоступны!"); // Расскомментируйте эту строку для симуляции ошибки
      }, 1500);
    });
  }
  
  // Главная функция для получения данных о пользователе
  async function getUserData() {
    try {
      const userData = await fetchFromDB();
      console.log("Данные о пользователе:", userData);
    } catch (error) {
      console.error(error);
      try {
        const userDataFromAPI = await fetchFromAPI();
        console.log("Данные о пользователе:", userDataFromAPI);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  // Вызов главной функции
  getUserData();