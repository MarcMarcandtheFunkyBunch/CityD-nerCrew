/**
 * initiale Funktion zum Initialisieren des RestClients
 */
var restClient = ê.createRestClient({
    host: "http://46.101.204.215:1337",
    useSSL: false
});

var token = localStorage.getItem("token");
var avatarStudent;
var avatarArray = [];