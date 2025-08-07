<?php
    header('Content-Type: application/json');

    // Identifiants considérés juste par l'exercice.
    /* N.B. N°1
     * J'ai pris la liberté de changer le format du mail, dû à la contrainte HTML de l'input de type email obligeant l'usage d'un @.
     * Ainsi, "user" est devenu "user@user.fr". :>
     * */
    /* N.B. N°2
     * Évidemment, il est préférable d'initialiser une BDD pour les plus gros projets.
     * Toutefois, dans ce contexte, il est préférable de passer par des variables ou des arrays si plusieurs utilisateurs.
     * */
    $validMail = "user@user.fr";
    $validPassword = "password";

    // Assignation des valeurs entrées par l'utilisateur et récupérés par le serveur SI elles existent.
    // Assignation de null dans le cas où elles n'existent pas.
    $email = $_POST['input-email'] ?? null;
    $password = $_POST['input-password'] ?? null;

    $json = [];

    // Batterie if/else permettant de construire l'objet $json renvoyé par le script.
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

    // Renvoie de l'objet $json au format... JSON.
    echo json_encode($json);