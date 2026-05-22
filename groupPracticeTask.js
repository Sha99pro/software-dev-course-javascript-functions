//Task 1

function personDetails(name, role) {
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    let formattedRole = role.charAt(0).toUpperCase() + role.slice(1);

    let personInfo = `Name: ${formattedName}, Role: ${formattedRole}`;

    return personInfo;
}

console.log(personDetails("alice", "speaker"));
console.log(personDetails("Bob", "transcriber"));
console.log(personDetails("kathy", "singer"));


//Task 2

function calculateTotalCost(number , cost){
        total = number * cost;
        if(number >100){
            total = total - (total * 0.10);
        }
    return total;
}
console.log(calculateTotalCost(120 , 25));


//Task 3

function isValidEmail(email){
        return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("ghj123@gmail.com"));
console.log(isValidEmail("ceajcb.com"));
