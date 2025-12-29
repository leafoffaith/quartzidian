Defensive programming techniques
Don't use java.util.Date -> use Calendar instead look at docs and lecture


For each class you implement you should consider:  
• whether to override Object methods (<mark class="hltr-cyan">equals</mark>, <mark class="hltr-cyan">toString</mark>, , etc.) and use <mark class="hltr-cyan">valueOf</mark>,  
• whether to use an interface-based hierarchy, and  
• whether the class should be immutable.

## Classes Needed

```
All staff have the following public functionality:  
  
• a method to get the staff ID (See Task 2 below).  
• a method to get the staff SmartCard (See Task 3 below).  
• a method to get the staff type (either Lecturer, or Researcher).  
• a method to get the staff Employment Status (either permanent or fixed).  
• a method to list the modules that a lecturer is assigned to. A module consists  
of a name (e.g. Introduction to Software Development), a module code (e.g.  
CSC8011), a semester (e.g. 1) and the number of credits associated with the  
module (e.g. 10).  
• a method which returns true if the lecturer is currently teaching enough  
credits (40 credits in both semester) and false otherwise.  
• a method to return the list of students who are supervised by a researcher  
• a method which returns true if the researcher is currently supervising enough  
students (10 in total) and false otherwise.
```


[[StaffManager (Already provided)]] <- This is the driver class
[[Staff Interface (Already Provided)]]
[[Staff Abstract Class]]
[[Staff ID]]

#typeStaff
[[Lecturer]]
[[Researcher]]

[[Students]] <- doubtful 

#typeSmartCard
[[SmartCard]]
[[SmartCardNumber]]

#unique
[[Module]]
[[Name]]


