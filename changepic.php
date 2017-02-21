    <?php
    include("src/php/head.php");
    ?>
    <body class="white">
    <?php
    include("src/php/header.php");
    ?>

    <div class="hidden alert confirm" id="picChangedAlert">
    <img class="closebtn" src="images/misc/delete.png" onclick="hideAlertAndGoToIndex()">
    <img class="alert-pic" src="images/misc/confirmation.png">
    <p class="alert-text">Profilbild wurde erfolgreich geändert!</p>
    </div>

    <img class="img-center" id="avatarBig" src="" alt="studentbild">
    <p class="text-center changePicLead">Profilbild ändern</p>

    <div class="text-center top-110">
        <button class="button buttonInactive" onclick="backToHome()">abbrechen</button>        
        <button class="button buttonActive" onclick="changeProfilePicture()">speichern</button>
    </div>

    <div id="avatarsAll">

    </div>

    <?php
    include("src/php/footer.php");
    ?>

<script>
getAvatarsAll(token);
</script>
</html>