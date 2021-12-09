<template>
  <v-container>
    <section class="section__faq" ref="awal">
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
      <!-- Bagian Heading -->
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 class="section__faq-h1 text-center">よくある質問</h1>
      <br />
      <p class="section__faq-p text-center">
        よくある質問<br />
        私たちに
      </p>
      <br />
      <br />
      <!-- End Heading -->

      <!-- Bagian FAQ -->
      <div class="d-flex justify-center section__faq-divbawah">
        <v-expansion-panels
          class="section__faq-expansionpanels"
          accordion
          v-model="panel"
          :disabled="disabled"
        >
          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >LPKヒグロブでのレッスンは日本語で教えられていますか 他の言語？
            </v-expansion-panel-header>
            <v-expansion-panel-content class="section__faq-panelp">
              LPK Higlobでのレッスンは、日本語を使って教えられます。
              学生がより流暢に使用できるように 日本でインターンシップ/仕事をする
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >LPKヒグロブ日本語の先生は全員 ？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              すべてではありませんが、LPKHiglobの先生はすべて
              教えることを学び、教育証明書を持っている
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >LPK
              Higlobに登録するにはどうすればよいですか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              登録は次のようにwhatsapp番号に連絡できます +62 857 1314 9249
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >LPK higlobでの学習時間は何時間ですか？ 何時から
              何時ですか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              ある学校の日4時間。 学生は2つのうちの1つに分けられます
              クラス：午前のクラスと午後のクラス。
              午前のクラスは9:00から始まります- 12:50。
              午後のクラスは13：10-16：50に始まります
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >LPKヒグロブは間違いなく日本に行くことを保証できますか
              ？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              見習いが合格した場合は完了している可能性があります
              記載されている要件は間違いなく日本に行きます。 しかし、 LPK
              Higlobは、見習い候補者の場合、キャンセルすることもできます
              問題があり、教育プログラムに参加できないと判断された
              不可能と考えられる健康または精神的態度の問題
              後年、日本での生活に適応します。
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!-- END FAQ -->

      <!-- Bagian Heading akhir -->

      <h1 class="section__faq-h1akhir text-center">まだ質問がありますか？</h1>

      <p class="section__faq-pakhir text-center">
        FAQで質問の答えが見つからない場合
        私たち、あなたはいつでも私たちに連絡することができます。 お答えします
        素早い！
      </p>
      <br />
      <br />
      <br />
      <br />
      <!-- End Heading akhir -->
    </section>
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Higlob - よくある質問',
  },
  data: () => ({
    panel: [0, 1],
    disabled: false,
    readonly: false,
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
.btn-munggah {
  position: fixed;
  bottom: 0;
  right: 20px;
  top: 550px;
  z-index: 3000;
}
.v-expansion-panel--active > .v-expansion-panel-header {
  color: #3e00ff;
}

.section__faq {
  &-expansionpanels {
    width: 90%;
  }

  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #252525;
  }
  &-p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    text-align: center;

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-panel {
    margin-bottom: 2rem;
  }
  &-panelheader {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    text-align: center;
  }
  &-panelp {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-h1akhir {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 160%;
    /* identical to box height, or 58px */
    margin-top: 2rem;
    color: #000000;
  }
  &-pakhir {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    text-align: center;

    /* Colour : Font Paragraf */
    padding: 0 12rem 0 12rem;
    margin-top: 1rem;
    color: #868686;
  }
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .section__faq {
    padding: 1rem;
    &-expansionpanels {
      width: 85% !important;
    }
    &-h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height */

      /* Colour : Font Title */

      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 172.5%;
      /* or 28px */

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
    &-panelp {
      font-size: 12px;
      line-height: 176.5%;
      /* or 21px */

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 170%;
      /* or 24px */
      padding: 0;

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .section__faq {
    padding: 4rem;
    &-expansionpanels {
      width: 80% !important;
    }
    &-h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height */

      /* Colour : Font Title */

      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 172.5%;
      /* or 28px */

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
    &-panelp {
      font-size: 16px;
      line-height: 176.5%;
      /* or 21px */

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      /* or 24px */
      padding: 0;

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
  }
}
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .section__faq {
    padding: 4rem;
    &-expansionpanels {
      width: 80% !important;
    }
    &-h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height */

      /* Colour : Font Title */

      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 172.5%;
      /* or 28px */

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
    &-panelp {
      font-size: 16px;
      line-height: 176.5%;
      /* or 21px */

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      /* or 24px */
      padding: 0 2rem;

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
  }
}
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .section__faq {
    padding: 6rem;
    &-expansionpanel {
      width: 87% !important;
    }

    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 54px;
      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 31px;
      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      text-align: center;
    }
    &-panelp {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */
      margin-top: 2rem;
      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      text-align: center;

      /* Colour : Font Paragraf */
      padding: 0px 7rem 0 7rem;
      margin-top: 1rem;
      color: #868686;
    }
  }
}
@media screen and (min-width: 1904px) {
  .section__faq {
    padding: 6rem;
    &-expansionpanels {
      width: 55% !important;
    }

    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 54px;
      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 31px;
      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      text-align: center;
    }
    &-panelp {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */
      margin-top: 2rem;
      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      text-align: center;

      /* Colour : Font Paragraf */
      padding: 0px 25rem 0 26rem;
      margin-top: 1rem;
      color: #868686;
    }
  }
}
// .panel
//   margin-bottom: 1.5rem;
//
// .panel-p
//   font-size: smaller;
//   font-weight: 300;
//
// .heading-font
//   font-family: 'Poppins', sans-serif;
//
// .heading-font-p
//   font-family: 'Poppins', sans-serif;
//   color: #868686;
//
</style>
