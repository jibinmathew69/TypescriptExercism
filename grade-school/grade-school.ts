let _ = require('lodash')
class GradeSchool{
    private gradeStudents: Map<string , string[]>
    
    constructor() {
        this.gradeStudents = new Map<string, string[]>()      
    }
    public studentRoster(): Map<string , string[]>{
        const newGrade = _.cloneDeep(this.gradeStudents)
        return newGrade
    }
    public addStudent(name: string, grade: number){
        let newGrade = String(grade)
        let names: string[]|undefined = this.gradeStudents.get(newGrade)
        if(names){
            names.push(name)
            names.sort()
            return
        }    
        this.gradeStudents.set(newGrade, [name])
    }
    public studentsInGrade(grade: number): string[]{
        let newGrade = String(grade)  
        let names = this.gradeStudents.get(newGrade)
        return names ? names.slice() : [] 
    }

}

export default GradeSchool