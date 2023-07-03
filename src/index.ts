

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
class User{
   private static userNo:number=0 
protected userId:number=++User.userNo

readonly location:String = "delhi"
    constructor(public email:String,public name:String,private rollno:number,private courseMarks:number){}

    print(): void{
      console.log(this.email , this.name,this.location);
      
    }

    get getuserId():number{
        return this.userId;
    }

    get getCoursemarks(): number {
        return this.courseMarks
    }

    set setCourseMarks(courseMarks:number){
      this.courseMarks=courseMarks
    }

}


class subUser extends User{
    public familycode= this.userId

    constructor(email:String,name:String, rollno:number, courseMarks:number){
        super(email,name, rollno, courseMarks);
    }
    print():void{
        console.log(this.familycode);
        
    }
}

const newboy=new User("xyz2gmail","yash",2,25)
const newestboy=new User("sxy","rekha",3,35)

let subnewUser=new subUser("sxy","rekha",3,36)
subnewUser=new subUser("sxy","rekha",3,36)

subnewUser.print()