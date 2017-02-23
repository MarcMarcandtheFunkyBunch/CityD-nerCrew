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
        var starId = -1;
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
                starId++;
                var datum = chapters[thisChapter].fromDate;
                if(datum != null) {
                    datum = datum.replace("-", "").replace("-","");
                    datum = (datum.charAt(6)+datum.charAt(7)+"."+datum.charAt(4)+datum.charAt(5)+"."+datum.charAt(0)+datum.charAt(1)+datum.charAt(2)+datum.charAt(3));
                }

                var competenceNumber = chapterDezNum + "." + chapters[thisChapter].number;
                if(datum != null) {
                $('#bubbleCanvas').append('<div class="bubble"><p>' + chapters[thisChapter].studentText + '</p><img class="bubbleIcon" id="'+starId+'" onclick="showTooltip(this.id)" src="images/chapters/chapter' + chapterDezNum + '/competence' + isDone + '.png">' + '<p class="compNr">' + competenceNumber + '</p><p class="tooltipDate hidden" id="tooltip'+starId+'">Du hast diese Kompetenz am '+datum+' erreicht!</p></div></div>');
                } else {

                $('#bubbleCanvas').append('<div class="bubble"><p>' + chapters[thisChapter].studentText + '</p><img class="bubbleIcon" src="images/chapters/chapter' + chapterDezNum + '/competence' + isDone + '.png">' + '<p class="compNr">' + competenceNumber + '</p></div></div>');
                }
            }
        }

        var flagUrl = 'images/chapters/chapter' + chapterDezNum + '/littleChapterFlag.png';
        var scrollUpUrl = 'images/chapters/chapter' + chapterDezNum + '/scrollUp.png';
        var scrollDownUrl = 'images/chapters/chapter' + chapterDezNum + '/scrollDown.png';

        $('#scrollUp').attr("src", scrollUpUrl);
        $('#scrollDown').attr("src", scrollDownUrl);
        $('#chapterFlag').attr("src", flagUrl);

        var url = "/api/V1/chapter/" + idNumber;
        var illuUrl = "/api/V1/chapterillustrations/" + idNumber;
        restClient.withHeader("Authorization", newToken).read(url).then(function(colors) {
            var bgcol = colors.weakcolor;
            $('body').css('background-color', bgcol);
        });
        restClient.withHeader("Authorization", newToken).read(illuUrl).then(function(illus) {
            $('#illuLeft').attr("src", illus[idNumber].illustrationLeft);
            $('#illuRight').attr("src", illus[idNumber].illustrationRight);
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
        var chapterArray = [];

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

                var datum = chapters[thisChapter].fromDate;

                var competenceNumber = chapterDezNum + "." + chapters[thisChapter].number;
                chapters[thisChapter].compNr = competenceNumber;
                chapters[thisChapter].done = isDone;
                chapters[thisChapter].chapterNr = chapterDezNum;
                chapterArray.push(chapters[thisChapter]);   
               // $('#bubbleCanvas').append('<div class="bubble"><p>' + chapters[thisChapter].studentText + '</p><img class="bubbleIcon" src="images/chapters/chapter' + chapterDezNum + '/competence' + isDone + '.png">' + '<p class="compNr">' + competenceNumber + '</p></div>');
            }
        }

        
        for (chapterArrayPointer in chapterArray) {
            chapterArray[chapterArrayPointer].fromDate = chapterArray[chapterArrayPointer].fromDate.replace("-", "").replace("-", "");
        }

        var sortedChapterArray = _.sortBy(chapterArray, 'fromDate').reverse();
        var starId = -1;
        for (var chapterArrayPointer in sortedChapterArray) {
            starId++; 
            var datum = sortedChapterArray[chapterArrayPointer].fromDate;
            var formattedDate = (datum.charAt(6)+datum.charAt(7)+"."+datum.charAt(4)+datum.charAt(5)+"."+datum.charAt(0)+datum.charAt(1)+datum.charAt(2)+datum.charAt(3));
            $('#bubbleCanvas').append('<div class="bubble"><p>' + sortedChapterArray[chapterArrayPointer].studentText + '</p><img class="bubbleIcon" id="'+starId+'" onclick="showTooltip(this.id)" src="images/chapters/chapter' + sortedChapterArray[chapterArrayPointer].chapterNr + '/competence' + chapterArray[chapterArrayPointer].done +'.png">' + '<p class="compNr">' + sortedChapterArray[chapterArrayPointer].compNr + '</p><p class="tooltipDate hidden" id="tooltip'+starId+'">Du hast diese Kompetenz am '+formattedDate+' erreicht!</p></div>');            
            
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

        var illuUrl = "/api/V1/chapterillustrations/" + idNumber;
        restClient.withHeader("Authorization", newToken).read(illuUrl).then(function(illus) {
            $('#illuLeft').attr("src", illus[idNumber].illustrationLeft);
            $('#illuRight').attr("src", illus[idNumber].illustrationRight);
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
        var allChaptersArray = [];

        for (var thisChapter in chapters) {
            if (chapters[thisChapter].checked) {
                var chapterDezNum;
                if (chapters[thisChapter].chapterId < 10) {
                    chapterDezNum = "0" + chapters[thisChapter].chapterId;
                } else {
                    chapterDezNum = "" + chapters[thisChapter].chapterId;
                }

                var datum = chapters[thisChapter].fromDate;

                var competenceNumber = chapterDezNum + "." + chapters[thisChapter].number;
                chapters[thisChapter].compNr = competenceNumber;
                chapters[thisChapter].chapterNr = chapterDezNum;
                allChaptersArray.push(chapters[thisChapter]);                
            }
        }

        for (allChaptersArrayPointer in allChaptersArray) {
            allChaptersArray[allChaptersArrayPointer].fromDate = allChaptersArray[allChaptersArrayPointer].fromDate.replace("-", "").replace("-", "");
        }

        var sortedallChaptersArray = _.sortBy(allChaptersArray, 'fromDate').reverse();
        var starId = -1;
        for (var allChaptersArrayPointer in sortedallChaptersArray) {
            starId++;
            var datum = sortedallChaptersArray[allChaptersArrayPointer].fromDate;
            var formattedDate = (datum.charAt(6)+datum.charAt(7)+"."+datum.charAt(4)+datum.charAt(5)+"."+datum.charAt(0)+datum.charAt(1)+datum.charAt(2)+datum.charAt(3));
            $('#bubbleCanvas').append('<div class="bubble"><p>' + sortedallChaptersArray[allChaptersArrayPointer].studentText +'</p><img class="bubbleIcon" id="'+starId+'" onclick="showTooltip(this.id)" src="images/chapters/chapter' + sortedallChaptersArray[allChaptersArrayPointer].chapterNr + '/competenceDone.png">' + '<p class="compNr">' + allChaptersArray[allChaptersArrayPointer].compNr + '</p><p class="tooltipDate hidden" id="tooltip'+starId+'">Du hast diese Kompetenz am '+formattedDate+' erreicht!</p></div>');            
            
        }

        $('#scrollUp').attr("src", "images/allCompetences/scrollUp.png");
        $('#scrollDown').attr("src", "images/allCompetences/scrollDown.png");
        $('#chapterFlag').attr("src", "images/allCompetences/kamehameha.png");
        $('body').css('background-color', '#E1F52C');

        restClient.withHeader("Authorization", newToken).read("/api/V1/chapterillustrations/0").then(function(illus) {
            $('#illuLeft').attr("src", illus[0].illustrationLeft);
            $('#illuRight').attr("src", illus[0].illustrationRight);
        });
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
        restClient.withHeader("Authorization", newToken).read("/api/V1/educationalPlan").then(function(allPlans) {
            for (var k in allPlans) {
                if (allPlans[k]._id == idNumber) {
                    $('#bubbleCanvas').append('<p class="selfmadeFlag">' + allPlans[k].name + '</p>');
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

function showTooltip(id) {
    $('#tooltip'+id).toggleClass("hidden");
}