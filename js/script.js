const listStudent = new ListStudent()

// table
const table = document.querySelector(".table-data")
// edit form
const editForm = document.querySelector(".edit-form-wrapper")
const closeBtn = document.querySelector(".close-btn")
// add input
const nameInput = document.querySelector(".name-input")
const ageInput = document.querySelector(".age-input")
const genderInput = document.querySelector(".gender-input")
const classInput = document.querySelector(".class-input")
const addBtn = document.querySelector(".add-btn")
// edit input
const nameInputEdit = document.querySelector(".edit-name")
const ageInputEdit = document.querySelector(".edit-age")
const genderInputEdit = document.querySelector(".edit-gender")
const classInputEdit = document.querySelector(".edit-class")
const submitBtnEdit = document.querySelector(".submit-edit-btn")

//display data
function displayTable() {
    listStudent.students.forEach(student => {
        addRow(student)
    })
}
displayTable()

//edit - delete
table.addEventListener("click", e => {
    if(e.target.classList.contains("edit-btn")) {
        const id = e.target.getAttribute("data-id")
        displayEditForm(listStudent.getById(id))
    }
    if(e.target.classList.contains("delete-btn")) {
        // check if edit form is showing when click delete btn
        if(editForm.classList.contains("isShow")) {
            closeBtn.click()
        }
        const id = e.target.getAttribute("data-id")
        listStudent.deleteById(id)
        // e.target.closest('tr').remove()
        deleteRow(e.target.closest('tr'))
    }
})

//edit 
function displayEditForm(data) {
    editForm.classList.add("isShow")
    nameInputEdit.value = data.name
    ageInputEdit.value = data.age
    genderInputEdit.value = data.gender
    classInputEdit.value = data.klass
    submitBtnEdit.setAttribute("data-id", data.id)
}
submitBtnEdit.addEventListener("click", e => {
    e.preventDefault()
    listStudent.editById(e.target.getAttribute("data-id"), {
        name: nameInputEdit.value,
        age:ageInputEdit.value,
        gender: genderInputEdit.value,
        klass: classInputEdit.value
    })

    table.deleteRow(listStudent.getIndexById(e.target.getAttribute("data-id")) + 1)
    addRow(listStudent.getById(e.target.getAttribute("data-id")), listStudent.getIndexById(e.target.getAttribute("data-id")) + 1)
})

//add 
addBtn.addEventListener("click", e => {
    e.preventDefault()
    const name = nameInput.value
    const age = ageInput.value
    const gender = genderInput.value
    const klass = classInput.value
    const student = new Student(name, age, gender,klass)
    listStudent.add(student)
    addRow(student)

    nameInput.value = ''
    ageInput.value = ''
    genderInput.value = ''
    classInput.value = ''
})

closeBtn.addEventListener("click", () => {
    editForm.classList.remove("isShow")
})