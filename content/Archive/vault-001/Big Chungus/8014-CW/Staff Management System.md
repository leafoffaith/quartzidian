# Staff Management System 8014

[CourseworSpecification.pdf](CourseworSpecification.pdf)

[Staff.java](Staff%20Management%20System%208014%20d951f82b022f4ea0893b293b1e5b549f/Staff.java)

[StaffManager.java](Staff%20Management%20System%208014%20d951f82b022f4ea0893b293b1e5b549f/StaffManager.java)

[students.TXT](Staff%20Management%20System%208014%20d951f82b022f4ea0893b293b1e5b549f/students.txt)

[modules.TXT](Staff%20Management%20System%208014%20d951f82b022f4ea0893b293b1e5b549f/modules.txt)

~~Junit testing needs to be used to unit test solution~~ 

**Overview**

- **All staff have the following public functionality:**
    
    • a method to get the staff ID (See Task 2 below).
    • a method to get the staff Smartcard (See Task 3 below).
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
    

Classes needed 

**Module**

needed to store module information

**Name**

needed to store student first name and last name  

**StaffID**

has two components- a single letter followed by a three-digit number for example *a123*

unique so can add a UID to each

**SmartCard**

staffName comprising first and last name, which can be fed in from the NameClass

date of birth of the staff

*unique* smart card number and a date of issue 

provide methods to access the staff name, DOB, smart card number and date of issue of the card

[java.util.Date](http://java.util.Date) class is used to represent dates but cannot use deprecated methods

**private setExpiryDate():** 

if held by staff on fixed-term contract, the expiry date is set to the issue date + 2 years

if held by staff on permanent contract, the expiry date is set to the issue date + 10 years

**********************public getExpiryDate();**********************

returns the expiry date of the card

********************SmartCardNumber********************

3 components

concatenation of the initial of the first and last name 

arbitrary serial number

year of issue of the card

JS-10-2023

uniqueness of smart card numbers have to guaranteed

**StaffManager class is the driver class for the university system**

needs to *create a staff object when employed*

maintain a record of all staff with their staffID

maintain a record of all Students and Modules in the university 

- This class need to provide a number of methods. You are provided with
StaffManager.java class that has the signature of the methods that need to be
implemented (Please DO NOT change the methods’ signature).
    
    • public Set<Module> readInModules(String path)
    This method should allow modules information to be read from a pre-defined
    data file (modules.txt, where path is the path to this file) and stored in
    a set of modules. The modules.TXT file contains one data entry per line with
    fields separated by a comma e.g. CSC8014, Software Development Advanced
    Techniques, 2, 10.
    
    • public Set<Name> readInStudents (String path)
    This method should allow students information to be read from a pre-defined
    data file (Students.txt where path is the path to this file) and stored in a
    set of names. The Students.TXT file contains one data entry per line with
    fields separated by a space e.g. Charlie Chaplin
    
    • public Staff employStaff(String firstName, String
    lastName, Date dateOfBirth, String staffType, String
    employmentStatus)
    This method registers a new staff onto the system and allocates a smart card and
    a staff ID (see below for additional rules about whether or not a smart card can
    be issued). On success, this method needs to return a Staff object.
    
    • public int noOfStaff(String staffType)
    This method returns the number of staff of the specified type (a lecturer or a
    researcher) that are currently employed.
    
    • public boolean addData(StaffID id, Set<Module>
    modules, Set<Name> students)
    This method adds either a set of modules or a set of students to the staff
    depending on their type. You need to make sure that modules and students are
    valid before assigning them to the staff (This can be done be comparing the set
    against the records of existing students and modules).
    
    • public Collection<Staff> getAllStaff()
    This method returns all staff that are employed by the university.
    
    • public void terminateStaff(StaffID id)
    This method removes the staff record associated with the given staff id. In
    effect, the staff is leaving the University.
    When issuing a smart card, the following rules must be observed.
    • A staff must be at least 22 years old and at most 67 (retirement age is 68).
    • A staff cannot be both a researcher and a lecturer.
    • A staff cannot be issued with more than one smartcard (i.e. do not try to deal
    with lost cards!)
    

**Staff** superclass

Cannot be more than one type

On employment, need smartcard number and staff ID (for login)

Permanent contract or Fixed-term contract

**Lecturer + Researcher** subclasses

Lecturers can teach on different modules whereas researchers cannot 

Researchers can supervise students’ projects whereas lecturers cannot