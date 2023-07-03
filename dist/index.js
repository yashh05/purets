"use strict";
// class User{
//     email:String
//     name:String
//     location:String="delhi"
//     constructor(email:String,name:String){
//         this.email=email
//         this.name=name
//     }
//     print(): void{
//       console.log(this.email , this.name,this.location);
//     }
// }
//another way of writing this
class User {
    constructor(email, name, rollno, courseMarks) {
        this.email = email;
        this.name = name;
        this.rollno = rollno;
        this.courseMarks = courseMarks;
        this.userId = ++User.userNo;
        this.location = "delhi";
    }
    print() {
        console.log(this.email, this.name, this.location);
    }
    get getuserId() {
        return this.userId;
    }
    get getCoursemarks() {
        return this.courseMarks;
    }
    set setCourseMarks(courseMarks) {
        this.courseMarks = courseMarks;
    }
}
User.userNo = 0;
class subUser extends User {
    constructor(email, name, rollno, courseMarks) {
        super(email, name, rollno, courseMarks);
        this.familycode = this.userId;
    }
    print() {
        console.log(this.familycode);
    }
}
const newboy = new User("xyz2gmail", "yash", 2, 25);
const newestboy = new User("sxy", "rekha", 3, 35);
let subnewUser = new subUser("sxy", "rekha", 3, 36);
subnewUser = new subUser("sxy", "rekha", 3, 36);
subnewUser.print();
