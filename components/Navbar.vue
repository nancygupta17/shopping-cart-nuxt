<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Home</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/products" right>Products</b-nav-item>
                    <b-nav-item href="/cart" right>Cart <b-badge variant="light">{{totalItems}}</b-badge></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
   
    ...mapGetters({
      totalItems: "product/totalItems",
    }),
  },
};
</script>
