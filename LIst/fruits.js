<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript List Example</title>
</head>
<body>
  <h1>My List</h1>
  <ul id="myList"></ul>

  <script>

    const items = ["Apple", "Banana", "Cherry"];


    const listElement = document.getElementById("myList");


    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      listElement.appendChild(li);
    });
  </script>
</body>
</html>
