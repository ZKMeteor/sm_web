<template>
  <div class="container-fluid cart animate__animated animate__fadeIn">
    <div class="container">
      <LoadingIcon :active="isLoading"> </LoadingIcon>
      <div class="bg">
        <div class="row d-flex">
          <h1>結帳清單</h1>
          <div class="col-md-6 col-12">
            <table class="table">
              <tbody>
                <tr>
                  <th width="100">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-6 col-12">
            <table class="table align-middle">
              <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}{{ item.product.unit }}</td>
                  <td class="text-end">{{ item.final_total }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-end">總計</td>
                  <td class="text-end">{{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
            <div class="text-end" v-if="order.is_paid === false">
              <button class="btn btn-danger" @click.prevent="payOrder">
                確認付款去
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <cartModal ref="modal"></cartModal>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          console.log(this.order);
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
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
  align-items: center;
  padding: 50px 100px;
}
.btn {
  float: right;
}
.cartItem {
  text-align: right;
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
