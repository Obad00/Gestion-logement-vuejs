<template>
   <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <a href="/AccueilProprietaire" class="logo d-flex align-items-center">
    <img src="@/assets/img/logo.png" alt="">
  </a>
  <i class="bi bi-list toggle-sidebar-btn"></i>
</div><!-- End Logo -->

<div class="search-bar">
  <form class="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Rechercher" title="Enter search keyword">
    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
  </form>
</div><!-- End Search Bar -->

<nav class="header-nav ms-auto">
  <ul class="d-flex align-items-center">

    <li class="nav-item d-block d-lg-none">
      <a class="nav-link nav-icon search-bar-toggle " href="#">
        <i class="bi bi-search"></i>
      </a>
    </li><!-- End Search Icon-->

    <li class="nav-item dropdown">

      <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i class="bi bi-bell"></i>
        <span class="badge bg-primary badge-number">4</span>
      </a><!-- End Notification Icon -->

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li class="dropdown-header">
          You have 4 new notifications
          <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>
        <li class="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>

      </ul><!-- End Notification Dropdown Items -->

    </li><!-- End Notification Nav -->

    <li class="nav-item dropdown">

      <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i class="bi bi-chat-left-text"></i>
        <span class="badge bg-success badge-number">3</span>
      </a><!-- End Messages Icon -->

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li class="dropdown-header">
          You have 3 new messages
          <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="message-item">
          <a href="#">
            <img src="@/assets/img/messages-1.jpg" alt="" class="rounded-circle">
            <div>
              <h4>Maria Hudson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="message-item">
          <a href="#">
            <img src="@/assets/img/messages-2.jpg" alt="" class="rounded-circle">
            <div>
              <h4>Anna Nelson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="message-item">
          <a href="#">
            <img src="@/assets/img/messages-3.jpg" alt="" class="rounded-circle">
            <div>
              <h4>David Muldon</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>

      </ul><!-- End Messages Dropdown Items -->

    </li><!-- End Messages Nav -->

    <li class="nav-item dropdown pe-3">

      <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src="@/assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
        <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
      </a><!-- End Profile Iamge Icon -->

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li class="dropdown-header">
          <h6>Kevin Anderson</h6>
          <span>Web Designer</span>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i class="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i class="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
            <i class="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <i class="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul><!-- End Profile Dropdown Items -->
    </li><!-- End Profile Nav -->

  </ul>
</nav><!-- End Icons Navigation -->

</header><!-- End Header -->

<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <a class="nav-link " href="/AccueilProprietaire">
      <i class="bi bi-grid"></i>
      <span>Tableau de bord</span>
    </a>
  </li><!-- End Dashboard Nav -->

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-menu-button-wide"></i><span>Gestion logement</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="/logements/create">
          <i class="bi bi-circle"></i><span>Publier logement</span>
        </a>
      </li>
      <li>
        <a href="components-accordion.html">
          <i class="bi bi-circle"></i><span>Voir mes logments</span>
        </a>
      </li>
     
      
    </ul>
  </li><!-- End Components Nav -->

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="forms-elements.html">
          <i class="bi bi-circle"></i><span>Form Elements</span>
        </a>
      </li>
      <li>
        <a href="forms-layouts.html">
          <i class="bi bi-circle"></i><span>Form Layouts</span>
        </a>
      </li>
      <li>
        <a href="forms-editors.html">
          <i class="bi bi-circle"></i><span>Form Editors</span>
        </a>
      </li>
      <li>
        <a href="forms-validation.html">
          <i class="bi bi-circle"></i><span>Form Validation</span>
        </a>
      </li>
    </ul>
  </li><!-- End Forms Nav -->

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-layout-text-window-reverse"></i><span>Gestion reservation</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="tables-general.html">
          <i class="bi bi-circle"></i><span>Tableau des réservations</span>
        </a>
      </li>
      <li>
        <a href="tables-data.html">
          <i class="bi bi-circle"></i><span>Réservations acceptées</span>
        </a>
      </li>
    </ul>
  </li><!-- End Tables Nav -->

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-bar-chart"></i><span>Statistiques</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="charts-chartjs.html">
          <i class="bi bi-circle"></i><span>Chart.js</span>
        </a>
      </li>
      <li>
        <a href="charts-apexcharts.html">
          <i class="bi bi-circle"></i><span>ApexCharts</span>
        </a>
      </li>
      <li>
        <a href="charts-echarts.html">
          <i class="bi bi-circle"></i><span>ECharts</span>
        </a>
      </li>
    </ul>
  </li><!-- End Charts Nav -->

  

  <li class="nav-heading">Pages</li>

  <li class="nav-item">
    <a class="nav-link collapsed" href="users-profile.html">
      <i class="bi bi-person"></i>
      <span>Profile</span>
    </a>
  </li><!-- End Profile Page Nav -->



