<script type="module" lang="ts">
    import Layout from "../../main/layouts/layout.svelte";  

    import { onMount } from 'svelte';

    onMount(() => {
        const funcionarios = [
            { funcionario_id: 1, nome: 'Luiz Santos', cargo: 'Gerente', departamento: 'Vendas', data_admissao: new Date().toISOString() },
            { funcionario_id: 2, nome: 'Paula Rodrigues', cargo: 'Analista', departamento: 'Marketing', data_admissao: new Date().toISOString() },
            { funcionario_id: 3, nome: 'Roberto Almeida', cargo: 'Desenvolvedor', departamento: 'TI', data_admissao: new Date().toISOString() },
            { funcionario_id: 4, nome: 'Carla Ferreira', cargo: 'Assistente', departamento: 'Recursos Humanos', data_admissao: new Date().toISOString() },
            { funcionario_id: 5, nome: 'Fernanda Costa', cargo: 'Supervisor', departamento: 'Operações', data_admissao: new Date().toISOString() }
          ];
      
          const tbody = document.getElementById('table-funcionarios-body');
      
          funcionarios.forEach((funcionario, index) => {
            const tr = document.createElement('tr');
            tr.classList.add('btn-reveal-trigger');
            tr.innerHTML = `
              <td class="align-middle" style="width: 28px;">
                <div class="form-check mb-0">
                  <input class="form-check-input" type="checkbox" id="funcionario-${index}" data-bulk-select-row="data-bulk-select-row" />
                </div>
              </td>
              <td class="align-middle white-space-nowrap funcionario_id">${funcionario.funcionario_id}</td>
              <td class="align-middle white-space-nowrap nome">${funcionario.nome}</td>
              <td class="align-middle white-space-nowrap cargo">${funcionario.cargo}</td>
              <td class="align-middle white-space-nowrap departamento">${funcionario.departamento}</td>
              <td class="align-middle text-center fs-0 white-space-nowrap data_admissao">${funcionario.data_admissao}</td>
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
                      <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Funcionários </h5>
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
                        <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">Novo Funcionário</span></button>
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
                                <input class="form-check-input" id="checkbox-bulk-purchases-select" type="checkbox" />
                              </div>
                            </th>
                            <th class="sort pe-1 align-middle white-space-nowrap" data-sort="funcionario_id">ID do Funcionário</th>
                            <th class="sort pe-1 align-middle white-space-nowrap" data-sort="nome">Nome</th>
                            <th class="sort pe-1 align-middle white-space-nowrap" data-sort="cargo">Cargo</th>
                            <th class="sort pe-1 align-middle white-space-nowrap" data-sort="departamento">Departamento</th>
                            <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="data_admissao">Data de Admissão</th>
                            <th class="no-sort pe-1 align-middle data-table-row-action"></th>
                          </tr>
                        </thead>
                        <tbody class="list" id="table-funcionarios-body">
                          <!-- Conteúdo gerado por JavaScript -->
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