//Sara buys 3 tickets for a concert, each costing $25.
//  Write a program that stores her name, the number of tickets, and the price per ticket, then display a sentence using template literals showing how much she paid in total.

Name = 'Sarah'
num_of_tickets = 3
price_per_one = 25
total = num_of_tickets * price_per_one
message = Name + ` bought ${num_of_tickets} tickets, paid `+price_per_one +`$ dollars for each one
And paid a total of `+ total +`$`
console.log(message)