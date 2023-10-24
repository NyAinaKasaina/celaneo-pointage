const employees = [
    {
        "id"          : "E0001",
        "name"        : "Henry",
        "firstName"   : "Ford",
        "dateCreated" : "2022-07-06",
        "department"  : "MARKETING" 
    },
    {
        "id"          : "E0002",
        "name"        : "Tom",
        "firstName"   : "Sawyer",
        "dateCreated" : "2001-07-03",
        "department"  : "COMMERCIAL" 
    },
    {
        "id"          : "E0004",
        "name"        : "Jack",
        "firstName"   : "Sparrow",
        "dateCreated" : "1987-11-10",
        "department"  : "COMMERCIAL" 
    },
]

const registrations = [
    {
        "employeeId" : "E0002",
        "action"     : "CHECKIN",
        "comment"    : "Comments"
    },
    {
        "employeeId" : "E0004",
        "action"     : "CHECKIN",
        "comment"    : "Comments"
    }
]

module.exports = {
    employees,
    registrations
}