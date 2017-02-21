/**
 * Holt sich alle Chapters aus der api und hängt sie in den beiden Tabellen zur Auswahl des Kapitels an
 */
function getChapters(newToken) {
    restClient.withHeader("Authorization", newToken).read("/api/V1/chapter").then(function(chapters) {
        var id = 0;
        for (i in chapters) {
            id++;
            $('#chapterTable').append('<tr style="background-color: ' + chapters[i].strongcolor + '; cursor:pointer; color: #fff;" id="ch' + id + '" onclick="selectChapters(this.id)"><td><p>' + chapters[i].name + '</p></td></tr>');
            $('#competenceTable').append('<tr style="background-color: ' + chapters[i].strongcolor + '; cursor:pointer; color: #fff;" id="co' + id + '" onclick="selectCompetences(this.id)"><td><p>' + chapters[i].name + '</p></td></tr>');
        }

    }).fail(function() { console.log("Failed") });
}

/**
 * Holt sich den Förderplan aus der api und hängt ihn in der Tabelle zur Auswahl des Förderplans an
 */
function getEduplan(newToken) {
    restClient.withHeader("Authorization", newToken).read("/api/V1/educationalPlan").then(function(eduplan) {
        var id = 0;
        for (i in eduplan) {
            id++;
            $('#eduTable').append('<tr id="ed' + id + '" onclick="selectEduplans(this.id)" style="cursor:pointer;"><td><p>' + eduplan[i].name + '</p></td></tr>');
        }

    }).fail(function() { console.log("Failed") });
}

/**
 * Funktion zur Darstellung der Kompetenzen in Bubbles auf der Hauptseite
 * Ändert außerdem die Flagge, Hintergrundfarbe und ScrollIcons
 */
function selectChapters(id) {
    if (id.length > 3) {
        var idNumber = id.charAt(2) + id.charAt(3);
    } else {
        var idNumber = id.charAt(2);
    }
    var newToken = window.localStorage.getItem('token');

    restClient.withHeader("Authorization", newToken).read("/api/V1/studentcompetence").then(function(chapters) {
        $('#bubbleCanvas').html('');
        hideChapters();
        for (var thisChapter in chapters) {
            if (chapters[thisChapter].chapterId == idNumber) {
                var chapterDezNum;
                var isDone;
                if (chapters[thisChapter].chapterId < 10) {
                    chapterDezNum = "0" + chapters[thisChapter].chapterId;
                } else {
                    chapterDezNum = "" + chapters[thisChapter].chapterId;
                }

                if (chapters[thisChapter].checked) {
                    isDone = "Done";
                } else {
                    isDone = "Undone";
                }

                var competenceNumber = chapterDezNum + "." + chapters[thisChapter].number;
                $('#bubbleCanvas').append('<div class="bubble"><p>' + chapters[thisChapter].studentText + '</p><img class="bubbleIcon" src="images/chapters/chapter' + chapterDezNum + '/competence' + isDone + '.png">' + '<p class="compNr">' + competenceNumber + '</p></div>');
            }
        }

        var flagUrl = 'images/chapters/chapter' + chapterDezNum + '/littleChapterFlag.png';
        var scrollUpUrl = 'images/chapters/chapter' + chapterDezNum + '/scrollUp.png';
        var scrollDownUrl = 'images/chapters/chapter' + chapterDezNum + '/scrollDown.png';

        $('#scrollUp').attr("src", scrollUpUrl);
        $('#scrollDown').attr("src", scrollDownUrl);
        $('#chapterFlag').attr("src", flagUrl);

        var url = "/api/V1/chapter/" + idNumber;
        restClient.withHeader("Authorization", newToken).read(url).then(function(colors) {
            var bgcol = colors.weakcolor;
            $('body').css('background-color', bgcol);
        });
    });
}

/**
 * Funktion zur Darstellung der Kompetenzen in Bubbles auf der Hauptseite
 * Ändert außerdem die Flagge, Hintergrundfarbe und ScrollIcons
 */
