let aboutMe = {
    name: "Davit", 
    age: 14,
    favoriteProgrammerLanguage: "java script"
}

for (let key in aboutMe) {
    console.log(key ,aboutMe[key]);
}

city: "Yerevan"
delete aboutMe.name

for (let key in aboutMe) {
    console.log(key ,aboutMe[key]);
}