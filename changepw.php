<html>
   <?php
    include("src/php/head.php");
    ?>
    <body class="white">
    <?php
    include("src/php/header.php");
    ?>



  <img class="img-center" src="images/misc/change-password.png" alt="studentbild">
    <p class="text-center changePicLead">Passwort ändern</p>

    <div style="width:100%;" class="top-120">
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
    </div>
        <button class="button buttonActive text-center buttonWeiterOben" onclick="changePassword()">ändern</button>
    </div>




    <script>
    function changePassword(){
        var oldPassword = $('#pw').val();
        var newPassword = $('#npw').val();
        var confPassword = $('#cpw').val();
        if(!(newPassword == confPassword)) {
            alert("nein");
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
        alert("hat geklappt");
        window.location= 'index.php';
    })
    .fail(function() {
        alert("des war nix");
        console.log("REST call failed", arguments);
    });
        }
    }
    </script>



    <?php
    include("src/php/footer.php");
    ?>