<html>
     <?php
    include("src/php/head.php");
    ?>
        <body class="white">

    <?php
    include("src/php/header.php");
    ?>



  <img class="img-center" src="images/misc/delete-profile.png" alt="studentbild">
    <p class="text-center changePicLead">Profil löschen</p>

    <div style="width:100%;" class="top-120">
        <div class="leftLabels">
        <label>Passwort*</label><br>
        </div>


    <div class="rightForm">
    <form class="changePwForm">
        <input id="pw" type="password" /><br>
    </form>
    </div>
        <button class="button buttonActive text-center buttonWeiterOben" onclick="deleteProfile()">löschen</button>
    </div>


    <?php
    include("src/php/footer.php");
    ?>

<script>
function deleteProfile() {
    var newToken = window.localStorage.getItem('token');

    restClient.withHeader("Authorization", token).remove("/api/V1/student")
    .done(function(response) {
        alert(response);
        console.log("REST call succeeded", response);
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('allThemAvatars');
        window.localStorage.removeItem('student');
        window.location = "login.php";

    })
    .fail(function() {
        console.log("REST call failed", arguments);
    });

}
</script>

</body>
</html>