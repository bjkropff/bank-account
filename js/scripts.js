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
  $("form#create").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();

    var newAccount = Object.create(BankAccount);
    newAccount.name = inputtedName;

    var inputtedBalance = parseInt($("input#initial").val());

    newAccount.deposit(inputtedBalance);

    $(".balance").text(newAccount.balance);
    alert(newAccount.balance);
  });
});
