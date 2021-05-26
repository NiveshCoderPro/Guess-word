player_1 = localStorage.getItem("player1_name_input");
player_2 = localStorage.getItem("player2_name_input");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1 + ":";
document.getElementById("player2_name").innerHTML = player_2 + ":";

document.getElementById("Player_1_score").innerHTML = player_1_score;
document.getElementById("Player_2_score").innerHTML = player_2_score;


document.getElementById("player_question").innerHTML = "Question turn - " + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player_2;

function send() {
    getWord = document.getElementById("word").value;
word = getWord.toLowerCase();

charAt1 = word.charAt(1);

lenght_divide_2 = Math.floor(word.length/2);
charAt2 = word.charAt(lenght_divide_2);

length_minus_1 = word.length - 1;

charAt3 = word.charAt(length_minus_1);

remove_charAt1 = word.replace(charAt1 , "_");
remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
remove_charAt3 = remove_charAt2.replace(charAt3 , "_");

question_word = "<h4 id='Word_display'> Q ."+remove_charAt3+"</h4>";
answer_word = "<input type='text' id='input_check_box'>"
check_button = "<button onclick='check()' class='btn btn-info'>Check</button>";
row = question_word + answer_word + check_button;


document.getElementById("word").value = "";
document.getElementById("output").innerHTML = row;
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    get_answer2 = get_answer.toLowerCase();
console.log(get_answer2);

if (get_answer2 == word) {
    if (answer_turn == "player1") {
        player_1_score = player_1_score+1;
        document.getElementById("Player_1_score").innerHTML = player_1_score;
    }
    else {
        player_2_score = player_2_score+1;
        document.getElementById("Player_2_score").innerHTML = player_2_score;
    }
}
if (question_turn == "player1") {
    question_turn = "player2";
  document.getElementById("player_question").innerHTML = "Question turn - " + player_2;

}
else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question turn - " + player_1;
}

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer turn -" + player_2;

}
else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer turn -" + player_1;
}
}