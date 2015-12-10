<?php

$recepient = "youremail@mail.ru"; // здесь указывать адрес электронной почты
$sitename = "Название сайта";

$email = trim($_POST["email"]);
$phoneNumber = trim($_POST["phoneNumber"]);
$text = trim($_POST["text"]);
$set = trim($_POST['set']);
$spider = trim($_POST['spider']);
$message = "Имя: $email \nТелефон: $phoneNumber \nНабор: $set \nПаук: $spider \nТекст: $text ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

echo mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
