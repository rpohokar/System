var firstName,lastName;

module.exports = {

    getFirstName: function (){
	return firstName;
    },

	setFirstName: function (fname){
	firstName = fname;
    },

    getLastName: function (){
	return lastName;
    },
    
    setLastName: function (lname){
	lastName = lname;
    },

    getPersonInfo: function(){
    return {
	    FirstName:firstName,
		LastName:lastName
        };
    }
};



