<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <title>Nyuss Coffee Shop</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <main id="app">
        <navigation v-if="!$route.meta.hideNavigation"></navigation>

        <div class="py-4">
            <router-view></router-view>
        </div>
    </main>
    <script src="js/app.js"></script>
</body>
</html>