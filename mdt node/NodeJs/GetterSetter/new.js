var firstName,lastName,Email;

module.exports = {
setFirstName: function (fname){
	firstName = fname;
},

setLastName: function (lname){
	lastName = lname;
},

getPersonInfo: function(){
	return{
		FirstName : firstName,
		LastName  : lastName,
		Email     : 'pohokarrasika@gmail.com'
	};
},

getSsp: function(){
	return 'Rasika';
}
};
