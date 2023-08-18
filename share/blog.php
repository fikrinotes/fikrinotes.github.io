<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Masukkan Judul Berita</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Nova
  * Updated: Jul 27 2023 with Bootstrap v5.3.1
  * Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body class="page-blog">


  <?php 
    $conn = mysqli_connect("localhost","root","","mtikapau");
    $query =  "SELECT * FROM isiberita order by tanggal DESC";
    $data = mysqli_query($conn, $query);
  ?>


  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="d-flex align-items-center">
          <img src="assets/img/mtikapau.png" alt="Logo MTI KAPAU">
          MTI KAPAU
      </h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html" class="active">Home</a></li>
          <li class="dropdown"><a href="about.html"><span>Tentang Kami</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="sejarah.html">Sejarah Berdirinya Yayasan</a></li>
              <li><a href="#">Pendiri dan Tokoh</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="services.html"><span>Profil</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="visimisi.html">Visi dan Misi</a></li>
              <li><a href="struktur.html">Struktur Organisasi</a></li>
              <li><a href="#">Sarana dan Prasarana</a></li>
              <li><a href="#">Komite sekolah</a></li>
              <li><a href="#">Prestasi</a></li>
              <li><a href="#">Kondisi Siswa</a></li>
            </ul>
          </li>
          <li><a href="blog.html">Berita</a></li>
          <!-- <li><a href="team.html">Siswa</a></li> -->
          <li class="dropdown"><a href=""><span>Siswa</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Ekstakulikuler</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/blog-header.jpg');">
      <div class="container position-relative d-flex flex-column align-items-center">

        <h2>Berita</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Berita</li>
        </ol>

      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">

        <div class="row g-5">

          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">

            <div class="row gy-5 posts-list">

              <?php 
                $i = 1;
                while($row=mysqli_fetch_row($data)) {
                  $arr = array("'",$row[2], "'");
                  $nomor_id = join("", $arr);

                  $tanggal = $row[0];
                  $judul = $row[1];
                  $gambar = $row[2];
                  $konten = $row[3];
              ?>
  
              <div class="col-lg-6">
                <article class="d-flex flex-column">

                  <div class="post-img">
                    <img src= <?php echo "./admin/img/".$gambar?> alt="" class="img-fluid">
                  </div>

                  <h2 class="title">
                    <a href="blog-details.html"><?php echo $judul ?></a>
                  </h2>

                  <div class="meta-top">
                    <ul>
                      <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">Admin</a></li>
                      <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01"><?php echo $tanggal ?></time></a></li>
                    </ul>
                  </div>

                  <div class="content">
                    <p>
                      <?php echo $konten ?>
                    </p>
                  </div>

                  <div class="read-more mt-auto align-self-end">
                    <a href="blog-details.html">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>

                </article>
              </div><!-- End post list item -->

              <?php 
                $i++; 
                }
              ?>

            </div><!-- End blog posts list -->

            
            <!-- blog pagination -->
            <!-- End blog pagination -->

          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">

            <div class="sidebar ps-lg-4">

              <div class="sidebar-item recent-posts">
                <h3 class="sidebar-title">Recent Posts</h3>

                <div class="mt-3">

                  <div class="post-item mt-3">
                    <img src="assets/img/blog/blog-recent-1.jpg" alt="" class="flex-shrink-0">
                    <div>
                      <h4><a href="blog-post.html">Nihil blanditiis at in nihil autem</a></h4>
                      <time datetime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div><!-- End recent post item-->

                </div>

              </div><!-- End sidebar recent posts-->


            </div><!-- End Blog Sidebar -->

          </div>

        </div>

      </div>
    </section><!-- End Blog Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

    <div class="footer-content">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <div class="list-pg-map">
              <iframe width="400" height="200" src="https://maps.google.com/maps?q=-0.2743943,100.4049459&amp;hl=id;z=14&amp;output=embed"></iframe> 
              <br><br>
              <span><i>PCG3+6XW, Kapau, Tilatang Kamang, Agam Regency, West Sumatra 26127, Indonesia </i></span>
            </div>
            <div class="social-links d-flex  mt-3">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Informasi</h4>
            <ul>
              <li><i class="bi bi-dash"></i> <a href="sejarah.html">Sejarah MTI Kapau</a></li>
              <li><i class="bi bi-dash"></i> <a href="struktur.html">Struktur Organisasi</a></li>
              <li><i class="bi bi-dash"></i> <a href="#">Komite Sekolah</a></li>
              <li><i class="bi bi-dash"></i> <a href="#">Prestasi Siswa</a></li>
              <li><i class="bi bi-dash"></i> <a href="blog.html">Berita</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Kondisi Sekolah</h4>
            <ul>
              <li><i class="bi bi-dash"></i> <a href="#">Sarana dan Prasarana</a></li>
              <li><i class="bi bi-dash"></i> <a href="#">Ekstrakurikuler Siswa</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Kontak</h4>
            <p>
              Kapau, Kec. Tilatang Kamang <br>
              Kabupaten Agam, Sumatera Barat 26152<br>
              Indonesia <br><br>
              <strong>Telp. :</strong>  (0752) 3407<br>
              <strong>Email:</strong> mtikapau@ymail.com<br>
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="footer-legal">
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>Nova</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer><!-- End Footer --><!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>
