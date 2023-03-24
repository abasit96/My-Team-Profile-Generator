const Engineer =  require("../lib/Engineer")
test("can set github via constructor", function(){
    const github = "test"
    const engineer = new Engineer("name", 1, "test@email.com", github)
    expect(engineer.github).toBe("test")
}
)
test("getRole function returns engineer", function(){
    const role = "Engineer"
    const engineer = new Engineer("name", 1, "test@email.com", "github")
    expect(engineer.getRole()).toBe(role)
}
)