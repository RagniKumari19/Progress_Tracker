var header = "<thead><th>CT </th><th>PCT</th><th>Tasks</th><th>Operation</th></thead>";

function addTask() {
    
    var n = document.getElementById("add_box").value;
    if (!n.trim()) return; // prevent empty task

    // Create a row
    var row = document.createElement("tr");

    row.innerHTML = `
        <td><input type='checkbox' onclick='ctCheckbox(this)'></td>
        <td><input type='checkbox' onclick='pctCheckbox(this)'></td>
        <td><input type='text' value='${n}' readonly></td>
        <td><button onclick='edit(this)'>Edit</button></td>
        <td><button onclick='deletebox(this)'>Delete</button></td>
    `;

    // Append row to table
    // Append row to table
if (!document.querySelector("#tbl thead")) {
    document.getElementById("tbl").innerHTML = header;
}


   
    document.getElementById("tbl").appendChild(row);

    // clear input
    document.getElementById("add_box").value = "";

    // add to "task left" list
    document.getElementById("tlbox").innerHTML += n + "<br>";
}

function edit(elem) {
    elem.parentElement.parentElement.children[2].children[0].readOnly = false;
    elem.parentElement.innerHTML = "<button onclick='save(this)'>Save</button>";
}

function save(elem) {
    elem.parentElement.parentElement.children[2].children[0].readOnly = true;
    elem.parentElement.innerHTML = "<button onclick='edit(this)'>Edit</button>";
}

function deletebox(elem) {
    elem.parentElement.parentElement.remove();
}

function ctCheckbox(el) {
    var input = el.parentElement.parentElement.children[2].querySelector("input");
    var task = input ? input.value : "";
    var new_task = "<tr><td>" + task + "</td></tr>";

    document.getElementById("tCbox").innerHTML += new_task;
    el.parentElement.parentElement.remove();
}

function pctCheckbox(ele) {
    var input = ele.parentElement.parentElement.children[2].querySelector("input");
    var task = input ? input.value : "";
    var new_task = "<tr><td>" + task + "</td></tr>";

    document.getElementById("tpCbox").innerHTML += new_task;
    ele.parentElement.parentElement.remove();
}


//  var header = "<thead><th>CT </th><th>PCT</th><th>Tasks</th><th>Operation</th></thead>";
//         var tbl_data = header;
//         // document.getElementById("tbl").innerHTML = "";
//         function addTask() {
//             var n = document.getElementById("add_box").value;
//             tbl_data += "<tr> <td><input type='checkbox' onclick='ctCheckbox(this)'> </td><td><input type='checkbox' onclick='pctCheckbox(this)'> </td><td> <input type = 'text' value ='" + n + "' readonly </td><td> <button onclick='edit(this)''>Edit</button></td><td> <button onclick='deletebox(this)''>Delete</button></td></tr>";
//             document.getElementById("tbl").innerHTML = tbl_data;
//             document.getElementById("add_box").value = "";
//              //for the task left
//             document.getElementById("tlbox").innerHTML += n +"<br>";
//         }
//         function edit(elem) {
//             debugger;
//             elem.parentElement.parentElement.children[2].children[0].readOnly = false;
//             elem.parentElement.innerHTML = "<button onclick='save(this)'>save</button>";
//         }
//         function save(elem) {
//             elem.parentElement.parentElement.children[2].children[0].readOnly = true;
//             elem.parentElement.innerHTML = "<button onclick='edit(this)'>Edit</button>"
//         }
//         function deletebox(elem) {
//             elem.parentElement.parentElement.remove();
//         //    tbl_data = header;
//         }
//         function expandbox() {
//             document.getElementById("smallBox").style.display = "none";
//             document.getElementById("expandBox").style.display = "block";
//             document.getElementById("expandBox").focus();
//         }
//         function ctCheckbox(el) {

//             // var task = el.parentElement.parentElement.children[2].textContent;
//             var input = el.parentElement.parentElement.children[2].querySelector("input");

//             // Get only the text from the input
//             var task = input ? input.value : el.parentElement.parentElement.children[2].textContent;
//             var new_task = "<tr><td>" + task + "</td></tr>";

//             document.getElementById("tCbox").innerHTML += new_task;
//             // el.parentElement.parentElement.remove();
//                         ele.closest("tr").remove();

            
//         //    document.getElementById("tbl").innerHTML.tbl_data="";
//         }
//         function pctCheckbox(ele) {
//             // var task = el.parentElement.parentElement.children[2].textContent;
//             var input = ele.parentElement.parentElement.children[2].querySelector("input");

//             // Get only the text from the input
//             var task = input ? input.value : ele.parentElement.parentElement.children[2].textContent;
//             var new_task = "<tr><td>" + task + "</td></tr>";

//             document.getElementById("tpCbox").innerHTML += new_task;
//             // ele.parentElement.parentElement.remove();
//             ele.closest("tr").remove();
//             // var task = ele.parentElement.parentElement.children[2].innerHTML;

//             // var new_task = "<tr><td>" + task + "</td></tr>";
//             // document.getElementById("tpCbox").innerHTML += new_task;
//             // ele.parentElement.parentElement.remove();
//         }
//         function dateWise() {
//             window.location.href = "searchDateWise.html";
//         }
//         function overAlReport() {
//             window.location.href = "overAlReport.html";
//         } function timelineReport() {
//             window.location.href = "timelineWiseReport.html";
//         }
//         function addMoreTask(){
//            window.location.href ="addMoreTask.html";
//         }
//        function overAlReport(){
//           window.location.href ="overAlReport.html";
//        }