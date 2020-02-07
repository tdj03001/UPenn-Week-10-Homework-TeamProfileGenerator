function generateManagerHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/main.css">
  <title>Manager Profile</title>
</head>

<body>

  <div class="card" style="width: 18rem;">
    <div class="card-header">
      <p>${data.name}</p>
      <br>
      <p>${data.title}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Office number: ${data.officeNum}</li>
    </ul>
  </div>

</body>

</html>`;
}

module.exports = generateManagerHTML;