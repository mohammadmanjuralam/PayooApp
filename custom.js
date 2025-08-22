document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault;
  const mobileNumber = 123456;
  const pinNumber = 24067;

  const mobileNumberValue = document.getElementById("mobileNumber").value;
  const mobileNumberValueConvert = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pinNumber").value;
  const pinNumberValueConvert = parseInt(pinNumberValue);

  if (
    mobileNumberValueConvert === mobileNumber &&
    pinNumberValueConvert === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    console.log("invalid");
  }
});
