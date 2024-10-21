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
         <a href="components-accordion.html">
           <i class="bi bi-circle"></i><span>Voir les logments</span>
         </a>
       </li>
       <li>
         <a href="components-accordion.html">
           <i class="bi bi-circle"></i><span>Faire un commentaire</span>
         </a>
       </li>
      
       
     </ul>
   </li><!-- End Components Nav -->
 
   <li class="nav-item">
     <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
       <i class="bi bi-journal-text"></i><span>Gestion demande</span><i class="bi bi-chevron-down ms-auto"></i>
     </a>
     <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
       <li>
         <a href="forms-elements.html">
           <i class="bi bi-circle"></i><span>Faire une demande de logment</span>
         </a>
       </li>
       <li>
         <a href="forms-layouts.html">
           <i class="bi bi-circle"></i><span>Voir liste de mes demandes</span>
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
           <i class="bi bi-circle"></i><span>Voire mes réservations</span>
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
       <i class="bi bi-bar-chart"></i><span>Favoris</span><i class="bi bi-chevron-down ms-auto"></i>
     </a>
     <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
       <li>
         <a href="charts-chartjs.html">
           <i class="bi bi-circle"></i><span>Logements</span>
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
                   <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">réservations</span>
 
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
                   <h5 class="card-title">Raports de mes réservations <span>/Aujourd'hui</span></h5>
 
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
               <h5 class="card-title">Mes réservations <span>| Aujourd'hui</span></h5>
 
               <table  class="table table-borderless datatable" v-if="reservations.length">
                 <thead>
                     <tr>
                       <th scope="col">logements</th>
                       <th scope="col">Adresse</th>
                       <th scope="col">Categorie</th>
                       <th scope="col">Propriétaire</th>
                       <th scope="col">E-mail</th>
                       <th scope="col">Téléphone</th> <!-- Added telephone header -->
                       <th scope="col">Statut</th>
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
//  import '@/assets/css/style.css';
 
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
     const months = ["Jan", "Fev", "Mars", "Avril", "Mai", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"];
 
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
/**
* Template Name: NiceAdmin
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Updated: Apr 20 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
:root {
  scroll-behavior: smooth;
}

body {
  font-family: "Open Sans", sans-serif;
  background: #ffffff;
  color: #444444;
}

a {
  color: #515fda;
  text-decoration: none;
}

a:hover {
  color: #717ff5;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nunito", sans-serif;
}

/*--------------------------------------------------------------
# Main
--------------------------------------------------------------*/
#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

/*--------------------------------------------------------------
# Page Title
--------------------------------------------------------------*/
.pagetitle {
  margin-bottom: 10px;
}

.pagetitle h1 {
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 600;
  color: #000000;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: #4154f1;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #6776f4;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Override some default Bootstrap stylings
--------------------------------------------------------------*/
/* Dropdown menus */
.dropdown-menu {
  border-radius: 4px;
  padding: 10px 0;
  animation-name: dropdown-animate;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  border: 0;
  box-shadow: 0 5px 30px 0 rgba(82, 63, 105, 0.2);
}

.dropdown-menu .dropdown-header,
.dropdown-menu .dropdown-footer {
  text-align: center;
  font-size: 15px;
  padding: 10px 25px;
}

.dropdown-menu .dropdown-footer a {
  color: #444444;
  text-decoration: underline;
}

.dropdown-menu .dropdown-footer a:hover {
  text-decoration: none;
}

.dropdown-menu .dropdown-divider {
  color: #a5c5fe;
  margin: 0;
}

.dropdown-menu .dropdown-item {
  font-size: 14px;
  padding: 10px 15px;
  transition: 0.3s;
}

.dropdown-menu .dropdown-item i {
  margin-right: 10px;
  font-size: 18px;
  line-height: 0;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #f6f9ff;
}

@media (min-width: 768px) {
  .dropdown-menu-arrow::before {
    content: "";
    width: 13px;
    height: 13px;
    background: #fff;
    position: absolute;
    top: -7px;
    right: 20px;
    transform: rotate(45deg);
    border-top: 1px solid #eaedf1;
    border-left: 1px solid #eaedf1;
  }
}

@keyframes dropdown-animate {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

  0% {
    opacity: 0;
  }
}

/* Light Backgrounds */
.bg-primary-light {
  background-color: #cfe2ff;
  border-color: #cfe2ff;
}

.bg-secondary-light {
  background-color: #e2e3e5;
  border-color: #e2e3e5;
}

.bg-success-light {
  background-color: #d1e7dd;
  border-color: #d1e7dd;
}

.bg-danger-light {
  background-color: #f8d7da;
  border-color: #f8d7da;
}

.bg-warning-light {
  background-color: #fff3cd;
  border-color: #fff3cd;
}

.bg-info-light {
  background-color: #cff4fc;
  border-color: #cff4fc;
}

.bg-dark-light {
  background-color: #d3d3d4;
  border-color: #d3d3d4;
}

/* Card */
.card {
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}

.card-header,
.card-footer {
  border-color: #ebeef4;
  background-color: #fff;
  color: #798eb3;
  padding: 15px;
}

.card-title {
  padding: 20px 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #050505;
  font-family: "Poppins", sans-serif;
}

.card-title span {
  color: #356F37;
  font-size: 14px;
  font-weight: 400;
}

.card-body {
  padding: 0 20px 20px 20px;
}

.card-img-overlay {
  background-color: rgba(255, 255, 255, 0.6);
}

/* Alerts */
.alert-heading {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
}

/* Close Button */
.btn-close {
  background-size: 25%;
}

.btn-close:focus {
  outline: 0;
  box-shadow: none;
}

/* Accordion */
.accordion-item {
  border: 1px solid #ebeef4;
}

.accordion-button:focus {
  outline: 0;
  box-shadow: none;
}

.accordion-button:not(.collapsed) {
  color: #012970;
  background-color: #f6f9ff;
}

.accordion-flush .accordion-button {
  padding: 15px 0;
  background: none;
  border: 0;
}

.accordion-flush .accordion-button:not(.collapsed) {
  box-shadow: none;
  color: #4154f1;
}

.accordion-flush .accordion-body {
  padding: 0 0 15px 0;
  color: #3e4f6f;
  font-size: 15px;
}

/* Breadcrumbs */
.breadcrumb {
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  color: #899bbd;
  font-weight: 600;
}

.breadcrumb a {
  color: #899bbd;
  transition: 0.3s;
}

.breadcrumb a:hover {
  color: #51678f;
}

.breadcrumb .breadcrumb-item::before {
  color: #899bbd;
}

.breadcrumb .active {
  color: #51678f;
  font-weight: 600;
}

/* Bordered Tabs */
.nav-tabs-bordered {
  border-bottom: 2px solid #ebeef4;
}

.nav-tabs-bordered .nav-link {
  margin-bottom: -2px;
  border: none;
  color: #2c384e;
}

.nav-tabs-bordered .nav-link:hover,
.nav-tabs-bordered .nav-link:focus {
  color: #4154f1;
}

.nav-tabs-bordered .nav-link.active {
  background-color: #fff;
  color: #4154f1;
  border-bottom: 2px solid #4154f1;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.logo {
  line-height: 1;
}

@media (min-width: 1200px) {
  .logo {
    width: 280px;
  }
}

.logo img {
  max-height: 26px;
  margin-right: 6px;
}

.logo span {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  font-family: "Nunito", sans-serif;
}

.header {
  transition: all 0.5s;
  z-index: 997;
  height: 60px;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
  background-color: #356F37;
  padding-left: 20px;
  /* Toggle Sidebar Button */
  /* Search Bar */
}

.header .toggle-sidebar-btn {
  font-size: 32px;
  padding-left: 10px;
  cursor: pointer;
  color: #fff;
}

.header .search-bar {
  min-width: 360px;
  padding: 0 20px;
}

@media (max-width: 1199px) {
  .header .search-bar {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    padding: 20px;
    box-shadow: 0px 0px 15px 0px rgba(1, 41, 112, 0.1);
    background: white;
    z-index: 9999;
    transition: 0.3s;
    visibility: hidden;
    opacity: 0;
  }

  .header .search-bar-show {
    top: 60px;
    visibility: visible;
    opacity: 1;
  }
}

.header .search-form {
  width: 100%;
}

.header .search-form input {
  border: 0;
  font-size: 14px;
  color: #012970;
  border: 1px solid rgba(1, 41, 112, 0.2);
  padding: 7px 38px 7px 8px;
  border-radius: 3px;
  transition: 0.3s;
  width: 100%;
}

.header .search-form input:focus,
.header .search-form input:hover {
  outline: none;
  box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
  border: 1px solid rgba(1, 41, 112, 0.3);
}

.header .search-form button {
  border: 0;
  padding: 0;
  margin-left: -30px;
  background: none;
}

.header .search-form button i {
  color: #012970;
}

/*--------------------------------------------------------------
# Header Nav
--------------------------------------------------------------*/
.header-nav ul {
  list-style: none;
}

.header-nav>ul {
  margin: 0;
  padding: 0;
}

.header-nav .nav-icon {
  font-size: 22px;
  color: #fff;
  margin-right: 25px;
  position: relative;
}

.header-nav .nav-profile {
  color: #fff;
}

.header-nav .nav-profile img {
  max-height: 36px;
}

.header-nav .nav-profile span {
  font-size: 14px;
  font-weight: 600;
}

.header-nav .badge-number {
  position: absolute;
  inset: -2px -5px auto auto;
  font-weight: normal;
  font-size: 12px;
  padding: 3px 6px;
}

.header-nav .notifications {
  inset: 8px -15px auto auto !important;
}

.header-nav .notifications .notification-item {
  display: flex;
  align-items: center;
  padding: 15px 10px;
  transition: 0.3s;
}

.header-nav .notifications .notification-item i {
  margin: 0 20px 0 10px;
  font-size: 24px;
}

.header-nav .notifications .notification-item h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.header-nav .notifications .notification-item p {
  font-size: 13px;
  margin-bottom: 3px;
  color: #919191;
}

.header-nav .notifications .notification-item:hover {
  background-color: #f6f9ff;
}

.header-nav .messages {
  inset: 8px -15px auto auto !important;
}

.header-nav .messages .message-item {
  padding: 15px 10px;
  transition: 0.3s;
}

.header-nav .messages .message-item a {
  display: flex;
}

.header-nav .messages .message-item img {
  margin: 0 20px 0 10px;
  max-height: 40px;
}

.header-nav .messages .message-item h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #444444;
}

.header-nav .messages .message-item p {
  font-size: 13px;
  margin-bottom: 3px;
  color: #919191;
}

.header-nav .messages .message-item:hover {
  background-color: #f6f9ff;
}

.header-nav .profile {
  min-width: 240px;
  padding-bottom: 0;
  top: 8px !important;
}

.header-nav .profile .dropdown-header h6 {
  font-size: 18px;
  margin-bottom: 0;
  font-weight: 600;
  color: #444444;
}

.header-nav .profile .dropdown-header span {
  font-size: 14px;
}

.header-nav .profile .dropdown-item {
  font-size: 14px;
  padding: 10px 15px;
  transition: 0.3s;
}

.header-nav .profile .dropdown-item i {
  margin-right: 10px;
  font-size: 18px;
  line-height: 0;
}

.header-nav .profile .dropdown-item:hover {
  background-color: #f6f9ff;
}

/*--------------------------------------------------------------
# Sidebar
--------------------------------------------------------------*/
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 996;
  transition: all 0.3s;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aab7cf transparent;
  box-shadow: 0px 0px 20px rgba(1, 41, 112, 0.1);
  background-color: #356F37;
}

