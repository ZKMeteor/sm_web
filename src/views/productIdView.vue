<template>
  <div class="container-fluid ID animate__animated animate__fadeIn">
    <LoadingIcon :active="isLoading"> </LoadingIcon>
    <div class="container">
      <div class="row bg">
        <div class="main col-md-6 col-12">
          <img :src="product.imageUrl" class="mainPic" />
        </div>
        <div class="content col-md-6 col-12">
          <div class="top">
            <h1>
              {{ product.title }}
            </h1>
            <hr style="color: white" />
            <h3>{{ product.description }}</h3>
          </div>
          <div class="cart">
            <h3 style="display: inline">請輸入數量:</h3>
            <input type="number" v-model="qty" min="1" />
            <h3 style="display: inline">{{ product.unit }}</h3>
            <button
              class="btnCart mb-2"
              :disabled="this.status.loadingItem === this.product.id"
              @click="addCart()"
            >
              <div
                v-if="this.status.loadingItem === this.product.id"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              加入購物車
            </button>
          </div>
          <div class="bottom">
            <h3 style="text-decoration: line-through; display: inline">
              原價: {{ product.origin_price }}元
            </h3>
            <h4 class="price">優惠價:{{ product.price }}元</h4>
          </div>
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
      qty: 1,
      status: {
        loadingItem: "", //對應品項id
      },
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
        }
      });
    },
    addCart() {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = this.item;
      let cart = {
        product_id: this.item,
        qty: this.qty,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        this.status.loadingItem = "";
        console.log(response);
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
  padding-top: 100px;
  z-index: 1;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainPic {
  object-fit: fill;
  align-items: center;
  width: 450px;
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  color: white;
}
.top {
  flex: 2;
}
.cart {
  flex: 0;
}
input {
  height: 40px;
  width: 40px;
  font-size: 25px;
  background: white;
  border: none;
  border-radius: 5px;
  border-bottom: white 1px solid;
  outline: none;
  color: black;
  font-weight: 500;
  text-align: center;
}
.btnCart {
  border: 2px white solid;
  background: transparent;
  border-radius: 5px;
  color: white;
  width: 150px;
  height: 50px;
  font-size: 20px;
  backdrop-filter: blur(5px);
  float: right;
}
.btnCart:hover {
  background-color: white;
  color: black;
}
.bottom {
  flex: 0;
}
.price {
  color: red;
  font-size: 30px;
  font-weight: 400;
  display: inline;
  float: right;
}
@media screen and (max-width: 767px) {
  .mainPic {
    object-fit: cover;
    height: 50vh;
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
