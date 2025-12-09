<?php
    $a = 1;
    $b = "1";
    $c = $a+$b;
    $d = $a.$b;
    $e = $a*$b;
    echo "hello world!";
    echo "<br>";
    echo $c;
    echo "<br>";
    echo $d;
    echo "<br>";
    echo $e;

    echo "
    <div class='container'>
        <h1>ini kode html</h1>
    </div>
    ";

    if($d>12) {
        ?>
        <div class="container">
            <h1>ini kode html</h1>
        </div>
        <?php
    }

    echo "<br>";
    echo $e;
?>