<template>
  <section class="container">
    <div>
      <div class="container">
        <div class="content">
          <h5>Welcome</h5>
          <p>This website is used to add product in you cart and then check the total products</p>
          <b-button href="/products" variant="primary">Go to Products</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin-layout',
  components: {},
  fetch ({ store }) {
      return store.dispatch('product/load')
  },
  computed: {
      ...mapState(['product']),
  }
}
</script>
<style>
.content {
  text-align: center;
  margin: 100px 0;
}
</style>


