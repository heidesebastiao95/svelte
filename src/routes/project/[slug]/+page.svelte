<script lang="ts">
    import Layout from "../../../main/layouts/layout.svelte";
</script>

<Layout>
    <div class="card-body overflow-hidden p-lg-6">
        <div class="row align-items-center">
          <div class="col-lg-6"><img class="img-fluid" src="../assets/img/icons/spot-illustrations/21.png" alt="" /></div>
          <div class="col-lg-6 ps-lg-4 my-5 text-center text-lg-start">
            <h3 class="text-primary">{ "" }</h3>
            <p class="lead">Create Something Beautiful.</p>
            <button class="btn btn-falcon-primary" type="button">
                +
            </button>
            <button class="btn btn-falcon-primary" type="button" disabled>
                0
             </button>
            <button class="btn btn-falcon-primary" type="button">
               -
            </button>
          </div>
        </div>
      </div>
</Layout>