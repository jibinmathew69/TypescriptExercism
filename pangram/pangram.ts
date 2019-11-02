class Pangram{
    private statement: string

    constructor(statement: string) {
        this.statement = statement.toLowerCase()
    }

    public isPangram(){
        
        let statementSet = new Set(this.statement)
        let ascii = new Set('abcdefghijklmnopqrstuvwxyz')
        return [...ascii].every(value => statementSet.has(value))
    }
}

export default Pangram