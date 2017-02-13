<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>CheckLoginIn</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="build/css/main.css" media="screen"/>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="bower_components/everest/dist/everest.min.js"></script>
  <script src="build/js/main.js"></script>
</head>

<body>
  <!-- Header-->
  <img src="images/login/header.png" alt="Header" class="displayed" />
  <br>
  <form class="text-center">
    <!--Eingabefeld für den Benutzername-->
    <input type="text" placeholder="BENUTZERNAME" class="field-border inputLogin" id="LoginInputUser"><br />

    <!--Eingabefeld für das Passwort-->
    <input type="password" placeholder="PASSWORT" class="field-border inputLogin" id="LoginInputPassword"><br />

    <!--Login Button-->
    <button type="button" class="buttonLogin" id="btn" onclick="login()">LOS!</button>
    <br />
  </form>

  <!--Registrationstext-->
  <div class="Registrationstext">
    <p><br> Sie möchten mit CHECK! arbeiten?
      <br>
      <u>Jetzt registrieren.</u>
  </div>

  <!--Footer-->
  <footer class="footerLogin">
    <img src="images/login/footer.png" alt="Footer" class="displayed" />
    <img src="images/login/stern.png" alt="Stern" width="25" height="25" class="displayed">
    <p class="footerLoginNacht">
      edition 2016 dark night blue 1.0
    </p>
    <p class="footerLoginFlieder">
      CHECK! und CHECK! Lehrerzimmer sind Produkte des Raup &amp; Ritter Verlag und der OnWerk Softwareagentur Mannheim <br>
      <a href="http://www.raupundritter.com" target="_blank" class="footerLoginFlieder">www.raupundritter.com</a> - <a href="#"
        class="footerLoginFlieder">Kontakt</a> - <a href="#" class="footerLoginFlieder">Impressum</a> - <a href="#" class="footerLoginFlieder">Preise</a>      - <a href="#" id="footerLoginFlieder">Hilfe</a>
    </p>
  </footer>
</body>

</html>