<template>
  <v-container class="pa-0 footer" fluid>
    <v-footer class="footer" color="#011B4B">
      <section class="footer__container">
        <v-row
          style="width: 100%"
          justify="space-around"
          no-gutters
          class="footer__row"
        >
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div
              class="footer__content white--text"
              :class="$vuetify.breakpoint.xs ? 'mt-8' : ''"
            >
              <h4
                :class="
                  $vuetify.breakpoint.xs
                    ? 'footer__title'
                    : 'footer__title-special'
                "
              >
                PT. Higlob Sinar Utama
              </h4>
              <div class="footer__item text-left">
                <div
                  :class="
                    $vuetify.breakpoint.xs
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
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Persiapan Bahasa
                </v-btn>
                <!-- <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Pendidikan Luar Negeri
                </v-btn>
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Peluang Luar Negeri
                </v-btn> -->
                <v-btn
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Working Holiday
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
                  text
                  rounded
                >
                  Galeri
                </v-btn>
                <!-- <h4 class="footer__title ">Ikuti Kami :</h4>
                <div class="d-flex justify-center flex-wrap align-center">
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </div> -->
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
                  color="white"
                  class="text-capitalize font-weight-regular"
                  text
                  rounded
                >
                  Kontak Kami
                </v-btn>
                <v-btn
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
    // line-height: 154.69%;
  }
}
</style>
