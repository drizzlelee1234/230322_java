
/*alert("안녕하세요!");
window.alert("안녕하세요!"); 원래는 이렇게 써야하나 window는 생략해서 씀
-BOM 브라우저객체모델 
-문서 객체모델  document.write("안녕하세요!"); 문서기반객체
-내장객체: 기본적으로 들어가져있는 객체
-개발자가 지정한 나만의 객체

*/

/*개발자가 지정한 나만의 객체*/
/*1.함수생성방법*/
/*
let tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function(){
  document.write("tv 색상:" + tv.color, "<br />");
  document.write("tv 가격:" + tv.price, "<br />");
};
*/




/*2.속성설정방법*/
/*
let car = {
  color: "black",
  price: 5000000,
  info: function(){
  document.write("car 색상:" + car.color, "<br />");
  document.write("car 가격:" + car.price, "<br />");
  }
};

document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();

document.write("<h1>car 객체 메서드 호출</h1>");
car.info();
*/

/* this를 사용할 경우
let tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function(){
  document.write("tv 색상:" + this.color, "<br />");
  document.write("tv 가격:" + this.price, "<br />");
};

let car = {
  color: "black",
  price: 5000000,
  info: function(){
  document.write("car 색상:" + this.color, "<br />");
  document.write("car 가격:" + this.price, "<br />");
  }
};

document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();

document.write("<h1>car 객체 메서드 호출</h1>");
car.info();

*/

/*
let test = {
  avg: function(math, science) {
    return math + science 
  }
}

document.write(test.avg(50, 100));
*/


let test = {
  math: 50,
  science: 100, 
  avg: function() {
    return this.math + this.science 
  }
}

document.write(test.avg());
















