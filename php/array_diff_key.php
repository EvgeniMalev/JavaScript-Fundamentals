<?php

$array1 = array(
    "a" => "Apple",
    "b" => "Banana",
    "c" => "Cherry"
);

$array2 = array(
    "a" => "Avocado",
    "c" => "Cucumber",
    "d" => "Dragonfruit"
);

$result = array_diff_key($array1, $array2);


print_r($result);
?>
