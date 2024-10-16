<template>
   <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <a href="index.html" class="logo d-flex align-items-center">
    <img src="@/assets/img/logo.png" alt="">
  </a>
  <i class="bi bi-list toggle-sidebar-btn"></i>
</div><!-- End Logo -->

<div class="search-bar">
  <form class="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword">
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
    <a class="nav-link " href="index.html">
      <i class="bi bi-grid"></i>
      <span>Tableau de bord</span>
    </a>
  </li><!-- End Dashboard Nav -->

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="components-alerts.html">
          <i class="bi bi-circle"></i><span>Alerts</span>
        </a>
      </li>
      <li>
        <a href="components-accordion.html">
          <i class="bi bi-circle"></i><span>Accordion</span>
        </a>
      </li>
      <li>
        <a href="components-badges.html">
          <i class="bi bi-circle"></i><span>Badges</span>
        </a>
      </li>
      <li>
        <a href="components-breadcrumbs.html">
          <i class="bi bi-circle"></i><span>Breadcrumbs</span>
        </a>
      </li>
      <li>
        <a href="components-buttons.html">
          <i class="bi bi-circle"></i><span>Buttons</span>
        </a>
      </li>
      <li>
        <a href="components-cards.html">
          <i class="bi bi-circle"></i><span>Cards</span>
        </a>
      </li>
      <li>
        <a href="components-carousel.html">
          <i class="bi bi-circle"></i><span>Carousel</span>
        </a>
      </li>
      <li>
        <a href="components-list-group.html">
          <i class="bi bi-circle"></i><span>List group</span>
        </a>
      </li>
      <li>
        <a href="components-modal.html">
          <i class="bi bi-circle"></i><span>Modal</span>
        </a>
      </li>
      <li>
        <a href="components-tabs.html">
          <i class="bi bi-circle"></i><span>Tabs</span>
        </a>
      </li>
      <li>
        <a href="components-pagination.html">
          <i class="bi bi-circle"></i><span>Pagination</span>
        </a>
      </li>
      <li>
        <a href="components-progress.html">
          <i class="bi bi-circle"></i><span>Progress</span>
        </a>
      </li>
      <li>
        <a href="components-spinners.html">
          <i class="bi bi-circle"></i><span>Spinners</span>
        </a>
      </li>
      <li>
        <a href="components-tooltips.html">
          <i class="bi bi-circle"></i><span>Tooltips</span>
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
      <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="tables-general.html">
          <i class="bi bi-circle"></i><span>General Tables</span>
        </a>
      </li>
      <li>
        <a href="tables-data.html">
          <i class="bi bi-circle"></i><span>Data Tables</span>
        </a>
      </li>
    </ul>
  </li><!-- End Tables Nav -->

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
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

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
      <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="icons-bootstrap.html">
          <i class="bi bi-circle"></i><span>Bootstrap Icons</span>
        </a>
      </li>
      <li>
        <a href="icons-remix.html">
          <i class="bi bi-circle"></i><span>Remix Icons</span>
        </a>
      </li>
      <li>
        <a href="icons-boxicons.html">
          <i class="bi bi-circle"></i><span>Boxicons</span>
        </a>
      </li>
    </ul>
  </li><!-- End Icons Nav -->

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

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>Brandon Jacob</td>
                    <td><a href="#" class="text-primary">At praesentium minu</a></td>
                    <td>$64</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2147</a></th>
                    <td>Bridie Kessler</td>
                    <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                    <td>$47</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2049</a></th>
                    <td>Ashleigh Langosh</td>
                    <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                    <td>$147</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2644</a></th>
                    <td>Angus Grady</td>
                    <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                    <td>$67</td>
                    <td><span class="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2644</a></th>
                    <td>Raheem Lehner</td>
                    <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                    <td>$165</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>

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
              <h5 class="card-title">Top Selling <span>| Today</span></h5>

              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Preview</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sold</th>
                    <th scope="col">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="#"><img src="@/assets/img/product-1.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                    <td>$64</td>
                    <td class="fw-bold">124</td>
                    <td>$5,828</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="@/assets/img/product-2.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                    <td>$46</td>
                    <td class="fw-bold">98</td>
                    <td>$4,508</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="@/assets/img/product-3.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                    <td>$59</td>
                    <td class="fw-bold">74</td>
                    <td>$4,366</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="@/assets/img/product-4.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                    <td>$32</td>
                    <td class="fw-bold">63</td>
                    <td>$2,016</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="@/assets/img/product-5.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                    <td>$79</td>
                    <td class="fw-bold">41</td>
                    <td>$3,239</td>
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
          <h5 class="card-title">Recent Activity <span>| Today</span></h5>

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
          <h5 class="card-title">News &amp; Updates <span>| Today</span></h5>

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

export default {
  name: 'AccueilProprietaire',

  mounted() {
    "use strict"; 

    // Utility functions
    const select = (el, all = false) => {
      el = el.trim();
      return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
      const elements = select(el, all);
      if (all) {
        elements.forEach(e => e.addEventListener(type, listener));
      } else {
        elements.addEventListener(type, listener);
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    // Initialize components
    const initSidebarToggle = () => {
      if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', () => {
          select('body').classList.toggle('toggle-sidebar');
        });
      }
    };

    const initSearchBarToggle = () => {
      if (select('.search-bar-toggle')) {
        on('click', '.search-bar-toggle', () => {
          select('.search-bar').classList.toggle('search-bar-show');
        });
      }
    };

    const initNavbarLinksActiveState = () => {
      let navbarlinks = select('#navbar .scrollto', true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          navbarlink.classList.toggle('active', position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight));
        });
      };
      window.addEventListener('load', navbarlinksActive);
      onscroll(document, navbarlinksActive);
    };

    const initQuillEditors = () => {
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

      if (select('.quill-editor-default')) new Quill('.quill-editor-default', options);
      if (select('.quill-editor-bubble')) new Quill('.quill-editor-bubble', options);
      if (select('.quill-editor-full')) new Quill(".quill-editor-full", options);
    };

    const initTinyMCE = () => {
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
    };

    const initSimpleDataTable = () => {
  const tables = document.querySelectorAll('.datatable');
  tables.forEach(table => {
    new DataTable(table); // Utilisez DataTable ici
  });
};


    // Initialize all features
    initSidebarToggle();
    initSearchBarToggle();
    initNavbarLinksActiveState();
    initQuillEditors();
    initTinyMCE();
    initSimpleDataTable();
    
    // Additional features can be added here...
  }
}
</script>

<style scoped>


</style>
