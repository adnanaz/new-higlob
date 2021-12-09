<template>
  <div>
    <!-- Banner VISA -->
    <div>
      <v-container
        class="container-all"
        fluid
        style="background-color: #f8faff"
      >
        <section class="banner__visa background" ref="awal">
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

          <v-row>
            <v-col
              class="banner__visa-colkiri order-1 order-sm-1 order-md-1"
              cols="12"
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <h4 class="banner__visa-h4">当社のサービス</h4>
              <h1 class="banner__visa-h1">ビザワーキングホリデー</h1>
              <p class="banner__visa-p" style="color: #868686">
                ワーキングホリデービザは、によって付与されるビザの一種です
                国の政府から外国人へ 彼の国の領土での一時的な居住、また通常
                休暇中に活動をする機会を与えることができます
                仕事と勉強中（教育と訓練）。
              </p>
              <v-row class="banner__visa-rowkecil">
                <v-col cols="3">
                  <ul class="banner__visa-ul text-center">
                    <li>
                      <h1 class="">205+</h1>
                    </li>
                    <li>
                      <p class="banner__visa-pkolom">ビザ承認</p>
                    </li>
                  </ul>
                </v-col>
                <v-col cols="3">
                  <ul class="banner__visa-ul text-center">
                    <li>
                      <h1 class="banner__visa-h1kolom">4+</h1>
                    </li>
                    <li>
                      <p class="banner__visa-pkolom">積年の経験</p>
                    </li>
                  </ul>
                </v-col>
                <v-col cols="3">
                  <ul class="banner__visa-ul text-center">
                    <li>
                      <h1 class="banner__visa-h1kolom">213+</h1>
                    </li>
                    <li>
                      <p
                        class="banner__visa-pkolom"
                        style="margin-left: 1.5rem"
                      >
                        クライアントの数
                      </p>
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              class="order-2 order-sm-2 order-md-1"
              cols="12"
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <v-img
                class="banner__visa-img"
                :src="require('@/assets/images/visabanner.png')"
              ></v-img>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </div>

    <!-- END BANNER VISA -->

    <!-- START BANNER KETENTUAN -->
    <v-container class="container-all">
      <section class="banner__ketentuan">
        <v-row>
          <v-col
            class="banner__ketentuan-colkiri order-2 order-sm-2 order-md-1"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <v-img
              class="banner__ketentuan-img"
              :src="require('@/assets/images/ketentuanbanner.png')"
            ></v-img>
          </v-col>
          <v-col
            class="banner__ketentuan-colkanan order-1 order-sm-1 order-md-2"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h4 class="banner__ketentuan-h4">S＆Kワーキングホリデー</h4>
            <h1 class="banner__ketentuan-h1">休日の利用規約</h1>
            <ul class="banner__ketentuan-ul">
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >4.5歳未満の男性Ieltsは最大6年間英語トレーニングに参加します
                </p>
              </li>
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >最大年齢21〜30歳
                </p>
              </li>
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Mengumpulkan dokumen SKL, SKCK, Sertfikat Ielts, dan Pas Foto
                </p>
              </li>
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >最低限の教育D3 / S1 /セメスター5アクティブ
                </p>
              </li>
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >SRPIインタビュー（インドネシア政府推薦状）
                </p>
              </li>
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >ビザと健康診断を申請しました
                </p>
              </li>
              <li>
                <p class="banner__ketentuan-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >銀行支援宣言基金+ -UAD $ 5000
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner KETENTUAN -->

    <!-- START Banner Fasilitas -->
    <v-container class="container-all">
      <section class="banner__fasilitas">
        <v-row>
          <v-col
            class="banner__fasilitas-colkiri"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h4 class="banner__fasilitas-h4">施設</h4>
            <h1 class="banner__fasilitas-h1">
              ワーキングホリデーに参加するメリットは何ですか？
            </h1>

            <ul class="banner__fasilitas-ul">
              <li>
                <h5 class="banner__fasilitas-h5">
                  日本語と英語のクラスをオフラインにする
                </h5>
              </li>
              <li>
                <p class="banner__fasilitas-p">
                  製造から3〜6か月間の語学クラスを受講する と介護者
                </p>
              </li>
            </ul>
            <ul class="banner__fasilitas-ul">
              <li>
                <h5 class="banner__fasilitas-h5">
                  制服、モジュール、寮、学習クラスを取得する
                </h5>
              </li>
              <li>
                <p class="banner__fasilitas-p">
                  製造から3〜6か月間の語学クラスを受講する と介護者
                </p>
              </li>
            </ul>
            <ul class="banner__fasilitas-ul">
              <li>
                <h5 class="banner__fasilitas-h5">面白い友達を作る</h5>
              </li>
              <li>
                <p class="banner__fasilitas-p">
                  助けることができる友達を得る
                  あなたの情熱を育て、そしてもっとたくさん
                </p>
              </li>
            </ul>
          </v-col>
          <v-col
            class="banner__fasilitas-colkanan"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <v-img
              class="banner__fasilitas-img"
              :src="require('@/assets/images/fasilitasbanner.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner Fasilitas -->

    <!-- Start Banner Peta -->
    <v-container class="container-all">
      <section class="banner__peta">
        <h1 class="banner__peta-h1">
          参加した学生
          <span class="banner__peta-h1special"> ワーキングホリデー</span> 一緒
          私たち
        </h1>
        <p class="banner__peta-p" style="color: #868686">
          ワーキングホリデーに参加した学生もいます 海外に飛ぶ
        </p>
        <v-img
          class="banner__peta-img"
          :src="require('@/assets/images/petaworkingholiday.png')"
        ></v-img>
      </section>
    </v-container>
    <!-- End BANNER PETA-->

    <!-- FAQ -->
    <v-container class="container-all">
      <section class="pertanyaan">
        <v-row>
          <v-col
            class="pertanyaan-colkiri"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h1 class="pertanyaan-h1 mt-8">
              よくある質問 <br />
              私たちに
            </h1>
            <p class="pertanyaan-p mt-2" style="color: #868686">
              休業日に関するよくある質問 私たちに
            </p>
            <v-img
              class="pertanyaan-img"
              :src="require('@/assets/images/garislinier.svg')"
            ></v-img>
          </v-col>

          <!-- Bagian FAQ -->
          <v-col
            class="pertanyaan-colkanan"
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
                class="pertanyaan-panel"
                accordion
                style="font-family: 'Poppins', sans-serif"
              >
                <v-expansion-panel class="pertanyaan-paneljudul">
                  <v-expansion-panel-header class="pertanyaan-panelheader">
                    ワーキングホリデーの申請方法 ？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan-panelisi"
                    style="color: #868686"
                  >
                    以下の番号に連絡することができます +62 857 1314 9249
                    私たちのオフィスに直接来ることができます Jalan turi km 3,7
                    perum pondok idaman no A2 kadisobo, Kadisobo I / Pepen,
                    Trimulyo, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa
                    Yogyakarta 55513
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan-paneljudul">
                  <v-expansion-panel-header class="pertanyaan-panelheader">
                    就労ビザに参加する際の特別な要件は何ですか
                    休日？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan-panelisi"
                    style="color: #868686"
                  >
                    ワーキングホリデービザの特定の要件は、サービスページ->ワーキングホリデービザの選択に記載されています。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan-paneljudul">
                  <v-expansion-panel-header class="pertanyaan-panelheader">
                    ビザワーキングホリデーに参加する利点は何ですか
                    ？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan-panelisi"
                    style="color: #868686"
                  >
                    あなたは仕事をしながら休暇を感じるだけでなく、あなたに追加することができます
                    あなたの可能性をもっと探求する人生経験 再び
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan-paneljudul">
                  <v-expansion-panel-header class="pertanyaan-panelheader">
                    SRPIプロセスにはどのくらい時間がかかりますか？
                    ？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan-panelisi"
                    style="color: #868686"
                  >
                    SRPIの発行プロセスは、次の2つの段階に分かれています。
                    時間がかかるその他の要件文書の検証
                    最大4営業日およびレターの発行 インドネシア政府の勧告1日後
                    インタビュー。
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
  head: {
    titleTemplate: 'Higlob - ワーキングホリデー',
  },
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
.btn-munggah {
  position: fixed;
  bottom: 0;
  right: 20px;
  top: 550px;
  z-index: 3000;
}
ul {
  list-style-type: none;
}
// STYLE KHUSUS BANNER VISA

