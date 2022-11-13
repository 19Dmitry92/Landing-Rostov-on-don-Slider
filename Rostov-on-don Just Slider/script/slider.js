let num = 1;            //Начальный номер
showSlides(num);
let li1 = document.querySelector('.lione');
let li2 = document.querySelector('.litwo');
let li3 = document.querySelector('.lithree');
let dot1 = document.querySelector('.first');
let dot2 = document.querySelector('.second');
let dot3 = document.querySelector('.third');
let city = document.querySelector('.sldr1');
let area = document.querySelector('.sldr2');
let repair = document.querySelector('.sldr3');
    function next() { 
        showSlides(num += 1);  //Увеличиваем номер
        if(num == 1) {
            one()
        }
        else if(num == 2) {
            two()
        }
        else if(num == 3) {
            three()
        }
}

    function prev() {
        showSlides(num -= 1);  //Уменьшаем номер
        if(num == 1) {
            one()
        }
        else if(num == 2) {
            two()
        }
        else if(num == 3) {
            three()
        }
}

    function one() {          //Функции для клика по точкам и ссылкам
        showSlides(num = 1);  
        li1.style = "color: #E3B873; border-bottom: 1px solid #E3B873; padding-bottom: 6px";
        li2.style = "color: rgba(255, 255, 255, 0.3)";
        li3.style = "color: rgba(255, 255, 255, 0.3)";
        dot2.style = "opacity: 0.3"
        dot3.style = "opacity: 0.3"
        dot1.style = "opacity: 1"
        city.innerText = "Rostov-on-Don LCD admiral"
        area.innerText = "81 m2"
        repair.innerText = "3.5 months"
        city.style = "padding-right: 90px"
}
    function two() {
        showSlides(num = 2);
        li2.style = "color: #E3B873; border-bottom: 1px solid #E3B873; padding-bottom: 6px";
        li1.style = "color: rgba(255, 255, 255, 0.3); border-bottom: none";
        li3.style = "color: rgba(255, 255, 255, 0.3)";
        dot1.style = "opacity: 0.3"
        dot3.style = "opacity: 0.3"
        dot2.style = "opacity: 1"
        city.innerText = "Sochi Thieves"
        area.innerText = "105 m2"
        repair.innerText = "4 months"
        city.style = "padding-right: 120px"

} 
    function three() {
        showSlides(num = 3);
        li3.style = "color: #E3B873; border-bottom: 1px solid #E3B873; padding-bottom: 6px";
        li1.style = "color: rgba(255, 255, 255, 0.3); border-bottom: none";
        li2.style = "color: rgba(255, 255, 255, 0.3)";
        dot1.style = "opacity: 0.3"
        dot2.style = "opacity: 0.3"
        dot3.style = "opacity: 1"
        city.innerText = "Rostov-on-Don Patriotic"
        area.innerText = "93 m2"
        repair.innerText = "3 months"
        city.style = "padding-right: 90px"
}

    function showSlides(n) {   //Установка границ и переход
        
        let slides = document.getElementsByClassName("picture");
        if (n > slides.length) {
        num = 1;
    }
        if (n < 1) {
        num = slides.length;
    }
        for (let slider_style of slides) {   //Изменяя стили - изменяем показ
        slider_style.style.display = "none";
    }   
        slides[num - 1].style.display = "block";
      
}

