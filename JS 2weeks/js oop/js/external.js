class Lecture {
  constructor(teacher) {
    this.teacher = teacher;
  }
  guide() {
    console.log(`${this.teacher} teach this lecture`);
  }
}

class MobileLecture extends Lecture {
  constructor(language, teacher) {
    super(teacher);
    this.language = language;
  }

  GetAudience() {
    console.log("Mobile User using " + this.language);
  }
}
class WebDevelopmentLecture extends Lecture {
  constructor(language, teacher) {
    super(teacher);
    this.language = language;
  }

  GetAudience() {
    console.log("Web development User using " + this.language);
  }
}

let mobileLecture1 = new MobileLecture("Kotlin", "Htun Htun");
mobileLecture1.GetAudience();
mobileLecture1.guide();
