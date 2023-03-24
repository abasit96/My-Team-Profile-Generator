const Manager =  require("../lib/Manager")
test("can set office number via constructor", function(){
    const officeNumber = 2
    const manager = new Manager("name", 1, "test@email.com", officeNumber)
    expect(manager.officeNumber).toBe(2)
}
)
test("getRole function returns manager", function(){
    const role = "Manager"
    const manager = new Manager("name", 1, "test@email.com", 2)
    expect(manager.getRole()).toBe(role)
}
)