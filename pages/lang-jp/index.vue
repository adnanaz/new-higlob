<template>
  <div :class="$vuetify.breakpoint.xs ? 'mx-3' : ''">
    <v-container :class="!$vuetify.breakpoint.xs ? 'override__container' : ''">
      <v-row>
        <!-- ==== HERO ==== -->
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="container__text"
        >
          <div class="header__text">
            LPK Higlobへようこそ参加して、
            <span class="header__text-special">あなたの夢を実現しましょう</span>
          </div>
          <p
            class="header__text-p mb-10 mt-5"
            :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
          >
            こんにちはグローバルはあなたがあなたの研究の夢を達成するための扉です
            だけでなく、海外で働く。私たちはあなたがから始めるのを手伝います
            言語スキルとすべての関連情報の報告という形での準備
            必要です。準備、教育、 海外で働く。
          </p>

          <div class="d-flex flex-wrap">
            <v-btn
              style="
                padding: 1rem;
                box-shadow: 10px 17px 56px rgba(80, 96, 137, 0.31) !important;
                border-radius: 50px !important;
              "
              :height="$vuetify.breakpoint.mdAndDown ? '40px' : '50px'"
              :width="$vuetify.breakpoint.mdAndDown ? '130px' : '160px'"
              class="header__btn text-capitalize font-weight-regular"
              color="#FF9900"
              dark
            >
              はじめましょう
            </v-btn>

            <v-btn
              class="text-capitalize mx-2 rounded-xl"
              text
              color="#0A0A0A"
              :height="$vuetify.breakpoint.mdAndDown ? '40px' : '50px'"
              :width="$vuetify.breakpoint.mdAndDown ? '' : '160px'"
            >
              <v-icon class="mx-1">mdi-play-circle-outline</v-icon>
              動画を再生します
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <div :class="$vuetify.breakpoint.xs ? '' : 'push__top'">
            <img
              :style="$vuetify.breakpoint.xs ? 'width:100%;' : 'width: 100vh'"
              cover
              :src="require('@/assets/images/model_hero-jp.png')"
              alt="Foto Model Higlob"
            />
          </div>
        </v-col>
        <!-- ==== END HERO ==== -->

        <!-- ==== BELIEVE ==== -->
        <v-col
          cols="12"
          :class="
            $vuetify.breakpoint.xs
              ? 'container3__text mt-7'
              : 'container3__text mt-15 mb-0 '
          "
        >
          <div class="text-center mb-5">私たちの仕事のパートナ</div>
          <div class="d-flex justify-center align-center flex-wrap">
            <div
              :class="$vuetify.breakpoint.xs ? 'mt-8' : 'my-8'"
              v-for="(el, index) in media_patner"
              :key="index"
            >
              <v-img
                :src="require(`@/assets/images/${el.src}`)"
                :alt="el.title"
              ></v-img>
            </div>
          </div>
        </v-col>
        <!-- ==== END BELIEVE ==== -->

        <!-- ==== CARD & YAKIN ==== -->
        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
          <div
            v-if="!$vuetify.breakpoint.xs"
            class="d-flex justify-center align-center flex-wrap"
          >
            <v-hover
              v-slot="{ hover }"
              v-for="(el, idx) in card_menu"
              :key="idx"
            >
              <v-card
                elevation="0"
                :width="$vuetify.breakpoint.lgAndDown ? '258' : '275'"
                :height="
                  $vuetify.breakpoint.lgAndDown
                    ? `${el.height_custom}`
                    : `${el.height}`
                "
                :style="
                  hover
                    ? 'box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 12px !important'
                    : ''
                "
                class="rounded-lg pa-2 my-1 mx-3"
              >
                <v-card-title
                  style="font-weight: 600; font-size: 16px; line-height: 151.7%"
                  class="mb-5"
                >
                  <v-avatar>
                    <img :src="require(`@/assets/images/${el.icon}`)" contain />
                  </v-avatar>
                  {{ el.title }}
                </v-card-title>
                <v-card-subtitle
                  style="
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 151.7%;
                    overflow-wrap: break-word;
                  "
                >
                  {{ el.description }}
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </div>
          <div v-else>
            <v-carousel
              style="height: 450px"
              cycle
              interval="6000"
              :show-arrows="$vuetify.breakpoint.xs ? true : true"
              v-model="carousel"
              hide-delimiters
            >
              <v-carousel-item v-for="(el, idx) in card_menu" :key="idx">
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-hover v-slot="{ hover }">
                      <v-card
                        width="285"
                        :height="
                          $vuetify.breakpoint.xs ? '295' : `${el.height}`
                        "
                        :style="
                          hover
                            ? 'box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 12px'
                            : 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px'
                        "
                        class="rounded-lg pa-2 ma-2"
                      >
                        <v-card-title
                          style="
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 151.7%;
                          "
                          class="mb-5"
                        >
                          <v-avatar>
                            <img
                              :src="require(`@/assets/images/${el.icon}`)"
                              contain
                            />
                          </v-avatar>
                          {{ el.title }}
                        </v-card-title>
                        <v-card-subtitle
                          style="
                            font-weight: 500;
                            font-size: 13px;
                            line-height: 151.7%;
                          "
                        >
                          {{ el.description }}
                        </v-card-subtitle>
                      </v-card>
                    </v-hover>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
        <!-- ==== END CARD & YAKIN ==== -->

        <!-- ==== NETWORK ==== -->
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          style="display: flex; align-items: center"
        >
          <div class="pa-2">
            <h5
              class="text__1"
              :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
            >
              広範なネットワークを持っている
            </h5>
            <h2 class="text__2 mt-2 mb-3">
              こんにちはグローバルを選択する理由
            </h2>
            <p
              class="text__3"
              :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
            >
              Higlobは、インターンシップや海外での仕事をしたい友人におすすめの場所です。higlobalは、あなたの情熱に合った企業で働くのに役立ちます。
            </p>

            <!-- <v-btn
              style="
                padding: 1rem;
                box-shadow: -2px 11px 55px rgba(80, 96, 137, 0.31) !important;
                border-radius: 50px !important;
              "
              :height="$vuetify.breakpoint.mdAndDown ? '40px' : '50px'"
              :width="$vuetify.breakpoint.mdAndDown ? '200px' : '190'"
              class="rounded-xl text-capitalize"
              color="#FF9900"
              dark
            >
              Pelajari Lebih Lanjut
            </v-btn> -->
          </div>
        </v-col>
        <!-- ==== END NETWORK ==== -->
      </v-row>
    </v-container>

    <div style="background: #f8faff">
      <v-container
        :class="!$vuetify.breakpoint.xs ? 'override__container' : ''"
      >
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="container__blue"
          >
            <div class="d-flex justify-space-between align-center flex-wrap">
              <h5
                class="text__1 mb-2"
                :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
              >
                私たちと一緒に未来を築き始めましょう
              </h5>
              <h2
                class="text__2"
                :style="$vuetify.breakpoint.xs ? 'font-size: 32px;' : ''"
              >
                <span
                  class="text__2-special"
                  :style="$vuetify.breakpoint.xs ? 'font-size: 32px;' : ''"
                  >Hi Global</span
                >に参加することに興味がありますか? >
              </h2>

              <p
                class="text__3-p"
                :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
              >
                準備、教育、そして 海外での仕事の機会を簡単に、快適に、そして
                信頼できる、こんにちはグローバル。
                取得するにはお問い合わせください より完全で最新の情報。
              </p>
              <div>
                <v-btn
                  style="
                    padding: 1rem;
                    box-shadow: 9px 17px 50px rgba(30, 49, 99, 0.22) !important;
                    border-radius: 50px !important;
                  "
                  height="50px"
                  class="rounded-xl mt-4 text-capitalize font-weight-regular"
                  color="#FF9900"
                  dark
                  width="180"
                >
                  お問い合わせ
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
            <div
              :class="
                $vuetify.breakpoint.xs ? 'mx-auto' : 'mx-auto push__right'
              "
            >
              <v-img
                cover
                width="calc(100vh - 100px)"
                :src="require('@/assets/images/model_hero2.png')"
                alt="logo higlob"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- ==== TESTIMONY ==== -->
    <v-container>
      <section class="testimony">
        <v-row>
          <v-col cols="12" :class="$vuetify.breakpoint.xs ? 'my-7' : 'my-15'">
            <div
              class="d-flex justify-center align-center flex-wrap flex-column"
            >
              <h1 class="testimony__title">クライアントの言うこと</h1>
              <h3 class="testimony__subtitle text-center">
                HiGlobalに入社した後のクライアントの声
              </h3>
            </div>
          </v-col>
          <v-col cols="12">
            <v-carousel
              cycle
              interval="6000"
              hide-delimiters
              :show-arrows="$vuetify.breakpoint.xs ? false : true"
              style="height: 100%"
              v-model="model"
            >
              <!-- MOBILE -->
              <div v-if="$vuetify.breakpoint.mdAndDown ? true : false">
                <v-carousel-item
                  v-for="(el, index) in loading ? 4 : testimony_card"
                  :key="index"
                >
                  <v-sheet height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <v-hover v-slot="{ hover }">
                        <v-card
                          max-width="300px"
                          height="400"
                          :style="
                            hover
                              ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px;'
                              : 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 5%); border-radius: 10px;'
                          "
                        >
                          <div
                            class="
                              ma-auto
                              align-center
                              justify-center
                              d-flex
                              flex-wrap
                            "
                          >
                            <v-img
                              cover
                              class="my-auto"
                              style="max-width: 28vh"
                              :src="require(`@/assets/images/${el.image}`)"
                            ></v-img>
                          </div>
                          <div>
                            <div class="text-center pa-0 testimony__card-title">
                              {{ el.author }}
                            </div>
                            <div
                              class="
                                testimony__card-caption
                                py-2
                                px-3
                                text-center
                              "
                            >
                              <p>“ {{ el.caption | desc }} “</p>
                              <v-icon color="#FF9900">mdi-star</v-icon>
                              {{ el.score }}
                            </div>
                          </div>
                        </v-card>
                      </v-hover>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </div>
              <!-- DESKTOP -->
              <div v-else>
                <v-carousel-item v-for="n in 4" :key="n">
                  <v-row class="fill-height" align="center" justify="center">
                    <div
                      :style="custom_maxWidth"
                      class="d-flex justify-center align-center flex-wrap"
                    >
                      <div
                        class="ma-5"
                        v-for="(el, index) in loading ? 4 : testimony_card"
                        :key="index"
                      >
                        <v-skeleton-loader
                          class="ma-auto"
                          height="135"
                          :loading="loading"
                          transition="scale-transition"
                          :tile="false"
                          type="card"
                        >
                          <v-hover v-slot="{ hover }">
                            <v-card
                              class="px-4"
                              max-width="462.4px"
                              :height="
                                $vuetify.breakpoint.mdAndDown ? 'auto' : '217px'
                              "
                              :style="
                                hover
                                  ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px;'
                                  : 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 5%); border-radius: 10px;'
                              "
                            >
                              <v-row>
                                <v-col
                                  cols="12"
                                  xs="12"
                                  sm="5"
                                  md="5"
                                  lg="5"
                                  xl="5"
                                  class="ma-auto d-flex flex-wrap"
                                >
                                  <v-img
                                    cover
                                    :height="
                                      $vuetify.breakpoint.mdAndDown
                                        ? 'auto'
                                        : '148px'
                                    "
                                    :src="
                                      require(`@/assets/images/${el.image}`)
                                    "
                                  ></v-img>
                                </v-col>
                                <v-col
                                  cols="12"
                                  xs="12"
                                  sm="7"
                                  md="7"
                                  lg="7"
                                  xl="7"
                                  class="ma-0 pa-0"
                                >
                                  <v-card-title class="testimony__card-title">
                                    {{ el.author }}
                                  </v-card-title>
                                  <v-card-text class="testimony__card-caption">
                                    <p>“ {{ el.caption | desc }} “</p>
                                    <v-icon color="#FF9900">mdi-star</v-icon>
                                    {{ el.score }}
                                  </v-card-text>
                                </v-col>
                              </v-row>
                              <!-- <v-card-actions>
                                    
                                </v-card-actions> -->
                            </v-card>
                          </v-hover>
                        </v-skeleton-loader>
                      </div>
                    </div>
                  </v-row>
                </v-carousel-item>
              </div>
            </v-carousel>
          </v-col>
        </v-row>
      </section>

      <section class="my-5">
        <v-row>
          <!-- #TITLE -->
          <v-col cols="12">
            <div
              class="d-flex justify-center align-center flex-wrap flex-column"
            >
              <h1 class="testimony__title">最新ニュース</h1>
              <h3
                class="testimony__subtitle text-center"
                style="font-size: 14px"
              >
                LPK Hi
                Globalでのみ、就職情報、就職準備、インターンシップなどの情報から最新ニュースを入手できます。
                <!-- <br v-show="!$vuetify.breakpoint.xs" />
                 -->
              </h3>
            </div>
          </v-col>
          <!-- #ARTICLE -->
          <v-col elevation="0" cols="12">
            <div class="d-flex justify-center align-center flex-wrap">
              <div v-for="(el, index) in article_card" :key="index">
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="ma-5"
                    max-width="300"
                    height="555"
                    :style="
                      hover
                        ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px;'
                        : 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 5%); border-radius: 10px;'
                    "
                  >
                    <v-card-title class=""
                      ><v-img
                        :src="require(`@/assets/images/${el.img_url}`)"
                      ></v-img
                    ></v-card-title>
                    <v-card-text class="article">
                      <h3 class="article__title">{{ el.title }}</h3>
                      <p class="article__desc">{{ el.desc }}</p>
                      <small class="article__more">読み続けて</small>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </div>

            <div class="d-flex justify-center flex-wrap mb-15 mt-5">
              <v-btn
                style="
                  padding: 1rem;
                  box-shadow: 9px 17px 50px rgba(30, 49, 99, 0.22) !important;
                  border-radius: 50px !important;
                "
                height="50px"
                class="rounded-xl mt-4 text-capitalize"
                color="#FF9900"
                dark
              >
                ニュースをもっと読む
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ==== END TESTIMONY ==== -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      loading: false,
      model: 0,
      article_card: [
        {
          author: 'Adnan Aziz D',
          img_url: 'article.png',
          title: '日本へのエンジニアリングプログラム',
          desc: '日本へのエンジニアリング作業プログラムは他のプログラムとは異なるプログラムです',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article1.png',
          title: '日本で介護者になるための高い要件と給与を知っている',
          desc: '日本の介護福祉士の職業は非常に必要とされており、利益を保証する職業の1つです。',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article2.png',
          title: '就職の機会またはD3看護アドボカシー海外卒業生 ',
          desc: '中央統計局（BPS）によると、失業者の数',
        },
      ],
      testimony_card: [
        {
          author: 'マイケル・ダスティン',
          image: 'model6.png',
          caption:
            '私の夢を実現するのを助けてくれたグローバルなこんにちは友達に感謝します',
          score: '4.6',
        },
        {
          author: 'アレクシアサニア',
          image: 'model5.png',
          caption:
            'こんにちはグローバル、この4年間私を導いてくれてありがとう、ラブユー！',
          score: '4.9',
        },
        {
          author: 'クリスチャンジェームス',
          image: 'model7.png',
          caption:
            ' 幸運を！ うまくいけば、こんにちはグローバルは将来的にもっと進歩し、発展するでしょう。',
          score: '5.0',
        },
        {
          author: 'レザバラック',
          image: 'model8.png',
          caption: 'ドイツで働くのを手伝ってくれたHiglobalに感謝します',
          score: '4.9',
        },
      ],
      card_menu: [
        {
          icon: 'icon1.png',
          height: '294px',
          height_custom: '320px',
          title: 'こんにちはグローバルにはすでに数百人以上の学生がいます',
          description:
            ' こんにちはグローバルには500人以上の学生が参加し、彼らの夢を実現するのを助けました',
        },
        {
          icon: 'icon2.png',
          height: '250px',
          height_custom: '265px',
          title: 'Higlobは3年間運営されています',
          description:
            '過去3年間で、会社は成長し、多くの学生が夢を実現するのを支援してきました。',
        },
        {
          icon: 'icon3.png',
          height: '223px',
          height_custom: '250px',
          title: 'こんにちはグローバルはさまざまなサービスを提供してきました',
          description:
            'こんにちはグローバルはあなたが私たちに参加するのを簡単にするさまざまなサービスを提供しています',
        },
        {
          icon: 'icon4.png',
          height: '294px',
          height_custom: '294px',
          title: 'Higlobはさまざまな国とつながっています',
          description:
            'Higlobは、さまざまな国とつながり、協力して、夢の実現を支援してきました。 ',
        },
      ],

      media_patner: [
        {
          title: 'PT-Sarimadu Jayanusa',
          src: 'kerjasama1.png',
        },
        {
          title: 'Parente Higlob',
          src: 'kerjasama2.png',
        },
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    custom_maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return ''
        case 'sm':
          return ''
        case 'md':
          return ''
        case 'lg':
          return 'max-width:100%'
        case 'xl':
          return 'max-width:80%'
      }
    },
  },
}
</script>

