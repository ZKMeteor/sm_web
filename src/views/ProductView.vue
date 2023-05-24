<template>
  <div class="container-fluid product animate__animated animate__fadeIn">
    <LoadingIcon :active="isLoading"> </LoadingIcon>
    <div class="container">
      <div class="row bg">
        <div class="searchBox">
          <input type="text" v-model="search" placeholder="請輸入關鍵字" />
        </div>
        <div class="list col-md-2">
          <div class="listbox">
            <ToastMessages></ToastMessages>
            <h1>商品列表</h1>
            <div>
              <div
                class="choose"
                :class="{ bgc: style === '所有商品' }"
                @click="chooseClass($event)"
              >
                所有商品
              </div>
              <div
                class="choose"
                :class="{ bgc: style === '鈴芽之旅' }"
                @click="chooseClass($event)"
              >
                鈴芽之旅
              </div>
              <div
                class="choose"
                :class="{ bgc: style === '天氣之子' }"
                @click="chooseClass($event)"
              >
                天氣之子
              </div>
              <div
                class="choose"
                :class="{ bgc: style === '你的名字' }"
                @click="chooseClass($event)"
              >
                你的名字
              </div>
            </div>
          </div>
        </div>
        <div class="item col-md-9">
          <div v-for="p in searchProduct" :key="p.id" class="card">
            <img
              :src="p.imageUrl"
              class="img-fluid"
              @click="chooseItem(p.id)"
            />
            <ion-icon
              name="cart-outline"
              class="icons"
              @click="addCart(p.id)"
            ></ion-icon>
            <div class="">
              <h4 class="card-title">{{ p.title }}</h4>
              <div class="bottom">
                <p class="card-origin" style="font-size: 15px">
                  原價:{{ p.origin_price }}
                </p>
                <p class="card-price">優惠價:{{ p.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToastMessages from "@/components/ToastMessages.vue";
export default {
  data() {
    return {
      product: [],
      search: "",
      isLoading: false,
      category: "所有商品",
      style: "所有商品",
      status: "",
    };
  },
  components: {
    ToastMessages,
  },
  inject: ["emitter"],
  methods: {
    getProduct() {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.product = response.data.products;
      });
    },
    chooseItem(p) {
      this.$router.push(`/product/${p}`);
    },
    chooseClass(e) {
      this.category = e.target.innerText;
      this.style = e.target.innerText;
    },
    addCart(p) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status = p;
      let cart = {
        product_id: p,
        qty: 1,
      };
      this.isLoading = true;
      this.$http.post(api, { data: cart }).then((response) => {
        this.status = "";
        this.isLoading = false;
        console.log(response);
        this.$httpMessage(response, "加入購物車");
      });
    },
  },
  computed: {
    searchProduct() {
      return this.product
        .filter((c) => {
          if (this.category === "所有商品") {
            return c;
          } else {
            return this.category === c.category;
          }
        })
        .filter((i) => {
          return i.title.match(this.search);
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
input {
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px white solid;
  width: 500px;
  height: 50px;
  color: white;
  font-size: 25px;
}
.searchBox {
  padding: 10px;
  text-align: center;
}
.product {
  background-image: url(../assets/productBg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  overflow: auto;
  position: relative; /* 添加定位，使得兩個背景層可以疊加 */
}
.product::after {
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
.listbox {
  position: fixed;
  background: transparent;
}
.choose {
  border-radius: 2px;
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 600;
  line-height: 50px;
  cursor: pointer;
}
.choose.bgc {
  background-color: white;
  color: black;
}
.choose:hover {
  background-color: white;
  color: black;
}
.activeClass {
  background: aqua;
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
.card {
  position: relative;
  border-radius: 5px;
  min-height: 375px;
  width: 210px;
  margin: 15px;
  border: none;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  backdrop-filter: blur(5px);
  color: white;
  display: flex;
  padding: 5px;
}
.card:hover {
  box-shadow: 2px 2px 2px white, -2px -2px 2px white, -2px 2px 2px white,
    2px -2px 2px white;
  transition: 0.5s;
}
.card img {
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  object-fit: fill;
  object-position: 0;
  padding: 2px;
  cursor: pointer;
}
.card:hover img {
  object-fit: cover;
  object-position: center center;
}
.icons {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 20;
  border: 1px white solid;
  border-radius: 25px;
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
}
.icons:hover {
  background-color: white;
  color: black;
}
.card-title {
  text-align: center;
}
.card-origin {
  text-decoration: line-through;
}
.bottom p {
  display: inline;
  letter-spacing: 0px;
  font-weight: 600;
  text-align: center;
}
.bottom {
  position: absolute;
  bottom: 0;
}
.card-price {
  float: right;
  font-weight: 500;
  color: red;
  font-size: 20px;
}
@media screen and (max-width: 767px) {
  input {
    width: 300px;
    height: 50px;
    color: white;
    font-size: 25px;
  }
  .list {
    display: none;
  }
  .card {
    width: 150px;
    min-height: 400px;
  }
  .card img {
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
    object-position: center center;
    padding: 2px;
    cursor: pointer;
  }
}
</style>
