const cont = document.getElementsByClassName('cont')[0]; //массив, поэтому [0]
const messages = [
    {text: "Привет, как правильно переносить макет из Figma?", by: "user", time: "13:00"},
    {text: "1. Включи режим просмотра для программистов 2.Изучи каждый элемент 3. Копируй настройки каждого элемента дизайна в свой код", by: "Alex", time: "13:01"},
    {text: "У меня точно получится?", by: "user", time: "13:02"},
    {text: "100%, если что, мы всегда поможем тебе)", by: "Alex", time: "13:03"},
    {text: "У меня точно получится?", by: "user", time: "13:02"},
    {text: "100%, если что, мы всегда поможем тебе)", by: "Alex", time: "13:03"},
];

function renderLinkIcon(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
  
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('viewBox', '0 0 22 13');
    iconSvg.setAttribute('stroke', '#A5F469');
    iconSvg.setAttribute('width', '22');
    iconSvg.setAttribute('height', '13');
    iconSvg.classList.add('tick');
  
    iconPath.setAttribute(
      'd',
      'M1.62524 7.67807L5.27515 11.0374C5.7375 11.4629 6.45383 11.4458 6.89536 10.9987L15.9321 1.8476',
    );
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-width', '1.75');
  
    iconSvg.appendChild(iconPath);
  
    return node.appendChild(iconSvg);
}

messages.forEach((message) => {
    const mes = document.createElement('div'); //слздаем див
    const text = document.createElement('p'); //создаем p
    text.innerText = message.text; //помещаем текст сообщения из массива в p
    mes.appendChild(text);  //помещаем p в див

    //доп
    const clock = document.createElement('div'); //создаем див для времени
    const text_time = document.createElement('p'); //создаем p для времени
    text_time.innerText = message.time; //помещаем текст времени из массива в p
    clock.appendChild(text_time); //помещаем p в див часов
    mes.appendChild(clock); //помещаем часы в общий див сообщения

    if(message.by == 'user'){ //если в массиве указано что сообщение от пользователя
        mes.classList.add('first_mes'); //добавляем к общему диву сообщения класс 1 (<div class="first_mes">)
        text_time.classList.add('f_time'); //добавляем тексту с временем  класс 1 (<p class="f_time">)
        clock.classList.add('f_down'); //добавляем к общему диву времени класс 1 (<div class="f_down">)
        renderLinkIcon(clock); //для иконки
    }

    else if (message.by == 'Alex'){ //если в массиве указано что сообщение от александра
        mes.classList.add('second_mes'); //добавляем к общему диву сообщения класс 2 (<div class="second_mes">)
        text_time.classList.add('s_time'); //добавляем тексту с временем  класс 2 (<p class="s_time">)
        clock.classList.add('s_down');  //добавляем к общему диву времени класс 2 (<div class="s_down">)
    }

    cont.appendChild(mes);
})