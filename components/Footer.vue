<template>
  <v-container class="pa-0 footer" fluid>
    <v-footer class="footer" color="#011B4B">
      <section
        :class="$vuetify.breakpoint.smAndDown ? '' : 'footer__container'"
      >
        <!-- ================================================================================== -->
        <!-- JEPANG-->
        <!-- ================================================================================== -->
        <v-row
          v-if="!$store.state.toggleLang"
          style="width: 100%"
          justify="space-around"
          no-gutters
          class="footer__row"
        >
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div
              class="footer__content white--text"
              :class="$vuetify.breakpoint.smAndDown ? 'mt-8' : ''"
            >
              <h4
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'footer__title'
                    : 'footer__title-special'
                "
              >
                PT. Higlob Sinar Utama
              </h4>
              <div class="footer__item text-left">
                <div
                  :class="
                    $vuetify.breakpoint.smAndDown
                      ? ' footer__title text-left text-capitalize font-weight-regular'
                      : 'text-left text-capitalize font-weight-regular'
                  "
                  style="line-height: 183%"
                >
                  Jalan turi km 3,7 perum pondok idaman no A2 kadisobo, <br />
                  Kadisobo I / Pepen, Trimulyo, Kec. Sleman, <br />
                  Kabupaten Sleman, Daerah Istimewa Yogyakarta 55513
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">サービス</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  言語の準備
                </v-btn>
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  ワーキングホリデー
                </v-btn>
              </div>
            </div></v-col
          >
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">会社</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  私たちに関しては
                </v-btn>
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  ギャラリー
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">ヘルプ</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  お問い合わせ
                </v-btn>
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  よくある質問
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">フォローする</h4>
              <div
                class="
                  footer__title
                  d-flex
                  justify-start
                  flex-wrap
                  align-center
                "
              >
                <v-btn
                  v-for="(el, index) in icon"
                  :key="index"
                  class="ma-1 white--text"
                  icon
                >
                  <v-img
                    :src="require(`@/assets/images/${el.url}`)"
                    :alt="el.alt"
                  ></v-img>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col
            align="center"
            class="footer__copyright white--text mt-5"
            cols="12"
          >
            Copyright © {{ new Date().getFullYear() }} PT Hi Global. All rights
            reserved
          </v-col>
        </v-row>
        <!-- ================================================================================== -->
        <!-- INDONESIA -->
        <!-- ================================================================================== -->
        <v-row
          v-else
          style="width: 100%"
          justify="space-around"
          no-gutters
          class="footer__row"
        >
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div
              class="footer__content white--text"
              :class="$vuetify.breakpoint.smAndDown ? 'mt-8' : ''"
            >
              <h4
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'footer__title'
                    : 'footer__title-special'
                "
              >
                PT. Higlob Sinar Utama
              </h4>
              <div class="footer__item text-left">
                <div
                  :class="
                    $vuetify.breakpoint.smAndDown
                      ? ' footer__title text-left text-capitalize font-weight-regular'
                      : 'text-left text-capitalize font-weight-regular'
                  "
                  style="line-height: 183%"
                >
                  Jalan turi km 3,7 perum pondok idaman no A2 kadisobo, <br />
                  Kadisobo I / Pepen, Trimulyo, Kec. Sleman, <br />
                  Kabupaten Sleman, Daerah Istimewa Yogyakarta 55513
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">Layanan</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  to="/lang-id/persiapan-bahasa"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Persiapan Bahasa
                </v-btn>
                <v-btn
                  to="/lang-id/working-holiday"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Working Holiday
                </v-btn>
              </div>
              <h4 class="footer__title">Job Seeker</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  to="/lang-id/job-info"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Job Info
                </v-btn>
                <v-btn
                  to="/lang-id/candidates"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Candidates
                </v-btn>
              </div>
            </div></v-col
          >
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">Perusahaan</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  to="/lang-id/tentang-kami"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Tentang Kami
                </v-btn>
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  to="/lang-id/galeri"
                  text
                  rounded
                >
                  Galeri
                </v-btn>
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  to="/lang-id/blog"
                  text
                  rounded
                >
                  Blog
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">Bantuan</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn
                  to="/lang-id/kontak"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Kontak Kami
                </v-btn>
                <v-btn
                  to="/lang-id/faq"
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  FAQs
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title">Ikuti Kami</h4>
              <div
                class="
                  footer__title
                  d-flex
                  justify-start
                  flex-wrap
                  align-center
                "
              >
                <v-btn
                  v-for="(el, index) in icon"
                  :key="index"
                  class="ma-1 white--text"
                  icon
                >
                  <v-img
                    :src="require(`@/assets/images/${el.url}`)"
                    :alt="el.alt"
                  ></v-img>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col
            align="center"
            class="footer__copyright white--text mt-5"
            cols="12"
          >
            Copyright © {{ new Date().getFullYear() }} PT Hi Global. All rights
            reserved
          </v-col>
        </v-row>
      </section>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //conditional footer
      toggleLang: false,

      icon: [
        {
          url: 'instagram.png',
          alt: 'Logo Instagram',
        },
        {
          url: 'twitter.png',
          alt: 'Logo Twitter',
        },
        {
          url: 'yt.png',
          alt: 'Logo Youtube',
        },
        {
          url: 'facebook.png',
          alt: 'Logo Facebook',
        },
      ],
    }
  },

  mounted() {
    if ($nuxt.$route.path === '/lang-jp') {
      this.$store.state.toggleLang = true
    } else {
      this.$store.state.toggleLang = false
    }
  },
}
</script>

<style lang="scss">
.footer {
  width: 100%;

  &__container {
    width: 100%;
    margin: 1rem 4rem;
  }

  &__title {
    margin: 1rem 0 1rem 1rem !important;
  }

  &__title-special {
    margin: 1rem 0 1rem 0rem;
  }

  &__col {
    padding: 1rem;
  }

  &__copyright {
    font-weight: normal;
    font-size: 0.9rem;
  }
}
</style>
