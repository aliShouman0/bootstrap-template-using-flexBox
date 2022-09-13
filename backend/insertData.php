<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500 ");
include("getconnection.php");
$done = false;
if (isset($_POST["fullName"]) && isset($_POST["email"]) && isset($_POST["phone"]) && isset($_POST["message"])) {
  $fullName = $_POST["fullName"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];
  $query = $mysqli->prepare("INSERT INTO data VALUES(?,?,?,?)");
  $query->bind_param("ssss", $fullName, $email, $phone, $message);

  if ($query->execute()) {
    $done = true;
  }
}

$result = [
  "done" => $done
];
echo json_encode($result);
