/**
 * Holt sich den Schüler aus der api
 */
function getStudent(newToken) {
    restClient.withHeader("Authorization", newToken).read("/api/V1/student").then(function(student) {

        window.localStorage.setItem("student", JSON.stringify(student));

        $('#vorname').html(student.forename);
        $('#nachname').html("<br>" + student.surname);
        $('#bday').html(student.birth);

        getAvatars(newToken);
        getSchool(newToken);
        getKlasse(newToken);
        selectAllCompetences();

    });
}