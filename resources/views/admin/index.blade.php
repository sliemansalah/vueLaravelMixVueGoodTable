<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    
    <!--begin::Web font -->
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
		<script>
			WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
        </script>
      <!--end::Web font -->

        <!--begin::Global Theme Styles -->
        <link href="{{asset('/')}}vendors/general/base-vendors/css/vendors.bundle.css" rel="stylesheet" type="text/css" />
    		<link href="{{asset('/')}}vendors/general/base-vendors/css/style.bundle.css" rel="stylesheet" type="text/css" />
          
        <!-- For DataTable -->
        <link href="{{asset('/')}}vendors/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css" />

        <title>Metronic Vue CLI | Admin Panel</title>
  </head>
  <body class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
    <div id="app">
      <layout></layout>
    </div>
		<script src="{{asset('/')}}vendors/general/base-vendors/js/vendors.bundle.js" type="text/javascript"></script>
    <script src="{{asset('/')}}vendors/general/base-vendors/js/scripts.bundle.js" type="text/javascript"></script>
        
    <!-- For DataTable -->
    <script src="{{asset('/')}}vendors/custom/datatables/datatables.bundle.js" type="text/javascript"></script>
    <script src="{{asset('/')}}vendors/custom/components/base/sweetalert2.js" type="text/javascript"></script>

		<script src="{{ mix('js/admin/app.js') }}"></script>
  </body>
</html>
