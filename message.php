<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];
if (!empty($email) && !empty($name)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "youremail@gmail.com";
        $subject = "Form: $name <$email>";
        $body = "name: $name\nEmail: $emial\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards, \n$name";
        $sender = "from: $email";
        if (mail($receiver, $subject, $body, $sender)) {
            echo "your message has been sent :)";
        } else {
            echo "Sorry, failed to send your msg!!";
        }
    } else {
        echo "enter a valide email address :(";
    }
} else {
    echo "all fields are requiered!!";
}
