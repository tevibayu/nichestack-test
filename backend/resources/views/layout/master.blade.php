<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>Nichestack Backend Test</title>
  <!-- CSS files -->
  <link href="./dist/css/tabler.min.css" rel="stylesheet"/>
  <link href="./dist/css/tabler-flags.min.css" rel="stylesheet"/>
  <link href="./dist/css/tabler-payments.min.css" rel="stylesheet"/>
  <link href="./dist/css/tabler-vendors.min.css" rel="stylesheet"/>
  <link href="./dist/css/demo.min.css" rel="stylesheet"/>
  <script type="text/javascript">
    var my_token = '{{ Session::token() }}';
  </script>
</head>
<body class="antialiased border-top-wide border-primary d-flex flex-column">
  <div class="flex-fill d-flex flex-column justify-content-center py-4">

    @include('includes.notification')
    <div class="container">
      @yield('content')
    </div>
  </div>


  <!-- Libs JS -->
  <!-- Tabler Core -->
  <script src="./js/jquery-1.11.2.min.js"></script>
  <script src="./dist/js/tabler.min.js"></script>
</body>

</html>