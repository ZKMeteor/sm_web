<template>
  <div class="container-fluid home">
    <div
      id="carouselExampleCaptions"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner" data-bs-interval="4000">
        <div class="carousel-item active">
          <img src="../assets/yourname.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>你的名字</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img
            src="../assets/weatheringwithyou.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>天氣之子</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="../assets/Suzume.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>鈴芽之旅</h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container-md about">
      <div class="row">
        <h1 style="line-height: 50px">關於 作家 新海誠</h1>
        <div class="content col-md-7 col-12">
          <h2>個人簡介</h2>
          <p>
            新海誠在中學時觀賞天空之城的影響，希望自己也能做出令人驚豔的作品，作品題材多半涉及男女之間的愛情，都以兩位主角之間的距離、遠近、遠離的速度為主題，言葉之庭的主題則是孤單渴望某個人、某項事物的心。
            你的名字、天氣之子、鈴芽之旅則是災難主題，而且都和東日本大地震有關。
            <button @click="goProduct" class="goBtn">前往作品</button>
          </p>
          <hr style="color: white" />
          <h2>資料來源:</h2>
          <a
            style="color: white; font-size: 20px; line-height: 50px"
            href="https://wall.alphacoders.com/"
            >Wall Paperabyss</a
          >
          <br />
          <a
            style="color: white; font-size: 20px; line-height: 50px"
            href="https://zh.wikipedia.org/zh-tw/%E6%96%B0%E6%B5%B7%E8%AA%A0"
            >維基百科</a
          >
          <br />
          <a
            style="color: white; font-size: 20px; line-height: 50px"
            href="https://www.myacg.com.tw/index.php?"
            >買動漫</a
          >
        </div>
        <div class="col-md-5 col-12">
          <img src="../assets/hero.jpg" class="hero" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  data() {
    return {
      item: "",
    };
  },
  methods: {
    goProduct() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
h1 {
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 40px;
  font-weight: 500;
}
h2 {
  color: white;
  font-size: 30px;
}
h5 {
  font-size: 35px;
  font-weight: 600;
}
p {
  color: white;
  font-size: 20px;
  line-height: 50px;
  word-wrap: break-word;
}
.carousel img {
  height: 100vh;
  object-fit: cover;
}
.home {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #212529;
}

.about {
  padding: 30px;
}

.content {
  padding: 100px 50px;
}
.hero {
  width: 100%;
}
.goBtn {
  background-color: transparent;
  color: white;
  font-size: 25px;
  font-weight: 600;
  border-radius: 5px;
  border: white solid 1px;
  line-height: 50px;
  padding: 5px;
}
.goBtn:hover {
  background-color: white;
  color: black;
}
@media screen and (max-width: 767px) {
  .content {
    padding: 50px 20px;
  }
}
</style>
