<?php
$servername = "localhost";
$username   = "root";
$password   = ""; // ganti kalau password mysql kamu beda
$dbname     = "projectweb"; // nama database kamu

$conn = new mysqli($servername, $username, $password, $dbname);

// cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
