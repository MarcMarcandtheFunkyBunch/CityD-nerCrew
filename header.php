<html>
<head>
    <meta charset="utf-8">
    <title>CheckLehrerzimmer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="build/css/main.css" media="screen" >
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/everest/dist/everest.min.js"></script>
    <script src="build/js/main.js"></script>
  </head>

  <body class="pink">
    <div class="header">
      <div class="menu-left col-md-4 col-lg-4">
        <img class="chapterIcon" src="assets/img/misc/placeholder.png" alt="Menü" onclick="toggleChapters()"/>
        <img class="eduIcon" src="assets/img/misc/placeholder.png" alt="Menü" onclick="toggleEduplan()"/>
        <img class="competenceIcon" src="assets/img/misc/placeholder.png" alt="Menü" onclick="toggleCompetences()"/>
      </div>

      <div class="menu-center col-md-4 col-lg-4">
        <img src="assets/img/misc/logo.png" alt="Menü"/>
      </div>

      <div class="menu-right col-md-4 col-lg-4">
        <!-- Bilder müssen noch austauschbar gemacht werden -->
        <img src="assets/img/student/superhero-gandalf-inactive.png" alt="Menü" onclick="toggleStudent()"/>        
        <img src="assets/img/school/school-inactive.png" alt="Menü" onclick="toggleSchool()"/>        
        <img src="assets/img/studyGroup/studyGroup_1c_inactive.png" alt="Menü" onclick="toggleKlasse()"/>
        <span class="balken"></span>        
        <!-- -->
        <img class="helpIcon" src="assets/img/misc/placeholder.png" alt="Menü" class="morespace"/ onclick="toggleHelp()">        
        <img class="logoutIcon" src="assets/img/misc/placeholder.png" alt="Menü" onclick="toggleLogout()"/>
      </div>
    </div>