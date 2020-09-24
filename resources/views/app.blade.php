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
    <!-- General CSS Files -->
    <link
      rel="stylesheet"
      href="/assets/modules/bootstrap/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="/assets/modules/fontawesome/css/all.min.css" />

    <!-- CSS Libraries -->
    <link rel="stylesheet" href="/assets/modules/jqvmap/dist/jqvmap.min.css" />
    <link
      rel="stylesheet"
      href="/assets/modules/summernote/summernote-bs4.css"
    />
    <link
      rel="stylesheet"
      href="/assets/modules/owlcarousel2/dist/assets/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="/assets/modules/owlcarousel2/dist/assets/owl.theme.default.min.css"
    />

    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/all.css">
</head>
<body>
    <main id="app">
        <navigation v-if="!$route.meta.hideNavigation"></navigation>

        <div>
            <router-view></router-view>
        </div>
</main>
    <script src="/js/app.js"></script>
    <script src="/js/all.js"></script>

    <script src="/assets/modules/jquery.min.js"></script>
    <script src="/assets/modules/popper.js"></script>
    <script src="/assets/modules/tooltip.js"></script>
    <script src="/assets/modules/bootstrap/js/bootstrap.min.js"></script>
    <script src="/assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
    <script src="/assets/modules/moment.min.js"></script>

    <script src="/assets/modules/jquery.sparkline.min.js"></script>
    <script src="/assets/modules/chart.min.js"></script>
    <script src="/assets/modules/owlcarousel2/dist/owl.carousel.min.js"></script>
    <script src="/assets/modules/summernote/summernote-bs4.js"></script>
    <script src="/assets/modules/chocolat/dist/js/jquery.chocolat.min.js"></script>

 
</body>
</html>