
  // document.getElementById("form").addEventListener("submit", async function(event) {
  //   event.preventDefault(); 

  //   const form = event.target;
  //   const formData = new FormData(form);

  //   try {
  //     const response = await fetch("/send.php", {
  //       method: "POST",
  //       body: formData
  //     });

  //     if (response.ok) {
  //       document.getElementById("result").textContent = "✅ Форма успешно отправлена!";
  //     } else {
  //       document.getElementById("result").textContent = "❌ Ошибка при отправке!";
  //     }
  //   } catch (error) {
  //     document.getElementById("error").textContent = "⚠️ Ошибка сети!";
  //     console.error(error);
  //   }
  // });


document.getElementById("form").addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const phoneInput = document.getElementById("phone");
  const errorDiv = document.getElementById("error");
  const phone = phoneInput.value.trim();

  // Простая проверка
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    errorDiv.style.display = "block";
    return;
  } else {
    errorDiv.style.display = "none";
  }

  try {
    const response = await fetch("send.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "phone=" + encodeURIComponent(phone)
    });

    if (response.ok) {
      window.location.href = "thanks.php";
    } else {
      alert("Ошибка при отправке данных");
    }
  } catch (err) {
    alert("Сеть недоступна: " + err.message);
  }
});