<style lang="scss">
.override__container {
  margin: 0 5rem;
}

.note pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}

.v-window {
  &-x-transition,
  &-x-reverse-transition,
  &-y-transition,
  &-y-reverse-transition {
    &-enter-active,
    &-leave-active {
      transition: 1.5s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
    }
  }
}

.v-carousel__controls {
  background: none;
}

.slide-fade-enter-active {
  transition: all 5s ease;
}

.mdi-chevron-right::before {
  content: '\F0142';
  background: white;
}

.mdi-chevron-left::before {
  content: '\F0141';
  background: white;
}

.theme--dark.v-btn.v-btn--icon {
  color: #3e00ff !important;
}

.lang {
  cursor: pointer;
}

.lang:hover {
  color: rgba(15, 39, 177, 0.533);
}

// .nuxt__link {
//   font-weight: 500;
// }

// .nuxt__link:hover {
//   color: #002382;
//   @include transition-ease;
// }

.header__text {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 127%;

  &-special {
    color: #3e00ff;
  }

  &-p {
    color: #868686;
    margin: 1.2rem 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 180%;
  }
}

.container__text {
  margin-top: 10rem;
}

.container3__text {
  font-weight: 600;
  font-size: 28px;
  line-height: 160%;
}

.container__blue {
  margin: auto;
}

