<html>
<?php
    include("src/php/head.php");
    ?>

    <body>
        <?php
    include("src/php/header.php");
    ?>
            <div class="clickable" onclick="hideChapters()"></div>
            <div class="content">
                <img id="chapterFlag" src="" alt="" class="flag">
                <img id="scrollUp" src="" alt="" class="scrollup">
                <img id="scrollDown" src="" alt="" class="scrolldown">
                <div class="left"><img id="illuLeft" src=""></div>
                <div id="bubbleCanvas">
                </div>
                <div class="right"><img id="illuRight" src=""></div>
            </div>
            <!--Kapitelfähnchen-->
            <div class="chapters mCustomScrollbar" id="chapters-all">
                <table>
                    <tbody id="chapterTable">
                        <tr class="kompetenzliste">
                            <td>
                                <img src="images/misc/confirmation.png" alt="haken">
                                <p>Check!
                                    <br>Kompetenzliste</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Das kann ich -->
            <div class="chapters mCustomScrollbar arrow_box arrow_box_mitteLinks" id="competences">
                <table>
                    <tbody id="competenceTable">
                        <tr class="kompetenzliste">
                            <td>
                                <img src="images/misc/achievedCompetences-big.png" alt="stern">
                                <p>Das
                                    <br>kann
                                    <br>ich!</p>
                            </td>
                        </tr>
                        <tr class="ch00" id="co0" onclick="selectAllCompetences()">
                            <td>
                                <p>alle kompetenzen</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--Förderplan-->
            <div class="chapters arrow_box arrow_box_mitteLinks mCustomScrollbar" id="eduplan">
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
            <div class="chapters arrow_box" id="student">
                <table class="widthWorkaround">
                    <tr class="kompetenzliste">
                        <td>
                            <img id="avatarBig" src="" alt="studentbild">
                            <p class="name"><span id="vorname"></span>
                                <span id="nachname"></span></p>
                            <p id="bday"></p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <a href="changepic.php">
                                <p>Mein Profilbild ändern</p>
                            </a>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <a href="changepw.php">
                                <p>Mein Passwort ändern</p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <a href="delete.php">
                                <p>Mein Profil löschen</p>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- School -->
            <div class="chapters arrow_box" id="school">
                <table class="widthWorkaround">
                    <tr class="kompetenzliste">
                        <td>
                            <img src="" id="schulbild" alt="schulbild">
                            <p id="schulname"></p>
                            <p class="schuladresse">
                                <span id="strasse"></span>
                                <br><span id="ort"></span>
                                <br><span id="land"></span>
                                <br>
                                <br>
                                <a href="" id="email"></a>
                                <br>
                                <a href="" id="telefon"></a>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Klasse -->
            <div class="chapters arrow_box" id="klasse">
                <table class="widthWorkaround">
                    <tr class="kompetenzliste">
                        <td>
                            <img src="" id="klassenbildBig" alt="studentbild">
                            <p class="klassenname">Klasse
                                <br>
                                <span id="klasseKlasse"></span>
                            </p>
                            <p class="klassenlehrer">
                                KLASSENLEHRER*IN
                                <br><span id="lehrer"></span>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Help -->
            <div class="chapters arrow_box" id="help">
                <table class="widthWorkaround">
                    <tr class="kompetenzliste">
                        <td>
                            <img src="images/misc/help-big.png" alt="studentbild">
                            <p class="needhelp">Brauchst
                                <br>du Hilfe?
                            </p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <p><a href="http://www.check-lehrerzimmer.com/hilfe/erste-schritte/" target="_blank">So gehts!</a></p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <p><a href="http://www.check-lehrerzimmer.com/tutorial/" target="_blank">Video-Tutorials</a></p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <p><a href="http://www.check-lehrerzimmer.com/faq/" target="_blank">Häufig gestellte Fragen</a></p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <p><a href="http://www.check-lehrerzimmer.com/contact/" target="_blank">Kontakt</a></p>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Logout -->
            <div class="chapters arrow_box" id="logout">
                <table class="widthWorkaround">
                    <tr class="kompetenzliste">
                        <td>
                            <img src="images/misc/logout-big.png" alt="logout">
                            <p class="logouttext">Möchstest du
                                <br>Check!
                                <br>verlassen?
                            </p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <p onclick="logout()">Ja</p>
                        </td>
                    </tr>
                    <tr class="chDark">
                        <td>
                            <p onclick="hideChapters()">Nein</p>
                        </td>
                    </tr>
                </table>
            </div>
            <?php
    include("src/php/footer.php");
    ?>
                <script>
                $('#scrollDown').click(function() {
                    $('body').animate({
                        scrollTop: '+=250'
                    }, 300);
                });

                $('#scrollUp').click(function() {
                    $('body').animate({
                        scrollTop: '-=250'
                    }, 300);
                });
                </script>
    </body>

</html>