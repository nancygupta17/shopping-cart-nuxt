<template>
  <section class="container">
    <div>
      <div class="row">
        <div class="col-4" v-for="(product, index) in productList" :key="index">
          <b-card
            :title="product.title"
            :img-src='product.image'
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              {{product.description}}
            </b-card-text>
            <b-card-text>
              ${{product.price}}.00
            </b-card-text>
            <b-button href="#" variant="primary" @click="addToCart(product.productId)">Add To Cart</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Products from "~/static/data.json";
export default {
  layout: "admin-layout",
  components: { Products },
  computed: {
    ...mapState(['product']),
    ...mapGetters({
      cartData: "product/cartProducts",
    }),
  },

  data() {
    return {
      productList: Products,
    };
  },
  methods: {
      addToCart (productId) {
          this.$store.dispatch("product/addProduct", productId);
      }
  }
};
</script>
<style>
img.card-img-top {
    height: 200px;
}
</style>