.text__1 {
  color: #03914d;
  font-size: 18px;
  line-height: 160%;
  font-weight: normal;
}

.text__2 {
  font-weight: 600;
  font-size: 38px;
  line-height: 160%;
  color: black;
}

.text__2-special {
  font-weight: 600;
  font-size: 39px;
  line-height: 160%;
  color: #3e00ff;
}
.text__3 {
  font-size: 18px;
  line-height: 180%;
  color: #868686;
}

.text__3-p {
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  margin: 1rem 0;
  color: #868686;
}
.testimony {
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 160%;
    margin: 0.5rem;
  }

  &__subtitle {
    font-weight: 400;
    margin: 0.5rem;
    font-size: 18px;
    color: #868686;
    line-height: 160%;
  }

  .card__transition {
    transition: 0.3s ease;
  }

  &__card-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    margin-top: 1rem;
  }

  &__card-caption {
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
  }
}

.article {
  &__title {
    margin: 1rem;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 141.19%;
    /* or 25px */
    text-transform: capitalize;
    color: #202020;
  }

  &__desc {
    margin: 1rem;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */
    color: #595959;
  }

  &__more {
    margin: 1rem;
    font-weight: 500;
    font-size: 12px;
    line-height: 141.19%;
    /* identical to box height, or 17px */
    text-transform: capitalize;
    /* Colour : Font Title */
    color: #171717;
  }
}

