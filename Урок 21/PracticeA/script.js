function rectanglew(){
    const width = document.getElementById('number_one').value;
    const height = document.getElementById('number_two').value;

    const value = new rectangle(width,height);

    const answer = value.calculatorsquare();

    document.getElementById('answer').textContent = `Площадь прямоугольника ровна: ${answer}`
}


class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

calculatorsquare(){
    return this.width * this.height;
}
}