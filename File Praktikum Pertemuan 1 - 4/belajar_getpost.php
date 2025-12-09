<form action="" method="post">
    <input type="text" name="id" id="">
    <button type="submit">Kirim</button>
</form>

<?php
var_dump($_POST);
echo "<br>";
echo "Data yang dikirim : ";
echo $_POST['id'];
?> 