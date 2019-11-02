class Bob {
    hey( statement: string ) {
        statement = statement.trim()
        if(statement.endsWith('?')){
            return "Sure."
        }else if(/[A-Z]/.test(statement) && statement === statement.toUpperCase()){
            return "Whoa, chill out!"    
        }else if(statement.length === 0 || /^\s*$/.test(statement)){
            return 'Fine. Be that way!'
        }else{
            return 'Whatever.'
        }
    }
}

export default Bob