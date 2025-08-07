<?php
    header('Content-Type: application/json');

    $validMail = "user@user.fr";
    $validPassword = "password";

    $email = $_POST['input-email'] ?? null;
    $password = $_POST['input-password'] ?? null;

    $json = [];

    if ($validMail === $email) {
        if ($validPassword === $password) {
            $json = [
                "status" => "success",
                "username" => explode("@", $email)[0]
            ];
        } else {
            $json = [
                "status" => "error",
                "error" => "Invalid password."
            ];
        }
    } else {
        $json = [
            "status" => "error",
            "error" => "Invalid mail."
        ];
    }

    echo json_encode($json);