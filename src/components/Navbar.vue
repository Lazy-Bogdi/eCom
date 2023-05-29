<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <!-- Search Icon -->
            <span class="navbar-brand">
                <i class="bi bi-search"></i>
            </span>

            <!-- Burger Menu -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Brand Title -->
            <a class="navbar-brand" href="/">Lazy Case</a>

            <!-- Profile Icon -->
            <span class="navbar-brand">
                <i class="bi bi-person"></i>
            </span>

            <!-- Bucket with Item Count -->
            <a class="navbar-brand" href="#">
                <i class="bi bi-bag"></i>
                <span class="badge bg-primary">3</span>
            </a>

            <!-- Collapsible Menu Items -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <!-- Add your menu items here -->
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'Navbar',
};
</script>
