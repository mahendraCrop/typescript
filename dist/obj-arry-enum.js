"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
const person = {
    name: "mahendra",
    age: 26,
    hobbies: ["fashion", "music"],
    role: Role.ADMIN
};
let favorites;
favorites = ["sports", "fashion"];
console.log("person name : ", person.name, "favorites ", favorites);
favorites.map((favorite) => {
    console.log(favorite.toUpperCase());
});
if (person.role == Role.ADMIN) {
    console.log("person role is ", Role.ADMIN);
}
//# sourceMappingURL=obj-arry-enum.js.map