<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include('include/twig.php');
    $twig = InitTwig();

    echo $twig->render('log-in.html.twig', [

    ]);