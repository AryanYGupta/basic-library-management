
$(document).ready(function () {
    $("#appearupdateissue").click(function () {
        $("#containerupdateissue").toggle(1000);
        $("#appearupdateissue").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdateissue").click(function () {
        $("#containerupdateissue").toggle(1000);
        $("#appearupdateissue").toggle(1000);
    });
});
$(document).ready(function () {
    $("#collapse").on("mouseover", function () {
        $(".dropdown-menu").toggle(1000);
    });
    $(".container-fluid").on("mouseover", function () {
        $(".dropdown-menu").hide(1000);
    });

});


function validateFormIssue() {
    let studeid = document.getElementById("studid").value;
    let booksid = document.getElementById("bookid").value;
    let branchs = document.getElementById("branch").value;
    let issuedates = document.getElementById("issuedate").value;
    let retdates = document.getElementById("retdate").value;
    let bool = true;
    if (studeid == "") {
        alert("StudentID must be filled out.");
        bool = false;
        return false;
    }
    if (studeid.length > 10) {
        alert("StudentID must have max length of 10 characters.");
        bool = false;
        return false;
    }
    if (booksid == "") {
        alert("BookID must be filled out.");
        bool = false;
        return false;
    }
    if (booksid.length > 7) {
        alert("BookID must have max length of 7 characters.");
        bool = false;
        return false;
    }
    if (issuedates == "") {
        alert("Issue date must be filled out.");
        bool = false;
        return false;
    }
    if (retdates == "") {
        alert("Return date must be filled out.");
        bool = false;
        return false;
    }

    if (issuedates >= retdates) {
        bool = false;
        alert("Ret date must come after issuedate.");
    }
    if (bool==true) {
        this.addHtmlTableIssue(studeid, booksid, branchs, issuedates, retdates);
    }


}

function addHtmlTableIssue(studeid, booksid, branchs, issuedates, retdates) {
    var table = document.getElementById("myTableissue");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = studeid;
    cell2.innerHTML = booksid;
    cell3.innerHTML = branchs;
    cell4.innerHTML = issuedates;
    cell5.innerHTML = retdates;

}

function updatevaluesissue() {
    let bool = true;
    let updaterow = document.getElementById("updaterow").value;
    updaterow = updaterow - 1;
    var table1 = document.getElementById("myTableissue");

    if (updaterow > table1.rows.length || updaterow < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }

    let updatesid = document.getElementById("updatesid").value;
    let updatebid = document.getElementById("updatebid").value;
    let updatebranch = document.getElementById("updatebranch").value;
    let updateissuedate = document.getElementById("updateissuedate").value;
    let updateretdate = document.getElementById("updateretdate").value;



    if (updatesid == "") {
        alert("Student ID must be filled out.");
        bool = false;
        return false;
    }
    if (updatesid.length > 10) {
        alert("StudentID must have max length of 10 characters.");
        bool = false;
        return false;
    }
    if (updatebid == "") {
        alert("BookID must be filled out.");
        bool = false;
        return false;
    }
    if (updatebid.length > 7) {
        alert("Book ID must have max length of 7 characters.");
        bool = false;
        return false;
    }
    if (updateissuedate == "") {
        alert("Issue date must be filled out.");
        bool = false;
        return false;
    }
    if (updateretdate == "") {
        alert("Return date must be filled out.");
        bool = false;
        return false;
    }

    if (updateissuedate >= updateretdate) {
        bool = false;
        alert("End date must come after startdate.")
    }
    if (bool == true) {
        document.getElementById("myTableissue").deleteRow(updaterow);
        this.addHtmlTableIssue(updatesid, updatebid, updatebranch, updateissuedate, updateretdate);

    }

}


// ------------------------------- Students-------------------

$(document).ready(function () {
    $("#appearupdatestudents").click(function () {
        $("#containerupdatestudents").toggle(1000);
        $("#appearupdatestudents").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdatestudents").click(function () {
        $("#containerupdatestudents").toggle(1000);
        $("#appearupdatestudents").toggle(1000);
    });
});



