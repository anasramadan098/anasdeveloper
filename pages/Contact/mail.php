<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phnum= $_POST['email'];
$number= $_POST['email'];
$message= $_POST['message'];
$to = "anasramadanking@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n PhoneNumber =" . $phnum . "\r\n Budget =" . $number . "\r\n Message =" . $message ;
$headers = "From: noreply@yoursite.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
// redirect
header("Location:thankyou.html");
?>