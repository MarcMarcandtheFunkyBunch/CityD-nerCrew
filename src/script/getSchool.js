/**
 * Holt sich die Schule aus dem localStorage. stellt Informationen zur Schule dar, ändert Bilder im Header und in den Boxen
 */
function getSchool(newToken) {
    var schule = JSON.parse(window.localStorage.getItem("student")).school;
    $('#schulname').html(schule.name);
    var schulbildInactive = '"' + schule.imageUrlInactive + '"';
    var schulbildBig = '"' + schule.imageUrlBig + '"';
    var schuladresse = schule.address.split(", ");
    $('#strasse').html(schuladresse[0]);
    $('#ort').html(schuladresse[1]);
    $('#land').html(schule.country);
    $('#email').html(schule.email);
    var mailadresse = '"mailto:' + schule.email + '"';
    var telefonnummer = '"tel:' + schule.telefon + '"';
    $('#email').attr("href", eval(mailadresse));
    $('#telefon').html(schule.telefon);
    $('#telefon').attr("href", eval(telefonnummer));
    $('#headerSchool').attr("src", eval(schulbildInactive));
    $('#schulbild').attr("src", eval(schulbildBig));
    window.localStorage.setItem('schulbild', schule.imageUrl);
}