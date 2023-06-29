function addUser()
{
    player1name = document.getElementById("player1_name_input").value;

    player2name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player1" , player1name);
    localStorage.setItem("Player2" , player2name);

    window.location = "index.html";
}