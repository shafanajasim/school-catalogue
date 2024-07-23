
class School {
  constructor(name,level,numberOfStudents,averageTestScores = null,schoolOverview = null) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(value) {
    if(typeof value === 'number') {
      this._numberOfStudents = value;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
  }
}
  class PrimarySchool extends School {
    constructor(name,level,numberOfStudents,pickupPolicy) {
      super(name,'primary',numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }

  class MiddleSchool extends School {
    constructor(name,numberOfStudents){
      super(name,'middle',numberOfStudents);
    }
  }

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams) {
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

class SchoolCatalog {
  constructor() {
    this._primarySchools = [];
    this._middleSchools = [];
    this._highSchools = [];
  }

  addPrimarySchool(primarySchool) {
    this._primarySchools.push(primarySchool);
  }

  addMiddleSchool(middleSchool) {
    this._middleSchools.push(middleSchool);
  }

  addHighSchool(highSchool) {
    this._highSchools.push(highSchool);
  }

  get primarySchools() {
    return this._primarySchools;
  }

  get middleSchools() {
    return this._middleSchools;
  }

  get highSchools() {
    return this._highSchools;
  }
}

const schoolCatalog = new SchoolCatalog(); schoolCatalog.addPrimarySchool('lorraineHansbury'); 
schoolCatalog.addHighSchool('alSmith'); schoolCatalog.addMiddleSchool('johnDoeMiddle');

//Primary School Instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const substituteTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(substituteTeacher);

//High School Instance
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log('numberOfStudents: '+alSmith.numberOfStudents);
console.log('sportsTeams: '+alSmith.sportsTeams);

//Displaying the schools in the catalog 
console.log(schoolCatalog.primarySchools);
console.log(schoolCatalog.middleSchools);
console.log(schoolCatalog.highSchools);
