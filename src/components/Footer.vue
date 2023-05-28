<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5>About Us</h5>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support Center</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
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

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa; /* Set the desired background color */
  padding: 20px; /* Add padding if needed */
}
</style>
