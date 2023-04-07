<template>
  <div class="container-fluid home animate__animated animate__fadeIn">
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
    <div class="mainTitle">
      <h1>新海誠の個人風格網站</h1>
      <br />
      <h3>新海誠個人簡介、近年創作作品以及作品周邊販賣</h3>
    </div>
    <div class="container-md about">
      <div class="row">
        <h1 style="line-height: 50px">關於 作家 新海誠</h1>
        <div class="content col-md-7 col-12">
          <h2>個人簡介</h2>
          <p style="display: inline">
            新海誠在中學時觀賞天空之城的影響，希望自己也能做出令人驚豔的作品，作品題材多半涉及男女之間的愛情，主題都以兩位主角之間的距離、遠近、遠離的速度為主題，言葉之庭的主題則是孤單渴望某個人、某項事物的心。
            你的名字、天氣之子、鈴芽之旅則是災難主題，而且都和東日本大地震有關。
          </p>
          <hr style="color: white" />
          <button @click="goProduct" class="goBtn">前往作品</button>
        </div>
        <div class="col-md-5 col-12">
          <img src="../assets/hero.jpg" class="hero" alt="" />
        </div>
      </div>
    </div>
    <div class="container-fluid sourceBox">
      <h2 style="text-align: center">本網站內容資料來源:</h2>
      <div class="row source">
        <div class="source-1 col-6 d-flex">
          <h2 style="font-weight: 600">圖文資料</h2>
          <a href="https://wall.alphacoders.com/">Wall Paperabyss</a>
          <a href="https://zh.wikipedia.org/zh-tw/%E6%96%B0%E6%B5%B7%E8%AA%A0">
            維基百科 新海誠
          </a>
          <a href="https://www.myacg.com.tw/index.php?">買動漫</a>
        </div>
        <div class="source-2 col-6 d-flex">
          <h2 style="font-weight: 600">作品相關網站</h2>
          <a href="https://suzume-tojimari-movie.jp/">鈴芽之旅 官網</a>
          <a href="https://tenkinoko.com/">天氣之子 官網</a>
          <a href="http://www.kiminona.com/">你的名字 官網</a>
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
.carousel {
  position: relative;
}
.mainTitle {
  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 2;
  border: white 2px solid;
  background-color: transparent;
  backdrop-filter: blur(15px);
  border-radius: 5px;
  width: 500px;
  height: 200px;
  padding: 20px;
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
.source {
  height: 150px;
}
.source a {
  display: inline;
  color: white;
  font-size: 20px;
  line-height: 35px;
  opacity: 0.9;
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
  line-height: 40px;
  width: 150px;
  padding: 5px;
  float: right;
}
.goBtn:hover {
  background-color: white;
  color: black;
  transition: 0.5s;
}
.sourceBox {
  padding: 50px;
  background-color: gray;
}
.source a {
  font-size: 18px;
  opacity: 0.8;
}
.source-1 {
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.source-2 {
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 767px) {
  .content {
    padding: 50px 20px;
  }
  .mainTitle {
    position: absolute;
    top: 15%;
    z-index: 100;
    border: white 2px solid;
    background-color: transparent;
    backdrop-filter: blur(15px);
    border-radius: 5px;
    width: 300px;
    height: 200px;
    padding: 15px;
    word-wrap: break-word;
  }
}
</style>
