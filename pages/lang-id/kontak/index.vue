<template>
  <div>
    <v-container class="container-kontak">
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
      <section class="kontak" ref="awal">
        <div>
          <v-row class="kontak__row">
            <v-col
              class="order-2 order-sm-2 order-md-1 kontak__col-1"
              cols="12"
              xs="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
              :style="banner_kontak"
            >
              <v-img
                :src="require('@/assets/images/kontak-1.png')"
                style="width: 100%"
              ></v-img>
            </v-col>
            <v-col
              class="order-1 order-sm-1 order-md-1 kontak__col-2"
              cols="12"
              xs="12"
              sm="12"
              md="7"
              lg="7"
              xl="7"
              style="margin-top: 3rem"
            >
              <div class="kontak__title">
                <p class="kontak__title-p1">Kontak Kami</p>
                <h1 class="kontak__title-h1" :style="h1_banner">
                  Hallo, Semoga harimu <br />menyenangkan hari ini!
                </h1>
                <p class="kontak__title-p" :style="p_banner">
                  Apabila anda memiliki pertanyaan seputar LPK higlob anda dapat
                  menghubungi kami melalui contact di bawah ini.
                </p>
              </div>
            </v-col>
          </v-row>
        </div>

        <div>
          <v-row style="margin-top: 2rem">
            <v-col
              class="order-sm-1 order-md-1"
              cols="12"
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style="padding: 1rem 0.5rem"
            >
              <ul style="list-style-type: none">
                <li class="judul__kontak" style="margin-top: 10px">
                  <h4 class="judul__kontak-h4">Alamat Kami</h4>
                  <p class="judul__kontak-p">
                    Jalan turi km 3,7 perum pondok idaman no A2 kadisobo,
                    Kadisobo I / Pepen, Trimulyo, Kec. Sleman, Kabupaten Sleman,
                    Daerah Istimewa Yogyakarta 55513
                  </p>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/BShNbUVNzHq4qaG46"
                    style="font-family: 'Poppins', sans-serif"
                    >Buka Map -></a
                  >
                </li>
                <li style="margin-top: 2rem">
                  <h4 class="judul__kontak-h4">Email Kami</h4>
                  <p class="judul__kontak-p">Higlob1@gmail.com</p>
                </li>

                <li style="margin-top: 10px">
                  <h4 class="judul__kontak-h4">Telepon</h4>
                  <p class="judul__kontak-p">+62 857 1314 9249</p>
                </li>
                <li style="margin-top: 10px">
                  <h4 class="judul__kontak-h4">Jam Kerja</h4>
                  <p class="judul__kontak-p">
                    Senin – Jumat : 9.00 – 17.00 (Waktu Indonesia Barat)
                  </p>
                </li>
              </ul>
            </v-col>

            <v-col
              class="order-sm-2 order-md-2"
              cols="12"
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <v-card class="d-none" elevation="1" style="padding: 1rem 1rem">
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          style="font-family: 'Poppins', sans-serif"
                          v-model="firstname"
                          :rules="nameRules"
                          :counter="10"
                          label="Nama Depan"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          style="font-family: 'Poppins', sans-serif"
                          v-model="lastname"
                          :rules="nameRules"
                          :counter="10"
                          label="Nama Belakang"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          style="font-family: 'Poppins', sans-serif"
                          v-model="nomorwa"
                          :rules="nomorwaRules"
                          label="Nomor Whatsapp"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          style="font-family: 'Poppins', sans-serif"
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-textarea
                          outlined
                          color="teal"
                          style="font-family: 'Poppins', sans-serif"
                        >
                          <template v-slot:label>
                            <div>
                              Masukkan Pertanyaan <small>(Wajib Di isi)</small>
                            </div>
                          </template>
                        </v-textarea>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col class="d-flex justify-end" cols="12">
                        <v-btn
                          class="btn-kirimpesan"
                          style="font-family: 'Poppins', sans-serif"
                          align-end
                          large
                          color="#FF9900"
                          elevation="0"
                          ><span
                            class="white--text text-capitalize"
                            style="font-weight: 400"
                            >Kirim Pesan</span
                          ></v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <br />
        <br />
        <br />
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Higlob - Kontak',
  },
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name tidak boleh kosong',
      (v) => v.length <= 10 || 'Minimal 10 karakter',
    ],
    nomorwa: '',
    nomorwaRules: [
      (v) => !!v || 'E-mail tidak boleh kosong',
      (v) => v.length <= 12 || 'Nomor wa tidak valid',
    ],

    email: '',
    emailRules: [
      (v) => !!v || 'E-mail tidak boleh kosong',
      (v) => /.+@.+/.test(v) || 'E-mail must tidak valid',
    ],

    // const defaultForm = Object.freeze({
    //  bio:'',
    // }),
  }),

  computed: {
    banner_kontak() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'padding:2rem;margin-top:-1.5rem;'
        case 'sm':
          return 'padding:4rem'
        case 'md':
          return 'margin-top:3rem;padding:none'
        case 'lg':
          return 'padding:3rem'
        case 'xl':
          return 'max-width: 42rem;margin: 0 auto;'
      }
    },

    h1_banner() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:26px;line-height:40px'
        case 'sm':
          return 'font-size:45px;line-height:85px'
        case 'md':
          return 'font-size:36px;line-height:54px;'
        case 'lg':
          return 'font-size:47px;line-height:74px'
        case 'xl':
          return ''
      }
    },

    p_banner() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:14px;line-height:210%'
        case 'sm':
          return 'font-size:23px;line-height:210%'
        case 'md':
          return 'font-size:19px;line-height:220%'
        case 'lg':
          return ';font-size:16px;line-height:200%;margin-top:1rem'
        case 'xl':
          return ''
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
.btn-munggah {
  position: fixed;
  bottom: 0;
  right: 20px;
  top: 550px;
  z-index: 3000;
}
.judul__kontak {
  &-h4 {
    color: #868686;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  &-p {
    color: #171717;
    font-family: 'Poppins', sans-serif;
    line-height: 2rem;
  }
}
.kontak {
  padding-top: 3rem;
  &__title {
    padding-left: 1rem;
    &-p1 {
      color: #3e00ff;
      font-family: 'Poppins', sans-serif;
    }
    &-h1 {
      font-weight: 600;
      font-size: 43px;
      line-height: 58px;
      font-family: 'Poppins', sans-serif;
    }
    &-p {
      margin-top: 1.2rem;
      font-weight: normal;
      font-size: 16px;
      line-height: 180%;
      color: #868686;
      font-family: 'Poppins', sans-serif;
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 300px) {
}
@media screen and (min-width: 300px) and (max-width: 600px) {
  .Kontak {
    &__row {
      margin-left: -2rem;
    }
    &__col {
      &-1 {
        padding: 2rem;
        padding-left: 1.5rem;
        margin-top: -1.5rem;
      }
    }
    &__title {
      padding-left: 1.3rem !important;
      &-h1 {
        font-size: 25px !important;
        line-height: 40px;
      }
      &-p {
        font-size: 14px;
        line-height: 210%;
      }
    }
  }
  .btn-kirimpesan {
    margin-top: -2rem;
  }

  .judul__kontak {
    margin-top: 35px;
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
}
@media screen and (min-width: 960px) and (max-width: 1264px) {
}
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .kontak {
    margin-top: 3rem;
    &__col {
      &-1 {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
    }

    &__title {
      padding-top: 1rem;
      &-h1 {
        font-size: 48px;
        line-height: 65px;
      }
      &-p {
        font-size: 17px;
        line-height: 200%;
        margin-top: 1rem;
      }
    }
  }
  .judul__kontak {
    &-h4 {
    }
  }
}
@media screen and (min-width: 1904px) {
  .kontak {
    margin-top: 8rem;
  }
  .container-kontak {
    padding: 0 10rem 0 10rem;
  }
}
</style>
