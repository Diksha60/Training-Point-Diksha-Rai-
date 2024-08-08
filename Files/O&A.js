const students = {
    fullName: "Arjun Acharya",
    age: 22,
    address: {
        district: "Sunsari",
        city: "Chatara",
        location: {
            wardNo: 5,
            houseNo: 30,
            street: "Bayarban"
        }
    }


}

// console.log(students)
// console.log(students.fullName)
// console.log(students.address)
// console.log(students.address.location)

// students.fullName = "Arpan Rai";
// console.log(students)

// students.address.location.houseNo = 50;
// console.log(students.address.location)

let numbers = [1,2,3,4,5,6,7];

// console.log(numbers[3])
 
const names = ["Ram", "Shyam", "Hari", "Gita", "Sita", "Radha"];
// console.log(names)

const random = [1, "Asmita", names, students, "Apple", "isTrue"];
// console.log(random)

// random[2] = numbers;
// console.log(random)

// random[1] = "Anita";
// console.log(random)

// random[4] = "This is Apple.";
// console.log(random)

// random.pop()
// console.log(random)

// random.push("isFalse")
// console.log(random)

// random.push("Yellow")
// console.log(random)

// random.shift()
// console.log(random)

// random.unshift(2)
// console.log(random)

// console.log(random.length)

// console.log(random.length - 1)

// console.log(random[Math.floor(random.length/2)])


console.log(random.concat(names))