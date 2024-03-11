<?php

require_once __DIR__ . '/vendor/autoload.php';

// Configuracion Twig
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
$twig = new \Twig\Environment($loader);

// Renderizado de Pantalla
echo $twig->render('index.twig', ['mensaje' => '¡Hola, Twig con PHP!']);
