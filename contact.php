<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

$honeypot = trim($_POST['company'] ?? '');
if ($honeypot !== '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Spam detected.'
    ]);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Missing required fields.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email address.'
    ]);
    exit;
}

$cleanName = strip_tags($name);
$cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
$cleanMessage = strip_tags($message);

$to = 'riccijandro.dev@gmail.com';
$subject = 'Nuevo mensaje desde portafolio';
$body = "Nombre: {$cleanName}\nEmail: {$cleanEmail}\n\nMensaje:\n{$cleanMessage}";
$headers = [
    'From: noreply@localhost',
    'Reply-To: ' . $cleanEmail,
    'X-Mailer: PHP/' . phpversion()
];

$mailSent = false;
if (function_exists('mail')) {
    $mailSent = @mail($to, $subject, $body, implode("\r\n", $headers));
}

$logLine = sprintf(
    "[%s] name=%s email=%s message=%s%s",
    date('c'),
    str_replace(["\r", "\n"], ' ', $cleanName),
    str_replace(["\r", "\n"], ' ', $cleanEmail),
    str_replace(["\r", "\n"], ' ', $cleanMessage),
    PHP_EOL
);

@file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . 'messages.log', $logLine, FILE_APPEND | LOCK_EX);

echo json_encode([
    'success' => true,
    'message' => $mailSent ? 'Message sent.' : 'Message saved locally. Configure SMTP for email delivery.'
]);
