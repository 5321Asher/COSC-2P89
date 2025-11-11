#!/usr/bin/php-cgi
<html>

<body>
    Hello!<br />
    <?php
    include 'lab_5_helper.php';

    $name = null;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_input(INPUT_POST, "name");
    }
    ?>

    <form action="" method="POST">
        <label>name:</label>

        <input type="text" name="name" required>

        <button type="submit">update</button>
    </form>

<?php
    echo '<br>';
    if (!empty($name)) {
        echo "hello " . $name;
    } else {
        echo "hello, im not sure i know you";
    }
?>
</body>

</html>