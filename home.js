// ADD MONEY
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const accountnumber = 12345678910;
    const pinNUMBER = 1234;
    const bank = document.getElementById("bank");
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = document.getElementById("add-pin").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Account number must be at least 11 characters");
    } else if (
      parseInt(accountNumber) !== accountnumber &&
      parseInt(pinNumber) !== pinNUMBER
    ) {
      alert("Both account number and pin are incorrect");
    } else if (parseInt(accountNumber) !== accountnumber) {
      alert("Invalid account number");
    } else if (parseInt(pinNumber) !== pinNUMBER) {
      alert("Invalid pin number");
    } else if (isNaN(amount) || amount < 50) {
      alert("Minimum Deposit: 50 Tk");
    } else {
      const totalBalance = amount + availableBalance;
      document.getElementById("available-balance").innerText = totalBalance;
      alert(amount + " Tk successfully Debited to your Wallet");
    }
  });

//   Toggle-features'
// add money
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("Get-bonus-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";
  document.getElementById("transaction-parent").style.display = "none";
  document.getElementById("voucher").style.display = "none";
});

// cashOut

document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("Get-bonus-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";
  document.getElementById("transaction-parent").style.display = "none";
  document.getElementById("voucher").style.display = "none";
});

//transfer

document.getElementById("transfer-btn").addEventListener("click", function () {
  document.getElementById("transfer-money-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("Get-bonus-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";
  document.getElementById("transaction-parent").style.display = "none";
  document.getElementById("voucher").style.display = "none";
});

// Get bonus
document.getElementById("bonus-btn").addEventListener("click", function () {
  document.getElementById("Get-bonus-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";
  document.getElementById("transaction-parent").style.display = "none";
  document.getElementById("voucher").style.display = "none";
});

// pay bill
document.getElementById("pay-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("pay-bill-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("Get-bonus-parent").style.display = "none";
  document.getElementById("transaction-parent").style.display = "none";
  document.getElementById("voucher").style.display = "none";
});

// transaction
document
  .getElementById("transaction-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("transaction-parent").style.display = "flex";

    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("Get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("voucher").style.display = "none";
  });

//=================================================================================
// CASH-OUT
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const pinN = 1234;
    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const agentPin = parseInt(document.getElementById("agent-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // validation
    if (agentNumber.length !== 11) {
      alert("Agent Number 11 Character long");
    } else if (withdrawAmount < 50) {
      alert("minimum withdraw amount is : 50");
    } else if (agentPin !== pinN) {
      alert("Pin Number Invalid");
    } else if (availableBalance === 0 && withdrawAmount >= 50) {
      alert("Insuffiecient Balance");
    } else {
      const cashOutBalance = availableBalance - withdrawAmount;
      document.getElementById("available-balance").innerText = cashOutBalance;
    }
  });

// transfer money
document
  .getElementById("send-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const pin = 1234;
    const userNumber = document.getElementById("user-number").value;
    const transferAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    const transferPin = parseInt(document.getElementById("transfer-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (userNumber.length !== 11) {
      alert("user number must be 11 character");
    } else if (transferAmount < 50) {
      alert("transfer amount minimum : 50 tk");
    } else if (transferPin !== pin) {
      alert("Invalid Pin Number");
    } else if (availableBalance === 0 && transferAmount >= 50) {
      alert("insuffiecient Balance");
    } else if (isNaN(transferAmount)) {
      alert("please input amount");
    } else {
      const totalAmount = availableBalance - transferAmount;
      document.getElementById("available-balance").innerText = totalAmount;
    }
  });

// GET BONUS
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const couponCode = 2020;
    const couponNumber = parseInt(
      document.getElementById("coupon-number").value
    );
    if (isNaN(couponNumber)) {
      alert("invalid input please write only numbers");
    } else if (couponNumber !== couponCode) {
      alert("Wrong coupon Number");
    } else {
      alert("Bonus sent successfully");
    }
  });

// PAY BILL
document
  .getElementById("pay-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const pinNumber = 1234;
    const paybank = document.getElementById("pay-bank").value;
    const accountNumber = document.getElementById(
      "biller-account-number"
    ).value;
    const payamount = parseInt(document.getElementById("pay-amount").value);
    const pin = parseInt(document.getElementById("pay-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (accountNumber.length !== 11) {
      alert("account number must be 11 character");
    } else if (payamount < 50) {
      alert("minimum pay bill amount is : 50");
    } else if (availableBalance < payamount) {
      alert("insufficent balance");
    } else if (isNaN(payamount)) {
      alert("amount value is empty");
    } else if (pin !== pinNumber) {
      alert("incorrect Pin Number");
    } else {
      const payBalance = availableBalance - payamount;
      document.getElementById("available-balance").innerText = payBalance;
    }
  });
