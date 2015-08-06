var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
        this.balance = this.balance - amount;
    },
    deposit: function(amount) {
        this.balance = this.balance + amount;
    }
};

$(document).ready(function() {
  // $('#managed').hide();
  $('#manage').hide();
  $('#withdraw').hide();
  $('.account').hide();
  $('.signin').hide();


  var newAccount = Object.create(BankAccount);
  $('form#create').submit(function(event) {
    event.preventDefault();
    var inputtedName = $('input#name').val();
    var inputtedBalance = parseInt($('input#initial').val());
    newAccount.name = inputtedName;
    newAccount.deposit(inputtedBalance);
    $('.balance').text(newAccount.balance);
    // $('#manage').show();
    $('#create').hide();
    $('.login').hide();
    $('#manage').show();
    $('#withdraw').show();
    $('.account').show();
  });

  $('.login').click(function(event){
    event.preventDefault();
    $('#create').hide();
    $('.login').hide();
    $('.signin').show();
  });

  $('form#signin').submit(function(event) {
    event.preventDefault();
    $('.signin').hide();
    $('#manage').show();
    $('#withdraw').show();
    $('.account').show();
  });

  $('form#manage').submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($('input#deposit').val());
    newAccount.deposit(newBalance);
    $('.balance').text(newAccount.balance);
  // $('#manage').unbind('submit');
  });

  $('form#withdraw').submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($('input#withdraw').val());
    newAccount.withdraw(newBalance);
    $('.balance').text(newAccount.balance);
  });
});
