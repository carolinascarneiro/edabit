class Name {
	constructor(fname, lname) {
		this._fname = fname[0].toUpperCase() + fname.substring(1).toLowerCase();
		this._lname = lname[0].toUpperCase() + lname.substring(1).toLowerCase();
		this._fullname = this._fname + ' ' + this._lname;
		this._initials = this.fname[0] + '.' + this.lname[0];
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
*/
