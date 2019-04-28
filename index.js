var x = 5, y = 3;
if (x > y) {
    console.log('is greater than');
}

var z = 'cat';
if (z.length == 3) {
    console.log('is the length');
}

var a = 'dog';
if (a === z) {
    console.log('is the same');
} else {
    console.log('not the same');
}

var person = {
    name: "Bobby",
    age: 12
  }
  if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the X movie");
  } else {
    console.log(person.name + " is NOT allowed to go to the X movie");
  }

  if (person.name.startsWith("B")) {
    console.log(person.name + " is allowed to go to the B movie");
  } else {
    console.log(person.name + " is NOT allowed to go to the B movie");
}

if (person.name.startsWith("B") && person.age >= 18) {
    console.log(person.name + " is allowed to go to the BX movie");
  } else {
    console.log(person.name + " is NOT allowed to go to the BX movie");
}

if (1 === '1') {
    console.log("strict");
} else if (1 == '1') {
    console.log("loose");
} else {
    console.log("not equal at all");
}

if (1 <= 2 && 2 === 4) {
    console.log("yes");
} else {
    console.log("of course 2 doesn't equal 4");
}