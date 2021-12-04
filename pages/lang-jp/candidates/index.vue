<template>
  <div>
    <!-- ============================================================================================== -->
    <!-- SECTION CANDIDATES -->
    <v-container>
      <section class="candidates__cv">
        <v-card elevation="1" outlined class="candidates__cv-card">
          <div class="candidates__cv-div">
            <h1 class="candidates__cv-h1">候補者</h1>
            <p class="candidates__cv-p">
              申し込みフォームを送信して、検索を開始します 今日のあなたの仕事！
            </p>
            <p class="candidates__cv-p">
              以下のフォームをダウンロードして記入し、履歴書と一緒に送信してください
              lpkhiglob1@gmail.comに電子メールを送信します。 送信された後、
              プロセスを続行するために、採用担当者から連絡があります。
            </p>
            <ul class="candidates__cv-ul">
              <li class="candidates__cv-li">
                <v-btn
                  depressed
                  color="#3B5998"
                  class="candidates__cv-btnkiri white--text text-capitalize"
                  >フォームCV英語をダウンロード</v-btn
                >
              </li>
              <li class="candidates__cv-li">
                <v-btn
                  depressed
                  color="success"
                  class="candidates__cv-btnkanan text-capitalize"
                  >フォームCVジャパンをダウンロード</v-btn
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
              <v-col
                class="candidates__video-col"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
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
                <v-hover value="true">
                  <template v-slot:default="{ hover }">
                    <v-card width="270" height="386">
                      <iframe
                        controls
                        aspect-ratio="1"
                        width="270"
                        height="386"
                        src="https://www.youtube.com/embed/C0ESitKzc5I"
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
                              Nama : Amrullah <br />
                              Umur : 25 Tahun <br />Pengalaman : Marketing, IT
                              Support
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
  }
  &-li {
    margin-right: 1rem;
  }
  &-btnkiri {
    font-size: 12px !important;
  }
  &-btnkanan {
    font-size: 12px !important;
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

@media screen and (min-width: 0px) and (max-width: 300px) {
}
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
      display: inline-flex;
      padding-left: 0 !important;
      margin-left: -15px;
    }
    &-li {
      margin-right: 0.5rem;
    }
    &-btnkiri {
      font-size: 8px !important;
      margin: 0 auto;
    }
    &-btnkanan {
      font-size: 8px !important;
      margin: 0 auto;
    }
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
      padding-left: 2rem;
    }
    &-bungkus {
      margin-bottom: 2rem !important;
    }
    &-btn {
      margin-bottom: 2rem !important;
    }
  }
}
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
      padding-left: 2rem;
    }
    &-bungkus {
      margin-bottom: 2rem !important;
    }
    &-btn {
      margin-bottom: 2rem !important;
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .candidates__video {
    &-btn {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
  }
}
</style>
