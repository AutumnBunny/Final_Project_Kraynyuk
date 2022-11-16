function onClickCat() {
   //alert ('Вы сейчас увидите кое-что потрясающее')//
  // prompt ('Сколько Вам лет?')//
 // confirm ('То, что вы сейчас увидите - перевернёт Ваше сознание. Вы точно готовы?')//



if (confirm ('То, что вы сейчас увидите - перевернёт Ваше сознание. Вы точно готовы?')) {alert ('Ну что ж, вы этого хотели');} 
else {alert ('Слишком поздно, приготовьтесь!');}
}



function OnInput (el) {
    if (el.value == 'Добрый день')
    alert ('И Вам Доброго дня!')
    if (el.value == 'Здравствуйте')
    alert ('И Вам Доброго дня!')
    if (el.value == 'Привет')
    alert ('И Вам Доброго дня!')

    el.style.background = "#97243f"
    el.style.color = "#fcfbf6"
    el.style.cssText = "border-radius: 25%; background-color: #97243f; color: white; padding-left: 20px"

}

function CheckForm (el) {

    let name = el.name.value;;
    let tel = el.tel.value;
    let mail = el.mail.value;

    let error = "";

if (name == "" || tel == "" || mail == "")
error = "Заполните все поля";

if (error !=="") {
    document.getElementById('error').innerHTML = error;


    return false
}
else {
    alert ("Все данные корректно заполнены")
    return true; 
}

return false;
}