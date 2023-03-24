const Employee = require("../lib/Employee")

test("create employee object", function(){
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
}
)
test("can set name via constructor", function(){
    const name = "test"
    const employee = new Employee(name)
    expect(employee.name).toBe("test")
}
)
test("can set id via constructor", function(){
    const id = 1
    const employee = new Employee("test", id)
    expect(employee.id).toBe(1)
}
)
test("can set email via constructor", function(){
    const email = "test@email.com"
    const employee = new Employee("test", 1, email)
    expect(employee.email).toBe("test@email.com")
}
)