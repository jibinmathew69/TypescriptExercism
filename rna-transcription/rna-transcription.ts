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
            rna += map[nucleotide]
        }
        return rna
    }
}

export default Transcriptor