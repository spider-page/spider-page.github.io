<?php

$recepient = "youremail@mail.ru"; // здесь указывать адрес электронной почты
$sitename = "Название сайта";

$phoneNumber = trim($_POST["phoneNumber"]);
$message = "Телефон: $phoneNumber";

$pagetitle = "Callback \"$sitename\"";

echo mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
