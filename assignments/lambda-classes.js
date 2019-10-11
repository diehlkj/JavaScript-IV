// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {console.log(`Hello my name is ${this.name}, I am from ${this.location}`);};
}


class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {console.log(`Today we are learning about ${subject}`);};
    grade(student,subject) {console.log(`${student.name} receives a perfect score on ${subject}`);};
}


class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects; //This will be an array
    }
    listsSubjects() {
        this.favSubjects.forEach((subject) => {console.log(subject);});
    };
    PRAssignment(subject) {console.log(`${this.name} has submitted a PR for ${subject}`);};
    sprintChallenge(subject) {console.log(`${this.name} has begun sprint challenge on ${subject}`);};
}


class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {console.log(`${name} announces to ${channel}, @channel standy times!​​​​`);};
    debugsCode(student, subject) {console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);};
}


////////////////////////////////////////////////////////////


const evan = new Instructor({
    name: 'Evan',
    location: 'Enola',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});


const imanie = new Student({
    name: 'Imanie',
    location: 'Harrisburg',
    age: 27,
    previousBackground: 'Worked at BBY',
    className: 'WEBPT94',
    favSubjects: ['HTML','CSS','Java']
});


const george = new ProjectManager({
    name: 'George',
    location: 'Lancaster',
    age: 36,
    gradClassName: 'CS1',
    favInstructor: evan.name
});


console.log(evan);
evan.speak();
evan.demo('CSS');
evan.grade(imanie,'CSS');

console.log(imanie);
imanie.speak();
imanie.listsSubjects();
imanie.PRAssignment('JS II');
imanie.sprintChallenge('JavaScript Fundamentals');

console.log(george);
george.speak();
george.standUp('CS1');
george.debugsCode(imanie, 'JavaScript');