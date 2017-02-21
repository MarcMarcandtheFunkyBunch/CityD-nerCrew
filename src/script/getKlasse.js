/**
 * Holt sich Klasse und Lehrer aus dem localStorage, ändert die Bilder im Header und in den Boxen
 */
function getKlasse(newToken) {
    var klasse = JSON.parse(window.localStorage.getItem("student")).studyGroups;
    var lehrer = JSON.parse(window.localStorage.getItem("student")).formteacher;
    $('#klasseKlasse').html(klasse.class);
    $('#lehrer').html(lehrer);
    var klassenbildBig = '"' + klasse.imageUrlBig + '"';
    var klassenbildInactive = '"' + klasse.imageUrlInactive + '"';
    $('#klassenbildBig').attr("src", eval(klassenbildBig));
    $('#headerKlasse').attr("src", eval(klassenbildInactive));
}