/*
let today = new Date();
let nowMonth = today.getMonth()+1,

nowDate = today.getDate(),
nowDay = today.getDay();

document.write("<h1>오늘 날짜 정보를 알려주세요!</h1>");
document.write("현재 월:" + nowMonth, "<br />");
document.write("현재 일:" + nowDate, "<br />");
document.write("현재 요일:" + nowDay, "<br />");

let open = new Date("2023/3/13");
let theMonth = open.getMonth() +1,
theDate = open.getDate(),
theDay = open.getDay();

document.write("<h1>개강일 날짜 정보를 알려주세요!</h1>");
document.write("개강일 월:" + theMonth, "<br />");
document.write("개강일 일:" + theDate, "<br />");
document.write("개강일 요일:" + theDay, "<br />");
*/

/*
let today = new Date();
let nowYear = today.getFullYear();

let theDate = new Date(nowYear, 11, 31);
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
document.write(result + "일 남았습니다.");

*/

/*
let num = 2.1234;
let maxNum = Math.max(10, 5, 8, 30),
minNum = Math.min(10, 5, 8, 30),
roundNum = Math.round(num),
floorNum = Math.floor(num),
ceilNum = Math.ceil(num),
rndNum = Math.random(),s
piNum = Math.PI;

document.write(maxNum, "<br>");
document.write(minNum, "<br>");
document.write(roundNum, "<br>");
document.write(floorNum, "<br>");
document.write(ceilNum, "<br>");
document.write(rndNum, "<br>");
document.write(piNum, "<br>");
*/

/*가위바위보게임*/
document.write("<h1>컴퓨터와 함께하는가위.바위.보 게임!</h1>");
let game = prompt("가위, 바위, 보 중 입력하세요!", "예. 가위");
let gameNum;
switch (game){
  case "가위" :
    gameNum = 1; break;
  case "바위" :
    gameNum = 2; break;
  case "보" :
    gameNum = 3; break;
  default:alert("잘못 작성했습니다!");
   location.reload();
}

let com = Math.ceil(Math.random()*3);
document.write("<img src=\"/image/math_img_" + com + ".jpg\">");

if(gameNum == com){
  document.write("<img src=\"/image/game_1.jpg\">");
}else{
  document.write("<img src=\"/image/game_2.jpg\">");
}


