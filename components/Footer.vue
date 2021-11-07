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
            <div class="footer__content ml-4 white--text">
              <h4 class="footer__title">Higlob</h4>
              <div class="footer__item text-left">
                <span
                  class="text-left text-capitalize"
                  style="width: 30%; line-height: 183%"
                  >Jalan turi km 3,7 perum pondok idaman no A2 kadisobo, <br />
                  Kadisobo I / Pepen, Trimulyo, Kec. Sleman, <br />
                  Kabupaten Sleman, Daerah Istimewa Yogyakarta 55513</span
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="3" lg="3" xl="3" style="width: 100%"
            ><div class="footer__content white--text">
              <h4 class="footer__title ml-5">Layanan</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn color="white" class="text-capitalize" text rounded>
                  Persiapan Bahasa
                </v-btn>
                <v-btn color="white" class="text-capitalize" text rounded>
                  Pendidikan Luar Negeri
                </v-btn>
                <v-btn color="white" class="text-capitalize" text rounded>
                  Peluang Luar Negeri
                </v-btn>
                <v-btn color="white" class="text-capitalize" text rounded>
                  Working Holiday
                </v-btn>
              </div>
            </div></v-col
          >
          <v-col cols="12" sm="12" md="3" lg="3" xl="3" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title ml-5">Bantuan</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn color="white" class="text-capitalize" text rounded>
                  Kontak Kami
                </v-btn>
                <v-btn color="white" class="text-capitalize" text rounded>
                  FAQs
                </v-btn>
                <h4 class="footer__title ml-5">Ikuti Kami :</h4>
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
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="2" lg="2" xl="2" style="width: 100%">
            <div class="footer__content white--text">
              <h4 class="footer__title ml-5">Perusahaan</h4>
              <div
                class="
                  footer__item
                  d-flex
                  justify-start
                  align-start
                  flex-wrap flex-column
                "
              >
                <v-btn color="white" class="text-capitalize" text rounded>
                  Tentang Kami
                </v-btn>
                <v-btn color="white" class="text-capitalize" text rounded>
                  Galeri
                </v-btn>
                <v-btn color="white" class="text-capitalize" text rounded>
                  Penghargaan
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col
            align="center"
            class="footer__copyright white--text mt-10"
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
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<style>
</style>