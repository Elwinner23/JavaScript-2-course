class letter{
  constructor(text, time){
    this.text = text;
    this.time = time;
  }
  sender_latter(){
    let sender = document.createElement("div");
    sender.className = 'soob-ot-obol';
    sender.innerHTML = `<div class="soob-ot">
                        <p>${this.text}</p>
                        <div class="soob-dop-obol">
                            <div class="soob-dop">
                                <p>${this.time}</p>
                                <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.62524 7.67807L5.27515 11.0374C5.7375 11.4629 6.45383 11.4458 6.89536 10.9987L15.9321 1.8476" stroke="#A5F469" stroke-width="1.75" stroke-linecap="round"/>
                                    <path d="M20.3742 1.8476L11.5773 10.6445" stroke="#A5F469" stroke-width="1.75" stroke-linecap="round"/>
                                </svg>
                                    
                            </div>  
                        </div>`;
      document.querySelector('.messenger-teh').append(sender);
  }
  recipient_letter(){
    let recipient = document.createElement("div");
    recipient.className = 'soob-pol-obol';
    recipient.innerHTML = `<div class="soob-pol">
    <p>${this.text}</p>
    <div class="soob-dop-obol">
        <div class="soob-dop">
            <p>${this.time}</p>
        </div>
    </div>`;
    document.querySelector('.messenger-teh').append(recipient);
  }
}


document.getElementById('form-button').addEventListener('click', () => {
  let lett = new letter(document.getElementById('input').value, '13:40');
  lett.sender_latter();
  document.getElementById('input').value = '';
})
