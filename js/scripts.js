var NewAccount = {
  username: 'bnkUser',
  password: 'p1a2s3s4',
  balance: 1000000,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};
//Change #manage FORM to manageForm


$(document).ready(function() {
  // $('#managed').hide();
  $('#manage').hide();
  $('#withdraw').hide();
  $('.account').hide();
  $('.signin').hide();

  var newAccount = Object.create(NewAccount);
  $('form#create').submit(function(event) {
    event.preventDefault();
    var inputtedName = $('input#name').val();
    // if( !( username == 'bnkUser') && !( password == 'p1a2s3s4') && !( balance = 1000000)){
    //   NewAccount.balance = 0;
    // }
    var inputtedBalance = parseInt($('input#initial').val());
    newAccount.name = inputtedName;
    newAccount.deposit(-1000000);
    newAccount.deposit(inputtedBalance);
    $('.balance').text(newAccount.balance);
    $('.display').text(inputtedName);
    // $('#manage').show();
    $('#create').hide();
    $('.login').hide();
    $('#manage').show();
    $('#withdraw').show();
    $('.account').show();
  });

//When login button is clicked, this will hide the starting fields and show the signin field
  $('.login').click(function(event){
    event.preventDefault();
    $('#create').hide();
    $('.login').hide();
    $('.signin').show();
  });

//When signin button is clicked, this will hide the signin fields and show the NewAccount with withdraw/deposit fields
  $('form#signin').submit(function(event) {
    event.preventDefault();
    var userCheck = $('input#username').val();
    var passCheck = $('input#password').val();
    if( userCheck == 'bnkUser' && passCheck == 'p1a2s3s4'){
      $('.display').text(userCheck);
      $('.balance').text(newAccount.balance);
      $('.signin').hide();
      $('#manage').show();
      $('#withdraw').show();
      $('.account').show();
    } else {
      alert('Username or Password incorrect');
      $('#create').hide();
      $('.login').hide();
      $('.signin').show();
    }
  });

  $('form#manage').submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($('input#deposit').val());
    newAccount.deposit(newBalance);
    $('.balance').text(newAccount.balance);
    $('input#deposit').val('');
  });

  $('form#withdraw').submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($('input#withdraw').val());
    newAccount.withdraw(newBalance);
    $('.balance').text(newAccount.balance);
    $('input#withdraw').val('');
  });
});
