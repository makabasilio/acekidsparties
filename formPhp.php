<?php


$package = $_POST['package'];

$selectYourHero = $_POST['selectYourHero'];

$parentsName = $_POST['parentsName'];

$phone = $_POST['phone'];

$email = $_POST['email'];

$childsName = $_POST['childsName'];

$childsAge = $_POST['childsAge'];

$day = $_POST['day'];

$month = $_POST['month'];

$time = $_POST['time'];

$location = $_POST['location'];

$postcode = $_POST['postcode'];

$howMany = $_POST['howMany'];

$findUs = $_POST['findUs'];

$checkbox = $_POST['checkbox'];

$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$Subject = $_POST['package'];









$msg = "Package: ".($package)."\r\n"."<br />";

$msg .= "Selected Hero: ".($selectYourHero)."\r\n"."<br />";

$msg .= "Parent's Name: ".($parentsName)."\r\n"."<br />";

$msg .= "Phone: ".($phone)."\r\n"."<br />";

$msg .= "Email: ".($email)."\r\n"."<br />";

$msg .= "Child's Name: ".($childsName)."\r\n"."<br />";

$msg .= "Child's Age: ".($childsAge)."\r\n"."<br />";

$msg .= "Party Date: ".($day)."\t".($month)."\r\n"."<br />";

$msg .= "Party Time: ".($time)."\r\n"."<br />";

$msg .= "Party Location: ".($location)."\r\n"."<br />";

$msg .= "Postcode: ".($postcode)."\r\n"."<br />";

$msg .= "How Many Children: ".($howMany)."\r\n"."<br />";

$msg .= "How Did you find us?: ".($findUs)."\r\n"."<br />";



if (isset($_POST['checkbox'])) {
    $msg .= "Terms and Conditions: I ".($parentsName)." Agreed with Ace Kids Parties terms and conditions."."\r\n"."<br />";
}

$msg .= "Message: ".($message)."\r\n"."<br />";




$mensagem = "$msg";

$remetente = "$email";

$destinatario = "maka@acekidsparties.com.au";

$assunto = "$package";

$headers = "From: ".$remetente."\nContent-type: text/html"; # o 'text/html' é o tipo mime da mensagem



// eu criei um campo de validaçao onde se 'if' os campos estiverem vazios ele nao vai aceitar e repassa o usuario para a pagina de erro para o usuario tentar novamente.



	
	
@mail($destinatario,$assunto,$mensagem,$headers);


header('Location: index.html');




?>