</ul>

</aside><!-- End Sidebar-->


<main id="main" class="main">

<div class="pagetitle">
  <h1>Tableau de bord</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Accueil</a></li>
      <li class="breadcrumb-item active">Tableau de bord</li>
    </ol>
  </nav>
</div><!-- End Page Title -->

<section class="section dashboard">
  <div class="row">

    <!-- Left side columns -->
    <div class="col-lg-8">
      <div class="row">

        <!-- Sales Card -->
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card sales-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
                <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
                <li><a class="dropdown-item" href="#">Cette année</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Ce mois-ci <span>| Aujourd'hui</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-cart"></i>
                </div>
                <div class="ps-3">
                  <h6>145</h6>
                  <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">augmentation</span>

                </div>
              </div>
            </div>

          </div>
        </div><!-- End Sales Card -->

        <!-- Revenue Card -->
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card revenue-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
                <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
                <li><a class="dropdown-item" href="#">Cette année</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Recettes <span>| Ce mois-ci</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>$3,264</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">augmentation</span>

                </div>
              </div>
            </div>

          </div>
        </div><!-- End Revenue Card -->

        <!-- Customers Card -->
        <div class="col-xxl-4 col-xl-12">

          <div class="card info-card customers-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
                <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
                <li><a class="dropdown-item" href="#">Cette année</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Clients <span>| Cette année</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-people"></i>
                </div>
                <div class="ps-3">
                  <h6>1244</h6>
                  <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">diminution</span>

                </div>
              </div>

            </div>
          </div>

        </div><!-- End Customers Card -->

      

         <!-- Reports -->
         <div class="col-12">
              <div class="card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
                    <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
                    <li><a class="dropdown-item" href="#">Cette année</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Raports <span>/Aujourd'hui</span></h5>

                  <!-- Line Chart -->
                  <div id="reportsChart"></div>

                 

                </div>

              </div>
            </div><!-- End Reports -->

        <!-- Recent Sales -->
        <div class="col-12">
          <div class="card recent-sales overflow-auto">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
                <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
                <li><a class="dropdown-item" href="#">Cette année</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Les réservations <span>| Aujourd'hui</span></h5>

              <table  class="table table-borderless datatable" v-if="reservations.length">
                <thead>
                    <tr>
                      <th scope="col">logements</th>
                      <th scope="col">Adresse</th>
                      <th scope="col">Categorie</th>
                      <th scope="col">Clients</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Téléphone</th> <!-- Added telephone header -->
                      <th scope="col">Statut</th>
                      <th scope="col">Actions</th> <!-- Added actions header for buttons -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="reservation in reservations" :key="reservation.id">
                      <th scope="row"><a href="#">{{ reservation.logement.titre }}</a></th>
                      <td>{{ reservation.logement.adresse.regions }}</td> <!-- Accéder à la propriété regions -->
                      <td>{{ reservation.logement.categorie.nom }}</td> <!-- Accéder au nom de la catégorie -->
                      <td>{{ reservation.user.nom }} {{ reservation.user.prenom }}</td>
                      <td>{{ reservation.user.email }}</td> <!-- Affichage de l'e-mail -->
                      <td>{{ reservation.user.telephone }}</td> <!-- Affichage du numéro de téléphone -->
                      <td>{{ formatStatut(reservation.statut) }}</td>
                      <td>
                        <button @click="openModal(reservation)" aria-label="Accepter ou Refuser">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M15.5 0h-15A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 15.5 0zM1 1h14v14H1V1zm7 3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5A.5.5 0 0 1 8 4zm0 6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 10z"/>
                          </svg>
                        </button>
                        <button @click="deleteReservation(reservation.id)" aria-label="Supprimer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h2a1 1 0 0 1 1 1v1H0V2a1 1 0 0 1 1-1h2V.5a.5.5 0 0 1 .5-.5zM1 4v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1zm4.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                        </button>
                        <button @click="viewDetails(reservation)" aria-label="Détails">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M8 3c-3 0-5.5 2-7 4a8 8 0 0 0 0 6c1.5 2 4 4 7 4s5.5-2 7-4a8 8 0 0 0 0-6c-1.5-2-4-4-7-4zm0 10c-2 0-3.5-1-5-3 1.5-2 3-3 5-3s3.5 1 5 3c-1.5 2-3 3-5 3zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>

              </table>
              
              <p v-else>Aucune réservation trouvée.</p>
  
                <!-- Popup pour accepter/refuser la réservation -->
                <div v-if="selectedReservation" class="modal">
                  <div class="modal-content">
                    <h3>Gérer la réservation</h3>
                    <p>Souhaitez-vous accepter ou refuser cette réservation ?</p>
                    <button @click="acceptReservation(selectedReservation.id)">Accepter</button>
                    <button @click="declineReservation(selectedReservation.id)">Refuser</button>
                    <button @click="closeModal">Annuler</button>
                  </div>
                </div>
            </div>

          </div>
        </div><!-- End Recent Sales -->

        <!-- Top Selling -->
        <div class="col-12">
          <div class="card top-selling overflow-auto">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
                <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
                <li><a class="dropdown-item" href="#">Cette année</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">Les locataires <span>| Aujourd'hui</span></h5>

              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Numéro Téléphone</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td><a href="#" class="text-primary fw-bold">{{ user.nom }}</a></td>
                    <td><a href="#" class="text-primary fw-bold">{{ user.prenom }}</a></td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.telephone }}</td>
                    <td>{{ user.role }}</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div><!-- End Top Selling -->

      </div>
    </div><!-- End Left side columns -->

    <!-- Right side columns -->
    <div class="col-lg-4">

      <!-- Recent Activity -->
      <div class="card">
        <div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
            <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
            <li><a class="dropdown-item" href="#">Cette année</a></li>
          </ul>
        </div>

        <div class="card-body">
          <h5 class="card-title">Activités récentes <span>| Aujourd'hui</span></h5>

          <div class="activity">

            <div class="activity-item d-flex">
              <div class="activite-label">32 min</div>
              <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
              <div class="activity-content">
                Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div><!-- End activity item-->

            <div class="activity-item d-flex">
              <div class="activite-label">56 min</div>
              <i class='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
              <div class="activity-content">
                Voluptatem blanditiis blanditiis eveniet
              </div>
            </div><!-- End activity item-->

            <div class="activity-item d-flex">
              <div class="activite-label">2 hrs</div>
              <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
              <div class="activity-content">
                Voluptates corrupti molestias voluptatem
              </div>
            </div><!-- End activity item-->

            <div class="activity-item d-flex">
              <div class="activite-label">1 day</div>
              <i class='bi bi-circle-fill activity-badge text-info align-self-start'></i>
              <div class="activity-content">
                Tempore autem saepe <a href="#" class="fw-bold text-dark">occaecati voluptatem</a> tempore
              </div>
            </div><!-- End activity item-->

            <div class="activity-item d-flex">
              <div class="activite-label">2 days</div>
              <i class='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
              <div class="activity-content">
                Est sit eum reiciendis exercitationem
              </div>
            </div><!-- End activity item-->

            <div class="activity-item d-flex">
              <div class="activite-label">4 weeks</div>
              <i class='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
              <div class="activity-content">
                Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
              </div>
            </div><!-- End activity item-->

          </div>

        </div>
      </div><!-- End Recent Activity -->



       <!-- Website Traffic -->
       <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">Website Traffic <span>| Today</span></h5>

              <div id="trafficChart" style="min-height: 400px;" class="echart"></div>

             

            </div>
          </div><!-- End Website Traffic -->
    

      <!-- News & Updates Traffic -->
      <div class="card">
        <div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Aujourd'hui</a></li>
            <li><a class="dropdown-item" href="#">Ce mois-ci</a></li>
            <li><a class="dropdown-item" href="#">Cette année</a></li>
          </ul>
        </div>

        <div class="card-body pb-0">
          <h5 class="card-title">Actualités &amp; Mises à jour <span>| Aujourd'hui</span></h5>

          <div class="news">
            <div class="post-item clearfix">
              <img src="@/assets/img/news-1.jpg" alt="">
              <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
              <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
            </div>

            <div class="post-item clearfix">
              <img src="@/assets/img/news-2.jpg" alt="">
              <h4><a href="#">Quidem autem et impedit</a></h4>
              <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
            </div>

            <div class="post-item clearfix">
              <img src="@/assets/img/news-3.jpg" alt="">
              <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
              <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
            </div>

            <div class="post-item clearfix">
              <img src="@/assets/img/news-4.jpg" alt="">
              <h4><a href="#">Laborum corporis quo dara net para</a></h4>
              <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
            </div>

            <div class="post-item clearfix">
              <img src="@/assets/img/news-5.jpg" alt="">
              <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
              <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
            </div>

          </div><!-- End sidebar recent posts-->

        </div>
      </div><!-- End News & Updates -->

    </div><!-- End Right side columns -->

  </div>
