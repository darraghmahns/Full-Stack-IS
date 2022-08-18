// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, base) => {
  return {
    specimenNum: num,
    dna: base,
    mutate() {
      let newBase = returnRandBase();
      if(newBase === this.dna){
        this.mutate();
      }
      return newBase;
    },
    compareDNA(pAequorObject) {
      let commonality = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === pAequorObject.dna[i]) {
          commonality += 25;
        }
      }
      return `Specimen #1 and specimen #2 have ${commonality}% DNA in common.`;
    },
    willLikelySurvive() {
      const surviveCount;
      for(let base of this.dna) {
        if(base === 'C' || base === 'G') {
          surviveCount++;
        }
        if(surviveCount/this.dna.length >= .6) {
          return true;
        }
        return false;
      }
    }
  }
}

let instances = []
for(let i = 0; i < 30; i++) {
  var instance = pAequorFactory(i,returnRandBase());
  instances.push(instance);
}











