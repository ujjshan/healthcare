<?php

$fname = $_POST['fname'];
$dob = $_POST['$dob'];
$email = $_POST['email'];
$mno = $_POST['mno'];
// $m = $_POST['m'];
// $f = $_POST['f'];
// $o = $_POST['o'];
$gender = $_POST['gender'];
$height = $_POST['height'];
$weight = $_POST['weight'];
$bp = $_POST['bp'];
$bg = $_POST['bg'];
$pc = $_POST['pc'];
$es = $_POST['es'];
$docn = $_POST['docn'];
$did = $_POST['did'];

$conn = new mysqli('localhost','root','','regist');
if($conn->connect_error){
    die('connection Failed :' .$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into registration(fname , dob ,email ,mno , gender , height , weight , bp , bg , pc , es ,docn ,did)values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param("sisissssssssi", $fname, $dob, $email, $mno, $gender, $height, $weight, $bp, $bg, $pc, $es, $docn, $did);
    $stmt->execute();
    echo "registered successfully........!";
    $stmt->close();
    $conn->close();
}

?>