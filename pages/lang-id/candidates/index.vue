<template>
  <div>
    <!-- ============================================================================================== -->
    <!-- SECTION CANDIDATES -->

    <v-container>
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

      <section class="candidates__cv" ref="awal">
        <v-card elevation="0" outlined class="candidates__cv-card">
          <div class="candidates__cv-div">
            <h1 class="candidates__cv-h1">Candidates</h1>
            <p class="candidates__cv-p">
              Kirim formulir aplikasi Anda dan lanjutkan untuk memulai pencarian
              pekerjaan Anda hari ini!
            </p>
            <p class="candidates__cv-p">
              Unduh dan isi formulir di bawah ini, dan kirim dengan resume Anda
              ke email lpkhiglob1@gmail.com. Setelah dikirimkan, salah satu
              perekrut kami akan menghubungi Anda untuk melanjutkan proses.
            </p>
            <div
              class="d-flex align-center"
              :class="
                $vuetify.breakpoint.xs ? ' justify-center' : ' justify-start'
              "
            >
              <ul class="candidates__cv-ul">
                <li class="candidates__cv-li">
                  <v-btn
                    href="https://docs.google.com/document/d/1EcIPIkdRKGqg4e99_744OPjMfk-YRI6g/edit?usp=sharing&ouid=108920780784820677981&rtpof=true&sd=true"
                    target="_blank"
                    depressed
                    color="#3B5998"
                    class="candidates__cv-btnkiri white--text text-capitalize"
                    >Unduh Form CV English</v-btn
                  >
                </li>
                <li class="candidates__cv-li">
                  <v-btn
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1zpkqpSloJbQoAkOEfqYmm0wlhRSYyF88/edit?usp=sharing&ouid=108920780784820677981&rtpof=true&sd=true"
                    depressed
                    color="success"
                    class="candidates__cv-btnkanan text-capitalize"
                    >Unduh Form CV Japan</v-btn
                  >
                </li>
              </ul>
            </div>
          </div>
        </v-card>
      </section>
    </v-container>
    <!-- END SECTION CANDIDATES -->
    <!-- ============================================================================================== -->

    <v-container>
      <section class="candidates__video">
        <v-tabs color="orange darken-4" grow align-with-title>
          <v-tab class="ml-0 candidates__video-tab">Jepang</v-tab>
          <!-- <v-tab  class="candidates__video-tab">Rumania</v-tab>
          <v-tab  class="candidates__video-tab">Jerman</v-tab>
          <v-tab class="candidates__video-tab">Kanada</v-tab>
          <v-tab class="candidates__video-tab">Korea</v-tab> -->

          <v-tab-item class="candidates__video-tabitem">
            <v-row class="candidates__video-row">
              <v-col
                class="candidates__video-col"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="candidates__video-card"
                      width="270"
                      height="386"
                    >
                      <iframe
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/a1FFr16k1gs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-start justify-start"
                          v-if="hover"
                          absolute
                          style="height: 30%"
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h5 style="font-family: 'poppins'">
                              Nama : Budi Prasetya <br />
                              Umur : 25 Tahun <br />Pengalaman : Pengelasan
                            </h5>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>

              <v-col
                class="candidates__video-col"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="candidates__video-card"
                      width="270"
                      height="386"
                    >
                      <iframe
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/veHNMxL7iBc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-start justify-start"
                          v-if="hover"
                          absolute
                          style="height: 30%"
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h5 style="font-family: 'poppins'">
                              Nama : Saiful Arman <br />
                              Umur : 23 Tahun <br />Pengalaman : Pengelasan
                            </h5>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>

              <v-col
                class="candidates__video-col"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="candidates__video-card"
                      width="270"
                      height="386"
                    >
                      <iframe
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/zPnoa8FX-gA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-start justify-start"
                          v-if="hover"
                          absolute
                          style="height: 30%"
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h5 style="font-family: 'poppins'">
                              Nama : Ahmad Zaki Mubarok <br />
                              Umur : 28 Tahun <br />Pengalaman : Marketing, IT
                              Support
                            </h5>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>

              <v-col
                class="candidates__video-col"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="candidates__video-card"
                      width="270"
                      height="386"
                    >
                      <iframe
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/2Iz3dqH-bWM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-start justify-start"
                          v-if="hover"
                          absolute
                          style="height: 30%"
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h5 style="font-family: 'poppins'">
                              Nama : Lucky Wibisono <br />
                              Umur : 25 Tahun <br />Pengalaman : Otomotif
                            </h5>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>

              <v-col
                class="candidates__video-col"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="candidates__video-card"
                      width="270"
                      height="386"
                    >
                      <iframe
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/D-u7R1bF-jg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-start justify-start"
                          v-if="hover"
                          absolute
                          style="height: 30%"
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h5 style="font-family: 'poppins'">
                              Nama : Arman <br />
                              Umur : 22 Tahun <br />Pengalaman : Konstruksi
                            </h5>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Higlob - Candidates',
  },
  data: () => ({
    overlay: false,
    zIndex: 1,
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
.candidates__cv {
  margin-top: 7rem;
  padding: 0.1rem;
  &-div {
    background-color: #f2fbfe;
    padding: 2rem;
  }
  &-h1 {
    font-size: 28px;
  }
  &-p {
    line-height: 1.5rem;
    font-size: 12px;
  }
  &-ul {
    list-style-type: none;
    display: inline-flex;
    padding-left: 0 !important;
  }
  &-li {
    margin-right: 1rem;
  }
  &-btnkiri {
    font-size: 12px !important;
    font-weight: 300;
  }
  &-btnkanan {
    font-size: 12px !important;
    font-weight: 300;
  }
}

.candidates__video {
  &-tabitem {
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
  &-btn {
    margin-top: 2rem;
  }
}

//0-300
@media screen and (min-width: 0px) and (max-width: 300px) {
}
//300-600
@media screen and (min-width: 300px) and (max-width: 600px) {
  .candidates__cv {
    margin-top: 7rem;
    padding: 0.1rem;
    &-div {
      background-color: #f2fbfe;
      padding: 2rem;
    }
    &-h1 {
      font-size: 28px;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 12px;
    }
    &-ul {
      list-style-type: none;
      display: inline-grid;
      padding-left: 0 !important;
      margin-left: 1rem;
      margin-top: 2rem;
    }
    &-li {
      margin-right: 0.5rem;
      margin-bottom: 2rem;
    }
    &-btnkiri {
      font-size: 12px !important;
      margin: 0 auto;
    }
    &-btnkanan {
      font-size: 12px !important;
      margin: 0 auto;
    }
  }
  .v-overlay__scrim {
    height: 80%;
  }
  .candidates__video {
    &-tabitem {
      margin-top: 1rem;
    }
    &-btn {
      margin-top: 2rem;
    }
    &-row {
      margin: 0 auto;
    }
    &-card {
      margin: 0 auto;
    }
    &-bungkus {
      margin-bottom: 2rem !important;
    }
    &-btn {
      margin-bottom: 2rem !important;
    }
  }
}
//600-960
@media screen and (min-width: 600px) and (max-width: 960px) {
  .candidates__cv {
    margin-top: 5rem;
    padding: 0.1rem;
  }

  .candidates__video {
    &-tabitem {
      margin-top: 1rem;
      padding-left: 1rem;
    }
    &-btn {
      margin-top: 2rem;
    }
    &-row {
      margin: 0 auto;
      padding-left: 0rem;
    }
    &-card {
      margin: 0 auto;
    }
    &-bungkus {
      margin-bottom: 2rem !important;
    }
    &-btn {
      margin-bottom: 2rem !important;
    }
    &-tabitem {
      padding-left: 0rem;
    }
  }
}
//960-1264
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .candidates__video {
    &-btn {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    &-row {
      margin-top: 1rem;
    }
    &-btn {
      margin-bottom: 2rem;
    }
  }
}
//1264-1904
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  iframe {
    width: inherit;
  }
  .candidates__video {
    &-btn {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    &-row {
      margin-top: 1rem;
    }
    &-btn {
      margin-bottom: 2rem;
    }
  }
}

// 1904 >
@media screen and (min-width: 1904px) {
  iframe {
    width: 22rem;
  }
  .v-window__container {
    padding: 0 !important;
  }
  .v-overlay.d-flex.align-start.justify-start.v-overlay--absolute.v-overlay--active.theme--dark {
    width: 22rem;
    z-index: 5;
    height: 30%;
  }
  .candidates__video {
    &-card {
      width: 366px;
    }
    &-row {
      margin-top: 3rem;
    }
    &-bungkusbtn {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
  }
}
</style>
