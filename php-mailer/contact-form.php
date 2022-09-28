<?
require("class.phpmailer.php");

$mail = new PHPMailer();
$mail->IsSMTP();                                    // send via SMTP
$mail->Host     = "mail.erhanyasar.com.tr";         // SMTP servers
$mail->SMTPAuth = true;                             // turn on SMTP authentication
$mail->Username = "mail@erhanyasar.com.tr";         // SMTP username
$mail->Password = "Sw-727626";                      // SMTP password
$mail->Port     = 587;
$mail->From     = "mail@erhanyasar.com.tr";         // smtp kullanıcı adınız ile aynı olmalı
$mail->Fromname = "erhanyasar.com.tr";
$mail->AddAddress("kayit@erhanyasar.com.tr","admin");
$mail->Subject  =  $_POST['Form Girişi'];
$mail->Body     =  implode("    ",$_POST);

if(!$mail->Send())
{
   echo "Mesaj Gönderilemedi <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Mesaj Gönderildi";
?>