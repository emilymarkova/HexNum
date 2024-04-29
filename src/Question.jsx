export default class Question {
  constructor() {
    this.question = "";
    this.answer = 0;
  }

  createQuestion(difficulty) {
    if (difficulty == 0) {
      this.easyArithmetic();
    } else if (difficulty == 1) {
      if(Math.random() < 0.1) {
        this.mediumBinary();
      } else {
        this.mediumArithmetic();
      }
    } else if (difficulty == 2) {
      if(Math.random() < 0.1) {
        this.hardBinary();
      } else {
        this.hardArithmetic();
      }
    }
  }

  factorial(number) {
    if (number == 0) {
      return 1;
    } else {
      return number * this.factorial(number - 1);
    }
  }

  easyArithmetic() {
    // easy
    var term = [0, 0];
    var val = [0, 0];
    for (var i = 0; i < 2; i ++) {
      var r = Math.random();
      var rand;
      if (r < 0.25) {
        // factorial
        rand = (Math.floor(Math.random() * 3) + 3);
        term[i] = rand + "!";
        val[i] = this.factorial(rand);
      } else if (r < 0.5) {
        // square root
        rand = (Math.floor(Math.random() * 15) + 1);
        term[i] = "√" + (rand*rand);
        val[i] = rand;
      } else {
        // just a regular num
        rand = Math.floor(Math.random()*(99)+1);
        term[i] = rand;
        val[i] = rand;
      }
    }
    console.log("term 1" + term[0] + "term 2" + term[1]);
    if (Math.random() < 0.5) {
      // addition
      this.question = term[0] + "+" + term[1];
      this.answer = val[0] + val[1];
    } else {
      // subtraction 
      this.question = term[0] + "-" + term[1];
      this.answer = val[0] - val[1];
    }
  } 
  
  mediumArithmetic() {
    // medium
    let prevTerm = Math.floor(Math.random()*(Math.pow(10, terms)-1)+1);
    for (var i = 1; i < terms; i ++) {
      let symbol = Math.floor(Math.random()*(4-0));
      let term = Math.floor(Math.random()*(Math.pow(10, terms)-1)+1);
      if (symbol == 1) {
        // addition
        this.question += prevTerm + "+";
      } else if (symbol == 2) {
        // subtraction 
        this.question += prevTerm + "-";
      } else if (symbol == 3) {
        // multiplication
        prevTerm = Math.floor(Math.random()*(Math.pow(10, terms-1)-1)+1);
        term = Math.floor(Math.random()*(Math.pow(10, terms-1)-1)+1);
        this.question += prevTerm + "*";
      } else if (symbol == 4) {
        // division

      }
    }
  }

  hardArithmetic() {
    
  }

  mediumBinary() {
    let bases = [2, 8, 16];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const number = Math.floor(Math.random() * 999 + 1);
    this.question = "Convert " + number + "(base 10) to base " + base;
    this.answer = number.toString(base);
  }

  hardBinary() {
    const base = bases[Math.floor(Math.random() * 30 + 2)];
    const number = Math.floor(Math.random() * 999 + 1);
    this.question = "Convert " + number + "(base 10) to base " + base;
    this.answer = number.toString(base);
  }
}