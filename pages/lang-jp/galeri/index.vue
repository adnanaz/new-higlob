<template>
  <v-container>
    <section class="gallery">
      <div class="gallery__title text-center">
        <h1 class="gallery__title-h1">
          フォトギャラリーへようこそ <br />
          LPK Higlob
        </h1>
        <p
          class="gallery__title-p"
          :style="
            $vuetify.breakpoint.mdAndUp
              ? 'padding: 0 19rem; margin-top: 1rem'
              : ''
          "
        >
          LPK Higlobが受賞した教育および学習活動と賞のプロセスの文書化
        </p>
      </div>
      <div class="gallery__tabs" style="margin-top: 50px; margin-bottom: 50px">
        <v-tabs centered>
          <v-tab
            href="#search"
            style="font-family: 'Poppins', sans-serif; font-weigh: bold"
          >
            LPKの写真
          </v-tab>

          <v-tab-item :style="gallery_padding" value="search">
            <!-- :style="$vuetify.breakpoint.xs ? 'padding: 2rem' : 'padding: 5rem' " -->
            <v-row no-gutters>
              <v-col
                class="pa-2"
                cols="12"
                xs="12"
                sm="12"
                md="5"
                lg="5"
                xl="4"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="card-angeltenan">
                      <v-img
                        :style="
                          $vuetify.breakpoint.md
                            ? 'max-height: 16rem'
                            : 'max-height: 24rem'
                        "
                        :src="require('@/assets/images/gallery1.png')"
                      ></v-img>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-end justify-start"
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h3 style="font-family: 'poppins'">
                              LPKヒグロブでの教育と学習活動のプロセス
                            </h3>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>

              <v-col
                class=""
                cols="12"
                xs="12"
                sm="12"
                md="7"
                lg="7"
                xl="8"
                style="background: "
              >
                <v-row no-gutters>
                  <v-col
                    v-for="(item, index) in kolomkanan_img"
                    :key="index"
                    class="pa-2 gambarkolomisi"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card class="card-angetenanisi">
                          <v-img
                            style="width: 400px"
                            :src="require(`@/assets/images/${item.img_url}`)"
                          ></v-img>
                          <v-fade-transition>
                            <v-overlay
                              class="d-flex align-end justify-start"
                              v-if="hover"
                              absolute
                              color="#036358"
                            >
                              <div class="pa-3">
                                <h3 style="font-family: 'poppins'">
                                  {{ item.img_caption }}
                                </h3>
                              </div>
                            </v-overlay>
                          </v-fade-transition>
                        </v-card>
                      </template>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                v-for="(item, index) in kolombawah_img"
                :key="index"
                xs="12"
                sm="6"
                md="3"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card>
                      <v-img
                        style="width: 400px"
                        :src="require(`@/assets/images/${item.img_url}`)"
                      ></v-img>
                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-end justify-start"
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h3 style="font-family: 'poppins'">
                              {{ item.img_caption }}
                            </h3>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab
            href="#penghargaan"
            style="font-family: 'Poppins', sans-serif; font-weight: bold"
          >
            賞
          </v-tab>
          <v-tab-item value="penghargaan" :style="gallery_padding">
            <v-row no-gutters>
              <v-col
                class="pa-2"
                cols="12"
                xs="12"
                sm="12"
                md="5"
                lg="5"
                xl="4"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card>
                      <v-img
                        :style="
                          $vuetify.breakpoint.md
                            ? 'max-height: 16rem'
                            : 'max-height: 24rem'
                        "
                        :src="require('@/assets/images/gallery1.png')"
                      ></v-img>

                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-end justify-start"
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h3 style="font-family: 'poppins'">
                              LPKHiglobalでの教育および学習活動のプロセス
                            </h3>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>

              <v-col
                class="pa-2"
                cols="12"
                xs="12"
                sm="12"
                md="7"
                lg="7"
                xl="8"
                style="background: "
              >
                <v-row no-gutters>
                  <v-col
                    v-for="(item, index) in kolomkananpenghargaan_img"
                    :key="index"
                    class="pa-2"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card>
                          <v-img
                            style="width: 400px"
                            :src="require(`@/assets/images/${item.img_url}`)"
                          ></v-img>
                          <v-fade-transition>
                            <v-overlay
                              class="d-flex align-end justify-start"
                              v-if="hover"
                              absolute
                              color="#036358"
                            >
                              <div class="pa-3">
                                <h3 style="font-family: 'poppins'">
                                  {{ item.img_caption }}
                                </h3>
                              </div>
                            </v-overlay>
                          </v-fade-transition>
                        </v-card>
                      </template>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                v-for="(item, index) in kolombawahpenghargaan_img"
                :key="index"
                xs="12"
                sm="6"
                md="3"
                lg="3"
                xl="3"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card>
                      <v-img
                        style="width: 400px"
                        :src="require(`@/assets/images/${item.img_url}`)"
                      ></v-img>
                      <v-fade-transition>
                        <v-overlay
                          class="d-flex align-end justify-start"
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <div class="pa-3">
                            <h3 style="font-family: 'poppins'">
                              {{ item.img_caption }}
                            </h3>
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
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
    zIndex: 1,
    //DATA BAGIAN GALLERY
    kolomkanan_img: [
      {
        img_url: 'gallery2.png',
        img_caption: 'HiGlobスタディスタジオ施設',
      },
      {
        img_url: 'gallery3.png',
        img_caption: ' LPKHiglobalでの教育および学習活動のプロセス',
      },
      {
        img_url: 'gallery4.png',
        img_caption: 'クラスでの活動を学ぶプロセス',
      },
      {
        img_url: 'gallery5.png',
        img_caption: '先輩とのプロセス活動の議論',
      },
      {
        img_url: 'gallery6.png',
        img_caption: '最年少のHiGlob学生',
      },
      {
        img_url: 'gallery7.png',
        img_caption: 'HiGlobの椅子設備',
      },
    ],

    kolombawah_img: [
      {
        img_url: 'gallery8.png',
        img_caption: 'LPKヒグロブでの合同試験活動のプロセス',
      },
      {
        img_url: 'gallery9.png',
        img_caption: 'LPKHiGlobalの日本語コンペティションルーム',
      },
      {
        img_url: 'gallery11.png',
        img_caption: 'ジョグジャカルタ全域でのLPKによるセミナー',
      },
      {
        img_url: 'gallery10.png',
        img_caption: 'リーダーやITチームとのミーティング活動',
      },
    ],
    // END GALLERY

    // DATA PENGHARGAAN
    kolomkananpenghargaan_img: [
      {
        img_url: 'gallery2.png',
        img_caption: 'HiGlobスタディスタジオ施設',
      },
      {
        img_url: 'gallery3.png',
        img_caption: ' LPKHiglobalでの教育および学習活動のプロセス',
      },
      {
        img_url: 'gallery4.png',
        img_caption: 'クラスでの活動を学ぶプロセス',
      },
      {
        img_url: 'gallery5.png',
        img_caption: '先輩とのプロセス活動の議論',
      },
      {
        img_url: 'gallery6.png',
        img_caption: '最年少のHiGlob学生',
      },
      {
        img_url: 'gallery7.png',
        img_caption: 'HiGlobの椅子設備',
      },
    ],

    kolombawahpenghargaan_img: [
      {
        img_url: 'gallery8.png',
        img_caption: 'LPKヒグロブでの合同試験活動のプロセス',
      },
      {
        img_url: 'gallery9.png',
        img_caption: 'LPKHiGlobalの日本語コンペティションルーム',
      },
      {
        img_url: 'gallery11.png',
        img_caption: 'ジョグジャカルタ全域でのLPKによるセミナー',
      },
      {
        img_url: 'gallery10.png',
        img_caption: 'リーダーやITチームとのミーティング活動  ',
      },
    ],
    // END DATA PENGHARGAAN

    overlay1: false,
    zIndex: 1,
  }),

  computed: {
    gallery_padding() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'padding:2rem'
        case 'sm':
          return 'padding:5rem'
        case 'md':
          return 'padding:4rem'
        case 'lg':
          return 'padding:3rem'
        case 'xl':
          return 'padding:0rem'
      }
    },
  },

  methods: {
    responsive() {},
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 300) and (max-width: 600px) {
  .h1atas {
    font-size: 24px;
  }
  h1.gallery__title-h1 {
    font-size: 24px !important;
  }
  .card-angeltenan {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .gambarkolomisi {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .gallery {
    margin-top: 5rem;
    &__title {
      &-h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px !important;
        line-height: 145%;
        text-align: center;
      }
      &-p {
        margin-top: 2rem;
      }
    }
    &__tabs {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media screen and (min-width: 1904px) {
  .card-angeltenan {
    max-width: 34rem;
  }
  .card-angetenanisi {
    width: 23vh;
  }
}
.gallery {
  margin-top: 8rem;
  &__title {
    &-h1 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 145%;
      text-align: center;
    }
  }
  &__tabs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
