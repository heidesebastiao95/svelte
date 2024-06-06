<nav class="navbar navbar-light navbar-vertical navbar-expand-xl navbar-vibrant">
  <script>
    var navbarStyle = localStorage.getItem("navbarStyle");
    if (navbarStyle && navbarStyle !== 'transparent') {
      document.querySelector('.navbar-vertical').classList.add(`navbar-${navbarStyle}`);
    }
  </script>
  <div class="d-flex align-items-center">
    <div class="toggle-icon-wrapper">

      <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Toggle Navigation" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>

    </div>
    <a class="navbar-brand mb-3" href="/">
      <div class="d-flex align-items-center">
        <span class="font-sans-serif mt-3">App</span>
      </div>
    </a>
  </div>
  <div class="navbar-collapse collapse" id="navbarVerticalCollapse" style="">
    <div class="navbar-vertical-content scrollbar">
      <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
        <li class="nav-item">
          <!-- label-->
          <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
            <div class="col-auto navbar-vertical-label">Menu
            </div>
            <div class="col ps-0">
              <hr class="mb-0 navbar-vertical-divider" />
            </div>
          </div>
          <!-- parent pages-->
          <a class="nav-link" href="/" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-chart-pie"></span></span><span class="nav-link-text ps-1">Painel</span>
            </div>
          </a>
          <!-- parent pages-->
          <a class="nav-link" href="/bebidas" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-beer"></span></span><span class="nav-link-text ps-1">Bebidas</span>
            </div>
          </a>

          <a class="nav-link" href="/alimentos" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-utensils"></span></span><span class="nav-link-text ps-1">Alimentos</span>
            </div>
          </a>
          <a class="nav-link" href="/estoque" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-archive"></span></span><span class="nav-link-text ps-1">Estoque</span>
            </div>
          </a>
          <a class="nav-link" href="/clientes" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-users"></span></span><span class="nav-link-text ps-1">Clientes</span>
            </div>
          </a>
          <a class="nav-link" href="/vendas" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-cash-register"></span></span><span class="nav-link-text ps-1">Ponto de Vendas</span>
            </div>
          </a>
          <a class="nav-link" href="/caixa" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-money-check-alt"></span></span><span class="nav-link-text ps-1">Meu Caixa</span>
            </div>
          </a>
          <a class="nav-link" href="/promocoes" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-bullhorn"></span></span><span class="nav-link-text ps-1">Promoções</span>
            </div>
          </a>
          <a class="nav-link" href="/funcionarios" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-user-plus"></span></span><span class="nav-link-text ps-1">Funcionários</span>
            </div>
          </a>
          <a class="nav-link" href="/relatorios" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-chart-bar"></span></span><span class="nav-link-text ps-1">Relatórios</span>
            </div>
          </a>
          <a class="nav-link" href="/configuracoes" role="button" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-cogs"></span></span><span class="nav-link-text ps-1">Configurações</span>
            </div>
          </a>
          <!-- parent pages-->
          <!-- <a class="nav-link dropdown-indicator" href="#email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="email">
            <div class="d-flex align-items-center">
              <span class="nav-link-icon">
                <span class="fas fa-archive"></span></span><span class="nav-link-text ps-1">Alimentos</span>
            </div>
          </a>
          <ul class="nav collapse false" id="email">
            <li class="nav-item"><a class="nav-link" href="app/email/inbox.html" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Inbox</span>
                </div>
              </a>
            </li>
            <li class="nav-item"><a class="nav-link" href="app/email/email-detail.html" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Email detail</span>
                </div>
              </a>
            </li>
            <li class="nav-item"><a class="nav-link" href="app/email/compose.html" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Compose</span>
                </div>
              </a>
            </li>
          </ul> -->
                 
        </li>
      </ul>
    </div>
  </div>
</nav>