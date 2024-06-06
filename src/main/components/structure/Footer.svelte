<script type="module" lang="ts">
  import { onMount } from 'svelte';
  
  
  onMount(() => {
    // Função para carregar e inicializar scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Lista de scripts a serem carregados
    const scripts = [
      '/vendors/popper/popper.min.js',
      '/vendors/bootstrap/bootstrap.min.js',
      '/vendors/echarts/echarts.min.js',
      '/vendors/anchorjs/anchor.min.js',
      '/vendors/is/is.min.js',
      '/vendors/fontawesome/all.min.js',
      '/vendors/lodash/lodash.min.js',
     // 'https://polyfill.io/v3/polyfill.min.js?features=window.scroll',
      '/vendors/list.js/list.min.js',
      '/assets/js/theme.js'
    ];

    // Carregar scripts em sequência
    scripts.reduce((p, src) => {
      return p.then(() => loadScript(src));
    }, Promise.resolve())
    .then(() => {
      console.log('Todos os scripts foram carregados');
    })
    .catch((err) => {
      console.error('Erro ao carregar script:', err);
    });
  });
</script>
<footer class="footer">
    <div class="row g-0 justify-content-between fs--1 mt-4 mb-3">
      <div class="col-12 col-sm-auto text-center">
        <p class="mb-0 text-600">Desenvolvido por  <span class="d-none d-sm-inline-block">| </span><br class="d-sm-none" /> 2024 &copy; <a href="/">Heide Programador</a></p>
      </div>
      <div class="col-12 col-sm-auto text-center">
        <p class="mb-0 text-600">v1.0</p>
      </div>
    </div>
  </footer>
