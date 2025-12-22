
//A simple website asks for a username and password. Suppose the correct username is admin and the password is 1234. 
// Write a program that checks whether the entered username and password are both correct.

const name = 'admin'
const password = 1234
user_name = prompt('Enter your name: ')
user_password = parseInt(prompt('Enter your password: '))

if(user_name===name)
    console.log('correct name')
else
    console.log('incorrect name');

if(user_password===password)
    console.log('correct password')
else
    console.log('incorrect password');
