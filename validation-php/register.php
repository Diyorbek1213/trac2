<?php
$login = $_POST['login'] ?? '';
$name = $_POST['name'] ?? '';
$password = $_POST['password'] ?? '';
$email = $_POST['email'] ?? '';
$telegram = $_POST['telegram'] ?? '';

// I leave it like that but just doing "echo" is not the best way  production
// Instead of mb_strlen here you can add 'min' and 'max' lenght attributes in your html form
if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
	echo "Invalid login length";
	exit();
} else if (mb_strlen($name) < 3 || mb_strlen($name) > 90) {
	echo "Invalid name length";
	exit();
} else if (mb_strlen($password) < 3 || mb_strlen($password) > 90) {
	echo "Invalid password length";
	exit();
} else if (mb_strlen($email) < 3 || mb_strlen($email) > 90) {
	echo "Invalid email length";
	exit();
} else if (mb_strlen($telegram) < 3 || mb_strlen($telegram) > 90) {
	echo "Invalid telegram length";
	exit();
}

$password = md5($password . "a5s13asd1a");

$mysql = new mysqli('localhost', 'root', '', 'register - trac');
$mysql->query(" INSERT INTO `users` (`login`, `password`, `name`, `e-mail`, `telegram`) 
	VALUES('$login', '$password', '$name', '$email', '$telegram') ");

$mysql->close();

header('Location: /');
