<template>
  <div class="container-fluid about">
    <div class="container">
      <div class="bg">
        <h1>作品介紹</h1>
        <div class="row d-flex">
          <div class="content col-md-7 col-12">
            <h2 style="text-align: center">鈴芽之旅</h2>
            <p style="padding: 10px 50px">
              鈴芽之旅在描寫引發災難的“門”的與少女的解放與成長的現代冒險故事，故事背景設定在各地的廢墟中日本。
              麻雀路的盡頭等待著你的是你從未見過的風景、與人相遇與離別、許多驚喜和困難，
              儘管如此，他們前進的冒險為我們與焦慮和不便並肩生活的旅程帶來了一線曙光。
              一個連接過去、現在和未來的故事。
              <br />
              <br />
              2022年11月11日。風景將永遠銘刻在您的心中。
            </p>
          </div>
          <div class="col-md-5 col-12">
            <img src="../assets/title1.jpg" class="title1" />
          </div>
        </div>
        <div class="row d-flex flex-row-reverse">
          <div class="content col-md-7 col-12">
            <h2 style="text-align: center">天氣之子</h2>
            <p style="padding: 10px 50px">
              天氣之子在講述了在氣候失衡的時代，一對男女被命運折騰，“選擇”了自己的生活方式的故事。
              來到東京的離家出走的少年遇到了擁有神秘力量的少女。
              他們的愛情故事既美麗又痛苦，在我們進入新時代之際，作為對所有世代和整個世界的信息而被描繪出來。
              <br />
              <br />
              2019年7月19日。
            </p>
          </div>
          <div class="col-md-5 col-12">
            <img src="../assets/title2.jpg" class="title1" />
          </div>
        </div>
        <div class="row d-flex">
          <div class="content col-md-7 col-12">
            <h2 style="text-align: center">你的名字</h2>
            <p style="padding: 10px 50px">
              你的名字是一個男孩和一個女孩在夢中“交換”偶然發現彼此的意識會互換至對方身上後，
              所延伸的連串奇異際遇的愛情和奇蹟的故事。
              以壓倒性的視覺美感和規模描繪了來自不同世界的兩個人之間的距離和聯繫所產生的“距離”戲劇。
              <br />
              <br />
              2016年8月26日。
            </p>
          </div>
          <div class="col-md-5 col-12">
            <img src="../assets/title3.jpg" class="title1" />
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
      item: "",
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.about {
  background-image: url(../assets/projectBg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  overflow: auto;
  position: relative; /* 添加定位，使得兩個背景層可以疊加 */
}
.about::after {
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
  margin: 0;
  z-index: 1;
}
.content {
  padding: 100px 50px;
}
.title1 {
  padding: 20px;
  width: 80%;
}
@media screen and (max-width: 767px) {
  .content {
    padding: 40px 0px;
  }
}
</style>
