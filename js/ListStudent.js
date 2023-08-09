class ListStudent {
    students = JSON.parse(localStorage.getItem("listStudent")) ?? []
    constructor() {}

    getById(id) {
        return this.students.find(student => student.id === id);
    }
    getIndexById(id) {
        return this.students.indexOf(this.getById(id))
    }
    add(student) {
        this.students.push(student)
        this.storage()
    }
    editById(id, {name, age, gender, klass}) {
        this.students.forEach(student => {
            if(student.id === id) {
                student.name = name
                student.age = age
                student.gender = gender
                student.klass = klass
                this.storage()
                return
            }
        })
    }
    deleteById(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.storage()
    }
    clear() {
        this.students = []
        localStorage.removeItem("listStudent");
    }
    storage() {
        localStorage.setItem("listStudent", JSON.stringify(this.students));
    }
}
