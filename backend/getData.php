<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500 ");
include("getconnection.php");

$query = $mysqli->prepare("SELECT * FROM data ");

if ($query->execute()) {
  $array = $query->get_result();



  while ($row = $array->fetch_assoc()) {
    $result[] = $row;
  }


  echo json_encode($result);
}
