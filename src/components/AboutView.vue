<template>
  <Navbar />
  <div class="container-fluid box">
    <div class="container">
      <div class="text-end">
        <button class="btn btn-primary" type="button" @click="openModal(true)">
          增加一個
        </button>
      </div>
      <table class="table">
        <Loading :active="isLoading"> </Loading>
        <ToastMessages></ToastMessages>
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="200">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in products" :key="i.id">
            <td>{{ i.category }}</td>
            <td>{{ i.title }}</td>
            <td class="text-right">
              {{ $filters.currency(i.origin_price) }}
            </td>
            <td class="text-right">
              {{ $filters.currency(i.price) }}
            </td>
            <td>
              <span class="text-success" v-if="i.is_enabled">啟用</span>
              <span class="text-mute" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, i)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="delModal(i)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :pages="pagination" @emit-pages="getproducts"></pagination>
      <ProductModal
        ref="ProductModal"
        :product="tempProduct"
        @update-Product="updataProduct"
      ></ProductModal>
      <delProductModal
        ref="delProductModal"
        :delproduct="tempProduct"
        @delProductModal="delProductModal"
      ></delProductModal>
    </div>
  </div>
</template>

<script>
import pagination from "@/components/pagination.vue";
import Navbar from "@/components/Navbar.vue";
import ProductModal from "../components/ProductModal.vue";
import delProductModal from "@/components/delProductModal.vue";
import ToastMessages from "@/components/ToastMessages.vue";
export default {
  data() {
    return {
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ["emitter"],
  components: {
    Navbar,
    ProductModal,
    delProductModal,
    pagination,
    ToastMessages,
  },
  methods: {
    getproducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response);
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.ProductModal;
      productComponent.showModal();
    },
    updataProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product`;
      let httpMethods = "post";
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item.id}`;
        httpMethods = "put";
      }
      const productComponent = this.$refs.ProductModal;
      this.$http[httpMethods](api, { data: this.tempProduct }).then(
        (response) => {
          productComponent.hideModal();
          this.getproducts();
          this.$httpMessage(response, "更新");
        }
      );
    },
    delModal(i) {
      this.tempProduct = { ...i };
      const delComponent = this.$refs.delProductModal;
      delComponent.showModal();
    },
    delProductModal() {
      const delComponent = this.$refs.delProductModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.tempProduct.id}`;
      this.$http.delete(api).then((response) => {
        this.$httpMessage(response, "更新");
        delComponent.hideModal();
        this.getproducts();
      });
    },
  },
  created() {
    this.getproducts();
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push("/");
      }
    });
  },
};
</script>

<style scoped>
.box {
  padding-top: 200px;
}
</style>
