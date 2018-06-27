db.getCollection('Bank').find({})
/*Account Number, balance

Customer details : Customer id, Customer name, street, city, loan amount and deposit amount

Branch details : Branch name, Branch City, Assets*/



db.Bank.insert({"_id":1,AccountNumber:"A101",Balance:800,
    
CustomerDetails:{CustomerId:"c1",CustomerName:"",street:"Mp nagar",
  city:"chennai",LoanAmount:600,DepositAmount:500},
  BranchDetails:{
      BranchName:"Ramapuram",BranchCity:"chennai",Assets:1000}
  })
  
  
  db.Bank.insert({"_id":2,AccountNumber:"A102",Balance:700,
    
CustomerDetails:{CustomerId:"c2",CustomerName:"Hennry Hill",street:"Mp nagar",
  city:"chennai",LoanAmount:600,DepositAmount:500},
  BranchDetails:{
      BranchName:"Ramapuram",BranchCity:"chennai",Assets:1000}
  })
  
  db.Bank.find()
  
  
   
  db.Bank.insert({"_id":3,AccountNumber:"A103",Balance:900,
    
CustomerDetails:{CustomerId:"c3",CustomerName:"Savitha",street:"Ganga nagar",
  city:"pune",LoanAmount:500,DepositAmount:500},
  BranchDetails:{
      BranchName:"Ganga nagar",BranchCity:"pune",Assets:1200}
  })
  
  
   
  db.Bank.insert({"_id":4,AccountNumber:"A104",Balance:1000,
    
CustomerDetails:{CustomerId:"c4",CustomerName:"JohnHill",street:"Maruthi nagar",
  city:"chennai",LoanAmount:750,DepositAmount:250},
  BranchDetails:{
      BranchName:"Maruthi nagar",BranchCity:"chennai",Assets:1700}
      
  })
  
   db.Bank.insert({"_id":5,AccountNumber:"A105",Balance:800,
    
CustomerDetails:{CustomerId:"c5",CustomerName:"sru",street:"HimalayaHilll",
  city:"pune",LoanAmount:400,DepositAmount:750},
  BranchDetails:{
      BranchName:"HimalayaHill",BranchCity:"pune",Assets:1600}
      
  })
  
  
   db.Bank.insert({"_id":6,AccountNumber:"A106",Balance:560,
    
CustomerDetails:{CustomerId:"c6",CustomerName:"shub",street:"MG",
  city:"Hyderabad",LoanAmount:400,DepositAmount:260},
  BranchDetails:{
      BranchName:"MG",BranchCity:"Hyderabad",Assets:800}
      
  })
  
   db.Bank.insert({"_id":7,AccountNumber:"A107",Balance:580,
    
CustomerDetails:{CustomerId:"c7",CustomerName:"Aryan",street:"Ramapuram",
  city:"chennai",LoanAmount:420,DepositAmount:390},
  BranchDetails:{
      BranchName:"Ramapuram",BranchCity:"chennai",Assets:600}
      
  })
  
  
  db.Bank.find()
  
  db.Bank.update({AccountNumber:"A101"},{$set:{"CustomerDetails.CustomerName":"Rakesh"}})
  
  
  
  ---------------------------------------------------------
 // 2. Create index on primary key(s)

        db.Bank.ensureIndex({AccountNumber:1})
  
  
 // 3. The names and cities of all borrowers. 
  
    db.Bank.find({},{"CustomerDetails.CustomerName":1,"CustomerDetails.city":1})
    
    
 // 4. The names of borrowers who live in Chennai. 
    
    db.Bank.find({"CustomerDetails.city":"chennai"},{"CustomerDetails.CustomerName":1,
        "CustomerDetails.city":1})


 // 5. Find the name, city, and assets of the branch with the largest assets. 
    
    db.Bank.aggregate([{$group:{_id:"BranchDetails.BranchName",
        maximum:{$max:"$BranchDetails.Assets"}}}])
        
        
  //6 The names and cities of customers who have a loan at Pune branch.
        
      db.Bank.find({},{"CustomerDetails.city":"pune"},{"CustomerDetails.CustomerName":1})


  // 7. Find the number of accounts with balances between 700 and 900. 
        
        
       db.Bank.find({"Balance":{$gte:700,$lte:900}}).count()
       
       db.Bank.aggregate([{$match:{Balance:{$gte:700,$lte:900}}},{$count:"number"}])
       
     
       
 //  8. The names of customers with both deposit and loans at Pune branch. 
       
       db.Bank.find({"CustomerDetails.DepositAmount":{$gt:0},"CustomerDetails.LoanAmount":{$gt:0},
       "BranchDetails.BranchCity":"pune"},{"CustomerDetails.CustomerName":1})
       
       
       
 //  9.	The customers whose total loans are greater than the total amount in their
       bank accounts
       
       //updating
       
       db.Bank.update({"CustomerDetails.CustomerName":"Savitha"},
       {$inc:{"CustomerDetails.LoanAmount":2000}})
       
       
       db.Bank.find({$where:"this.CustomerDetails.LoanAmount>this.Balance"},
       {"CustomerDetails.CustomerName":1,AccountNumber:1,"CustomerDetails.LoanAmount":1,
           Balance:1})
       
       
       
 //  10.   The names of customers living on streets with names ending in "Hill". 
           
        db.Bank.find({"CustomerDetails.street":{$regex:"Hilll$"}},{"CustomerDetails.CustomerName":1})
 
       db.Bank.find({"CustomerDetails.street":/Hill/})
       
       
  // 11	 The names of branches whose assets are greater than the assets of
        /// all branches in  Hyderabad. 
       
       
       
  // 12. The branch with the largest average balance.
       
         db.Bank.aggregate([{$group:{_id:"$BranchDetails.BranchName",
             avgbal:{$avg:"$Balance"}}}, {$sort:{"avgbal":-1}},{$limit:1}])
      
       
       
    //13. The branch name and number of customers for each branch
             
           db.Bank.aggregate([{$group:{_id:"$BranchDetails.BranchName",NoCust:{$sum:1}}}])
        
        
     14. Deposit an additional Rs. 20,000 to sru’s bank account.
           
           db.Bank.update({"CustomerDetails.CustomerName":"sru"},{$inc:Balance:20000}})
           
           db.Bank.update({"CustomerDetails.CustomerName":"sru"},
           {$inc:{"CustomerDetails.DepositAmount":20000}})
           
           db.Bank.find({"CustomerDetails.CustomerName":"sru"})
         
         
         
     15. The names of customers with an account but not a loan at Pune branch
         
         db.Bank.find({"BranchDetails.BranchCity":"pune","CustomerDetails.LoanAmount":0},
         {"CustomerDetails.CustomerName":1,AccountNumber:1})
         
         
         


       
        
        
        
        
        
        
        
  