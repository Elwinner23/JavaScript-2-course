let hp = 3;
let secretnum;

function game(){
    let num = document.getElementById("num").value;

    if(hp == 2){
        alert("Я говорил что 1 попытка ладно эта шутка еще 2")
    }

    if(!secretnum){
        secretnum = Math.floor(Math.random() * 10) + 1;
    }

    if(hp == 0){
        alert("Ты проиграл!")
        return hp;
    }

    if(secretnum == num){
        alert("Ты выйграли!");
    }

    if(secretnum > num){
        alert("Число больше");
        hp -= 1;
    }else if(secretnum < num){
        alert("Число меньше")
        hp -= 1;
    }

    console.log(secretnum)
    console.log(hp)
}