function validateFormstudents() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let dateofbirth = document.getElementById("dateofbirth").value;
    let srn = document.getElementById("srn").value;
    let bool = true;
    if (firstname == "") {
        alert("First name must be filled out.");
        bool = false;
        return false;
    }
    if (firstname.length >= 30) {
        alert("First name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (lastname == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }
    if (lastname.length >= 30) {
        alert("Last name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (srn < 0 || srn > 1000000) {
        alert("SRN can't take a negative number");
        bool = false;
        return false;
    }
    if (dateofbirth == "") {
        alert("Date of birth must be filled out.");
        bool = false;
        return false;
    }


    if (bool == true) {
        this.addHtmlTableStudent(firstname, lastname, dateofbirth, srn);
    }

}

function addHtmlTableStudent(firstname, lastname, dateofbirth, srn) {
    var table = document.getElementById("mytablestudents");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = dateofbirth;
    cell4.innerHTML = srn;
}

function updatevaluesstudent() {
    let bool = true;
    let updaterowstudent = document.getElementById("updaterowstudent").value;
    updaterowstudent = updaterowstudent - 1;
    var table1 = document.getElementById("mytablestudents");

    if (updaterowstudent > table1.rows.length || updaterowstudent < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let firstname1 = document.getElementById("updatefirstnamestudent").value;
    let lastname1 = document.getElementById("updatelastnamestudent").value;
    let dateofbirth1 = document.getElementById("updatedateofbirthstudent").value;
    let srn1 = document.getElementById("srnstudent").value;

    if (firstname1 == "") {
        alert("First name must be filled out.");
        bool = false;
        return false;
    }
    if (firstname1.length >= 30) {
        alert("First name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (lastname1 == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }
    if (lastname1.length >= 30) {
        alert("Last name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (srn1 < 0 || srn1 > 1000000) {
        alert("SRN can't take a negative number");
        bool = false;
        return false;
    }
    if (dateofbirth1 == "") {
        alert("Date of birth must be filled out.");
        bool = false;
        return false;
    }


    if (bool == true) {
        document.getElementById("mytablestudents").deleteRow(updaterowstudent);
        this.addHtmlTableStudent(firstname1, lastname1, dateofbirth1, srn1);
    }

}

// ------------------------------- Employees-------------------

$(document).ready(function () {
    $("#appearupdatetrainers").click(function () {
        $("#containerupdatetrainers").toggle(1000);
        $("#appearupdatetrainers").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdateemp").click(function () {
        $("#containerupdatetrainers").toggle(1000);
        $("#appearupdatetrainers").toggle(1000);
    });
});


function validateFormtrainers() {
    let name = document.getElementById("name").value;
    let eid = document.getElementById("eid").value;
    let dept = document.getElementById("dept").value;
    let bool = true;
    if (name == "") {
        alert("Name must be filled out.");
        bool = true;
        return false;
    }
    if (name.length >= 30) {
        alert("Name must have max length 30.");
        bool = true;
        return false;
    }
    if (eid == "") {
        alert("Id must be filled out.");
        bool = false;
        return false;
    }
    if (eid.length >= 30) {
        alert("Id nust not exceed 10 characters.");
        bool = true;
        return false;
    }
    if (dept == "") {
        alert("Deparment must be filled out.");
        bool = false;
        return false;
    }
    if (dept.length >= 100) {
        alert("Department can have max length 100.");
        bool = true;
        return false;
    }


    if (bool == true) {
        this.addHtmlTableemployees(name, eid, dept);
    }

}

function addHtmlTableemployees(name, eid, dept) {
    var table = document.getElementById("mytabletrainers");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = eid;
    cell3.innerHTML = dept;
}

function updatevaluestrainers() {
    let bool = true;
    let updaterowemp = document.getElementById("updaterowemp").value;
    updaterowemp = updaterowemp - 1;
    var table1 = document.getElementById("mytabletrainers");

    if (updaterowemp > table1.rows.length || updaterowemp < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let updatenameemp = document.getElementById("updatenameemp").value;
    let updateempid = document.getElementById("updateempid").value;
    let updatedeptemp = document.getElementById("updatedeptemp").value;


    if ( updatenameemp== "") {
        alert("First name must be filled out.");
        bool = true;
        return false;
    }
    if (updatenameemp.length >= 30) {
        alert("First name must have max length 30.");
        bool = true;
        return false;
    }
    if (updateempid == "") {
        alert("ID must be filled out.");
        bool = false;
        return false;
    }
    if (updateempid.length >= 30) {
        alert("Employee ID must have max length 10.");
        bool = true;
        return false;
    }
    if (updatedeptemp == "") {
        alert("Department must be filled out.");
        bool = false;
        return false;
    }
    if (updatedeptemp.length >= 30) {
        alert("Department can have max length 30.");
        bool = true;
        return false;
    }
    if (bool == true) {
        document.getElementById("mytabletrainers").deleteRow(updaterowemp);
        this.addHtmlTabletrainers(updateempname, updateempid, updatedeptemp);
    }

}


// ------------------------------- Database -------------------

$(document).ready(function () {
    $("#appearupdatebooks").click(function () {
        $("#containerupdatebooks").toggle(1000);
        $("#appearupdatebooks").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdatebooks").click(function () {
        $("#containerupdatebooks").toggle(1000);
        $("#appearupdatebooks").toggle(1000);
    });
});

function validateFormBooksDB() {
    let btle = document.getElementById("btitle").value;
    let auth = document.getElementById("author").value;
    let arrivaldate = document.getElementById("arrdate").value;
    let bcnt = document.getElementById("bc").value;
    let prce = document.getElementById("price").value;
    let bool = true;
    if (btle == "") {
        alert("Title of assignment must be filled out.");
        bool = true;
        return false;
    }
    if (btle.length >= 30) {
        alert("Title name must have max length 30.");
        bool = true;
        return false;
    }
    if (auth == "") {
        alert("Author must be filled out.");
        bool = false;
        return false;
    }
    if (auth.length >= 100) {
        alert("Author can have max length 100.");
        bool = true;
        return false;
    }
    if (arrivaldate == "") {
        alert("Arrival Date must be filled out.");
        bool = false;
        return false;
    }
    if (bcnt < 0) {
        alert("Book Count can't take negative values.");
        bool = false;
        return false;
    }
    if (prce < 0) {
        alert("Price can't take negative values.");
        bool = false;
        return false;
    }


    if (bool == true) {
        this.addHtmlTableDatabase(btle, auth, arrivaldate, bcnt, prce);
    }

}

function addHtmlTableDatabase(btle, auth, arrivaldate, bcnt, prce) {
    var table = document.getElementById("mytablebooks");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = btle;
    cell2.innerHTML = auth;
    cell3.innerHTML = arrivaldate;
    cell4.innerHTML = bcnt;
    cell5.innerHTML = prce;

}

function updatevaluesBookDB() {
    let bool = true;
    let updaterowbooks = document.getElementById("updaterowbooks").value;
    updaterowbooks = updaterowbooks - 1;
    var table1 = document.getElementById("mytablebooks");

    if (updaterowbooks > table1.rows.length || updaterowbooks < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let ubtitle = document.getElementById("updatetitle").value;
    let uauthor = document.getElementById("updatebook").value;
    let uarrdate = document.getElementById("updatearrival").value;
    let ubid = document.getElementById("updatebookcount").value;
    let uprice = document.getElementById("updateprice").value;
    
    if (ubtitle == "") {
        alert("Title of Book must be filled out.");
        bool = true;
        return false;
    }
    if (ubtitle.length >= 30) {
        alert("Title name must have max length 30.");
        bool = true;
        return false;
    }
    if (uauthor == "") {
        alert("Author must be filled out.");
        bool = false;
        return false;
    }
    if (uauthor.length >= 100) {
        alert("Author can have max length 100.");
        bool = true;
        return false;
    }
    if (uarrdate == "") {
        alert("Arrival date must be filled out.");
        bool = false;
        return false;
    }
    if (ubid < 0) {
        alert("Book Id can't take negative values.");
        bool = false;
        return false;
    }
    if (uprice < 0) {
        alert("Price can't take negative values.");
        bool = false;
        return false;
    }


    if (bool == true) {
        document.getElementById("mytablebooks").deleteRow(updaterowbooks);
        this.addHtmlTableDatabase(ubtitle, uauthor, uarrdate, ubid, uprice);
    }

}


