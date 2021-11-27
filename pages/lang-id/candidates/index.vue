<template>
  <div>
    <!-- ============================================================================================== -->
    <!-- SECTION CANDIDATES -->
    <v-container>
      <section class="candidates__cv">
        <v-card elevation="1" outlined class="candidates__cv-card">
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
            <ul class="candidates__cv-ul">
              <li class="candidates__cv-li">
                <v-btn
                  depressed
                  color="#3B5998"
                  class="candidates__cv-btnkiri white--text"
                  >Download Form CV English</v-btn
                >
              </li>
              <li class="candidates__cv-li">
                <v-btn depressed color="success" class="candidates__cv-btnkanan"
                  >Download Form CV Japan</v-btn
                >
              </li>
            </ul>
          </div>
        </v-card>
      </section>
    </v-container>
    <!-- END SECTION CANDIDATES -->
    <!-- ============================================================================================== -->

    <v-container>
      <section class="candidates__video">
        <v-tabs
          color="orange darken-4"
          grow
          align-with-title
          mobile-breakpoint="slider-size:2"
        >
          <v-tab class="candidates__video-tab">Rumania</v-tab>
          <v-tab class="candidates__video-tab">Jepang</v-tab>
          <v-tab class="candidates__video-tab">Jerman</v-tab>
          <v-tab class="candidates__video-tab">Kanada</v-tab>
          <v-tab class="candidates__video-tab">Korea</v-tab>

          <v-tab-item class="candidates__video-tabitem">
            <v-row class="candidates__video-row">
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card>
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="270"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-end justify-start"
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h3 style="font-family: 'poppins'">testing</h3>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card>
                      <iframe
                        aspect-ratio="1"
                        width="270"
                        height="270"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-end justify-start"
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h3 style="font-family: 'poppins'">testing</h3>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-img
                  class="candidates__video-img"
                  aspect-ratio="1"
                  :src="`https://picsum.photos/500/300?image`"
                >
                </v-img>
              </v-col>
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-img
                  class="candidates__video-img"
                  aspect-ratio="1"
                  :src="`https://picsum.photos/500/300?image`"
                >
                </v-img>
              </v-col>
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-img
                  aspect-ratio="1"
                  :src="`https://picsum.photos/500/300?image`"
                >
                </v-img>
              </v-col>
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-img
                  class="candidates__video-img"
                  aspect-ratio="1"
                  :src="`https://picsum.photos/500/300?image`"
                >
                </v-img>
              </v-col>
              <v-col class="candidates__video-col" cols="12" md="3">
                <v-img
                  class="candidates__video-img"
                  aspect-ratio="1"
                  :src="`https://picsum.photos/500/300?image`"
                >
                </v-img> </v-col
              ><v-col class="candidates__video-col" cols="12" md="3">
                <v-img
                  class="candidates__video-img"
                  aspect-ratio="1"
                  :src="`https://picsum.photos/500/300?image`"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs>
        <div class="candidates__video-bungkusbtn text-center">
          <v-btn color="#FF9900" class="candidates__video-btn white--text"
            >Lebih Banyak</v-btn
          >
        </div>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
    zIndex: 1,
  }),
}
</script>

<style lang="scss">
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
    margin-left: -15px;
  }
  &-li {
    margin-right: 1rem;
  }
  &-btnkiri {
    font-size: 7px !important;
  }
  &-btnkanan {
    font-size: 7px !important;
  }
}

.candidates__video {
  &-tabitem {
    margin-top: 1rem;
  }
  &-btn {
    margin-top: 2rem;
  }
}
</style>
