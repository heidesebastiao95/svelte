<script type="module" lang="ts">
    import Layout from "../../main/layouts/layout.svelte";  

    import { onMount } from 'svelte';

    onMount(() => {
      const bebidas = [
            { nome: 'Cerveja Lager', categoria: 'Cerveja', preco: 5.00, volume: '500ml', estoque: 100, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Refrigerante Cola', categoria: 'Refrigerante', preco: 3.00, volume: '350ml', estoque: 50, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Suco de Laranja', categoria: 'Suco', preco: 4.50, volume: '300ml', estoque: 30, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Vinho Tinto', categoria: 'Vinho', preco: 25.00, volume: '750ml', estoque: 20, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Água Mineral', categoria: 'Água', preco: 2.00, volume: '500ml', estoque: 200, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Cerveja IPA', categoria: 'Cerveja', preco: 6.00, volume: '500ml', estoque: 80, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Refrigerante Limão', categoria: 'Refrigerante', preco: 3.00, volume: '350ml', estoque: 60, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Suco de Maçã', categoria: 'Suco', preco: 4.50, volume: '300ml', estoque: 40, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Vinho Branco', categoria: 'Vinho', preco: 25.00, volume: '750ml', estoque: 25, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Água com Gás', categoria: 'Água', preco: 2.50, volume: '500ml', estoque: 150, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Cerveja Stout', categoria: 'Cerveja', preco: 7.00, volume: '500ml', estoque: 90, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Refrigerante Guaraná', categoria: 'Refrigerante', preco: 3.00, volume: '350ml', estoque: 70, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Suco de Uva', categoria: 'Suco', preco: 4.50, volume: '300ml', estoque: 35, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Whisky', categoria: 'Destilado', preco: 50.00, volume: '700ml', estoque: 10, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { nome: 'Gin', categoria: 'Destilado', preco: 45.00, volume: '700ml', estoque: 12, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
        ];
  
      const tbody = document.getElementById('table-bebidas-body');
  
      bebidas.forEach((bebida, index) => {
        const tr = document.createElement('tr');
        tr.classList.add('btn-reveal-trigger');
        tr.innerHTML = `
          <td class="align-middle" style="width: 28px;">
            <div class="form-check mb-0">
              <input class="form-check-input" type="checkbox" id="bebida-${index}" data-bulk-select-row="data-bulk-select-row" />
            </div>
          </td>
          <td class="align-middle white-space-nowrap nome">${bebida.nome}</td>
          <td class="align-middle white-space-nowrap categoria">${bebida.categoria}</td>
          <td class="align-middle white-space-nowrap preco">${bebida.preco.toFixed(2)}</td>
          <td class="align-middle white-space-nowrap volume">${bebida.volume}</td>
          <td class="align-middle text-center fs-0 white-space-nowrap estoque">${bebida.estoque}</td>
          <td class="align-middle text-center fs-0 white-space-nowrap created_at">${bebida.created_at}</td>
          <td class="align-middle text-center fs-0 white-space-nowrap updated_at">${bebida.updated_at}</td>
          <td class="align-middle white-space-nowrap text-end">
            <div class="dropstart font-sans-serif position-static d-inline-block">
              <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end" type="button" id="dropdown${index}" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                <span class="fas fa-ellipsis-h fs--1"></span>
              </button>
              <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown${index}">
                <a class="dropdown-item" href="#!">View</a>
                <a class="dropdown-item" href="#!">Edit</a>
                <a class="dropdown-item" href="#!">Delete</a>
              </div>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });
    
    
</script>

<Layout>
    <div slot="main">
        <div class="row g-3 mb-3">
            <div class="col-xxl-12 col-md-12">
              <div class="card z-index-1" id="recentPurchaseTable">
                <div class="card-header">
                  <div class="row flex-between-center">
                    <div class="col-6 col-sm-auto d-flex align-items-center pe-0">
                      <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Bebidas </h5>
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
                      <div id="table-purchases-replace-element">
                        <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">Nova Bebida</span></button>
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
                          <th class="sort pe-1 align-middle white-space-nowrap" data-sort="nome">Nome</th>
                          <th class="sort pe-1 align-middle white-space-nowrap" data-sort="categoria">Categoria</th>
                          <th class="sort pe-1 align-middle white-space-nowrap" data-sort="preco">Preço</th>
                          <th class="sort pe-1 align-middle white-space-nowrap" data-sort="volume">Volume</th>
                          <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="estoque">Estoque</th>
                          <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="created_at">Criado em</th>
                          <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="updated_at">Atualizado em</th>
                          <th class="no-sort pe-1 align-middle data-table-row-action"></th>
                        </tr>
                      </thead>
                      <tbody class="list" id="table-bebidas-body">

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