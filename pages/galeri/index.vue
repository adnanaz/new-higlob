<template>
  <v-container>
    <section class="gallery">
      <div class="gallery__title text-center">
        <h1 class="gallery__title-h1">
          Selamat datang di Gallery <br />
          LPK HiGlob
        </h1>
      </div>
      <div class="gallery__tabs" style="margin-top: 50px; margin-bottom: 50px">
        <v-tabs centered>
          <v-tab
            href="#search"
            style="font-family: 'Poppins', sans-serif; font-weigh: bold"
          >
            Gallery
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
                    v-for="(item, index) in kolomkanan_img"
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

                  <!-- <v-col
                    class="pa-2"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-img
                      style="width: 100%"
                      :src="require('@/assets/images/gallery3.png')"
                    ></v-img>
                  </v-col>
                  <v-col
                    class="pa-2"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-img
                      style="width: 100%"
                      :src="require('@/assets/images/gallery4.png')"
                    ></v-img>
                  </v-col>

                  <v-col
                    class="pa-2"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-img
                      style="width: 100%"
                      :src="require('@/assets/images/gallery5.png')"
                    ></v-img>
                  </v-col>

                  <v-col
                    class="pa-2"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-img
                      style="width: 100%"
                      :src="require('@/assets/images/gallery6.png')"
                    ></v-img>
                  </v-col>
                  <v-col
                    class="pa-2"
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    xl="4"
                    style=""
                  >
                    <v-img
                      style="width: 100%"
                      :src="require('@/assets/images/gallery7.png')"
                    ></v-img>
                  </v-col> -->
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
        img_caption: 'Fasilitas Studio Belajar HiGlob',
      },
      {
        img_url: 'gallery3.png',
        img_caption: ' Proses kegiatan belajar mengajar di LPK Higlobal',
      },
      {
        img_url: 'gallery4.png',
        img_caption: 'Proses kegiatan pembelajaran di kelas',
      },
      {
        img_url: 'gallery5.png',
        img_caption: 'Proses Kegiatan diskusi dengan para senpai',
      },
      {
        img_url: 'gallery6.png',
        img_caption: 'Pelajar HiGlob dengan umur termuda',
      },
      {
        img_url: 'gallery7.png',
        img_caption: 'Fasilitas Kursi dari HiGlob',
      },
    ],

    kolombawah_img: [
      {
        img_url: 'gallery8.png',
        img_caption: 'Proses Kegiatan Ujian Bersama di LPK Higlob',
      },
      {
        img_url: 'gallery9.png',
        img_caption: 'Ruang Lomba Bahasa Jepang di LPK HiGlobal',
      },
      {
        img_url: 'gallery11.png',
        img_caption: 'Seminar Bersama LPK Se-Yogyakarta',
      },
      {
        img_url: 'gallery10.png',
        img_caption: 'Kegiatan Meeting bersama Pimpinan dan Tim IT',
      },
    ],
    // END GALLERY

    // DATA PENGHARGAAN
    kolomkananpenghargaan_img: [
      {
        img_url: 'gallery2.png',
        img_caption: 'Fasilitas Studio Belajar HiGlob',
      },
      {
        img_url: 'gallery3.png',
        img_caption: ' Proses kegiatan belajar mengajar di LPK Higlobal',
      },
      {
        img_url: 'gallery4.png',
        img_caption: 'Proses kegiatan pembelajaran di kelas',
      },
      {
        img_url: 'gallery5.png',
        img_caption: 'Proses Kegiatan diskusi dengan para senpai',
      },
      {
        img_url: 'gallery6.png',
        img_caption: 'Pelajar HiGlob dengan umur termuda',
      },
      {
        img_url: 'gallery7.png',
        img_caption: 'Fasilitas Kursi dari HiGlob',
      },
    ],

    kolombawahpenghargaan_img: [
      {
        img_url: 'gallery8.png',
        img_caption: 'Proses Kegiatan Ujian Bersama di LPK Higlob',
      },
      {
        img_url: 'gallery9.png',
        img_caption: 'Ruang Lomba Bahasa Jepang di LPK HiGlobal',
      },
      {
        img_url: 'gallery11.png',
        img_caption: 'Seminar Bersama LPK Se-Yogyakarta',
      },
      {
        img_url: 'gallery10.png',
        img_caption: 'Kegiatan Meeting bersama Pimpinan dan Tim IT',
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
          return 'padding:3rem'
      }
    },
  },

  methods: {
    responsive() {},
  },
}
</script>

<style lang="scss">
.gallery {
  margin-top: 5rem;
  &__title {
    &-h1 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 145%;
      /* or 46px */
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