@media (max-width: 1199px) {
  .sidebar {
    left: -300px;
  }
}

.sidebar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #fff;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #aab7cf;
}

@media (min-width: 1200px) {

  #main,
  #footer {
    margin-left: 300px;
  }
}

@media (max-width: 1199px) {
  .toggle-sidebar .sidebar {
    left: 0;
  }
}

@media (min-width: 1200px) {

  .toggle-sidebar #main,
  .toggle-sidebar #footer {
    margin-left: 0;
  }

  .toggle-sidebar .sidebar {
    left: -300px;
  }
}

.sidebar-nav {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-item {
  margin-bottom: 5px;
}

.sidebar-nav .nav-heading {
  font-size: 11px;
  text-transform: uppercase;
  color: #899bbd;
  font-weight: 600;
  margin: 10px 0 5px 15px;
}

.sidebar-nav .nav-link {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #356F37;
  transition: 0.3;
  background: #F3FFF4;
  padding: 10px 15px;
  border-radius: 4px;
}

.sidebar-nav .nav-link i {
  font-size: 16px;
  margin-right: 10px;
  color: #356F37;
}

.sidebar-nav .nav-link.collapsed {
  color: #000000;
  background: #fff;
}

.sidebar-nav .nav-link.collapsed i {
  color: #899bbd;
}

.sidebar-nav .nav-link:hover {
  color: #EB9655;
  background: #F3FFF4;
}

.sidebar-nav .nav-link:hover i {
  color: #EB9655
}

.sidebar-nav .nav-link .bi-chevron-down {
  margin-right: 0;
  transition: transform 0.2s ease-in-out;
}

.sidebar-nav .nav-link:not(.collapsed) .bi-chevron-down {
  transform: rotate(180deg);
}

.sidebar-nav .nav-content {
  padding: 5px 0 0 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-content a {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  transition: 0.3;
  padding: 10px 0 10px 40px;
  transition: 0.3s;
}

.sidebar-nav .nav-content a i {
  font-size: 6px;
  margin-right: 8px;
  line-height: 0;
  border-radius: 50%;
}

.sidebar-nav .nav-content a:hover,
.sidebar-nav .nav-content a.active {
  color: #EB9655;
}

.sidebar-nav .nav-content a.active i {
  background-color: #EB9655;
}

/*--------------------------------------------------------------
# Dashboard
--------------------------------------------------------------*/
/* Filter dropdown */
.dashboard .filter {
  position: absolute;
  right: 0px;
  top: 15px;
}

.dashboard .filter .icon {
  color: #EB9655;
  padding-right: 20px;
  padding-bottom: 5px;
  transition: 0.3s;
  font-size: 16px;
}

.dashboard .filter .icon:hover,
.dashboard .filter .icon:focus {
  color: #000000;
}

.dashboard .filter .dropdown-header {
  padding: 8px 15px;
}

.dashboard .filter .dropdown-header h6 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #000000;
  margin-bottom: 0;
  padding: 0;
}

.dashboard .filter .dropdown-item {
  padding: 8px 15px;
}

/* Info Cards */
.dashboard .info-card {
  padding-bottom: 10px;
}

.dashboard .info-card h6 {
  font-size: 28px;
  color: #012970;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

.dashboard .card-icon {
  font-size: 32px;
  line-height: 0;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  flex-grow: 0;
}

.dashboard .sales-card .card-icon {
  color: #4154f1;
  background: #f6f6fe;
}

.dashboard .revenue-card .card-icon {
  color: #2eca6a;
  background: #e0f8e9;
}

.dashboard .customers-card .card-icon {
  color: #ff771d;
  background: #ffecdf;
}

/* Activity */
.dashboard .activity {
  font-size: 14px;
}

.dashboard .activity .activity-item .activite-label {
  color: #888;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 64px;
}

.dashboard .activity .activity-item .activite-label::before {
  content: "";
  position: absolute;
  right: -11px;
  width: 4px;
  top: 0;
  bottom: 0;
  background-color: #eceefe;
}

.dashboard .activity .activity-item .activity-badge {
  margin-top: 3px;
  z-index: 1;
  font-size: 11px;
  line-height: 0;
  border-radius: 50%;
  flex-shrink: 0;
  border: 3px solid #fff;
  flex-grow: 0;
}

.dashboard .activity .activity-item .activity-content {
  padding-left: 10px;
  padding-bottom: 20px;
}

.dashboard .activity .activity-item:first-child .activite-label::before {
  top: 5px;
}

.dashboard .activity .activity-item:last-child .activity-content {
  padding-bottom: 0;
}

/* News & Updates */
.dashboard .news .post-item+.post-item {
  margin-top: 15px;
}

.dashboard .news img {
  width: 80px;
  float: left;
  border-radius: 5px;
}

.dashboard .news h4 {
  font-size: 15px;
  margin-left: 95px;
  font-weight: bold;
  margin-bottom: 5px;
}

.dashboard .news h4 a {
  color: #012970;
  transition: 0.3s;
}

.dashboard .news h4 a:hover {
  color: #4154f1;
}

.dashboard .news p {
  font-size: 14px;
  color: #777777;
  margin-left: 95px;
}

/* Recent Sales */
.dashboard .recent-sales {
  font-size: 14px;
}

.dashboard .recent-sales .table thead {
  background: #f6f6fe;
}

.dashboard .recent-sales .table thead th {
  border: 0;
}

.dashboard .recent-sales .dataTable-top {
  padding: 0 0 10px 0;
}

.dashboard .recent-sales .dataTable-bottom {
  padding: 10px 0 0 0;
}

/* Top Selling */
.dashboard .top-selling {
  font-size: 14px;
}

.dashboard .top-selling .table thead {
  background: #f6f6fe;
}

.dashboard .top-selling .table thead th {
  border: 0;
}

.dashboard .top-selling .table tbody td {
  vertical-align: middle;
}

.dashboard .top-selling img {
  border-radius: 5px;
  max-width: 60px;
}

/*--------------------------------------------------------------
# Icons list page
--------------------------------------------------------------*/
.iconslist {
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
  padding-top: 15px;
}

.iconslist .icon {
  background-color: #fff;
  border-radius: 0.25rem;
  text-align: center;
  color: #012970;
  padding: 15px 0;
}

.iconslist i {
  margin: 0.25rem;
  font-size: 2.5rem;
}

.iconslist .label {
  font-family: var(--bs-font-monospace);
  display: inline-block;
  width: 100%;
  overflow: hidden;
  padding: 0.25rem;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666;
}

/*--------------------------------------------------------------
# Profie Page
--------------------------------------------------------------*/
.profile .profile-card img {
  max-width: 120px;
}

.profile .profile-card h2 {
  font-size: 24px;
  font-weight: 700;
  color: #2c384e;
  margin: 10px 0 0 0;
}

.profile .profile-card h3 {
  font-size: 18px;
}

.profile .profile-card .social-links a {
  font-size: 20px;
  display: inline-block;
  color: rgba(1, 41, 112, 0.5);
  line-height: 0;
  margin-right: 10px;
  transition: 0.3s;
}

.profile .profile-card .social-links a:hover {
  color: #012970;
}

.profile .profile-overview .row {
  margin-bottom: 20px;
  font-size: 15px;
}

.profile .profile-overview .card-title {
  color: #012970;
}

.profile .profile-overview .label {
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
}

.profile .profile-edit label {
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
}

.profile .profile-edit img {
  max-width: 120px;
}

/*--------------------------------------------------------------
# F.A.Q Page
--------------------------------------------------------------*/
.faq .basic h6 {
  font-size: 18px;
  font-weight: 600;
  color: #4154f1;
}

.faq .basic p {
  color: #6980aa;
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info-box {
  padding: 28px 30px;
}

.contact .info-box i {
  font-size: 38px;
  line-height: 0;
  color: #4154f1;
}

.contact .info-box h3 {
  font-size: 20px;
  color: #012970;
  font-weight: 700;
  margin: 20px 0 10px 0;
}

.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 0;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #4154f1;
}

.contact .php-email-form input {
  padding: 10px 15px;
}

.contact .php-email-form textarea {
  padding: 12px 15px;
}

.contact .php-email-form button[type=submit] {
  background: #4154f1;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .php-email-form button[type=submit]:hover {
  background: #5969f3;
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Error 404
--------------------------------------------------------------*/
.error-404 {
  padding: 30px;
}

.error-404 h1 {
  font-size: 180px;
  font-weight: 700;
  color: #4154f1;
  margin-bottom: 0;
  line-height: 150px;
}

.error-404 h2 {
  font-size: 24px;
  font-weight: 700;
  color: #012970;
  margin-bottom: 30px;
}

.error-404 .btn {
  background: #51678f;
  color: #fff;
  padding: 8px 30px;
}

.error-404 .btn:hover {
  background: #3e4f6f;
}

@media (min-width: 992px) {
  .error-404 img {
    max-width: 50%;
  }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
  padding: 20px 0;
  font-size: 14px;
  transition: all 0.3s;
  border-top: 1px solid #cddfff;
}

.footer .copyright {
  text-align: center;
  color: #012970;
}

.footer .credits {
  padding-top: 5px;
  text-align: center;
  font-size: 13px;
  color: #012970;
}
 </style>
 