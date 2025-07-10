<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Kalau request-nya OPTIONS, balikin kosong aja
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// koneksi database
include 'koneksi.php';

// ambil data dari frontend
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name) && isset($data->email) &&
    isset($data->subject) && isset($data->message)
) {
    $name    = $conn->real_escape_string($data->name);
    $email   = $conn->real_escape_string($data->email);
    $subject = $conn->real_escape_string($data->subject);
    $message = $conn->real_escape_string($data->message);

    $sql = "INSERT INTO contact_messages (name, email, subject, message)
            VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Pesan berhasil dikirim!"]);
    } else {
        echo json_encode(["message" => "Gagal mengirim pesan: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Data tidak lengkap."]);
}

$conn->close();
?>
