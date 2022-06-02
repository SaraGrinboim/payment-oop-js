class ManagmentPayments {
    #allPayments = []
    get allPayments() { return this.#allPayments }
    addPayment = (payment) => {
        this.#allPayments.push(payment)
    }
}
const managmentPayments=new ManagmentPayments();
class Payment {
    #id
    static ID = 100
    #date;
    #sum;
    #description;
    #status;
    #typePayment
    #user;

    constructor(id,date, sum, description, typePayment, status, user) {
        this.#id = id
        this.#date = date;
        this.#sum = sum;
        this.#description = description;
        this.#status = status;
        this.#typePayment = typePayment
        this.#user = user;
    }

    get id() { return this.#id; }

    set date(date) { this.#date = date; }
    get date() { return this.#date; }

    set sum(sum) { this.#sum = sum; }
    get sum() { return this.#sum; }

    set description(description) { this.#description = description; }
    get description() { return this.#description; }

    set status(status) { this.#status = status; }
    get status() { return this.#status; }

    set typePayment(typePayment) { this.#typePayment = typePayment; }
    get typePayment() { return this.#typePayment; }

    set user(user) { this.#user = user; }
    get user() { return this.#user; }

    pay = (user, payment) => {
        user.addPayment(payment);
        managmentPayments.addPayment(payment)
        alert(`Your payment has been successfully received
        type of payment: payment id-deal: ${payment.id} `)
    }
    refund = (user, payment) => {
        user.addPayment(payment);
        managmentPayments.addPayment(payment)
        alert(`Your refund has been successfully received
        type of payment: payment id-deal: ${payment.id} `)
    }
}




class CreditCard extends Payment {
    #number;
    #LastFourDigits;
    #code;
    #password;
    #payments;

    constructor(date, sum, description, status, typePayment, user,
        number, lastFourDigits, code, password, payments) {
        super(date, sum, description, status, typePayment, user)
        this.#number = number;
        this.#LastFourDigits = lastFourDigits;
        this.#code = code;
        this.#password = password;
        this.#payments = payments;
    }

    set number(number) { this.#number = number; }
    get number() { return this.#number; }

    set LastFourDigits(LastFourDigits) { this.#LastFourDigits = LastFourDigits; }
    get LastFourDigits() { return this.#LastFourDigits; }

    set code(code) { this.#code = code; }
    get code() { return this.#code; }

    set password(password) { this.#password = password; }
    get password() { return this.#password; }

    set payments(payments) { this.#payments = payments; }
    get payments() { return this.#payments; }

    pay = (user, payment) => {
        user.addPayment(payment)
        managmentPayments.addPayment(payment)
        alert(`Your payment has been successfully received
        type of payment: creditCard - payment id-deal: ${payment.id} `)
    }
    refund = (user, payment) => {
        user.addPayment(payment);
        managmentPayments.addPayment(payment)
        alert(`Your refund has been successfully received
        type of payment: creditCard id-deal: ${payment.id} `)
    }
}




class ClearingCompany extends Payment {
    #idClearing;

    constructor(date, sum, description, status, typePayment, user,
        idClearing) {
        super(date, sum, description, status, typePayment, user)
        this.#idClearing = id;
    }

    set idClearing(idClearing) { this.#idClearing = id; }
    get idClearing() { return this.#idClearing; }

    pay = (user, payment) => {
        user.addPayment(payment)
        managmentPayments.addPayment(payment)
        alert(`Your payment has been successfully received
        type of payment: ClearingCompany - payment id-deal: ${payment.id} `)
    }
    refund = (user, payment) => {
        user.addPayment(payment);
        managmentPayments.addPayment(payment)
        alert(`Your refund has been successfully received
        type of payment: ClearingCompany id-deal: ${payment.id} `)
    }

}