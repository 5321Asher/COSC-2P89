#!/usr/bin/php-cgi
<?php
session_start();

if (!isset($_SESSION["visit"])) {
    echo"this is your first time visiting";
    $_SESSION["visit"] = "true";
} else {
    echo "this is not your first timech visiting";
}
?>