</section>

</main><!-- End #main -->

</template>

<script>
// Importation des fichiers CSS nécessaires pour le composant
import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/assets/vendor/boxicons/css/boxicons.min.css';
import '@/assets/vendor/quill/quill.snow.css';
import '@/assets/vendor/quill/quill.bubble.css';
import '@/assets/vendor/remixicon/remixicon.css';
import '@/assets/vendor/simple-datatables/style.css';
import '@/assets/css/style.css';

import 'bootstrap';
import Quill from 'quill';
import tinymce from 'tinymce';
import { DataTable } from 'simple-datatables';
import Swal from 'sweetalert2';
import axios from 'axios';
import userService from '@/services/userService';
import reservationService from '@/services/reservationService';
import ApexCharts from 'apexcharts'; // Ensure ApexCharts is imported
import * as echarts from 'echarts';


export default {
  name: 'AccueilProprietaire',

  data() {
  return {
    users: [],
    reservations: [], // Réservations de l'utilisateur
    selectedReservation: null, // Réservation sélectionnée
    token: '', // Gestion du token d'authentification
    reservationsByMonth: []
  };
},


mounted() {
    this.fetchUsers();
    this.loadReservations(); // Charger les réservations lors de la montée

    // Initialize components
    this.initSidebarToggle();
    this.initSearchBarToggle();
    this.initNavbarLinksActiveState();
    this.initQuillEditors();
    this.initTinyMCE();
    this.initSimpleDataTable();
    // Assurer que le graphique est initialisé une fois le DOM prêt
  this.$nextTick(() => {
    this.initializeTrafficChart(); // Initialisation du graphique circulaire
  });
  },

methods: {
  // Fetching users
  fetchUsers() {
    userService.getAllUsers()
      .then(data => {
        this.users = data; // Stocker les utilisateurs récupérés
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  },

  // Charger toutes les réservations de l'utilisateur
  loadReservations() {
    reservationService.getUserReservations()
        .then(response => {
            this.reservations = response.data;

            // Vérifier si les réservations sont bien récupérées
            if (this.reservations && this.reservations.length > 0) {
                // Créer des tableaux pour stocker le nombre de réservations par mois
                const reservationsByMonth = new Array(12).fill(0);
                const acceptedReservationsByMonth = new Array(12).fill(0);
                const rejectedReservationsByMonth = new Array(12).fill(0);
                const pendingReservationsByMonth = new Array(12).fill(0); // Pour les réservations en attente

                // Compter le nombre de réservations par mois
                this.reservations.forEach(reservation => {
                    const logementDateStr = reservation.logement.createdAt.split('.')[0]; // Enlever la partie microsecondes
                    const logementParsedDate = new Date(logementDateStr); // Convertir en objet Date

                    // Vérifier si la date est valide
                    if (!isNaN(logementParsedDate)) {
                        const month = logementParsedDate.getMonth(); // Obtenir le mois à partir de la date
                        reservationsByMonth[month]++; // Incrémenter le mois correspondant

                        // Compter les réservations acceptées, refusées et en attente
                        if (reservation.statut === 'ACCEPTEE') {
                            acceptedReservationsByMonth[month]++; // Incrémenter le nombre de réservations acceptées
                        } else if (reservation.statut === 'DECLINEE') {
                            rejectedReservationsByMonth[month]++; // Incrémenter le nombre de réservations refusées
                        } else if (reservation.statut === 'EN_ATTENTE') {
                            pendingReservationsByMonth[month]++; // Incrémenter le nombre de réservations en attente
                        }

                        // Afficher le statut formaté
                        console.log(`Date de création du logement: ${logementDateStr} - Mois: ${month + 1} - Statut: ${this.formatStatut(reservation.statut)}`);
                    } else {
                        console.error("Date invalide:", logementDateStr); // Gérer les dates invalides
                    }
                });

                // Stocker les réservations par mois
                this.reservationsByMonth = reservationsByMonth;
                this.acceptedReservationsByMonth = acceptedReservationsByMonth;
                this.rejectedReservationsByMonth = rejectedReservationsByMonth;
                this.pendingReservationsByMonth = pendingReservationsByMonth;

                // Initialiser le graphique avec les données traitées
                this.initializeReportsChart();
            } else {
                console.log('Aucune réservation trouvée.');
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des réservations :', error);
        });
},




  // Initialiser le graphique avec les données des réservations
  initializeReportsChart() {
    const months = ["Jan", "Fev", "Mars", "Avril", "May", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"];

    const options = {
        series: [
            {
                name: 'Réservations Totales',
                data: this.reservationsByMonth, // Utiliser les données de réservations par mois
            },
            {
                name: 'Réservations Acceptées',
                data: this.acceptedReservationsByMonth, // Données pour les réservations acceptées
            },
            {
                name: 'Réservations Refusées',
                data: this.rejectedReservationsByMonth, // Données pour les réservations refusées
            },
            {
                name: 'Réservations En Attente',
                data: this.pendingReservationsByMonth, // Données pour les réservations en attente
            }
        ],
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            },
        },
        markers: {
            size: 4
        },
        colors: ['#4154f1', '#28a745', '#dc3545', '#ffc107'], // Couleurs différentes pour chaque série
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            type: 'category',
            categories: months // Mois de l'année pour l'axe des abscisses
        },
        yaxis: {
            title: {
                text: 'Nombre de Réservations'
            }
        }
    };

    const chartElement = document.querySelector("#reportsChart");
    if (chartElement) {
        const chart = new ApexCharts(chartElement, options);
        chart.render(); // Rendre le graphique
    } else {
        console.error("Élément graphique introuvable.");
    }
},

initializeTrafficChart() {
      echarts.init(document.querySelector("#trafficChart")).setOption({
        tooltip: { trigger: 'item' },
        legend: { top: '5%', left: 'center' },
        series: [{
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: { show: false, position: 'center' },
          emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
          labelLine: { show: false },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }]
      });
    },




  formatStatut(statut) {
  switch (statut) {
    case 'EN_ATTENTE':
      return 'En attente';
    case 'ACCEPTEE':
      return 'Acceptée';
    case 'DECLINEE':
      return 'Refusée';
    default:
      return 'Inconnu';
  }
},

acceptReservation(id) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous allez accepter cette réservation.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, accepter!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      reservationService.updateReservationStatus(id, 'ACCEPTEE')
        .then(() => {
          this.loadReservations();
          this.closeModal();
          Swal.fire(
            'Acceptée!',
            'La réservation a été acceptée.',
            'success'
          );
        })
        .catch(error => {
          console.error('Erreur lors de l\'acceptation de la réservation :', error);
          Swal.fire(
            'Erreur!',
            'Une erreur s\'est produite lors de l\'acceptation de la réservation.',
            'error'
          );
        });
    }
  });
},

