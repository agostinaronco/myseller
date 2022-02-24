<?php

if(!isset($_SERVER['HTTP_REFERER'])){
  // redirect them to your desired location
  header('location:../index.html');
  exit;
}

header('Content-Type: application/json; charset=utf-8');
require 'model/class.phpmailer.php';
require 'model/class.pop3.php';
require 'model/class.smtp.php';



try {
  $nombre=isset($_POST["nombre"])?$_POST["nombre"]:null;
  $mail=isset($_POST["mail"])?$_POST["mail"]:null;
  $telefono=isset($_POST["telefono"])?$_POST["telefono"]:null; 
  $mensaje=isset($_POST["mensaje"])?$_POST["mensaje"]:null;

  $subject = 'Sitio web | Formulario de contacto';

$cuerpo = '<html><body>';
$cuerpo .= '<table style="width: 500px; border: 1px solid rgb(93, 65, 221);  border-collapse: collapse;"><tbody><tr>';
$cuerpo .= '<td colspan="2" style="background-color:rgb(93, 65, 221); padding: 10px; color: white">MySeller</td></tr>';
$cuerpo .= '<tr><td style="padding: 5px">Nombre:</td><td style="padding: 5px">';
$cuerpo .= $nombre;
$cuerpo .= '</td></tr>';
$cuerpo .= '<tr><td style="padding: 5px;">Apellido:</td><td style="padding: 5px">';
$cuerpo .= $mail;
$cuerpo .= '</td></tr>';
$cuerpo .= '<tr><td style="padding: 5px;">Telefono:</td><td style="padding: 5px">';
$cuerpo .= $telefono;
$cuerpo .= '</td></tr>';
$cuerpo .= '<tr><td style="padding: 5px;">Ciudad:</td><td style="padding: 5px">';
$cuerpo .= $mensaje;
$cuerpo .= '</td></tr>';
$cuerpo .=  '</tbody></table>';
$cuerpo .= '</body></html>';

$mail = new PHPMailer;
$mail->IsSMTP();
$mail->SMTPDebug  = 0;
$mail->Host       = '';
$mail->Port       = ;
$mail->SMTPSecure = '';
$mail->SMTPAuth   = ;
$mail->Username   = "";
$mail->Password   = "";
$mail->SetFrom("", "MySeller");
$mail->AddAddress('', 'MySeller');
$mail->AddCC('', 'MySeller');
$mail->Subject = '';
$mail->isHTML(true); 
$mail->CharSet="UTF-8";
$mail->Subject = $subject;
$mail->Body = $cuerpo;

if(!$mail->send()) {
  $result = array('status'=>false, 'message'=>"Mailer Error: ".$mail->ErrorInfo);//
  echo json_encode($result);
  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  $result = array('status'=>true, 'message'=>"Message sent.");
  echo json_encode($result);
}
  
} catch (Exception $e) {
  echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}

?>


