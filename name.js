/*
Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.

Examples
a1 = new Name("john", "SMITH")
a1.fname ➞ "John"

a1.lname ➞ "Smith"

a1.fullname ➞ "John Smith"

a1.initials ➞ "J.S"
Notes
Make sure only the first letter of each name is capitalised.
Check the Resources tab for some helpful tutorials on JavaScript classes.
*/

class Name {
	constructor(fname, lname) {
		this._fname = fname[0].toUpperCase() + fname.substring(1).toLowerCase();
		this._lname = lname[0].toUpperCase() + lname.substring(1).toLowerCase();
		this._fullname = this._fname + ' ' + this._lname;
		this._initials = this.fname[0] + '.' + this.lname[0];
	}
	
    getFirstName() {
        return this.fname;
    
    }

	get fname() {
		return this._fname;
	}
	
		get lname() {
		return this._lname;
	}
	
	get fullname() {
		return this._fullname;
	}
	
	get initials() {
		return this._initials;
	}
}

a1 = new Name("cArOlInA", "CarneirO")
console.log(a1.fname);
console.log(a1.lname);
console.log(a1.fullname);
console.log(a1.initials)

/* Question regarding best practices
1. If I have to modify the arguments of the constructor, should I do it inside of the property declaration section
or inside the getters?
Answer: The best is to always do it ouside the constructor, so this case in the getters.
Constructors should run as fast as possible and are intended just to create the object.
*/
