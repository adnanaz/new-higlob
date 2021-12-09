<template>
  <div>
    <!-- Banner Persiapan -->

    <v-container class="container-all" fluid style="background-color: #f8faff">
      <v-btn
        @click="scrollMeTo('awal')"
        class="mx-2 btn-munggah"
        fab
        dark
        large
        color="#FF9900"
      >
        <v-icon class="arrow1" dark> mdi-navigation </v-icon>
      </v-btn>
      <section
        ref="awal"
        class="banner__persiapan"
        :style="$vuetify.breakpoint.mdAndUp ? 'margin-top : 8rem;' : ''"
      >
        <v-row>
          <v-col
            class="banner__persiapan-colkiri order-1 order-sm-1 order-md-1"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h4 class="banner__persiapan-h4">当社のサービス</h4>
            <h1 class="banner__persiapan-h1">言語の準備</h1>
            <p class="banner__persiapan-p">
              言語の準備はLPKヒグロブからのサービスです
              あなたの前で使われる日本語プログラムを提供する 日本に向けて出発
            </p>
          </v-col>
          <v-col
            offset-x="100"
            offset-y="10"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="
              banner__persiapan-colkanan
              justify-end
              order-2 order-sm-2 order-md-2
            "
          >
            <v-img
              class="banner__persiapan-img"
              :src="require('@/assets/images/banner-persiapanbahasa.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- END BANNER Persiapan -->

    <!--Start BANNER SYARAT -->

    <v-container class="container-all">
      <section class="banner__syarat">
        <v-row class="banner__syarat-row">
          <v-col
            class="d-flex justify-start banner__syarat-tulisankiri"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><h1 class="banner__syarat-h1atas">
              「語学準備サービスに参加しましょう」
            </h1></v-col
          >
          <v-col
            class="d-flex justify-end banner__syarat-tulisankanan"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><p class="banner__syarat-patas">
              LPK Higlobに参加すると、達成が容易になります あなたの夢は速く。
            </p></v-col
          >
        </v-row>

        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__syarat-colkiri order-2 order-sm-2 order-md-1"
          >
            <v-img
              class="banner__syarat-img"
              :src="require('@/assets/images/banner-syaratbahasa.png')"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__syarat-colkanan order-1 order-sm-1 order-md-1"
          >
            <h4 class="banner__syarat-h4">S＆K言語準備LPK</h4>
            <h1 class="banner__syarat-h1">言語準備への参加条件</h1>
            <ul class="banner__syarat-ul">
              <li class="banner__syarat-ul">
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >最低限の教育は高校/専門学校または同等のものです
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >男性165cm、女性150cmの最低身長
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >マイナスやメガネ、ピアス、何もありません
                  前科で入れ墨されていない
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >両親から許可を得る
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- End BANNER SYARAT -->

    <!-- START Banner Fasilitas  Bahasa -->
    <v-container class="container-all">
      <section class="banner__fasilitasbahasa">
        <v-row class="banner__fasilitasbahasa-row">
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__fasilitasbahasa-colkiri"
          >
            <h4 class="banner__fasilitasbahasa-h4">施設</h4>
            <h1 class="banner__fasilitasbahasa-h1">
              言語準備に参加する利点は何ですか？
            </h1>

            <ul class="banner__fasilitasbahasa-ul">
              <li>
                <h5 class="banner__fasilitasbahasa-h5">
                  日本語と英語のクラスをオフラインにする
                </h5>
              </li>
              <li>
                <p class="banner__fasilitasbahasa-p">
                  製造から3〜6か月間の語学クラスを受講する と介護者
                </p>
              </li>
            </ul>
            <ul class="banner__fasilitasbahasa-ul">
              <li>
                <h5 class="banner__fasilitasbahasa-h5">
                  制服、モジュール、寮、学習クラスを取得する
                </h5>
              </li>
              <li>
                <p class="banner__fasilitasbahasa-p">
                  製造から3〜6か月間の語学クラスを受講する と介護者
                </p>
              </li>
            </ul>
            <ul class="banner__fasilitasbahasa-ul">
              <li>
                <h5 class="banner__fasilitasbahasa-h5">面白い友達を作る</h5>
              </li>
              <li>
                <p class="banner__fasilitasbahasa-p">
                  助けることができる友達を得る
                  あなたの情熱を育て、そしてもっとたくさん
                </p>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__fasilitasbahasa-colkanan"
          >
            <v-img
              class="banner__fasilitasbahasa-img"
              :src="require('@/assets/images/banner-fasilitaspersiapan.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner Fasilitas Persiapan Bahasa -->

    <!-- START BANNER LAYANAN BAHASA -->

    <v-container class="container-all" fluid style="background-color: #f4fcff">
      <section class="banner__layananbahasa">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__layananbahasa-colkiri order-2 order-sm-2 order-md-1"
          >
            <v-img
              class="banner__layananbahasa-img"
              :src="require('@/assets/images/banner-layanankami.png')"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__layananbahasa-colkanan order-1 order-sm-1 order-md-2"
          >
            <h4 class="banner__layananbahasa-h4">当社のサービス</h4>
            <h1 class="banner__layananbahasa-h1">
              なぜあなたは言語準備を選ぶべきですか？
            </h1>

            <ul class="banner__syarat-ul">
              <li class="banner__syarat-ul">
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >日本語をもっと上手に学ぶために
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >日本語のスピーチを練習して、スピーチがより流暢になるようにします
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >日本語の語彙を上達させる
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >フレンドリーでわかりやすい特別な先生に案内されて
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- End Layanan Kami Persiapan Bahasa -->

    <!-- START BANNER FAQ BAHASA -->
    <v-container class="container-all">
      <section class="pertanyaan__bahasa">
        <v-row>
          <v-col
            class="pertanyaan__bahasa-colkiri"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h1 class="pertanyaan__bahasa-h1">
              よくある質問 <br />
              私たちに
            </h1>
            <p class="pertanyaan__bahasa-p" style="color: #868686">
              休業日に関するよくある質問 私たちに
            </p>
            <v-img
              class="pertanyaan__bahasa-img"
              :src="require('@/assets/images/garislinier.svg')"
            ></v-img>
          </v-col>

          <!-- Bagian FAQ -->
          <!-- Bagian FAQ -->
          <v-col
            class="pertanyaan__bahasa-colkanan"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="d-flex justify-center">
              <div class="d-flex"></div>

              <v-expansion-panels
                class="pertanyaan__bahasa-panel"
                accordion
                style="font-family: 'Poppins', sans-serif"
              >
                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    いつ準備に登録できますか 言語？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    終わったら語学準備を登録できます
                    日本に行くときのすべてのテストと要件。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    準備に登録する方法 言語？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    以下の番号に連絡することができます 0877-8757-4848 /
                    0821-2345-1243 私たちのオフィスに直接来ることができます
                    Jalan turi km 3,7 perum pondok idaman no A2 kadisobo,
                    Kadisobo I / Pepen, Trimulyo, Kec. Sleman, Kabupaten Sleman,
                    Daerah Istimewa Yogyakarta 55513
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    準備に参加する際の特別な要件は何ですか
                    言語？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    特定の要件は、[サービス]ページにリストされています->
                    言語の準備を選択します。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    言語準備に参加する利点は何ですか
                    ？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    言語準備に参加することの利点。 あなたはテストされます
                    LPKヒグロブの口頭言語のプロの先生による
                    インターンシップや仕事をするときにもう一度日本 日本では
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END FAQ -->
            <!-- END FAQ -->
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  methods: {
    scrollMeTo(refname) {
      let element = this.$refs[refname]
      // let top = element.offsetTop
      // window.scrollTo(0, top)

      element.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss">
li {
  list-style-type: none;
}

// STYLE KHUSUS BANNER PERSIAPAN

.btn-munggah {
  position: fixed;
  bottom: 0;
  right: 20px;
  top: 550px;
  z-index: 3000;
}

.banner__persiapan {
  // margin-top: 8rem;
  padding: 0 7rem;
  &-colkiri {
    margin-top: 4rem;
    padding: 2rem;
  }
  &-h1 {
    font-weight: 600;
    font-size: 46px;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: #171717;
  }

  &-p {
    font-size: 12px;
    line-height: 26px;
    color: #171717;
  }
  &-ul li {
    list-style-type: none;
    display: inline-flex;
  }

  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE BANNER PERSIAPAN

// STYLE KHUSUS BANNER SYARAT

.banner__syarat {
  margin-top: 6rem;
  &-colkanan {
    padding-left: 2rem;
    margin-top: 2rem;
  }
  &-row {
    margin-bottom: 4rem;
  }
  &-ul {
    list-style-type: none;
    padding: 0 !important;
  }
  &-p {
    display: inline-flex;
  }
  &-h1atas {
    font-size: 26px;
  }
  &-patas {
    margin-top: 1rem;
    font-size: 15px;
  }
  &-h1 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 28px;
    color: #171717;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE KHUSUS BANNER SYARAT

// STYLE KHUSUS BANNER FASILITAS BAHASA
.banner__fasilitasbahasa {
  margin-top: 7rem;

  &-colkiri {
    margin-top: 3rem;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
    margin-left: 2px;
  }
  &-h1 {
    font-size: 28px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: #171717;
    padding-right: 1rem;
  }
  &-ul {
    padding: 0 !important;
  }
  &-h5 {
    font-size: 14px;
    margin-bottom: 8px;
    color: #171717;
  }
  &-p {
    font-size: 14px;
    color: #171717;
  }
}
// END KHUSUS BANNER FASILITAS BAHASA

// STYLE KHUSUS BANNER LAYANAN BAHASA

.banner__layananbahasa {
  padding: 0 6rem;
  margin-top: 4rem;
  &-colkanan {
    padding-left: 0rem;
    margin-top: 1rem;
  }
  &-ul {
    list-style-type: none;
    padding: 0 !important;
  }
  &-p {
    display: inline-flex;
  }
  &-h1 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 24px;
    color: #171717;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE KHUSUS BANNER BAHASA

// STYLE KHUSUS BANNER PERTANYAAN BAHASA
// STYLE KHUSUS PERTANYAAN
.v-expansion-panel--active > .v-expansion-panel-header {
  color: #3e00ff;
}
.pertanyaan__bahasa {
  margin-top: 5rem;
  margin-bottom: 5rem;
  &-img {
    max-width: 18rem;
    margin-top: 2rem;
    margin-left: -4rem;
  }
  &-col-kiri {
    margin-top: 1rem;
  }
  &-paneljudul {
    margin-bottom: 1rem;
    border-radius: 6px;
    line-height: 1.6rem;
  }
  &-panelheader {
    font-weight: 500;
    line-height: 1.6rem;
  }
}
// END KHUSUS PERTANYAAN
// END STYLE KHUSUS BANNER PERTANYAAN BAHASA

// MEDIA QUERY
//0-300
@media screen and (min-width: 0px) and (max-width: 300px) {
  .banner__persiapan {
    padding: 7px;
    margin-top: 2rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 1rem;
    }
    &-colkanan {
      margin-left: 2rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 26px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2.4rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-img {
      margin-left: -2rem;
      padding: 0 !important;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -24px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE BANNER PERSIAPAN
  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    padding: 7px;
    margin-top: 2rem;
    &-row {
      margin-bottom: 2rem;
    }
    &-colkanan {
      padding-left: 1rem;
      margin-top: 0rem;
    }
    &-colkiri {
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
      font-size: 12px;
    }
    &-patas {
      font-size: 12px;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 22px;
      color: #171717;
    }
    &-h1atas {
      font-size: 16px;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }

  // END STYLE KHUSUS BANNER SYARAT

  .banner__fasilitasbahasa {
    padding: 7px;
    margin-top: 4rem;

    &-colkiri {
      margin-top: -1rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
    }
    &-h1 {
      font-size: 17px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
    }
    &-h5 {
      font-size: 14px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 12px;
      color: #171717;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    padding: 7px;
    margin-top: 4rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 0 !important;
      margin-left: 2rem;
    }
    &-colkanan {
      margin-left: 0rem;
      padding-left: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 17px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2.4rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-img {
      margin-left: 1rem;
      padding: 0 !important;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -24px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }

  // END STYLE KHUSUS BANNER LAYANAN BAHASA

  // STYLE  KHSUSUS PERTANYAAN BAHASA
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    padding: 7px;
    margin-top: 2rem;
    margin-bottom: 5rem;
    &-h1 {
      font-size: 16px;
      margin-bottom: 1rem;
    }

    &-p {
      font-size: 13px;
    }
    &-img {
      max-width: 12rem;
      margin-top: 2rem;
      margin-left: -2rem;
    }
    &-colkiri {
      margin-top: 1rem;
    }
    &-colkanan {
      margin-top: 3rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;

      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
    &-panelheader {
      font-weight: 500;
      font-size: 13px;
      line-height: 1.6rem;
    }
  }
  // END STYLE KHUSUS PERTANYAAN BAHASA
}

//300-600
@media screen and (min-width: 300px) and (max-width: 600px) {
  // STYLE KHUSUS BANNER PERSIAPAN

  .banner__persiapan {
    padding: 7px;
    margin-top: 2rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 1rem;
    }
    &-colkanan {
      margin-left: 2rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2.4rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-img {
      margin-left: -2rem;
      padding: 0 !important;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -24px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 14px;
    }
  }
  // END STYLE BANNER PERSIAPAN

  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    padding: 7px;
    margin-top: 2rem;
    &-row {
      margin-bottom: 2rem;
    }
    &-colkanan {
      padding-left: 1rem;
      margin-top: 0rem;
    }
    &-colkiri {
    }
    &-tulisankiri {
      text-align: center !important;
    }
    &-tulisankanan {
      text-align: center !important;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
      font-size: 12px;
    }
    &-patas {
      font-size: 12px;
      text-align: center;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 18px;
      color: #171717;
    }
    &-h1atas {
      font-size: 16px;
      text-align: center;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 14px;
    }
  }

  // END STYLE KHUSUS BANNER SYARAT

  .banner__fasilitasbahasa {
    padding: 7px;
    margin-top: 4rem;

    &-colkiri {
      margin-top: -1rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
      font-size: 14px;
    }
    &-h1 {
      font-size: 20px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
    }
    &-h5 {
      font-size: 14px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 12px;
      color: #171717;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    padding: 7px;
    margin-top: 4rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 0 !important;
      margin-left: 2rem;
    }
    &-colkanan {
      margin-left: 0rem;
      padding-left: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2.4rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-img {
      margin-left: 1rem;
      padding: 0 !important;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -24px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 14px;
    }
  }

  // END STYLE KHUSUS BANNER LAYANAN BAHASA

  // STYLE  KHSUSUS PERTANYAAN BAHASA
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    padding: 7px;
    margin-top: 2rem;
    margin-bottom: 5rem;
    &-h1 {
      font-size: 18px;
      margin-bottom: 1rem;
    }

    &-p {
      font-size: 12px;
    }
    &-img {
      max-width: 12rem;
      margin-top: 2rem;
      margin-left: -2rem;
    }
    &-colkiri {
      margin-top: 1rem;
    }
    &-colkanan {
      margin-top: 3rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;

      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
    &-panelheader {
      font-weight: 500;
      font-size: 13px;
      line-height: 1.6rem;
    }
  }
  // END STYLE KHUSUS PERTANYAAN BAHASA
}
// UKURAN 600-960
//
@media screen and (min-width: 600px) and (max-width: 960px) {
  // STYLE KHUSUS BANNER PERSIAPAN
  .container-all {
    padding: 0 6rem 0rem 6rem;
  }

  .banner__persiapan {
    // margin-top: 8rem;
    margin-top: 4rem;
    padding: 2rem;
    &-colkiri {
      margin-top: 1rem;
    }
    &-img {
      max-width: 37rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 1rem;
    }
    &-p {
      font-size: 14px;
      line-height: 26px;
      color: #171717;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -37px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE BANNER PERSIAPAN

  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    margin-top: 2rem;
    padding-left: 1rem;
    &-colkanan {
    }
    &-row {
      padding-left: 2rem;
      margin-bottom: 0rem;
    }
    &-colkiri {
      padding-left: 5rem;
      margin-top: 2rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
      font-size: 14px;
    }
    &-img {
      max-width: 35rem;
    }
    &-tulisankanan {
      padding-right: 4rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 22px;
      color: #171717;
    }
    &-h1atas {
      padding-right: 5.5rem;
      font-size: 24px;
      text-align: center;
    }
    &-patas {
      line-height: 2rem;
      text-align: center;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER SYARAT

  // STYLE KHUSUS BANNER FASILITAS BAHASA
  .banner__fasilitasbahasa {
    margin-top: 2rem;
    padding: 2.2rem;

    &-colkiri {
      margin-top: 3rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
    }
    &-img {
      max-width: 38rem;
      margin-left: 1rem;
      margin-top: 1rem;
    }
    &-h1 {
      font-size: 24px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
      margin-left: 1rem;
      margin-bottom: 1.2rem;
    }
    &-h5 {
      font-size: 16px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      font-size: 14px;
      color: #171717;
    }
  }
  // END KHUSUS BANNER FASILITAS BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    margin-top: 8rem !important;
    padding: 0 3rem;
    &-colkanan {
      padding-left: 0rem;
      margin-top: 0rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-img {
      max-width: 38rem;
      margin-left: 5rem;
      margin-top: 3rem;
    }
    &-p {
      display: inline-flex;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 30px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER PERTANYAAN BAHASA
  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    margin-top: 1rem;
    margin-bottom: 5rem;
    padding: 2rem;
    &-img {
      max-width: 18rem;
      margin-top: 2rem;
      margin-left: -4rem;
    }
    &-p {
      padding-right: 5rem;
    }
    &-col-kiri {
      margin-top: 1rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;
      line-height: 1.6rem;
    }
    &-panelheader {
      font-weight: 500;
      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
  }
  // END KHUSUS PERTANYAAN
  // END STYLE KHUSUS BANNER PERTANYAAN BAHASA
}
//END UKURAN TABLET

// ukuran IPAD PRO
//960-1264
@media screen and (min-width: 960px) and (max-width: 1264px) {
  // STYLE KHUSUS BANNER PERSIAPAN

  .banner__persiapan {
    // margin-top: 8rem;
    margin-top: 4rem;
    padding: 2rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 0px 0 0 83px;
    }
    &-img {
      max-width: 22rem;
      margin-top: 1rem;
      margin-left: 3rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 1rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -37px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE BANNER PERSIAPAN

  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    margin-top: 2rem;
    padding-left: 1rem;
    &-colkanan {
    }
    &-row {
      padding-left: 2rem;
      margin-bottom: 0rem;
    }
    &-colkiri {
      padding-left: 5rem;
      margin-top: 2rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
      font-size: 12px;
    }
    &-img {
      max-width: 35rem;
    }
    &-tulisankanan {
      padding-right: 4rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 0.7rem;
      font-size: 20px;
      color: #171717;
    }
    &-h1atas {
      padding-right: 4.5rem;
      font-size: 16px;
    }
    &-patas {
      line-height: 1.3rem;
      margin-top: 0rem;
      font-size: 12px;
      margin-left: 1rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER SYARAT

  // STYLE KHUSUS BANNER FASILITAS BAHASA
  .banner__fasilitasbahasa {
    margin-top: 2rem;
    padding: 2.2rem;

    &-colkiri {
      margin-top: 3rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
    }
    &-img {
      max-width: 38rem;
      margin-top: 1rem;
    }
    &-h1 {
      font-size: 22px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
      margin-left: 1rem;
      margin-bottom: 1.2rem;
    }
    &-h5 {
      font-size: 14px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      font-size: 12px;
      color: #171717;
    }
  }

  // END KHUSUS BANNER FASILITAS BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    margin-top: 3rem;
    padding: 0 3rem 0 6rem;
    &-colkanan {
      padding-left: 0rem;
      margin-top: 3rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-img {
      max-width: 26rem;
      margin-top: 4rem;
    }
    &-p {
      display: inline-flex;
      font-size: 12px;
      line-height: 1.8rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 0.7rem;
      font-size: 22px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 14px;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER PERTANYAAN BAHASA
  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    margin-top: 1rem;
    margin-bottom: 5rem;
    padding: 2rem;
    &-img {
      max-width: 18rem;
      margin-top: 2rem;
      margin-left: -4rem;
    }
    &-h1 {
      font-size: 20px;
      margin-bottom: 0.8rem;
    }
    &-p {
      padding-right: 5rem;
    }
    &-col-kiri {
      margin-top: 1rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;
      line-height: 1.6rem;
    }
    &-panelheader {
      font-weight: 500;
      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
  }
  // END KHUSUS PERTANYAAN
  // END STYLE KHUSUS BANNER PERTANYAAN BAHASA
}
// END UKURAN IPAD PRO
//1264-1904
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .banner__persiapan {
    &-h1 {
      font-size: 44px;
    }
  }
  .banner__syarat {
    &-patas {
      padding-left: 10rem;
    }
    &-h1atas {
      font-size: 22px;
      padding-right: 10rem;
    }
  }
}

//1904 >
@media screen and (min-width: 1904px) {
  .container-all {
    padding: 4rem 15rem 0 15rem !important;
  }
  .banner__persiapan {
    padding: 0 22rem !important;
    &-img {
      max-width: 45rem !important;
    }
  }
  .banner__layananbahasa {
    padding: 0 23rem !important;
  }
}
</style>
