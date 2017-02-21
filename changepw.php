<html>
   <?php
    include("src/php/head.php");
    ?>
    <body class="white">
    <?php
    include("src/php/header.php");
    ?>

<div class="hidden alert confirm" id="pwChangedAlert">
    <img class="closebtn" src="images/misc/delete.png" onclick="hideAlertAndGoToIndex()">
    <img class="alert-pic" src="images/misc/confirmation.png">
    <p class="alert-text">Passwort wurde erfolgreich geändert!</p>
    </div>

    <div class="hidden alert" id="pwNotChangedAlert">
    <img class="closebtn" src="images/misc/delete.png" onclick="hideAlert()">
    <img class="alert-pic" src="images/misc/warning.png">
    <p class="alert-text">Neues Passwort und Bestätigung stimmen nicht überein!</p>
    </div>

    <div class="hidden alert" id="emptyPwAlert">
    <img class="closebtn" src="images/misc/delete.png" onclick="hideAlert()">
    <img class="alert-pic" src="images/misc/warning.png">
    <p class="alert-text">Das neue Passwort darf nicht leer sein!</p>
    </div>

  <img class="img-center" src="images/misc/change-password.png" alt="studentbild">
    <p class="text-center changePicLead">Passwort ändern</p>

    <div style="width:100%;" class="text-center top-120">
        <div class="leftLabels">
        <label>Aktuelles Passwort*</label><br>
        <label>Neues Passwort*</label><br>
        <label>Passwort bestätigen*</label><br>
        </div>


    <div class="rightForm">
    <form class="changePwForm">
        <input id="pw" type="password" /><br>
        <input id="npw" type="password" /><br>
        <input id="cpw" type="password" /><br>
    </form>
    </div></div><div class="text-center top-110">
        <button class="button buttonInactive" onclick="backToHome()">abbrechen</button>
        <button class="button buttonActive" onclick="changePassword()">ändern</button>
    </div>




    <script>
    function changePassword() {
        var oldPassword = $('#pw').val();
        var newPassword = $('#npw').val();
        var confPassword = $('#cpw').val();
        if (!(newPassword == confPassword)) {
            $('#pwNotChangedAlert').removeClass("hidden");
        } else if (newPassword.length<1) {
            $('#emptyPwAlert').removeClass("hidden");
        } else {
            var newToken = window.localStorage.getItem("token");
            restClient.withHeader("Authorization", newToken);

            restClient.update("/api/V1/requestPasswordRecovery", {
                    newpassword: newPassword,
                    password: oldPassword
                })
                .done(function(response) {

                    window.localStorage.removeItem('token');
                    window.localStorage.setItem('token', response.token);
                    $('#pwChangedAlert').removeClass("hidden");
                })
                .fail(function() {
                    console.log("REST call failed", arguments);
                });
        }
    }
    </script>



    <?php
    include("src/php/footer.php");
    ?>