.address {
  width: 30%;
}
.push__right {
  margin-left: 5rem;
}

.push__top {
  margin-top: 5rem;
}

@include media-xsAndUp {
  .v-toolbar__content {
    padding: 0;
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
  }
  //HERO

  .container__text {
    margin-top: 5rem;

    .header__text {
      font-weight: bold;
      font-size: 32px;
      line-height: 130%;

      &-special {
        color: #3e00ff;
      }

      &-p {
        margin: 1.2rem 0;
        font-weight: normal;
        font-size: 1rem;
        line-height: 180%;
      }
    }
  }

  .text__2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 140%;
  }

  .text__3 {
    font-weight: normal;
    font-size: 1rem;
    line-height: 180%;
  }

  //want join?
  .want__join {
    .container__blue {
      margin: 1rem 0;
    }

    .push__right {
      margin-left: 0;
    }

    .text__3-p {
      font-weight: normal;
      font-size: 1rem;
      line-height: 170%;
      margin: 1rem 0;
    }
  }

  //testimony
  .testimony {
    &__title {
      font-weight: 600;
      font-size: 28px;
      line-height: 160%;
    }

    &__subtitle {
      font-weight: normal;
      font-size: 1rem;
      line-height: 160%;
    }
  }

  .footer {
    width: 100%;

    &__container {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
