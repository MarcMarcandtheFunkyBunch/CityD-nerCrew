function toggleChapters() {
    if($('#chapters-all').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#chapters-all').addClass('chaptersVisible');
        $('.chapterIcon').addClass('chapterIconActive');
    };
}

function toggleCompetences() {
    if($('#competences').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#competences').addClass('chaptersVisible');
        $('.competenceIcon').addClass('competenceIconActive');
    };
}

function toggleEduplan() {
    if($('#eduplan').hasClass('chaptersVisible')) {
       hideChapters();
    } else {
        hideChapters();
        $('#eduplan').addClass('chaptersVisible');
        $('.eduIcon').addClass('eduIconActive');
    };
}

function toggleStudent() {
    if($('#student').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#student').addClass('chaptersVisible');
    };
}

function toggleSchool() {
    if($('#school').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#school').addClass('chaptersVisible');
    };
}

function toggleKlasse() {
    if($('#klasse').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#klasse').addClass('chaptersVisible');
    };
}

function toggleHelp() {
    if($('#help').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#help').addClass('chaptersVisible');
        $('.helpIcon').addClass('helpIconActive');
    };
}

function toggleLogout() {
    if($('#logout').hasClass('chaptersVisible')) {
        hideChapters();
    } else {
        hideChapters();
        $('#logout').addClass('chaptersVisible');
        $('.logoutIcon').addClass('logoutIconActive');
    };
}

function hideChapters() {
    $('.chapters').removeClass('chaptersVisible');
    $('.chapterIcon').removeClass('chapterIconActive');
    $('.eduIcon').removeClass('eduIconActive');
    $('.competenceIcon').removeClass('competenceIconActive');
    $('.logoutIcon').removeClass('logoutIconActive');
    $('.helpIcon').removeClass('helpIconActive');
}
