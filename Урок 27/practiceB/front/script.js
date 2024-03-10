document.getElementById('checkButton').addEventListener('click', async () => {
    try {
      const response = await fetch('http://localhost:3000');
      const statusCode = response.status;
  
      if (statusCode === 200 || statusCode === 201) {
        document.getElementById('statusDisplay').textContent = 'Все хорошо';
        document.getElementById('statusDisplay').style.color = 'green';
      } else {
        document.getElementById('statusDisplay').textContent = 'Ошибка';
        document.getElementById('statusDisplay').style.color = 'red';
      }
    } catch (error) {
      document.getElementById('statusDisplay').textContent = 'Ошибка';
      document.getElementById('statusDisplay').style.color = 'red';
    }
  });
  