const cont = document.getElementsByClassName('cont')[0];
const messages = [
    {text: "Привет, как правильно переносить макет из Figma?", by: "user", time: "13:00"},
    {text: "1. Включи режим просмотра для программистов 2.Изучи каждый элемент 3. Копируй настройки каждого элемента дизайна в свой код", by: "Alex", time: "13:01"},
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
      'd',
      'M20.3742 1.8476L11.5773 10.6445'
    );
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-width', '1.75');
  
    iconSvg.appendChild(iconPath);
  
    return node.appendChild(iconSvg);
}

messages.forEach((message) => {
    const mes = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = message.text;
    mes.appendChild(text);

    const clock = document.createElement('div');
    const text_time = document.createElement('p');
    text_time.innerText = message.time;
    clock.appendChild(text_time);
    mes.appendChild(clock);

    if(message.by == 'user'){
        mes.classList.add('first_mes');
        text_time.classList.add('f_time');
        clock.classList.add('f_down');
        renderLinkIcon(clock);
    }

    else if (message.by == 'Alex'){
        mes.classList.add('second_mes');
        text_time.classList.add('s_time');
        clock.classList.add('s_down')
    }

    cont.appendChild(mes);
})