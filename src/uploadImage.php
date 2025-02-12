<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$uploadDir = "nutriscanner_photos/";

// Ensure the folder exists
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_FILES["image"]) || !isset($_POST["storeId"])) {
        echo json_encode(["error" => "Missing image or store ID"]);
        exit;
    }

    $storeId = $_POST["storeId"];
    $file = $_FILES["image"];

    // Get the original file extension
    $ext = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    $newFileName = $storeId . "." . $ext;  // Store ID with correct extension
    $filePath = $uploadDir . $newFileName;

    if (move_uploaded_file($file["tmp_name"], $filePath)) {
        echo json_encode([
            "message" => "File uploaded successfully",
            "filename" => $newFileName  // Returning full file name
        ]);
    } else {
        echo json_encode(["error" => "Failed to upload file"]);
    }
} else {
    echo json_encode(["error" => "Invalid request"]);
}

?>
