let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

let testEmails = [
  "notanemail.com",//false
  "workingexample@email.com",//true
  "another_working@somethingelse.org",//rue
  "notworking@1.com",//false
];

testEmails.forEach((address) => {
  console.log(regex.test(address));
});