declineReservation(id) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous allez refuser cette réservation.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, refuser!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      reservationService.updateReservationStatus(id, 'DECLINEE')
        .then(() => {
          this.loadReservations();
          this.closeModal();
          Swal.fire(
            'Refusée!',
            'La réservation a été refusée.',
            'success'
          );
        })
        .catch(error => {
          console.error('Erreur lors du refus de la réservation :', error);
          Swal.fire(
            'Erreur!',
            'Une erreur s\'est produite lors du refus de la réservation.',
            'error'
          );
        });
    }
  });
},

deleteReservation(id) {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: 'Cette action est irréversible !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimer !',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      reservationService.deleteReservation(id)
        .then(() => {
          this.reservations = this.reservations.filter(r => r.id !== id);
          Swal.fire('Supprimé !', 'La réservation a été supprimée avec succès.', 'success');
        })
        .catch(error => {
          console.error('Erreur lors de la suppression de la réservation :', error);
          Swal.fire('Erreur', 'Un problème est survenu lors de la suppression de la réservation.', 'error');
        });
    }
  });
},

viewDetails(reservation) {
  console.log('Détails de la réservation :', reservation);
},

openModal(reservation) {
  this.selectedReservation = reservation;
},

closeModal() {
  this.selectedReservation = null;
},

    // Logout method
    logout() {
      console.log('Début de la déconnexion...');
      const token = localStorage.getItem('token');

      if (token) {
        axios.post('http://localhost:8081/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}` // Inclure le token dans l'en-tête
            }
        })
        .then(response => {
            console.log(response.data);
            localStorage.removeItem('token');
            Swal.fire({
                icon: 'success',
                title: 'Déconnexion réussie',
                text: 'Vous avez été déconnecté avec succès.',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                this.$router.push('/login');
            });
        })
        .catch(error => {
            console.error('Erreur lors de la déconnexion:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Une erreur est survenue lors de la déconnexion.',
            });
        });
      } else {
        console.error('Token non trouvé. Impossible de déconnecter l\'utilisateur.');
        Swal.fire({
            icon: 'warning',
            title: 'Avertissement',
            text: 'Aucun token trouvé. Vous êtes déjà déconnecté.',
        });
      }
    },

    // Utility functions
    select(el, all = false) {
      el = el.trim();
      return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    },

    on(type, el, listener, all = false) {
      const elements = this.select(el, all);
      if (all) {
        elements.forEach(e => e.addEventListener(type, listener));
      } else {
        elements.addEventListener(type, listener);
      }
    },

    onscroll(el, listener) {
      el.addEventListener('scroll', listener);
    },

    initSidebarToggle() {
      if (this.select('.toggle-sidebar-btn')) {
        this.on('click', '.toggle-sidebar-btn', () => {
          this.select('body').classList.toggle('toggle-sidebar');
        });
      }
    },

    initSearchBarToggle() {
      if (this.select('.search-bar-toggle')) {
        this.on('click', '.search-bar-toggle', () => {
          this.select('.search-bar').classList.toggle('search-bar-show');
        });
      }
    },

    initNavbarLinksActiveState() {
      let navbarlinks = this.select('#navbar .scrollto', true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return;
          let section = this.select(navbarlink.hash);
          if (!section) return;
          navbarlink.classList.toggle('active', position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight));
        });
      };
      window.addEventListener('load', navbarlinksActive);
      this.onscroll(document, navbarlinksActive);
    },

    initQuillEditors() {
      const options = {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ font: [] }, { size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "super" }, { script: "sub" }],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
            ["direction", { align: [] }],
            ["link", "image", "video"],
            ["clean"]
          ]
        }
      };

      if (this.select('.quill-editor-default')) new Quill('.quill-editor-default', options);
      if (this.select('.quill-editor-bubble')) new Quill('.quill-editor-bubble', options);
      if (this.select('.quill-editor-full')) new Quill(".quill-editor-full", options);
    },

    initTinyMCE() {
      const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

      tinymce.init({
        selector: 'textarea.tinymce-editor',
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
        menubar: 'file edit view insert format tools table help',
        toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
        autosave_interval: '30s',
        height: isSmallScreen ? 250 : 500,
        setup: (editor) => {
          editor.on('init', () => {
            this.getDoc().body.style.fontSize = '14px';
            this.getDoc().body.style.lineHeight = '1.6';
          });
        },
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
      });
    },

   

    initSimpleDataTable() {
      const tables = document.querySelectorAll('.datatable');
      tables.forEach(table => {
        new DataTable(table); // Utilisez DataTable ici
      });
    }
  }
}
</script>



<style scoped>
button {
    margin-right: 8px;
    padding: 8px 16px;
    background-color: #356F37;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #4cae4c;
  }
  
  /* Modal styling */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
  }

.btn1 {
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;


}

.btn2 {
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    background-color: #ffffff;
}

  
</style>
