<html>
     <?php
    include("src/php/head.php");
    ?>
        <body class="white">

    <?php
    include("src/php/header.php");
    ?>


    <div class="hidden alert confirm" id="profileDeletedAlert">
    <img class="closebtn" src="images/misc/delete.png" onclick="hideAlertAndGoToLogin()">
    <img class="alert-pic" src="images/misc/confirmation.png">
    <p class="alert-text">Profil wurde erfolgreich gelöscht!</p>
    </div>

  <img class="img-center" src="images/misc/delete-profile.png" alt="studentbild">
    <p class="text-center changePicLead">Profil löschen</p>

    <div style="width:100%;" class="top-120 height-60">
        <div class="leftLabels">
        <label>Passwort*</label><br>
        </div>


    <div class="rightForm">
    <form class="changePwForm">
        <input id="pw" type="password" /><br>
    </form>
    </div></div>
<div class="text-center top-100">
        <button class="button buttonInactive" onclick="backToHome()">abbrechen</button>
        <button class="button buttonActive" onclick="deleteProfile()">löschen</button>
    </div>

    <?php
    include("src/php/footer.php");
    ?>

<script>
function deleteProfile() {
    var newToken = window.localStorage.getItem('token');

    restClient.withHeader("Authorization", token).remove("/api/V1/student")
    .done(function(response) {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('allThemAvatars');
        window.localStorage.removeItem('student');
        $('#profileDeletedAlert').removeClass('hidden');
    })
    .fail(function() {
        console.log("REST call failed", arguments);
    });

}

function hideAlertAndGoToLogin() {
    hideAlert();
    window.location = 'login.php';
}
</script>

</body>
</html>