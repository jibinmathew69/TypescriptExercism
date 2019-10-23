import { throws } from "assert"

class Transcriptor {
    toRna( dna: string ): string {
        let map: {[id: string] : string} = {
            'G' : 'C',
            'C' : 'G',
            'T' : 'A',
            'A' : 'U',
        }
        
        let rna = ""

        for(let nucleotide of dna){
            
            if(map[nucleotide] !== undefined){
                rna += map[nucleotide]
            }else{
                throw new Error('Invalid input DNA.')
            }
        }
        return rna
    }
}

export default Transcriptor