let NicknameString = "";
let Queries = "";

function Make_Query(){

}

function ButtonClick(){
    NicknameString = document.getElementById('nicknameinput').value;
    var Nicknames = NicknameString.split(', ');
    Nicknames.forEach(element => {
        Queries += "-@";
        Queries += element;
    });
    document.getElementById('make_query').innerText = Queries;
}

function init(){
    document.querySelector('.query_button').addEventListener('click', function(){
        ButtonClick();
    });
}

init();