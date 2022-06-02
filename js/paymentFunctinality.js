pay = () => {
    const sum = document.getElementById('sum').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;
    const typePayment = document.getElementById('typePayment').value;
    
    const id = document.getElementById('id').value;
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const phoneNamber = document.getElementById('phoneNamber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const user= new User(id,fName,lName,email,phoneNamber)

    // user.addPayment(payment)

    let payment;
    switch (typePayment) {
        case 'creditCard': payment = new CreditCard(new Date(), sum, description, status, typePayment);
        case 'clearingCompany': payment = new ClearingCompany(new Date(), sum, description, status, typePayment);
        default : payment=new Payment(new Date(), sum, description, status)
    }
    //add to user the payment
    //add to managment the payment
    payment.pay(user,payment)
    
}
/////no html////
refund = () => {
    let sum = document.getElementById('sum').value;
    sum=sum*-1
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;
    const typePayment = document.getElementById('typePayment').value;
    
    const id = document.getElementById('id').value;
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const phoneNamber = document.getElementById('phoneNamber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const user= new User(id,fName,lName,email,phoneNamber)


    let payment;
    switch (typePayment) {
        case 'creditCard': payment = new CreditCard(new Date(), sum, description, status, typePayment);
        case 'clearingCompany': payment = new ClearingCompany(new Date(), sum, description, status, typePayment);
        default : payment=new Payment(new Date(), sum, description, status)
    }
    
    //add to user the refund
    //add to managment the refund
    payment.refund(user,payment)
    
}