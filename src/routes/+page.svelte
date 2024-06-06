<script type="module" lang="ts">
  import Layout from "../main/layouts/layout.svelte";
  import type { PageData } from "./$types";
</script>

<Layout>
  <div slot="main">
    <div class="row g-3 mb-3">
      <div class="col-md-6 col-xxl-3">
        <div class="card h-md-100 ecommerce-card-min-width">
          <div class="card-header pb-0">
            <h6 class="mb-0 mt-2 d-flex align-items-center">Vendas Semanais<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" title="Calculated according to last week's sales"><span class="far fa-question-circle" data-fa-transform="shrink-1"></span></span></h6>
          </div>
          <div class="card-body d-flex flex-column justify-content-end">
            <div class="row">
              <div class="col">
                <p class="font-sans-serif lh-1 mb-1 fs-4">$47K</p><span class="badge badge-soft-success rounded-pill fs--2">+3.5%</span>
              </div>
              <div class="col-auto ps-0">
                <div class="echart-bar-weekly-sales h-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card h-md-100">
          <div class="card-header pb-0">
            <h6 class="mb-0 mt-2">Total de Vendas</h6>
          </div>
          <div class="card-body d-flex flex-column justify-content-end">
            <div class="row justify-content-between">
              <div class="col-auto align-self-end">
                <div class="fs-4 fw-normal font-sans-serif text-700 lh-1 mb-1">58.4K</div><span class="badge rounded-pill fs--2 bg-200 text-primary"><span class="fas fa-caret-up me-1"></span>13.6%</span>
              </div>
              <div class="col-auto ps-0 mt-n4">
                <div class="echart-default-total-order"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    <div class="row g-3 mb-3">
      <div class="col-lg-12 ps-lg-2 mb-3">
        <div class="card h-lg-100">
          <div class="card-header">
            <div class="row flex-between-center">
              <div class="col-auto">
                <h6 class="mb-0">Vendas Por Mês</h6>
              </div>
              <div class="col-auto d-flex">
                <select class="form-select form-select-sm select-month me-2">
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">Jun</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
                <div class="dropdown font-sans-serif btn-reveal-trigger">
                  <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-total-sales" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                  <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-total-sales"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body h-100 pe-0">
            <!-- Find the JS file for the following chart at: src\js\charts\echarts\total-sales.js-->
            <!-- If you are not using gulp based workflow, you can find the transpiled code at: public\assets\js\theme.js-->
            <div class="echart-line-total-sales h-100" data-echart-responsive="true"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-3 mb-3">
      <div class="col-xxl-12 col-md-12">
        <div class="card z-index-1" id="recentPurchaseTable">
          <div class="card-header">
            <div class="row flex-between-center">
              <div class="col-6 col-sm-auto d-flex align-items-center pe-0">
                <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Compras Recentes </h5>
              </div>
              <div class="col-6 col-sm-auto ms-auto text-end ps-0">
                <div class="d-none" id="table-purchases-actions">
                  <div class="d-flex">
                    <select class="form-select form-select-sm" aria-label="Bulk actions">
                      <option >Bulk actions</option>
                      <option value="Refund">Refund</option>
                      <option value="Delete">Delete</option>
                      <option value="Archive">Archive</option>
                    </select>
                    <button class="btn btn-falcon-default btn-sm ms-2" type="button">Apply</button>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
          <div class="card-body px-0 py-0">
            <div class="table-responsive scrollbar">
              <table class="table table-sm fs--1 mb-0 overflow-hidden">
                <thead class="bg-200 text-900">
                  <tr>
                    <th class="white-space-nowrap">
                      <div class="form-check mb-0 d-flex align-items-center">
                        <input class="form-check-input" id="checkbox-bulk-purchases-select" type="checkbox"  />
                      </div>
                    </th>
                    <th class="sort pe-1 align-middle white-space-nowrap" data-sort="name">CustCliente</th>
                    <th class="sort pe-1 align-middle white-space-nowrap" data-sort="email">Email</th>
                    <th class="sort pe-1 align-middle white-space-nowrap" data-sort="product">Producto</th>
                    <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="payment">Pagamento</th>
                    <th class="sort pe-1 align-middle white-space-nowrap text-end" data-sort="amount">Valor</th>
                    <th class="no-sort pe-1 align-middle data-table-row-action"></th>
                  </tr>
                </thead>
                <tbody class="list" id="table-purchase-body">
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-0" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Sylvia Plath</a></th>
                    <td class="align-middle white-space-nowrap email">john@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Slick - Drag &amp; Drop Bootstrap Generator</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-success">Success<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$99</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown0" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown0"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-1" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Homer</a></th>
                    <td class="align-middle white-space-nowrap email">sylvia@mail.ru</td>
                    <td class="align-middle white-space-nowrap product">Bose SoundSport Wireless Headphones</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-success">Success<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$634</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown1" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown1"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-2" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Edgar Allan Poe</a></th>
                    <td class="align-middle white-space-nowrap email">edgar@yahoo.com</td>
                    <td class="align-middle white-space-nowrap product">All-New Fire HD 8 Kids Edition Tablet</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-secondary">Blocked<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$199</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown2" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-3" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">William Butler Yeats</a></th>
                    <td class="align-middle white-space-nowrap email">william@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Apple iPhone XR (64GB)</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-success">Success<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$798</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown3" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown3"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-4" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Rabindranath Tagore</a></th>
                    <td class="align-middle white-space-nowrap email">tagore@twitter.com</td>
                    <td class="align-middle white-space-nowrap product">ASUS Chromebook C202SA-YS02 11.6&quot;</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-secondary">Blocked<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$318</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown4" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown4"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-5" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Emily Dickinson</a></th>
                    <td class="align-middle white-space-nowrap email">emily@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Mirari OK to Wake! Alarm Clock &amp; Night-Light</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-warning">Pending<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$11</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown5" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown5"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-6" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Giovanni Boccaccio</a></th>
                    <td class="align-middle white-space-nowrap email">giovanni@outlook.com</td>
                    <td class="align-middle white-space-nowrap product">Summer Infant Contoured Changing Pad</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-success">Success<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$31</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown6" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown6"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-7" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Oscar Wilde</a></th>
                    <td class="align-middle white-space-nowrap email">oscar@hotmail.com</td>
                    <td class="align-middle white-space-nowrap product">Munchkin 6 Piece Fork and Spoon Set</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-success">Success<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$43</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown7" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown7"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-8" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">John Doe</a></th>
                    <td class="align-middle white-space-nowrap email">doe@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Falcon - Responsive Dashboard Template</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-success">Success<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$57</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown8" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown8"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-9" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Emma Watson</a></th>
                    <td class="align-middle white-space-nowrap email">emma@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Apple iPhone XR (64GB)</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-secondary">Blocked<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$999</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown9" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown9"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-10" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Sylvia Plath</a></th>
                    <td class="align-middle white-space-nowrap email">plath@yahoo.com</td>
                    <td class="align-middle white-space-nowrap product">All-New Fire HD 8 Kids Edition Tablet</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-warning">Pending<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$199</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown10" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown10"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-11" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Rabindranath Tagore</a></th>
                    <td class="align-middle white-space-nowrap email">Rabindra@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Apple iPhone XR (64GB)</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-secondary">Blocked<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$999</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown11" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown11"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-12" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Anila Wilde</a></th>
                    <td class="align-middle white-space-nowrap email">anila@yahoo.com</td>
                    <td class="align-middle white-space-nowrap product">All-New Fire HD 8 Kids Edition Tablet</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-warning">Pending<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$199</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown12" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown12"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="align-middle" style="width: 28px;">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="recent-purchase-13" data-bulk-select-row="data-bulk-select-row" />
                      </div>
                    </td>
                    <th class="align-middle white-space-nowrap name"><a href="../app/e-commerce/customer-details.html">Jack Watson </a></th>
                    <td class="align-middle white-space-nowrap email">Jack@gmail.com</td>
                    <td class="align-middle white-space-nowrap product">Apple iPhone XR (64GB)</td>
                    <td class="align-middle text-center fs-0 white-space-nowrap payment"><span class="badge badge rounded-pill badge-soft-secondary">Blocked<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                    </td>
                    <td class="align-middle text-end amount">$999</td>
                    <td class="align-middle white-space-nowrap text-end">
                      <div class="dropstart font-sans-serif position-static d-inline-block">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown13" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs--1"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown13"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Refund</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="row align-items-center">
              <div class="pagination d-none"></div>
              <div class="col">
                <p class="mb-0 fs--1"><span class="d-none d-sm-inline-block me-2" data-list-info="data-list-info"> </span>
                </p>
              </div>
              <div class="col-auto d-flex">
                <button class="btn btn-sm btn-primary" type="button" data-list-pagination="prev"><span>Previous</span></button>
                <button class="btn btn-sm btn-primary px-4 ms-2" type="button" data-list-pagination="next"><span>Next</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>
<!-- <div class="card-body overflow-hidden p-lg-6" slot="main">
      
</div> -->