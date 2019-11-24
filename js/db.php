<?php
$mysqli = new Mysqli('127.0.0.1', 'root', '', 'new_test_db');
/** Получаем наш ID статьи из запроса */

$email = trim($_POST['email']);
$name = trim($_POST['name']);
$coments = trim($_POST['coments']);

if($email && $name && $coments){
//вставляем запись в БД
  $query = $mysqli->query("INSERT INTO `users` VALUES(NULL, '$email', '$name', '$coments')");
//извлекаем все записи из таблицы
  $query2 = $mysqli->query("SELECT * FROM `users` ORDER BY `id` DESC");

  while($row = $query2->fetch_assoc()){
    $users['id'][]=$row['id'];
    $users['email'][]=$row['email'];
    $users['name'][]=$row['name'];
    $users['coments'][]=$row['coments'];
  }
  $message = 'Все хорошо';
}else{
  $message = 'Не удалось записать и извлечь данные';
}
/** Возвращаем ответ скрипту */

// Формируем масив данных для отправки
$out = array(
  'message' => $message,
  'users' => $users,
  
);

// Кодируем данные в формат json и отправляем
echo json_encode($out);
exit;

?>
