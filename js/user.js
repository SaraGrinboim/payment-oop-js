class User {
    #_id;
    #email;
    #password;
    #firstName;
    #lastName;
    #phoneNumber
    #payments
    constructor(id, firstName, lastName, email, phoneNumber) {
        this.#_id = id;
        this.#email = email;
        this.#phoneNumber = phoneNumber
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#payments = []
    }
    toJSON() {
        return {
            id: this.#_id, firstName: this.#firstName, lastName: this.#lastName,
            email: this.#email, phoneNumber: this.#phoneNumber
        };
    };
    get id() {
        return this.#_id;
    }
    set id(id) {
        this.#_id = id
    }
    get firstName() {
        return this.#firstName;
    }
    set firstName(fName) {
        this.#firstName = fName
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(lName) {
        this.#lastName = lName
    }
    get getEmail() {
        return this.#email;
    }
    set email(email) {
        this.#email = email
    }
    get phoneNumber() {
        return this.#phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        this.#phoneNumber = phoneNumber
    }
    get getPayments() {
        return this.#payments;
    }
    addPayment=(payment) =>{
         this.#payments.push(payment)
         alert('added sucssesfully!!')
    }
    addRefund = () => {
        this.#payments.push(payment)
         alert('refund sucssesfully!!')
    }

} 