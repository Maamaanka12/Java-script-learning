//Write a program that uses a constructor function to create employee objects with values:
// name: "Khalid", salary: 500, role: "Manager" }
//Create one employee and display their details.
    Employee=function(name,salary,role)  {
        this.name=name
        this.salary=salary
        this.role=role
    }
    let emp1 = new Employee("Khalid", 500, "Manager");
    console.log(emp1);
    
console.log("------------------------------------");

//Write a program that uses a constructor function to build product objects for an online shop with:
// productName: "Laptop", price: 1200, inStock: true }
//Create one product and print its details.
    Product=function(productname,price,instock)  {
        this.productname=productname
        this.price=price
        this.instock=instock

    }
    
    pro1=new Product('mobile',800,false)
    
    pro1.export='somalia'
    console.log(pro1)


console.log("------------------------------------");

//Write a program that uses a constructor function to create book objects with:
//{ title: "JavaScript Basics", author: "John Doe", pages: 250 }
//Create one book and show the book details.
    Book=function(title,author,pages)  {
        this.title=title
        this.author=author
        this.pages=pages
    }           
    let book1 = new Book("JavaScript Basics", "John Doe", 250);
    console.log(book1);