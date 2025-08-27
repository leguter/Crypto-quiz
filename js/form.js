
  document.getElementById("form").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/send.php", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        document.getElementById("result").textContent = "✅ Форма успешно отправлена!";
      } else {
        document.getElementById("result").textContent = "❌ Ошибка при отправке!";
      }
    } catch (error) {
      document.getElementById("error").textContent = "⚠️ Ошибка сети!";
      console.error(error);
    }
  });