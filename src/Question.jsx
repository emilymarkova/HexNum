export default class Question {
  constructor() {
    this.question = "";
    this.answer = 0;
  }

  createQuestion(difficulty) {
    let rand = Math.random();
    if (difficulty == 0) {
      this.easyArithmetic();
    } else if (difficulty == 1) {
      if(rand < 0.1) {
        this.mediumBinary();
      } else if (rand < 0.2){
        this.gcf();
      } else if (rand < 0.3) {
        this.lcm();
      } else {
        this.mediumArithmetic();
      }
    } else if (difficulty == 2) {
      if(rand < 0.1) {
        this.hardBinary();
      } else if (rand < 0.2){
        this.gcf();
      } else if (rand < 0.3) {
        this.lcm();
      } else {
        this.mediumArithmetic();

        // this.hardArithmetic();
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
        rand = (Math.floor(Math.random() * 9) + 2);
        term[i] = "√" + (rand*rand);
        val[i] = rand;
      } else {
        // just a regular num
        rand = Math.floor(Math.random()*(99)+1);
        term[i] = rand;
        val[i] = rand;
      }
    }
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
    var term = [0, 0];
    var val = [0, 0];
    for (var i = 0; i < 2; i ++) {
      var r = Math.random();
      var rand;
      if (r < 0.25) {
        // factorial
        rand = (Math.floor(Math.random() * 5) + 3);
        term[i] = rand + "!";
        val[i] = this.factorial(rand);
      } else if (r < 0.5) {
        // square root
        rand = (Math.floor(Math.random() * 12) + 6);
        term[i] = "√" + (rand*rand);
        val[i] = rand;
      } else {
        // just a regular num
        rand = Math.floor(Math.random()*(599)+401);
        term[i] = rand;
        val[i] = rand;
      }
    }
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

  /*
  mediumArithmetic() {
    // medium
    var term = [0, 0, 0];
    var val = [0, 0, 0];
    
    var symbol = [Math.floor(Math.random() * 4), 0];
    if (symbol[0] < 2) {
      // addition or subtraction
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
          rand = (Math.floor(Math.random() * 14) + 2);
          term[i] = "√" + (rand*rand);
          val[i] = rand;
        } else {
          // just a regular num
          rand = Math.floor(Math.random()*(999)+1);
          term[i] = rand;
          val[i] = rand;
        }
      }
      symbol[1] = Math.floor(Math.random() * 3);
      if (symbol[1] < 2) {
        term[2] = Math.floor(Math.random()*(999) + 1);
      } else {
        term[2] = Math.floor(Math.random()*99 + 1);
      }
      val[2] = term[2];
      
      if (symbol[0] == 0) {  
        console.log("val0: " + val[0] + " val1: " + val[1] + " val2: " + val[2]);
        switch(symbol[1]) {
          case 0:
            this.question = term[0] + " + " + term[1] + " + " + term[2];
            this.answer = val[0] + val[1] + val[2];
            break;
          case 1:
            this.question = term[0] + " + " + term[1] + " - " + term[2];
            this.answer = val[0] + val[1] - val[2];
            break;
          case 2:
            this.question = term[0] + " + " + term[1] + " * " + term[2];
            this.answer = val[0] + val[1] * val[2];
            break;
        }
        console.log("answer: " + this.answer);
        this.answer = val[0] + val[1];
      } else if (symbol == 1) {
        console.log("val0: " + val[0] + " val1: " + val[1] + " val2: " + val[2]);
        switch(symbol[1]) {
          case 0:
            this.question = term[0] + " - " + term[1] + " + " + term[2];
            this.answer = val[0] - val[1] + val[2];
            break;
          case 1:
            this.question = term[0] + " - " + term[1] + " - " + term[2];
            this.answer = val[0] - val[1] - val[2];
            break;
          case 2:
            this.question = term[0] + " - " + term[1] + " * " + term[2];
            this.answer = val[0] - val[1] * val[2];
            break;
        }
        console.log("answer: " + this.answer);
      }
    } else if (symbol == 2) {
      // multiplication
      term[0] = Math.floor(Math.random()*99 + 1);
      val[0] = term[0];
      term[1] = Math.floor(Math.random()*99 + 1);
      val[1] = term[1];
      this.question = term[0] + " * " + term[1];
      this.answer = val[0] * val[1];
    } else if (symbol == 3) {
      // division
      var rand = Math.floor(Math.random()*99 + 1);
      term[1] = Math.floor(Math.random()*99 + 1);
      term[0] = rand * term[1];
      val[0] = term[0];
      val[1] = term[1];
      this.question = term[0] + " / " + term[1];
      this.answer = val[0] / val[1];
    }
  }
  */

  mediumBinary() {
    let bases = [2, 8, 16];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const number = Math.floor(Math.random() * 999 + 1);
    this.question = "Convert " + number + "(base 10) to base " + base;
    this.answer = number.toString(base);
  }

  gcf() {
    let num1 = Math.floor(Math.random() * 50 + 1);
    let num2 = Math.floor(Math.random() * 50 + 1);
    let num3 = Math.floor(Math.random() * 20 + 1);
    
    this.question = "GCF of " + num1*num3 + " and " + num2*num3;
    this.answer = num3;
  }

  lcm() {
    let num3 = Math.floor(Math.random() * 20 + 1);
    let num1 = num3 * Math.floor(Math.random() * 80 + 1);
    let num2 = num3 * Math.floor(Math.random() * 80 + 1);
    
    this.question = "LCM of " + num1 + " and " + num2;
    this.answer = num1*num2/num3;
  }

  hardArithmetic() {
    // TODO further implementation
  }

  hardBinary() {
    const base = bases[Math.floor(Math.random() * 30 + 2)];
    const number = Math.floor(Math.random() * 999 + 1);
    this.question = "Convert " + number + "(base 10) to base " + base;
    this.answer = number.toString(base);
  }

}