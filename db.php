<?php
    $servername = "sql106.epizy.com";
    $username = "epiz_31937077";
    $password = "r6AtJ3nYRkWXk";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=epiz_31937077_mypj", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>