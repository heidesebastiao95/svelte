<script type="module">
    import Sidebar from "../components/structure/Sidebar.svelte";
    import Navbar from "../components/structure/Navbar.svelte";
    import Footer from "../components/structure/Footer.svelte";
    import Main from "../components/structure/Main.svelte";
</script>

<main class="main" id="top">
    <div class="container-fluid" data-layout="container">
        <Sidebar></Sidebar>
        <div class="content">
            <Navbar></Navbar>
            <Main>
               <slot name="main"/>
            </Main>
            <Footer></Footer>
        </div>
    </div>
</main>




