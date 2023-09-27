<template>
  <div class="top">
    <div class="box">
      <div class="top-1">
        <h1></h1>
      </div>
      <div class="top-3">
        <input type="checkbox" id="btn_control" style="display: none" />
        <label for="btn_control" class="btn_control">
          <span></span>
        </label>
        <div class="tag">
          <router-link :to="{ name: 'home' }" active-class="active">
            Home
          </router-link>
          <router-link :to="{ name: 'about' }" active-class="active">
            Porject
          </router-link>
          <router-link :to="{ name: 'product' }" active-class="active">
            Product
          </router-link>
          <router-link :to="{ name: 'cart' }" active-class="active">
            <ion-icon name="cart" style="font-size: 40px"></ion-icon>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    check() {
      document.addEventListener("click", function (event) {
        const mailbtn = document.querySelector(".btn_control");
        const btn_control = document.getElementById("btn_control");
        const tag = document.querySelector(".tag");
        if (event.target == mailbtn) {
          btn_control.checked = !btn_control.checked;
        }
        if (
          btn_control.checked &&
          event.target !== tag &&
          event.target !== mailbtn
        ) {
          btn_control.checked = false;
        }
      });
    },
    mounted() {
      this.check;
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.top {
  width: 100%;
  position: fixed;
  backdrop-filter: blur(0px);
  background-color: rgba(12, 9, 9, 0.336);
  color: white;
  height: 70px;
  z-index: 100;
}
.box {
  height: 80px;
  display: flex;
  align-items: center;
}
.top-1 {
  flex: 2;
  text-align: center;
}
.top-3 a {
  color: white;
  font-size: 25px;
  position: relative;
}

.top-3 {
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
}
.top-3 a:hover {
  border-radius: 5px;
  color: aqua;
  transform: translateY(-3px);
  transition: 0.5s;
}
.top-3 a::after {
  content: "";
  position: absolute;
  left: 0%;
  right: 100%;
  bottom: 1px;
  transition: 0.4s;
}
.top-3 a:hover::after {
  left: 0;
  right: 0;
}
.tag {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
.active {
  text-decoration: underline;
  font-weight: 500;
  color: aqua;
}

@media screen and (max-width: 768px) {
  .btn_control span {
    opacity: 5;
    background-color: rgba(140, 247, 255, 0.884);
  }
  .btn_control {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5%;
    background: white;
    height: 2px;
    width: 30px;
    margin: auto;
    box-shadow: 0px 8px 0px white, 0px -8px 0px white;
    z-index: 999;
  }
  .tag {
    background-color: rgba(140, 247, 255, 0.884);
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100dvh;
    flex: 1;
    display: flex;
    flex-direction: column; /*由左至右*/
    align-items: center; /*水平*/
    justify-content: center;
    font-size: 25px;
    transition: 0.5s;
  }
  #btn_control:checked ~ .tag {
    right: 0px;
  }
}
</style>
