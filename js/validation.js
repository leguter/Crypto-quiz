  document.getElementById("form").addEventListener("submit", function(event) {
    const phone = document.getElementById("phone").value.trim();
    const error = document.getElementById("error");

    // регулярка для українського номера +380 і ще 9 цифр
    const regex = /^\+380\d{9}$/;

    if (!regex.test(phone)) {
      event.preventDefault(); // ❌ блокує відправку форми
      error.textContent = "The phone number is incorrect! Format: +380XXXXXXXXX";
    } else {
      error.textContent = "";
    }
  });