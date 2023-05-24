<template>
  <div class="container-fluid cart animate__animated animate__fadeIn">
    <div class="container">
      <div class="bg">
        <div class="row d-flex">
          <h1>購物清單</h1>
          <div class="content col-md-7 col-12">
            <table class="table">
              <LoadingIcon :active="isLoading"> </LoadingIcon>
              <thead>
                <tr>
                  <th width="50">編輯</th>
                  <th width="200">商品名稱</th>
                  <th width="100">售價</th>
                  <th width="160">數量</th>
                  <th width="100">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="cartItem animate__animated animate__slideInRight"
                  v-for="c in cart"
                  :key="c.id"
                >
                  <td>
                    <div class="btn-group">
                      <button
                        class="btn btn-outline-danger btn-sm"
                        @click="delcart(c)"
                      >
                        <ion-icon
                          name="trash-outline"
                          style="color: red"
                          size="small"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                  <td>{{ c.product.title }}</td>
                  <td class="">
                    {{ $filters.currency(c.product.price) }}
                  </td>
                  <td class="">
                    <div class="number">
                      <input
                        type="number"
                        class="qty"
                        min="1"
                        style="display: inline"
                        v-model.number="c.qty"
                        @change="updatacart(c)"
                      />
                      <h4 style="display: inline">{{ c.product.unit }}</h4>
                    </div>
                  </td>
                  <td class="text-right">
                    {{ $filters.currency(c.total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-right">總計:</td>
                  <td class="text-right">
                    {{ $filters.currency(finalTotal) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="col-md-5 col-12">
            <div
              id="carouselExampleControls"
              class="carousel slide title1"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/Suzume.jpg" class="d-block" />
                </div>
                <div class="carousel-item" v-for="c in cart" :key="c.id">
                  <img :src="c.product.imageUrl" class="d-block" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class="m-5 row justify-content-center">
          <ForM class="col-md-6" v-slot="{ errors }" @submit="createOrder">
            <div class="my-3">
              <label for="email" class="form-label">Email</label>
              <FielD
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></FielD>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <FielD
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></FielD>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <FielD
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></FielD>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <FielD
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></FielD>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end mb-3">
              <button class="btn btn-danger">送出訂單</button>
            </div>
          </ForM>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "",
      cart: {},
      isLoading: false,
      finalTotal: "",
      qty: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getCart() {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        this.cart = response.data.data.carts;
        console.log(this.cart);
        this.finalTotal = response.data.data.final_total;
      });
    },
    delcart(c) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${c.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        this.getCart();
      });
    },
    updatacart(c) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${c.id}`;
      this.isLoading = true;
      let cart = {
        product_id: c.product_id,
        qty: c.qty,
      };
      this.$http.put(api, { data: cart }).then((response) => {
        this.getCart();
        this.isLoading = false;
        console.log(response);
      });
    },
    openModal() {
      let modal = this.$refs.modal;
      modal.showModal();
    },
    createOrder() {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      let order = this.form;
      this.$http.post(api, { data: order }).then((response) => {
        this.$router.push(`/checkOrder/${response.data.orderId}`);
      });
      let modal = this.$refs.modal;
      modal.hideModal();
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  color: black;
}
.cart {
  background-image: url(../assets/productIdBg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  overflow: auto;
  position: relative; /* 添加定位，使得兩個背景層可以疊加 */
}
.cart::after {
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
.row {
  background-color: white;
}
.content {
  padding: 40px 50px;
  text-align: right;
}
.title1 {
  padding: 20px;
  width: 100%;
}
.title1 img {
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 400px;
}
.cartItem {
  text-align: right;
}
.qty {
  border: none;
  border-bottom: 1px solid black;
  width: 50px;
  text-align: center;
}
@media screen and (max-width: 767px) {
  .content {
    padding: 40px 0px;
  }
  .title1 {
    display: none;
  }
}
</style>
