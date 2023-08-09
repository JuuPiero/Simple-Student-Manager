function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
function addRow(data, pos = 0) {
  const totalColumns = table.rows[0].cells.length;
  const dataArr = [data.id, data.name, data.age, data.gender, data.klass];
  const row = (pos == 0 ) ?  table.insertRow(table.rows.length) : table.insertRow(pos);
  for (let i = 0; i < totalColumns; i++) {
    if (i == 0) {
      // row.insertCell(i).innerHTML = table.rows.length - 1;
      row.insertCell(i).innerHTML = (pos == 0 ) ?  table.rows.length - 1 : pos;
    } else if (i == totalColumns - 1) {
      row.insertCell(i).innerHTML = ` <td>
                                                <button type="button" class="btn btn-primary edit-btn" data-id="${data.id}" >Edit</button>
                                                <button type="button" class="btn btn-danger delete-btn" data-id="${data.id}">Delete</button>
                                            </td>`;
    } else {
      row.insertCell(i).innerHTML = dataArr[i];
    }
  }
}
function deleteRow(row) {
  row.remove()
}

function editRow(rowIndex) {
  table.deleteRow(listStudent.students.indexOf(listStudent.getById(id)));
}

function clearTable(table) {
    const totalRows = table.rows.length
    console.log(totalRows);
    for (let i = 1; i <= totalRows - 1; i++) {
        table.deleteRow(i)
    }
}