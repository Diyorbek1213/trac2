<?php
session_start();

$login = $_POST['login'] ?? '';
$password = $_POST['password'] ?? '';

$password = md5($password . "a5s13asd1a");

$mysql = new mysqli('localhost', 'root', '', 'register - trac');

$result = $mysql->query("SELECT * FROM `users` WHERE `login` =
		'$login' AND `password` = '$password' ");

$user = $result->fetch_assoc();

if (count($user) == 0) {
	echo "no such user found";
	exit();
}

$mysql->close();

$_SESSION['logged'] = true;
header('Location: /');
