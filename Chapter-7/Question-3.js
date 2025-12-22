
    class BankAccount {
        constructor(accNumber,Owner,balance){
            this.accNumber=accNumber
            this.Owner=Owner
            this.balance=balance
        }
    }
    ban1=new BankAccount('AW12345','Osman xeyle',400)
    ban2=new BankAccount('AR2235','abdirahman',9000)
    ban1.deposit=20
    console.log(ban1);
    console.log(ban2);

    // depositing
    class BankAccount {
        constructor(accNumber,Owner,balance){
            this.accNumber=accNumber
            this.Owner=Owner   
            this.balance=balance
            this.deposit=function(){
                let money = parseInt(prompt('Enter the money to deposit for'))
                this.balance+=money
            }
        }
    }
    ban1=new BankAccount('AW12345','Osman xeyle',400)
    ban1.deposit()
    console.log(ban1); 

    ban2=new BankAccount('AR2235','abdirahman',200)
    ban2.deposit()
    console.log(ban2)


    //withdrawing
    class BankAccount {
        constructor(accNumber,Owner,balance){
            this.accNumber=accNumber
            this.Owner=Owner
            this.balance=balance
            this.withdraw=function(){
                let money = parseInt(prompt('Enter the money to withdraw for'))
                // if (money<=this.balance){
                //     this.balance-=money
                // }
                // else
                // console.log('haraaga makugu filno')

                alert((money>this.balance)?'insufficient balance':this.balance-=money)
                
            }
        }
    }
    let ban1=new BankAccount('AW12345','Osman xeyle',400)
    alert(ban1.balance)
    ban1.withdraw()
    console.log(ban1);

       