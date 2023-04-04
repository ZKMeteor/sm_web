<template>
  <div class="container-fluid product">
    <LoadingIcon :active="isLoading"> </LoadingIcon>
    <div class="container">
      <div class="row bg">
        <div class="searchBox">
          <input type="text" v-model="search" placeholder="請輸入關鍵字" />
        </div>
        <div class="col-md-2">
          <h1>商品列表</h1>
          <div class="list">
            <div
              class="choose"
              :class="{ active: active }"
              active-class="activeClass"
              @click="chooseClass($event)"
            >
              所有商品
            </div>
            <div
              class="choose"
              :class="{ active: active }"
              active-class="activeClass"
              @click="chooseClass($event)"
            >
              鈴芽之旅
            </div>
            <div
              class="choose"
              :class="{ active: active }"
              active-class="activeClass"
              @click="chooseClass($event)"
            >
              天氣之子
            </div>
            <div
              class="choose"
              :class="{ active: active }"
              active-class="activeClass"
              @click="chooseClass($event)"
            >
              你的名字
            </div>
          </div>
        </div>
        <div class="item col-md-9">
          <div
            v-for="p in searchProduct"
            :key="p.id"
            class="card"
            @click="chooseItem(p.id)"
          >
            <img :src="p.imageUrl" class="img-fluid" />
            <div class="">
              <h3 class="card-title">{{ p.title }}</h3>
              <div class="bottom">
                <p class="card-origin">原價:{{ p.origin_price }}</p>
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
export default {
  data() {
    return {
      product: [],
      search: "",
      isLoading: false,
      category: "所有商品",
    };
  },
  methods: {
    getProduct() {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        console.log(response.data);
        this.product = response.data.products;
      });
    },
    chooseItem(p) {
      console.log(p);
      this.$router.push(`/product/${p}`);
    },
    chooseClass(e) {
      console.log(e.target.innerText);
      this.category = e.target.innerText;
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
.list {
  background: transparent;
  display: flex;
  flex-direction: column;
}
.choose {
  border-radius: 2px;
  text-align: center;
  background: transparent;
  font-size: 30px;
  color: white;
  font-weight: 600;
  line-height: 50px;
  cursor: pointer;
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
  min-height: 400px;
  width: 210px;
  margin: 15px;
  border: none;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  backdrop-filter: blur(5px);
  color: white;
  cursor: pointer;
  display: flex;
}
.card:hover {
  background-color: gray;
  transition: 1s;
}
.card img {
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  object-fit: fill;
  object-position: 0;
  padding: 2px;
}
.card img:hover {
  object-fit: cover;
  object-position: center center;
}
.card-title {
  line-height: 50px;
  text-align: center;
}
.card-origin {
  text-decoration: line-through;
}
.bottom p {
  display: inline;
  letter-spacing: 0px;
  font-weight: 600;
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
    flex-wrap: wrap;
    flex-direction: column;
  }
  .card {
    width: 150px;
  }
}
</style>
