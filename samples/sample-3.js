class Student {
    constructor() {
        this.excitement = 1;
    }

    learn = () => {
        this.excitement = this.excitement  + 5;
    }

    writeCode = () => { learn(); } // you have to reference 'this.' when calling the function >> writeCode = () => { this.learn(); }
}

let bob = new Student();
bob.writeCode();

//learn is not defined