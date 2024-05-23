function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function nameIsValid(name) {
    let regex = /abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/i;
    return regex.test(name);
}
console.log(nameIsValid('u123'));
function passTest(password) {
    return  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);
}
function phoneIsValid(phonee){
let regex=/^(0|[1-9][0-9]*)$/
return regex.test(phonee);


}







function validateNewClient() {
    console.log('form submitting');
    const  name=document.getElementById('name').value ,
            pass=document.getElementById('password').value,
            email=document.getElementById('clientmail').value
            phoneNumber=document.getElementById('phone').value,
            country=document.getElementById('Country').value, 
            form=document.getElementById('clientForm')
            if (!emailIsValid(email)) {
                alert('Please enter a valid email address.');
                return false;
            }
if (!nameIsValid(name)) {
    alert('Please type a proper username (alphabetical characters)')
    return false;
}
if (!passTest(pass)) {
    alert('Please type a proper password (characters,numbers,symbols,more than 8 characters)')
    return false;
}
if (!phoneIsValid(phoneNumber)) {
    alert('enter a valid number')
    return false;
}
alert('Client added successfully!')
return true;
}


