<script type="module" lang="ts">
  import Layout from "../main/layouts/layout.svelte";
  import type { PageData } from "./$types";

  let count = 0;
  let increment = () => { count++; };
  let reset = () => { count--; };
  export let data: PageData;
  
  console.log(data.result);
</script>

<Layout>
  <div class="card-body overflow-hidden p-lg-6" slot="main">
      <div class="row align-items-center">
        <div class="col-lg-6"><img class="img-fluid" src="../assets/img/icons/spot-illustrations/21.png" alt="" /></div>
        <div class="col-lg-6 ps-lg-4 my-5 text-center text-lg-start">
                {#if data.result.length > 0}
                {#each data.result as project}
                    <h3 class="text-primary">{project.name}</h3>
                    <p class="lead">Create Something Beautiful.</p>
                {/each}
            {:else}
                <p>Loading...</p>
            {/if}
          <button class="btn btn-falcon-primary" type="button" on:click={increment}>
              +
          </button>
          <button class="btn btn-falcon-primary" type="button" disabled>
              {count}
           </button>
          <button class="btn btn-falcon-primary" type="button" on:click={reset}>
             -
          </button>
        </div>
      </div>
    </div>
</Layout>
