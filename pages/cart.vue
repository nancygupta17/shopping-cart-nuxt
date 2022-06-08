<template>
  <section class="container">
    <div>
      <div class="row">
        <div class="col-8 mt-4">
          <div class="price-sec">Total Amount : ${{ totalPrice.toFixed(2) }}</div>
        </div>
        <div class="col-4 mt-4">
          <div class="cart-action-sec">
            <b-button variant="danger" @click="emptyCart()">Empty Cart</b-button>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-4 mt-4"
          v-for="(productData, index) in productList"
          :key="index"
        >
          <b-card
            :title="productData.title"
            :img-src="productData.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            v-if="cartData.indexOf(productData.productId) > -1"
          >
            <b-card-text>
              {{ productData.description }}
            </b-card-text>
            <b-card-text> ${{ productData.price }}.00 </b-card-text>
            <b-button
              href="#"
              variant="primary"
              @click="removeFromCart(productData.productId, productData.price)"
              >Remove From Cart</b-button
            >
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Products from "~/static/data.json";
export default {
  layout: "admin-layout",
  components: { Products },
  computed: {
    ...mapState(["product"]),
    ...mapGetters({
      cartData: "product/cartProducts",
      totalPrice: "product/totalPrice",
    }),
  },

  data() {
    return {
      productList: Products,
    };
  },
  methods: {
    removeFromCart(productId, productPrice) {
      let payload = {
        productId: productId,
        productPrice: productPrice,
      };
      this.$store.dispatch("product/removeProduct", payload);
    },
    emptyCart() {
        this.$store.dispatch("product/load");
    }
  },
};
</script>
<style>
img.card-img-top {
  height: 200px;
}
</style>



