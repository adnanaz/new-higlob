<template>
  <v-container>
    <section class="gallery" ref="awal">
      <div class="gallery__title text-center">
        <h1 class="gallery__title-h1">
          Selamat datang di Galeri Foto <br />
          LPK Higlob
        </h1>
        <p class="gallery__title-p">
          Dokumentasi proses kegiatan belajar mengajar dan penghargaan yang di
          dapat lpk higlob
        </p>
      </div>
      <div class="gallery__tabs" style="margin-top: 50px; margin-bottom: 50px">
        <v-tabs centered>
          <v-tab
            href="#search"
            style="font-family: 'Poppins', sans-serif; font-weigh: bold"
          >
            Foto LPK
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
                              Proses kegiatan belajar mengajar <br />
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
                        <v-card class="card-angeltenanisi">
                          <v-img
                            class="card-angeltenanimg"
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
                                <h4 style="font-family: 'poppins'">
                                  {{ item.img_caption }}
                                </h4>
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
            <v-row class="row-kolombawah" justify="center">
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
                            <h4 style="font-family: 'poppins'">
                              {{ item.img_caption }}
                            </h4>
                          </div>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>

          <!-- <v-tab
            href="#penghargaan"
            style="font-family: 'Poppins', sans-serif; font-weight: bold"
          >
            Penghargaan
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
                              Proses kegiatan belajar mengajar <br />
                              di LPK Higlobal
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
          </v-tab-item> -->
        </v-tabs>
      </div>
    </section>
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
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Higlob - Galeri',
  },
  data: () => ({
    overlay: false,
    zIndex: 1,
    //DATA BAGIAN GALLERY
    kolomkanan_img: [
      {
        img_url: 'gallery2.png',
        img_caption: 'Kegiatan Wawancara Ujian ',
      },
      {
        img_url: 'gallery3.png',
        img_caption: ' Kegiatan diskusi dengan atasan Hi Global',
      },
      {
        img_url: 'gallery4.png',
        img_caption: 'Foto bersama murid LPK Higlob',
      },
      {
        img_url: 'gallery5.png',
        img_caption: 'Proses Belajar Mengajar dengan para senpai',
      },
      {
        img_url: 'gallery6.png',
        img_caption: 'Praktek Kerja Menjadi Koki',
      },
      {
        img_url: 'gallery7.png',
        img_caption: 'Foto murid sebelum diberangkatkan ke jepang',
      },
    ],

    kolombawah_img: [
      {
        img_url: 'gallery8.png',
        img_caption: 'Foto bersama dengan murid lain',
      },
      {
        img_url: 'gallery9.png',
        img_caption: 'Foto murid bersama pimpinan Higlobal',
      },
      {
        img_url: 'gallery10.png',
        img_caption: 'Belajar bersama Senpai',
      },
      {
        img_url: 'gallery11.png',
        img_caption: 'Kondisi Ruangan di LPK Higlob',
      },
    ],
    // END GALLERY

    // DATA PENGHARGAAN
    // kolomkananpenghargaan_img: [
    //   {
    //     img_url: 'gallery2.png',
    //     img_caption: 'Fasilitas Studio Belajar HiGlob',
    //   },
    //   {
    //     img_url: 'gallery3.png',
    //     img_caption: ' Proses kegiatan belajar mengajar di LPK Higlobal',
    //   },
    //   {
    //     img_url: 'gallery4.png',
    //     img_caption: 'Proses kegiatan pembelajaran di kelas',
    //   },
    //   {
    //     img_url: 'gallery5.png',
    //     img_caption: 'Proses Kegiatan diskusi dengan para senpai',
    //   },
    //   {
    //     img_url: 'gallery6.png',
    //     img_caption: 'Pelajar HiGlob dengan umur termuda',
    //   },
    //   {
    //     img_url: 'gallery7.png',
    //     img_caption: 'Fasilitas Kursi dari HiGlob',
    //   },
    // ],

    // kolombawahpenghargaan_img: [
    //   {
    //     img_url: 'gallery8.png',
    //     img_caption: 'Proses Kegiatan Ujian Bersama di LPK Higlob',
    //   },
    //   {
    //     img_url: 'gallery9.png',
    //     img_caption: 'Ruang Lomba Bahasa Jepang di LPK HiGlobal',
    //   },
    //   {
    //     img_url: 'gallery10.png',
    //     img_caption: 'Seminar Bersama LPK Se-Yogyakarta',
    //   },
    //   {
    //     img_url: 'gallery11.png',
    //     img_caption: 'Kegiatan Meeting bersama Pimpinan dan Tim IT',
    //   },
    // ],
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
.v-overlay__scrim {
  height: 100%;
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .h1atas {
    font-size: 24px;
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
        font-size: 19px !important;
        line-height: 145%;
        text-align: center;
      }
      &-p {
        margin-top: 2rem;
        line-height: 30px;
      }
    }
    &__tabs {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .gallery {
    &__title {
      &-p {
        padding: 20px 90px 0 90px;
        font-size: 16px;
      }
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .gallery {
    &__title {
      &-p {
        font-size: 16px;
        margin-top: 2rem;
      }
    }
  }
}
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .gallery__title {
    &-p {
      margin-top: 2rem;
    }
  }
}
@media screen and (min-width: 1904px) {
  .v-window__container {
    padding: 14px 25rem 25rem 25rem;
  }
  .row-kolombawah {
    margin-top: -3rem !important;
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
    .card-angeltenan {
      margin-top: 0rem;
      margin-bottom: 3rem;
    }
    .card-angeltenanimg {
      height: 9rem;
    }
  }
}
</style>
