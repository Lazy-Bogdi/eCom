<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5>About Us</h5>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
  

<script>
export default {
    name: 'Footer',
};
</script>

<style>
.footer {
    position: fixed;
    margin: 100px 0 0 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #9bacbe;
    padding: 20px;

}

.footer li {
    list-style: none;
}
</style>
<style>
.contentMain {
    padding-bottom: 200px;
    /* Adjust the value based on the height of the footer */
}
</style>
