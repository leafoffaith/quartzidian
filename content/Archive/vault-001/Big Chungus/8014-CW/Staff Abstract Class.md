package uk.ac.ncl.coursework.csc8014;  
  
/**  
 * Name class */public class Name {  
  
    //@TODO Should first and last be final?  
    private final String firstName;  
    private final String lastName;  
  
    /**  
     * Instantiates a new Name.     *     * @param firstName the first name  
     * @param lastName  the last name  
     */    public Name(String firstName, String lastName) {  
        this.firstName = firstName;  
        this.lastName = lastName;  
    }  
  
    /**  
     * Gets first name.     *     * @return the first name  
     */    public String getFirstName() {  
        return this.firstName;  
    }  
  
    /**  
     * Gets last name.     *     * @return the last name  
     */    public String getLastName() {  
        return this.lastName;  
    }  
}