/**
 * Event Handler
 */
$('#btn').on('click', function(){
  login();
});

var restClient = ê.createRestClient({
    host: "46.101.204.215:1337",
    useSSL: false
});

var token;

/**
 * Login-Funktion
 */
function login(){
var name=$('#LoginInputUser').val();
var pword=$('#LoginInputPassword').val();
restClient.update("/api/V1/login", {
  username: name,
  password: pword
  }).done(function(response) {
        token = response.token;
        localStorage.setItem("token", token);
        window.location = "main.php";
}).fail(function(){
  $('#wrongDataAlert').removeClass("hidden");
});
}
