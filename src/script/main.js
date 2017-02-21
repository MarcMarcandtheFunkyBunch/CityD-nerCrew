/**
 * Die nachfolgenden Funktionen verwalten die Sichtbarkeit der Boxen und die Bilder im Header (active/inactive)
 */
function toggleChapters() {
    if ($('#chapters-all').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#chapters-all').addClass('chaptersVisible');
        $('.chapterIcon').addClass('chapterIconActive');
    };
}

function toggleCompetences() {
    if ($('#competences').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#competences').addClass('chaptersVisible');
        $('.competenceIcon').addClass('competenceIconActive');
    };
}

function toggleEduplan() {
    if ($('#eduplan').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#eduplan').addClass('chaptersVisible');
        $('.eduIcon').addClass('eduIconActive');
    };
}

function toggleStudent() {
    if ($('#student').hasClass('chaptersVisible')) {
        var activePicStudent = $('#headerStudent').attr("src");
        var inactivePicStudent = activePicStudent.replace("active", "inactive");
        $('#headerStudent').attr("src", inactivePicStudent);
        hideChapters();
    } else {
        var inactivePicStudent = $('#headerStudent').attr("src");
        var activePicStudent = inactivePicStudent.replace("inactive", "active");
        $('#headerStudent').attr("src", activePicStudent);
        hideChapters();
        $('#student').addClass('chaptersVisible');
    };
}

function toggleSchool() {
    if ($('#school').hasClass('chaptersVisible')) {
        var activePicSchule = $('#headerSchool').attr("src");
        var inactivePicSchule = "images/school/school-inactive.png";
        $('#headerSchool').attr("src", inactivePicSchule);
        hideChapters();
    } else {
        var schulbild = window.localStorage.getItem("schulbild");
        $('#headerSchool').attr("src", schulbild);
        hideChapters();
        $('#school').addClass('chaptersVisible');
    };
}

function toggleKlasse() {
    if ($('#klasse').hasClass('chaptersVisible')) {
        var activePicKlasse = $('#headerKlasse').attr("src");
        var inactivePicKlasse = activePicKlasse.replace("active", "inactive");
        $('#headerKlasse').attr("src", inactivePicKlasse);
        hideChapters();
    } else {
        var inactivePicKlasse = $('#headerKlasse').attr("src");
        var activePicKlasse = inactivePicKlasse.replace("inactive", "active");
        $('#headerKlasse').attr("src", activePicKlasse);
        hideChapters();
        $('#klasse').addClass('chaptersVisible');
    };
}

function toggleHelp() {
    if ($('#help').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#help').addClass('chaptersVisible');
        $('.helpIcon').addClass('helpIconActive');
    };
}

function toggleLogout() {
    if ($('#logout').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#logout').addClass('chaptersVisible');
        $('.logoutIcon').addClass('logoutIconActive');
    };
}

/**
 * alle Boxen verbergen, außerdem alle Headerbilder inactive machen
 */
function hideChapters() {
    var activePicStudent = $('#headerStudent').attr("src");
    if ($('#student').hasClass('chaptersVisible') && !activePicStudent.includes("inactive")) {
        var inactivePicStudent = activePicStudent.replace("active", "inactive");
        $('#headerStudent').attr("src", inactivePicStudent);
    }

    var activePicKlasse = $('#headerKlasse').attr("src");
    if ($('#klasse').hasClass('chaptersVisible') && !activePicKlasse.includes("inactive")) {
        var inactivePicKlasse = activePicKlasse.replace("active", "inactive");
        $('#headerKlasse').attr("src", inactivePicKlasse);
    }

    var activePicSchule = $('#headerSchool').attr("src");
    if ($('#school').hasClass("chaptersVisible") && !activePicSchule.includes("inactive")) {
        var inactivePicSchule = "images/school/school-inactive.png";
        $('#headerSchool').attr("src", inactivePicSchule);
    }

    $('.chapters').removeClass('chaptersVisible');
    $('.chapterIcon').removeClass('chapterIconActive');
    $('.eduIcon').removeClass('eduIconActive');
    $('.competenceIcon').removeClass('competenceIconActive');
    $('.logoutIcon').removeClass('logoutIconActive');
    $('.helpIcon').removeClass('helpIconActive');
}

/**
 * Logout-Funktion, alle Daten aus dem localStorage löschen und zur Login-Seite weiterleiten
 */
function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('student');
    window.location = "index.php";
}

function backToHome() {
    window.location = "main.php";
}

function hideAlert() {
    $('.alert').addClass("hidden");
}

function hideAlertAndGoToIndex() {
    hideAlert();
    window.location = 'main.php';
}