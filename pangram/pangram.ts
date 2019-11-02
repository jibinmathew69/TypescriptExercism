class Pangram{
    private statement: string

    constructor(statement: string) {
        this.statement = statement.toLowerCase()
    }

    public isPangram(){
        let statementArray = this.statement.split("")
        // statementArray = statementArray.filter((character: string) => {
        //     return character >= 'A' && character <= 'Z'
        // })
        let statementSet = new Set(statementArray)
        let ascii = new Set(['a', 'b', 'c', 'd', 'e', 'f',
         'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

        return [...ascii].every(value => statementSet.has(value))
    }
}

export default Pangram