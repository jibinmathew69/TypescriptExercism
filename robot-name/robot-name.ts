class RobotName{
    public name: string
    private usedNames: Set<string>

    private genName(): string{
        const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabets[this.randomInt(0,alphabets.length)]+alphabets[this.randomInt(0,alphabets.length)]+this.randomInt(100, 999)
    }

    public resetName(): void{
        let name = this.genName()
        if(this.usedNames.has(name)){
            this.resetName()
        }else{
            this.name = name
            this.usedNames.add(this.name)            
        }
    }

    private randomInt(min:number, max: number): number{
        return Math.floor(Math.random() * (max - min) + min)
    }

    constructor() {
        this.name = this.genName()
        this.usedNames = new Set()
    }
}

export default RobotName