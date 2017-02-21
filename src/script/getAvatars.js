/**
 * Holt sich Avatare aus der api
 * Sucht nach Avatar des Schülers
 * Befüllt Schülerbild im Header
 */
function getAvatars(newToken) {
    restClient.withHeader("Authorization", newToken).read("/api/V1/avatar").then(function(avatars) {
        var student = JSON.parse(window.localStorage.getItem("student"));
        var studentAvatarId = student.avatarId;
        var avatarActive = '"' + avatars[studentAvatarId].avatarUrl + '"';
        var avatarInactive = '"' + avatars[studentAvatarId].avatarInactiveUrl + '"';
        var avatarBig = '"' + avatars[studentAvatarId].avatarBigUrl + '"';
        $('#headerStudent').attr("src", eval(avatarInactive));
        $('#avatarBig').attr("src", eval(avatarBig));

    }).fail(function() { console.log("Failed") });
}

/**
 * Speichert alle Avatare aus der api in einem Array
 * Gibt die Avatare in der Profilbild ändern-Seite aus
 */
function getAvatarsAll(newToken) {
    var position = -1;
    var theArray = [];
    restClient.withHeader("Authorization", newToken).read("/api/V1/avatar").then(function(avatars) {
        for (i in avatars) {
            position++;
            var url = avatars[i].avatarBigUrl;
            theArray.push(url);
            $('#avatarsAll').append('<img src="' + url + '" id="' + position + '" onclick="changeMe(this.id)"></img>');
        }
        window.localStorage.setItem('allThemAvatars', JSON.stringify(theArray));
    });
}

/**
 * Ändert das Vorschaubild in der Profilbild ändern-Seite
 */
function changeMe(avatarId) {
    avatarsAll = JSON.parse(window.localStorage.getItem('allThemAvatars'));
    var url = '"' + avatarsAll[avatarId] + '"';
    $('#avatarBig').attr("src", eval(url));
}

/**
 * Updatet das Profilbild in der api
 */
function changeProfilePicture() {
    var avatarsAll = JSON.parse(window.localStorage.getItem('allThemAvatars'));
    var newAvatar;
    for (var i in avatarsAll) {
        if (avatarsAll[i] == $('#avatarBig').attr("src")) {
            newAvatar = i;
        }
    }
    var newToken = window.localStorage.getItem('token');
    var url = "/api/V1/avatar/" + newAvatar;
    restClient.withHeader("Authorization", newToken).update(url)
        .done(function(response) {
            $('#picChangedAlert').removeClass('hidden');
        })
        .fail(function() {
            alert("Das hat nicht funktioniert, bitte nochmal versuchen");
        });
}