<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        app
      >
        <v-container class="d-flex align-center">
          <v-toolbar-title>
            <img
              style="width: 57.51px"
              :src="require('@/assets/images/logo-higlob.png')"
              alt="logo higlob"
            />
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <nuxt-link
            class="mx-3"
            style="text-decoration: none; color: black"
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
          >
            <div class="nuxt__link ma-2">
              {{ item.label }}
            </div>
          </nuxt-link>

          <div style="border-left: solid 1.5px black; height: 45px">
            <v-menu class="ml-5" open-on-hover top offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text color="black" v-bind="attrs" v-on="on" icon>
                  <span style="margin-top: -1px; margin-left: 1rem">
                    ID <v-icon>mdi-chevron-down</v-icon>
                  </span>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in lang" :key="index">
                  <v-list-item-title class="lang" @click="test">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-container>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
        <!-- max-height="600" -->
        <v-container>
          <v-main>
            <v-row>
              <!-- ==== HERO ==== -->
              <v-col cols="6" class="container__text">
                <div class="header__text">
                  Selamat Datang Di LPK Higlob Gabung dan
                  <span class="header__text-special">Raih Mimpimu</span>
                </div>
                <p class="header__text-p">
                  Hi Global adalah sebuah pintu bagi anda untuk mencapai impian
                  Studi maupun Bekerja di Luar Negeri. Kami membantu anda mulai
                  dari persiapan berupa pembekalan skill bahasa dan segala
                  informasi yang diperlukan. Solusi integral dari persiapan,
                  pendidikan, hingga pekerjaan di Luar Negeri.
                </p>

                <div class="d-flex flex-wrap">
                  <v-btn
                    style="
                      padding: 1rem;
                      box-shadow: 10px 17px 56px rgba(36, 182, 234, 0.44) !important;
                      border-radius: 50px !important;
                    "
                    height="50px"
                    width="160px"
                    class="rounded-xl ma-2"
                    color="#00BCFF"
                    dark
                  >
                    Ayo Mulai
                  </v-btn>

                  <v-btn
                    class="ma-2"
                    text
                    color="#0A0A0A"
                    height="50px"
                    width="160px"
                  >
                    <v-icon class="mx-2">mdi-play-circle-outline</v-icon> Putar
                    Video
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="6">
                <div>
                  <v-img
                    contain
                    :src="require('@/assets/images/model2.png')"
                    alt="logo higlob"
                  />
                </div>
              </v-col>
              <!-- ==== BELIEVE ==== -->
              <v-col cols="12" class="container3__text">
                <div class="text-center">Dipercaya Oleh</div>
                <div class="d-flex justify-center align-center flex-wrap">
                  <div
                    class="my-8 mx-4"
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
              <!-- ==== YAKIN ==== -->
              <v-col cols="6">
                <div class="d-flex justify-center align-center flex-wrap">
                  <v-hover v-slot="{ hover }">
                    <v-card
                      width="300"
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
                        Hi Global telah memiliki lebih dari ratusan pelajar Hi
                        global telah memiliki lebih dari 500 pelajar lebih yang
                        telah bergabung dan membantu mereka dalam untuk meriah
                        impianya
                      </v-card-title>
                      <v-card-subtitle
                        style="
                          font-weight: 500;
                          font-size: 13px;
                          line-height: 151.7%;
                        "
                      >
                        Hi global telah memiliki lebih dari 500 pelajar lebih
                        yang telah bergabung dan membantu mereka dalam untuk
                        meriah impianya
                      </v-card-subtitle>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot="{ hover }">
                    <v-card
                      width="300"
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
                        Higlob telah beroperasi 5 tahun lamanya
                      </v-card-title>
                      <v-card-subtitle
                        style="
                          font-weight: 500;
                          font-size: 13px;
                          line-height: 151.7%;
                        "
                      >
                        Selama lima tahun terakhir higlob perusahaan telah
                        tumbuh dan memiliki membantu banyak siswa untuk raih
                        mimpinya
                      </v-card-subtitle>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot="{ hover }">
                    <v-card
                      width="300"
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
                        hi Global Telah menyediakan berbagai jasa
                      </v-card-title>
                      <v-card-subtitle
                        style="
                          font-weight: 500;
                          font-size: 13px;
                          line-height: 151.7%;
                        "
                      >
                        Hi Global telah menyediakan berbagai layanan yang
                        memudahkan anda untuk bergabung dengan kami
                      </v-card-subtitle>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot="{ hover }">
                    <v-card
                      width="300"
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
                        Higlob telah terhubung berbeda negara
                      </v-card-title>
                      <v-card-subtitle
                        style="
                          font-weight: 500;
                          font-size: 13px;
                          line-height: 151.7%;
                        "
                      >
                        Higlob telah terhubung dan bekerja sama dengan berbagai
                        negara yang bertujuan untuk membantu anda menggapai
                        impian anda
                      </v-card-subtitle>
                    </v-card>
                  </v-hover>
                </div>
              </v-col>
              <v-col cols="6">
                <div>
                  <h5 class="text__1">Memiliki jaringan yang luas</h5>
                  <h2 class="text__2">
                    Apa yang membuatmu yakin untuk memilih Hi Global
                  </h2>
                  <p class="text__3" }>
                    Higlob menjadi tempat rekomendasi bagi teman - teman yang
                    ingin magang maupun bekerja diluar negeri, serta hi global
                    dapat membantu untuk bekerja di perusahaan yang sesuai
                    dengan passion yang anda miliki.
                  </p>

                  <v-btn
                    style="
                      padding: 1rem;
                      box-shadow: 10px 17px 56px rgba(36, 182, 234, 0.44) !important;
                      border-radius: 50px !important;
                    "
                    height="50px"
                    class="rounded-xl ma-2"
                    color="#00BCFF"
                    dark
                  >
                    Pelajari Lebih Lanjut
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-main>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: 'Beranda',
          link: '#langkah',
        },
        {
          label: 'Layanan',
          link: '#syarat',
        },
        {
          label: 'Berita',
          link: '#langkah',
        },
        {
          label: 'Tentang Kami',
          link: '#syarat',
        },
        {
          label: 'Kontak',
          link: '#syarat',
        },
      ],

      lang: [
        {
          title: 'ID',
        },
        {
          title: 'JP',
        },
      ],

      media_patner: [
        {
          title: 'Facebook',
          src: 'fb.png',
        },
        {
          title: 'Google',
          src: 'google.png',
        },
        {
          title: 'Newcastle University',
          src: 'newcastle.png',
        },
        {
          title: 'Linkedin',
          src: 'linkedin.png',
        },
        {
          title: 'Facebook',
          src: 'microsoft.png',
        },
      ],

      clipped: false,
      drawer: false,
      fixed: false,
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
  methods: {
    test() {
      console.log('a')
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
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
    color: #ff860e;
  }

  &-p {
    margin: 1.2rem 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 32.4px;
  }
}

.container__text {
  margin-top: 10rem;
}

.container3__text {
  font-weight: 600;
  font-size: 26px;
  line-height: 160%;
}

.text__1 {
  color: #ff860e;
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
</style>
