<?php

$frm_name  = "Youname";
$recepient = "youmail@ya.ru";
$sitename  = "Название Сайта";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email/phone"]);
$text = trim($_POST["text"]);

$message = "
E-mail/Телефон: $email <br>
Имя: $name <br>
Сообщение: $text
";

mail($recepient, $subject, $text, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
