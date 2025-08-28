<?php
// Устанавливаем cookie
setcookie("visited", "true", time() + 3600, "/"); // хранится 1 час

// Можно вывести простое сообщение
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Спасибо!</title>
</head>
<body>
  <h1>Спасибо за вашу заявку!</h1>
  <p>Мы свяжемся с вами в ближайшее время.</p>
</body>
</html>
