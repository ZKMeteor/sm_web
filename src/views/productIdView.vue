<template>
  <div class="container-fluid ID">
    <LoadingIcon :active="isLoading"> </LoadingIcon>
    <div class="container">
      <div class="row bg">
        <div class="col-md-6 col-12">
          <img :src="product.imageUrl" class="mainPic" />
        </div>
        <div class="content col-md-6 col-12">
          <h1>
            {{ product.title }}
          </h1>
          <hr style="color: white" />
          <h3>{{ product.description }}</h3>
          <div class="origin">
            <h3>原價:{{ product.origin_price }}元</h3>
          </div>
          <div class="price">優惠價:{{ product.price }}元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      item: "",
      product: "",
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.item}`;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.product = response.data.product;
          console.log(this.product);
        }
      });
    },
  },
  created() {
    this.item = this.$route.params.id;
    this.getProduct();
  },
};
</script>

<style>
.ID {
  background-image: url(../assets/productIdBg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  overflow: auto;
  position: relative; /* 添加定位，使得兩個背景層可以疊加 */
}
.ID::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    175deg,
    rgba(33, 37, 41, 0.9) 0,
    rgba(33, 37, 41, 0.3)
  );
  z-index: 0;
}
.bg {
  position: relative;
  padding-top: 150px;
  z-index: 1;
}
.mainPic {
  object-fit: cover;
  height: 70vh;
  padding: 50px;
  max-width: 600px;
}
.content {
  position: relative;
  padding: 50px 20px;
  color: white;
}
.origin {
  position: absolute;
  left: 0;
  bottom: 0;
  text-decoration: line-through;
  display: inline;
}
.price {
  position: absolute;
  display: inline;
  right: 0;
  bottom: 0;
  color: red;
  font-size: 35px;
  font-weight: 400;
}
@media screen and (max-width: 767px) {
  .mainPic {
    object-fit: cover;
    height: 70vh;
    padding: 25px;
    max-width: 600px;
  }
  .content {
    position: relative;
    padding: 45px 15px;
    color: white;
  }
}
</style>
