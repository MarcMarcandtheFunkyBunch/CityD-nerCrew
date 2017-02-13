<html>
    <?php
    include("src/php/header.php");
    ?>
<div class="clickable" onclick="hideChapters()"></div>

    <div class="content">
      <img src="images/chapters/chapter01/littleChapterFlag.png" alt="" class="flag">
      <img src="images/chapters/chapter01/scrollUp.png" alt="" class="scrollup">
      <img src="images/chapters/chapter01/scrollDown.png" alt="" class="scrolldown">
      <div class="left"><img src="images/illustrations/illustrationLeft.png"></div>
      <div class="bubble"><p>Symbole sind Bilder, <br>die mir etwas sagen wollen. <br>Ich kann sie verstehen.
      <img class="bubbleIcon" src="images/chapters/chapter01/competenceDone.png"></div>
      <div class="right"><img src="images/illustrations/illustrationRight.png"></div>
    </div>

    <!--Kapitelfähnchen-->
    
    <div class="chapters" id="chapters-all">
      <table>
        <tbody id="chapterTable">
          <tr class="kompetenzliste">
            <td>
              <img src="images/misc/confirmation.png" alt="haken">
              <p>Check!<br>Kompetenzliste</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

<!-- Das kann ich -->
<div class="chapters" id="competences">
      <table>
      <tbody id="competenceTable">
          <tr class="kompetenzliste">
            <td>
              <img src="images/misc/achievedCompetences-big.png" alt="stern">
              <p>Das<br>kann<br>ich!</p>
            </td>
          </tr>
          <tr class="ch00">
            <td>
              <p>alle kompetenzen</p>
            </td>
          </tr>
          
          </tbody>
      </table>
    </div>

    <!--Förderplan-->
     <div class="chapters" id="eduplan">
      <table class="widthWorkaround">
        <tbody id="eduTable">
          <tr class="kompetenzliste">
            <td>
              <img src="images/misc/educationalPlan-big.png" alt="förderplanbild">
              <p>Förderplan</p>
            </td>
          </tr>
        </tbody>
          </table>
        </div>

        <!-- Student -->
        <div class="chapters" id="student">
      <table class="widthWorkaround">
          <tr class="kompetenzliste">
            <td>
              <img src="images/student/superhero-gandalf-big-active.png" alt="studentbild">
              <p class="name">Vorname
                <br> Name
              </p>
              <p class="bday">
                Geburtsdatum
                </p>
            </td>
          </tr>
          <tr class="ch123">
            <td>
              <p>Mein Profilbild ändern</p>
            </td>
          </tr><tr class="ch123">
            <td>
              <p>Mein Passwort ändern</p>
            </td>
          </tr><tr class="ch123">
            <td>
              <p>Mein Profil löschen</p>
            </td>
          </tr>
          </table>
        </div>

        <!-- School -->
        <div class="chapters" id="school">
      <table class="widthWorkaround">
          <tr class="kompetenzliste">
            <td>
              <img src="images/school/school-grey-big-active.png" alt="studentbild">
              <p class="schulname">Irgendeine
                <br>Schule
              </p>
              <p class="schuladresse">
                Strasse Nummer
                <br>PLZ Ort
                <br>Land
                <br><br>Email
                <br>Telefon
                  </p>
            </td>
          </tr>
          </table>
        </div>

        <!-- Klasse -->
        <div class="chapters" id="klasse">
      <table class="widthWorkaround">
          <tr class="kompetenzliste">
            <td>
              <img src="images/studyGroup/studyGroup_1c_active-big.png" alt="studentbild">
              <p class="klassenname">Klasse
                <br>2jz
              </p>
              <p class="klassenlehrer">
                KLASSENLEHRER*IN
                <br>Valerie
                
                  </p>
            </td>
          </tr>
          </table>
        </div>

         <!-- Help -->
        <div class="chapters" id="help">
      <table class="widthWorkaround">
          <tr class="kompetenzliste">
            <td>
              <img src="images/misc/help-big.png" alt="studentbild">
              <p class="needhelp">Brauchst<br>du Hilfe?
              </p>
            </td>
          </tr>
          <tr class="ch123">
            <td>
              <p><a href="http://www.check-lehrerzimmer.com/hilfe/erste-schritte/" target="_blank">So gehts!</a></p>
            </td>
          </tr><tr class="ch123">
            <td>
              <p><a href="http://www.check-lehrerzimmer.com/tutorial/" target="_blank">Video-Tutorials</a></p>
            </td>
          </tr><tr class="ch123">
            <td>
              <p><a href="http://www.check-lehrerzimmer.com/faq/" target="_blank">Häufig gestellte Fragen</a></p>
            </td>
          </tr>
          <tr class="ch123">
            <td>
              <p><a href="http://www.check-lehrerzimmer.com/contact/" target="_blank">Kontakt</a></p>
            </td>
          </tr>
          </table>
        </div>

<!-- Student -->
        <div class="chapters" id="logout">
      <table class="widthWorkaround">
          <tr class="kompetenzliste">
            <td>
              <img src="images/misc/logout-big.png" alt="studentbild">
              <p class="logouttext">Möchstest du
                <br>Check!
                <br>verlassen?
              </p>
            </td>
          </tr>
          <tr class="ch123">
            <td>
              <p>Ja</p>
            </td>
          </tr><tr class="ch123">
            <td>
              <p>Nein</p>
            </td>
          </tr>
          </table>
        </div>

    <?php
    include("src/php/footer.php");
    ?>
    <script>
getStudent(token);    
getChapters(token);
getAvatars(token);
getEduplan(token);
</script>  
  </body>
</html>
