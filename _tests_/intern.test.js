const Intern =  require("../lib/Intern")
test("can set school via constructor", function(){
    const school = "test"
    const intern = new Intern("name", 1, "test@email.com", school)
    expect(intern.school).toBe("test")
}
)
test("getRole function returns intern", function(){
    const role = "Intern"
    const intern = new Intern("name", 1, "test@email.com", "school")
    expect(intern.getRole()).toBe(role)
}
)