function selectCompetences(id) {
    if (id.length > 3) {
        var idNumber = id.charAt(2) + id.charAt(3);
    } else {
        var idNumber = id.charAt(2);
    }
    var newToken = window.localStorage.getItem('token');

    restClient.withHeader("Authorization", newToken).read("/api/V1/studentcompetence").then(function(chapters) {
        $('#bubbleCanvas').html('');
        hideChapters();
        for (var thisChapter in chapters) {
            if (chapters[thisChapter].checked && chapters[thisChapter].chapterId == idNumber) {
                var chapterDezNum;
                var isDone;
                if (chapters[thisChapter].chapterId < 10) {
                    chapterDezNum = "0" + chapters[thisChapter].chapterId;
                } else {
                    chapterDezNum = "" + chapters[thisChapter].chapterId;
                }

                if (chapters[thisChapter].checked) {
                    isDone = "Done";
                } else {
                    isDone = "Undone";
                }

                var competenceNumber = chapterDezNum + "." + chapters[thisChapter].number;
                $('#bubbleCanvas').append('<div class="bubble"><p>' + chapters[thisChapter].studentText + '</p><img class="bubbleIcon" src="images/chapters/chapter' + chapterDezNum + '/competence' + isDone + '.png">' + '<p class="compNr">' + competenceNumber + '</p></div>');
            }
        }

        var flagUrl = 'images/chapters/chapter' + chapterDezNum + '/littleChapterFlag.png';
        var scrollUpUrl = 'images/chapters/chapter' + chapterDezNum + '/scrollUp.png';
        var scrollDownUrl = 'images/chapters/chapter' + chapterDezNum + '/scrollDown.png';

        $('#scrollUp').attr("src", scrollUpUrl);
        $('#scrollDown').attr("src", scrollDownUrl);
        $('#chapterFlag').attr("src", flagUrl);

        var url = "/api/V1/chapter/" + idNumber;
        restClient.withHeader("Authorization", newToken).read(url).then(function(colors) {
            var bgcol = colors.weakcolor;
            $('body').css('background-color', bgcol);
        });
    });
}

/**
 * Extra Funktion zur Darstellung aller erreichten Kompetenzen in Bubbles auf der Hauptseite
 * Ändert außerdem die Flagge, Hintergrundfarbe und ScrollIcons
 */
function selectAllCompetences() {
    var newToken = window.localStorage.getItem('token');
    restClient.withHeader("Authorization", newToken).read("/api/V1/studentcompetence").then(function(chapters) {
        $('#bubbleCanvas').html('');
        hideChapters();

        for (var thisChapter in chapters) {
            if (chapters[thisChapter].checked) {
                var chapterDezNum;
                if (chapters[thisChapter].chapterId < 10) {
                    chapterDezNum = "0" + chapters[thisChapter].chapterId;
                } else {
                    chapterDezNum = "" + chapters[thisChapter].chapterId;
                }

                var competenceNumber = chapterDezNum + "." + chapters[thisChapter].number;
                $('#bubbleCanvas').append('<div class="bubble"><p>' + chapters[thisChapter].studentText + '</p><img class="bubbleIcon" src="images/chapters/chapter' + chapterDezNum + '/competenceDone.png">' + '<p class="compNr">' + competenceNumber + '</p></div>');
            }
        }

        $('#scrollUp').attr("src", "images/allCompetences/scrollUp.png");
        $('#scrollDown').attr("src", "images/allCompetences/scrollDown.png");
        $('#chapterFlag').attr("src", "images/allCompetences/kamehameha.png");
        $('body').css('background-color', '#E1F52C');
    });
}

/**
 * Funktion zur Darstellung der Kompetenzen aus dem Förderplan in Bubbles auf der Hauptseite
 * Ändert außerdem die Flagge, Hintergrundfarbe und ScrollIcons
 */
function selectEduplans(id) {
    if (id.length > 3) {
        var idNumber = id.charAt(2) + id.charAt(3);
    } else {
        var idNumber = id.charAt(2);
    }

    var newToken = window.localStorage.getItem('token');
    var url = "/api/V1/educationalPlan/" + idNumber;
    restClient.withHeader("Authorization", newToken).read(url).then(function(eduplans) {
         $('#bubbleCanvas').html('');
        hideChapters();
        restClient.withHeader("Authorization", newToken).read("/api/V1/educationalPlan").then(function (allPlans) {
            for(var k in allPlans) {
                if(allPlans[k]._id == idNumber) {
                    $('#bubbleCanvas').append('<p class="selfmadeFlag">'+allPlans[k].name+'</p>');
                    $('#chapterFlag').attr("src", "");
                    $('#scrollDown').attr("src", "images/allCompetences/scrollDownTransparent.png");
                    $('#scrollUp').attr("src", "images/allCompetences/scrollUpTransparent.png");
                    $('body').css('background-color', '#8da6d6');
                }
            }
        });
       
        for (i in eduplans) {
            if (eduplans[i].educationalPlanId < 10) {
                var chapterDezNum = "0" + eduplans[i].educationalPlanId;
            } else {
                var chapterDezNum = "" + eduplans[i].educationalPlanId;
            }
            for (j in eduplans[i].competences) {

                var competenceNumber = chapterDezNum + "." + eduplans[i].competences[j].competenceId;
                $('#bubbleCanvas').append('<div class="bubble"><p>' + eduplans[i].competences[j].note + '</p><img class="bubbleIcon" src="images/misc/educationalPlan-active.png"><p class="compNr">' + competenceNumber + '</p></div>');
            }
        }
    });
}