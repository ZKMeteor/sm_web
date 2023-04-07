<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">購買人相關訊息</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="my-5 row justify-content-center">
            <ForM class="col-md-6" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
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
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
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
                <ErrorMessage
                  name="電話"
                  class="invalid-feedback"
                ></ErrorMessage>
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
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
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
              <div class="text-end">
                <button
                  class="btn btn-danger"
                  @click="$emit('creatOrder', form)"
                >
                  送出訂單
                </button>
              </div>
            </ForM>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  data() {
    return {
      modal: {},
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
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
.modal-title {
  text-align: center;
}
.modal-body {
  text-align: left;
}
h1 {
  text-align: center;
  line-height: 60px;
  font-size: 40px;
  font-weight: 600;
}
h2 {
  font-size: 30px;
  font-weight: 500;
}
h3 {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 2px;
}
h4 {
  font-size: 22px;
}
h5 {
  font-size: 35px;
  font-weight: 600;
}
p {
  font-size: 20px;
  line-height: 50px;
  word-wrap: break-word;
  opacity: 0.9;
  letter-spacing: 2px;
}
@media screen and (max-width: 767px) {
  h1 {
    text-align: center;
    line-height: 60px;
    font-size: 25px;
    font-weight: 600;
  }
  h2 {
    font-size: 23px;
    font-weight: 500;
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 25px;
    font-weight: 600;
  }
  p {
    font-size: 15px;
    line-height: 50px;
    word-wrap: break-word;
    opacity: 0.9;
    letter-spacing: 1px;
  }
}
</style>
