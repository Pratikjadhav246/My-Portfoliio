<?php

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Prepare email content
$to = 'pratik246jadhav@gmail.com';
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

// Send email
mail($to, $subject, $body);

// Return a success message
echo 'Form submitted successfully!';
?>
