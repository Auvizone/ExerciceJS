<?php

$servername="localhost";
$username = "root";
$password = "test";
$dbName = "ExerciceJS";

try {
    $bdd = new PDO("mysql:host=$servername", $username, $password);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "use $dbName";
    $bdd->exec($sql);

    echo "Bien connecté à la BDD";
}
catch(Exception $e) {
    die('Erreur :' .$e->getMessage());
}

$data = $bdd->query("SELECT * FROM `Personnages`");
$data = $data->fetch();
