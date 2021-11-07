<template>
  <div :class="$vuetify.breakpoint.xs ? 'mx-3' : ''">
    <v-container>
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
            Selamat Datang Di LPK Higlob Gabung dan
            <span class="header__text-special">Raih Mimpimu</span>
          </div>
          <p class="header__text-p">
            Hi Global adalah sebuah pintu bagi anda untuk mencapai impian Studi
            maupun Bekerja di Luar Negeri. Kami membantu anda mulai dari
            persiapan berupa pembekalan skill bahasa dan segala informasi yang
            diperlukan. Solusi integral dari persiapan, pendidikan, hingga
            pekerjaan di Luar Negeri.
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
              class="rounded-xl ma-2 header__btn"
              color="#FF9900"
              dark
            >
              Ayo Mulai
            </v-btn>

            <v-btn
              class="text-capitalize ma-2 rounded-xl"
              text
              color="#0A0A0A"
              :height="$vuetify.breakpoint.mdAndDown ? '40px' : '50px'"
              :width="$vuetify.breakpoint.mdAndDown ? '' : '160px'"
            >
              <v-icon class="mx-1">mdi-play-circle-outline</v-icon> Putar Video
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <div class="push__top">
            <v-img
              wdith="100%"
              cover
              :src="require('@/assets/images/model_hero.png')"
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
              ? 'container3__text mt-0'
              : 'container3__text mt-0 mb-15'
          "
        >
          <div class="text-center mb-5">Bekerja sama dengan</div>
          <div class="d-flex justify-center align-center flex-wrap">
            <div class="my-8" v-for="(el, index) in media_patner" :key="index">
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
                :width="$vuetify.breakpoint.lgAndDown ? '235' : '275'"
                :height="
                  $vuetify.breakpoint.lgAndDown
                    ? `${el.height_custom}`
                    : `${el.height}`
                "
                :style="
                  hover
                    ? 'box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 12px'
                    : 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px'
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
              cycle
              interval="6000"
              :show-arrows="$vuetify.breakpoint.xs ? false : true"
              v-model="carousel"
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
        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
          <div>
            <h5 class="text__1">Memiliki jaringan yang luas</h5>
            <h2 class="text__2 mt-2 mb-3">
              Apa yang membuatmu yakin untuk memilih Hi Global
            </h2>
            <p class="text__3">
              Higlob menjadi tempat rekomendasi bagi teman - teman yang ingin
              magang maupun bekerja diluar negeri, serta hi global dapat
              membantu untuk bekerja di perusahaan yang sesuai dengan passion
              yang anda miliki.
            </p>

            <v-btn
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
            </v-btn>
          </div>
        </v-col>
        <!-- ==== END NETWORK ==== -->

        <!-- ==== TESTIMONY ==== -->
        <v-container>
          <section class="testimony">
            <v-row>
              <v-col cols="12">
                <div
                  class="
                    d-flex
                    justify-center
                    align-center
                    flex-wrap flex-column
                  "
                >
                  <h1 class="testimony__title">Apa yang klien katakan</h1>
                  <h3 class="testimony__subtitle">
                    Apa yang telah klien katakan setelah bergabung dengan Hi
                    Global
                  </h3>
                </div>
              </v-col>
              <v-col cols="12">
                <v-carousel
                  cycle
                  interval="6000"
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
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
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
                                <div
                                  class="text-center pa-0 testimony__card-title"
                                >
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
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
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
                                    $vuetify.breakpoint.mdAndDown
                                      ? 'auto'
                                      : '217px'
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
                                      <v-card-title
                                        class="testimony__card-title"
                                      >
                                        {{ el.author }}
                                      </v-card-title>
                                      <v-card-text
                                        class="testimony__card-caption"
                                      >
                                        <p>“ {{ el.caption | desc }} “</p>
                                        <v-icon color="#FF9900"
                                          >mdi-star</v-icon
                                        >
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
                  class="
                    d-flex
                    justify-center
                    align-center
                    flex-wrap flex-column
                  "
                >
                  <h1 class="testimony__title">Artikel Terbaru</h1>
                  <h3 class="testimony__subtitle">
                    Dapatkan Artikel terbaru dari informasi pekerjaan, persiapan
                    kerja maupun magang serta informasi lainya di LPK Higlob
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
                          <small class="article__more">Lanjut Baca</small>
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </div>
                </div>

                <div class="d-flex justify-center flex-wrap">
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
                    Baca Berita lainya
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </section>
        </v-container>
        <!-- ==== END TESTIMONY ==== -->
      </v-row>
    </v-container>
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
          title: 'Rekayasa Program ke Jepang',
          desc: 'Program kerja engineering ke Jepang merupakan program yang berbeda dengan program lainnya',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article1.png',
          title:
            'Ketahui Persyaratan dan Gaji Menjadi Care Giver di Jepang yang Tinggi',
          desc: 'Profesi care giver di Jepang sangat dibutuhkan dan merupakan salah satu profesi yang menjamin tunjangan',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article2.png',
          title:
            'Peluang Kerja atau D3 Keperawatan Avokasi Lulusan Luar Negeri ',
          desc: 'Menurut Badan Pusat Statistik (BPS) menyebutkan, jumlah pengangguran',
        },
      ],
      testimony_card: [
        {
          author: 'Michael Dustin',
          image: 'model6.png',
          caption:
            'Terima kasih kepada teman - teman hi global yang telah membantu saya untuk meraih mimpi saya',
          score: '4.6',
        },
        {
          author: 'Alexia Sania',
          image: 'model5.png',
          caption:
            'Terima kasih Hi global yang telah membimbing saya selama 4 tahun ini, Love You!',
          score: '4.9',
        },
        {
          author: 'Christian James',
          image: 'model7.png',
          caption:
            ' good luck! semoga hi global kedepanya makin maju dan berkembang.',
          score: '5.0',
        },
        {
          author: 'Reza Ballack',
          image: 'model8.png',
          caption:
            'Terima kasih Hi global yang telah membantu saya bekerja di jerman',
          score: '4.9',
        },
      ],
      card_menu: [
        {
          icon: 'icon1.png',
          height: '294px',
          height_custom: '320px',
          title: 'Hi Global telah memiliki lebih dari ratusan pelajar',
          description:
            ' Hi global telah memiliki lebih dari 500 pelajar lebih yang telah bergabung dan membantu mereka dalam untuk meriah impianya',
        },
        {
          icon: 'icon2.png',
          height: '250px',
          height_custom: '265px',
          title: 'Higlob telah beroperasi 3 tahun lamanya',
          description:
            'Selama tiga tahun terakhir higlob perusahaan telah tumbuh dan memiliki membantu banyak siswa untuk raih mimpinya',
        },
        {
          icon: 'icon3.png',
          height: '223px',
          height_custom: '250px',
          title: 'hi Global Telah menyediakan berbagai jasa',
          description:
            'Hi Global telah menyediakan berbagai layanan yang memudahkan anda untuk bergabung dengan kami',
        },
        {
          icon: 'icon4.png',
          height: '294px',
          height_custom: '294px',
          title: 'Higlob telah terhubung dengan berbagai negara',
          description:
            'Higlob telah terhubung dan bekerja sama dengan berbagai negara yang bertujuan untuk membantu anda menggapai impian anda ',
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

.nuxt__link {
  font-weight: 500;
}

.nuxt__link:hover {
  color: #002382;
  @include transition-ease;
}

.header__text {
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 127%;

  &-special {
    color: #3e00ff;
  }

  &-p {
    margin: 1.2rem 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 32.4px;
  }
}

.container__text {
  margin-top: 7rem;
}

.container3__text {
  font-weight: 600;
  font-size: 26px;
  line-height: 160%;
}

.container__blue {
  margin: 8rem 0;
}

.text__1 {
  color: #03914d;
  font-size: 18px;
  line-height: 160%;
  font-weight: normal;
}

.text__2 {
  font-weight: 600;
  font-size: 39px;
  line-height: 160%;
}
.text__3 {
  font-size: 18px;
  line-height: 180%;
}

.text__3-p {
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  margin: 1rem 0;
}
.testimony {
  &__title {
    font-weight: 600;
    font-size: 39px;
    line-height: 160%;
    margin: 0.5rem;
  }

  &__subtitle {
    font-weight: 500;
    margin: 0.5rem;
    font-size: 18px;
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

.footer {
  width: 100%;

  &__container {
    width: 100%;
    margin: 1rem 5rem;
  }

  &__title {
    margin: 1rem 0 1rem 0;
  }

  &__col {
    padding: 1rem;
  }

  &__copyright {
    font-weight: normal;
    font-size: 0.9rem;
    // line-height: 154.69%;
  }
}

.address {
  width: 30%;
}
.push__right {
  margin-left: 5rem;
}

.push__top {
  margin-top: 7rem;
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
        color: #ff860e;
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