.banner__visa {
  margin-top: 8rem;
  padding: 0 6rem;
  &-colkiri {
    margin-top: 2rem;
  }
  &-h1 {
    font-weight: 600;
    font-size: 48px;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: #171717;
  }
  &-h1kolom {
    margin-left: 1.8rem;
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
// END STYLE BANNER VISA

// STYLE KHUSUS BANNER KETENTUAN

.banner__ketentuan {
  margin-top: 6rem;
  &-colkanan {
    padding-left: 2rem;
    margin-top: 2rem;
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
    font-size: 32px;
    color: #171717;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE KHUSUS BANNER KETENTUAN

// STYLE KHUSUS BANNER FASILITAS
.banner__fasilitas {
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
    font-size: 32px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: #171717;
  }
  &-ul {
    padding: 0 !important;
  }
  &-h5 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #171717;
  }
  &-p {
    font-size: 14px;
    color: #868686;
  }
}
// END KHUSUS BANNER FASILITAS

// STYLE KHUSUS BANNER PETA

.banner__peta {
  margin-top: 6rem;
  &-h1 {
    text-align: center;
    font-size: 32px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: #171717;
    padding-left: 9rem;
    padding-right: 9rem;
  }
  &-h1special {
    color: #3e00ff;
  }
  &-p {
    font-size: 14px;
    text-align: center;
  }
  &-img {
    margin-top: 4rem;
    max-width: 73rem;
  }
}
// END STYLE KHUSUS BANNER PETA

// STYLE KHUSUS PERTANYAAN
.v-expansion-panel--active > .v-expansion-panel-header {
  color: #3e00ff;
}
.pertanyaan {
  margin-top: 4rem;
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

// 0-300
@media screen and (min-width: 0px) and (max-width: 300px) {
}
// 300-600
@media screen and (min-width: 300px) and (max-width: 600px) {
  // STYLE KHUSUS BANNER VISA
  .banner__visa {
    padding: 7px;
    margin-top: 4rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 0rem !important;
    }
    &-pkolom {
      margin-left: 0 !important;
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
      margin-left: 1rem !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 14px;
    }
  }
  // END STYLE BANNER VISA

  // STYLE KHUSUS BANNER KETENTUAN
  .banner__ketentuan {
    padding: 7px;
    margin-top: 6rem;
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
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 20px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 14px;
    }
  }
  // END STYLE KHUSUS BANNER KETENTUAN

  // STYLE KHUSUS BANNER FASILITAS
  .banner__fasilitas {
    padding: 7px;
    margin-top: 7rem;

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
      font-size: 12px;
      color: #868686;
    }
  }
  // END KHUSUS BANNER FASILITAS

  // STYLE KHUSUS BANNER PETA

  .banner__peta {
    padding: 7px;
    margin-top: 6rem;
    &-h1 {
      font-size: 20px;
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
      padding: 0 !important;
    }
    &-h1special {
      color: #3e00ff;
    }
    &-p {
      font-size: 12px;
      text-align: center;
    }
    &-img {
      margin-top: 4rem;
      max-width: 73rem;
    }
  }
  // END STYLE KHUSUS BANNER PETA

  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan {
    padding: 7px;
    margin-top: 5rem;
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
      font-size: 14px;
      line-height: 1.6rem;
    }
  }
  // END KHUSUS PERTANYAAN
}
// ukuran tablet
// 600-960
@media screen and (min-width: 600px) and (max-width: 960px) {
  // STYLE KHUSUS BANNER VISA

  .container-all {
    padding: 0 6rem 0rem 6rem;
  }

  .banner__visa {
    margin-top: 4rem;
    padding: 2rem;
    &-colkiri {
      margin-top: 2rem;
    }
    &-img {
      max-width: 37rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 32px;
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
      font-size: 16px;
    }
  }
  // END STYLE BANNER VISA

  // STYLE KHUSUS BANNER KETENTUAN

  .banner__ketentuan {
    margin-top: 2rem;
    padding-left: 1rem;
    &-colkanan {
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
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 24px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 16px;
    }
  }
  // END STYLE KHUSUS BANNER KETENTUAN

  // STYLE KHUSUS BANNER FASILITAS
  .banner__fasilitas {
    margin-top: 2rem;
    padding: 2.2rem;

    &-colkiri {
      margin-top: 3rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
      font-size: 16px;
    }
    &-img {
      max-width: 38rem;
      margin-left: 1rem;
      margin-top: 1rem;
    }
    &-h1 {
      font-size: 25px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
    }
    &-h5 {
      font-size: 16px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      font-size: 14px;
      color: #868686;
    }
  }
  // END KHUSUS BANNER FASILITAS

  // STYLE KHUSUS BANNER PETA

  .banner__peta {
    margin-top: 3rem;
    padding: 2rem;
    &-h1 {
      text-align: center;
      font-size: 24px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
      padding-left: 2rem !important;
      padding-right: 2rem !important;
    }
    &-h1special {
      color: #3e00ff;
    }
    &-p {
      font-size: 14px;
      text-align: center;
    }
    &-img {
      margin-top: 4rem;
      max-width: 73rem;
    }
  }
  // END STYLE KHUSUS BANNER PETA

  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan {
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
      font-size: 16px;
    }
    &-col-kiri {
      margin-top: 1rem;
    }
    &-h1 {
      font-size: 24px;
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
}
// end ukuran tablet
// 960-1264
@media screen and (min-width: 960px) and (max-width: 1264px) {
  // STYLE KHUSUS BANNER VISA
  .container-all {
    padding: 0 !important;
  }

  .banner__visa {
    margin-top: 4rem;
    padding: 2rem 8rem 0 8rem;
    &-colkiri {
      margin-top: 2rem;
    }
    &-img {
      max-width: 38rem;
      margin-top: 2rem;
      margin-left: -4rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2rem;
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
      font-size: 16px;
    }
  }
  // END STYLE BANNER VISA

  // STYLE KHUSUS BANNER KETENTUAN

  .banner__ketentuan {
    margin-top: 2rem;
    padding-left: 0rem;
    &-colkanan {
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
      margin-bottom: 5px;
    }
    &-img {
      max-width: 35rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 20px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      font-size: 16px;
    }
  }
  // END STYLE KHUSUS BANNER KETENTUAN

  // STYLE KHUSUS BANNER FASILITAS
  .banner__fasilitas {
    margin-top: 0;
    padding: 2.2rem;

    &-colkiri {
      margin-top: 3rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
      font-size: 16px;
    }
    &-img {
      max-width: 35rem;
      margin-left: 3rem;
      margin-top: 3rem;
    }
    &-h1 {
      font-size: 22px;
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
      font-size: 12px;
      color: #868686;
    }
  }
  // END KHUSUS BANNER FASILITAS

  // STYLE KHUSUS BANNER PETA

  .banner__peta {
    margin-top: 3rem;
    padding: 2rem;
    &-h1 {
      text-align: center;
      font-size: 22px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
      padding-left: 8rem !important;
      padding-right: 8rem !important;
    }
    &-h1special {
      color: #3e00ff;
    }
    &-p {
      font-size: 12px;
      text-align: center;
    }
    &-img {
      margin-top: 4rem;
      max-width: 73rem;
    }
  }
  // END STYLE KHUSUS BANNER PETA

  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan {
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
      font-size: 16px;
    }
    &-col-kiri {
      margin-top: 1rem;
    }
    &-colkanan {
      margin-top: 3rem;
    }
    &-h1 {
      font-size: 20px;
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
}
// 1264-1904
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .banner__visa {
    padding: 0 9rem;
    &-img {
      margin-top: 2rem;
    }
    &-h1 {
      font-size: 46px;
    }
  }
}
// 1904 >
@media screen and (min-width: 1904px) {
  .container-all {
    padding: 4rem 15rem 0 15rem !important;
  }
  .banner__visa {
    padding: 0 !important;
  }
  .banner__peta {
    &-h1 {
      padding-left: 12rem;
      padding-right: 12rem;
    }
  }
  .pertanyaan {
    &-p {
      padding-right: 12rem;
    }
  }
}
</style>
