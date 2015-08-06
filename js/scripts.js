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

/*
(The hook[hooking the players into the game])The Mysterious: a mysterious death brings many to a small town in the middle of nowhere. Curiousity might get the better of them.
(The golem[the difficulty, the opposition])The Funerial: the start where they all meet, join together, ask questions, put some pieces together, make sense of what is going on
(The climate)The Happening/Inncedent: where they begin to realize this is bigger then what they thought.
(The twist/conclusion)The Confrontation: the only action that is left. They must move on this or there needs will not be met, values will be at stake, obligations left unfulfilled



*/
