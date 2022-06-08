<template>
 <div>
   <h1>View Product {{ $route.params.product_id }}</h1>
   
 </div>
</template>
<script>
export default {
  layout: "admin-layout",
  components: {  },
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

