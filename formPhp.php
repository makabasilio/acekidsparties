<?php


$ParentName = $_POST['ParentName'];

$Phone = $_POST['Phone'];

$Email = $_POST['Email'];

$Day = $_POST['Day'];

$Month = $_POST['Month'];

$Time = $_POST['Time'];

$Hero = $_POST['Hero'];

$HeroPackage = $_POST['HeroPackage'];

$Address = $_POST['Address'];

$PostCode = $_POST['PostCode'];

$childName = $_POST['childName'];

$KidAge = $_POST['KidAge'];

$HowMany = $_POST['HowMany'];

$Message = filter_var($_POST['Message'], FILTER_SANITIZE_STRING);

$HowFindUs = $_POST['HowFindUs'];


$CheckBox = $_POST['CheckBox'];


$Subject = $_POST['HeroPackage'];









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

$msg .= "How Many Kids: ".($HowMany)."\r\n"."<br />";


if (isset($_POST['CheckBox'])) {
    $msg .= "Terms and Conditions: I ".($parentName)." Agreed with Ace Kids Parties terms and conditions.";
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