<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>OPENSHIFT</title>

    <!-- librerias firebase-->
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase-firestore.js"></script>


    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Cabin:700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/grayscale.min.css" rel="stylesheet">

  </head>

  <body id="page-top">

    <!-- Download Section -->
    <section id="download" class="download-section content-section text-center">
    <h1>Agregar Estudiante</h1>
    <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
           
                
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input id="nombre" class="form-control " type="text" name="nombre" placeholder="Digite su Nombre">
                        <span class="help-block"></span>
                        </input>
                    </div>

                    <div class="form-group">
                        <label for="apellido">Apellido</label>
                        <input id="apellido" class="form-control " type="text" name="apellido" placeholder="Digite su Apellido">
                        <span class="help-block"></span>
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="carrera">Carrera</label>
                        <input id="carrera" class="form-control " type="text" name="carrera" placeholder="Digite su Carrera">
                        <span class="help-block"></span>
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="semestre">Semestre</label>
                        <input id="semestre" class="form-control " type="text" name="semestre" placeholder="Digite su Semestre">
                        <span class="help-block"></span>
                        </input>
                    </div>
                    <div class="container">
                    <button class="btn btn-success" id="boton" onclick="guardar()" >Guardar</button>
                    <a href="index.html"  class="btn btn-info">volver</a>
  
    </div>
                   
                
            </div>
        </div>
    </div>

    </section>



    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Custom scripts for this template -->
    <script src="js/grayscale.min.js"></script>
    <script src="app.js"></script> 

  </body>

</html>
