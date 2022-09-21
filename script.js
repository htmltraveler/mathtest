let statcorrect = 0
let statincorrect = 0
let start = 1
let finish = 9
function check(value , correctanswer, )
{
	if (value == correctanswer) 
 	{   
 		statcorrect = statcorrect + 1
		alert("Правильный ответ!")

	}

	else
	{
		alert("Ответ неверный!")
		statincorrect = statincorrect + 1

	}
}
function random(min , max)
{
	return Math.floor( Math.random() * (max - min ) + min)
}


document.querySelector(".plus").onclick=function()
{
	let n1 = random(start , finish)
	let n2 = random(start , finish)
	let correctanswer = n1 + n2
	let value = prompt(n1 + "+" + n2 + "=","") 
	check(value , correctanswer)

	
}
document.querySelector(".minus").onclick=function()
{
	let n1 = random(start, finish)
	let n2 = random(start, n1)
	let correctanswer = n1 - n2
	let value = prompt(n1 + "-" + n2 + "=","")
	check(value , correctanswer) 


}
document.querySelector(".multiply").onclick=function()
{
	let n1 = random(start , finish)
	let n2 = random(start , finish)
	let correctanswer = n1 * n2
	let value = prompt(n1 + "*" + n2 + "=","")
	check(value , correctanswer) 


}
document.querySelector(".divide").onclick=function()
{
	
	let n2 = random(start , finish)
	let correctanswer = random(start , finish)
	let n1 = n2 * correctanswer
	let value = prompt(n1 + "/" + n2 + "=","")
	check(value , correctanswer) 


}
document.querySelector(".statistic").onclick=function()
{  
 alert("Всего "+statcorrect+" правильных oтветов")
 alert("Всего "+statincorrect+" не правильных oтветов")
}

document.querySelector("select").onchange=function()
{
 
 	let level = (document.querySelector("select").value)
 	switch(level)
 	{
 		case "1":
 		{
 			start =  1;
			finish = 9; 
			break;
 		}

 		case "2" :
 		{
 			start = 10;
   			finish = 100;
   			break;
 		}

 		case "3" :
 		{
 			start = 100;
  			finish = 1000;
  			break;
 		}
 	} 	
}
/*
 if (level == 1) 
{
	start =  1
	finish = 9

}
if (level==2)
{
   
   start = 10
   finish = 100
}
if(level==3)
{
  start = 100
  finish = 1000
}

*/

/*

вместо 100 и 1000 поставить старт и финиш
ВЫЛОЖИТЬ ПРОЕКТ НА ГИТХАБ
стилизоавть стр
стили для таблицы чтобы увидеть ее
*/
