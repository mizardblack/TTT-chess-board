
// let size = 7;

// const board = document.getElementById("board");
// var table = document.createElement("td");
// for (var i = 1; i <= size; i++) {
//     var tr = document.createElement('tr');
//     for (var j = 1; j <= size; j++) {
//         var td = document.createElement('td');
//         if (i % 2 == j % 2) {
//             td.className = "white";
//         } else {
//             td.className = "black";
//         }
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// board.appendChild(table);

var submit = document.getElementById("submit");
var reset = document.getElementById("reset");
var checkbox = document.getElementById("flag");
var flag;

submit.onclick = function () {
    let size = document.getElementById('slideBar').value;
    console.log("submitted", size);

    var table = document.createElement("table");
    table.setAttribute("class", "board");
    table.setAttribute("id", "remove");

    for (let i = 0; i < size; i++) {

        const row = table.insertRow(0);

        for (let j = 0; j < size; j++) {

            const cell = row.insertCell(0);
            cell.classList.add(j);

            cell.onclick = function () {
                if (flag == 0) {
                    cell.classList.add('darkcircle');
                    console.log(flag, "circle");
                } else {
                    cell.classList.add('cross');
                    console.log(flag, 'cross');
                }
            }

            const t = (i + j) % 2;
            if (t == 0) {
                cell.classList.add('black');
            }
        }
    }
    document.body.appendChild(table);
}

reset.onclick = function () {
    var remove = document.getElementById('remove');
    remove.parentNode.removeChild(remove);
}

checkbox.onclick = function () {
    flag = document.getElementById("flag").checked;
    console.log(flag);
}

