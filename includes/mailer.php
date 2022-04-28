<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

// form variables
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];


try {
    //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'comercial@twco.com.br';                //SMTP username
    $mail->Password   = 'TWcliente7182#';                       //SMTP password
    $SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;               //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('comercial@twco.com.br', 'nao-responder');	
    $mail->addAddress('admin@twco.com.br', 'Timberwood');       //Add a recipient
    
    //Attachments

    //Content
    $mail->isHTML(true);                                        //Set email format to HTML
    $mail->Subject = 'Contato pelo site Timberwood';
    $mail->Body    = 'Nome: '.$name.'<br>Email: '.$email.'<br>Telefone: '.$phone.'<br>Assunto: '.$subject.'<br>Mensagem: '.$message;

    $mail->send();
    header('Location: ../index.html');
} catch (Exception $e) {
    echo "Mensagem não pode enviada. Erro: {$mail->ErrorInfo}";
   // header('Location: ../index.html');
}