<template>
  <v-container>
    <section class="section1-berita">
      <!-- Start Banner 1 -->
      <div class="text-center justify-center" style="margin-top: 5rem">
        <h1 class="h1-bannerawal">Ada Berita Apa di LPK Higlob</h1>
        <p class="p-bannerawal">
          Baca berita terkait magang kerja, bekerja luar negeri hanya di LPK
          Higlob
        </p>
        <v-row class="d-flex d-inline-flex">
          <v-col cols="10" style="">
            <v-text-field
              class="kolom-pencarian"
              label="Cari Berita Lainnya..."
              outlined
              style="width: 16rem; border-radius: 45px"
            ></v-text-field>
          </v-col>
          <v-col cols="2" style="padding: 0; margin-top: 0.5rem">
            <v-btn class="" fab dark large color="none">
              <img
                class="search-button"
                :src="require('@/assets/images/search-button.png')"
                alt=""
                style="width: 59px"
              />
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <!-- End Banner 1 -->
    </section>

    <!-- Start Section 2 -->

    <section class="mt-7">
      <v-row>
        <v-col
          class="order-2 order-sm-2 order-md-1 d-flex justify-center"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
        >
          <img
            id="angel-berita"
            class="banner-berita text-center"
            :src="require('@/assets/images/banner-berita1.png')"
            :style="bannerberita_gambar"
            alt=""
          />
        </v-col>
        <v-col
          class="order-1 order-sm-1 order-md-2 padding-section2"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
        >
          <v-chip
            style="background-color: #eeefff; color: #3e00ff"
            label
            class="ma-2"
          >
            BeritaTerbaru
          </v-chip>
          <h1 class="berita-h1">
            Ketahui Syarat Dan Gaji Caregiver Di Jepang Yang Tinggi
          </h1>
          <p class="berita-p" style="color: #868686">
            Banyak orang di dunia ini yang menginginkan untuk bisa meniti karir
            sampai ke Luar Negeri. Pasti nya Negara yang akan banyak dipilih
            adalah Jepang. Mengapa demikian? Ini dikarenakan Jepang adalah
            Negara yang memberikan tunjangan dan gaji yang tinggi, ditambah
            disana perkembangan teknologi untuk setiap..
          </p>

          <p class="berita-p">
            lanjut baca
            <img
              :src="require('@/assets/images/arrow-right.svg')"
              alt=""
              style=""
            />
          </p>
        </v-col>
      </v-row>
    </section>
    <!-- End Section 2 -->

    <!-- Section 3 -->
    <section class="section3">
      <h4 class="mt-6 mb-6">Baca Juga lainnya</h4>
      <v-row class="d-flex justify-center">
        <v-col
          class=""
          v-for="(item, index) in cardberita_gambar"
          :key="index"
          cols="12"
          xs="12"
          sm="5"
          md="3"
          lg="3"
          xl="3"
        >
          <ul class="card_berita" style="list-style-type: none">
            <li>
              <img
                id="angel-card"
                class="card-gambar mx-auto"
                :src="require(`@/assets/images/${item.berita_url}`)"
                :style="card_berita_gambar"
                alt=""
                style=""
              />
            </li>
            <li>
              <h3 class="h3-section3">{{ item.berita_judul }}</h3>
            </li>
            <li>
              <p class="p-section3">{{ item.berita_isi }}</p>
            </li>
          </ul>
        </v-col>
      </v-row>

      <div class="text-center mt-5 mb-5">
        <v-pagination :length="4" circle></v-pagination>
      </div>

      <h4>Label</h4>
      <ul class="mb-5 mt-5" style="list-style-type: none">
        <li
          class="d-flex d-inline-flex"
          v-for="(item, index) in label_isi"
          :key="index"
        >
          <v-btn
            style="border-radius: 25px"
            class="ma-1"
            outlined
            color="indigo"
          >
            {{ item.button_label }}
          </v-btn>
        </li>
      </ul>
    </section>
    <!-- end section 3 -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },

  data: () => ({
    panel: [0, 1],
    disabled: false,
    readonly: false,

    label_isi: [
      {
        button_label: '#Higlob',
      },
      {
        button_label: '#GoesToJapan',
      },
      {
        button_label: '#MagangKerja',
      },
      {
        button_label: '#Pelatihan',
      },
      {
        button_label: '#MagangLuarNegeri',
      },
      {
        button_label: '#Cargiver',
      },
    ],

    cardberita_gambar: [
      {
        berita_url: 'berita1.png',
        berita_judul: 'Intip Kerja Di Jepang',
        berita_isi:
          'Konnichiwa! Sebelumnya kita telah membahas untuk peluang masuk kerja.',
      },

      {
        berita_url: 'berita2.png',
        berita_judul: 'Program Enginerring Ke Jepang',
        berita_isi:
          'Program kerja Engineering ke jepang merupakan program yang berbeda dengan',
      },

      {
        berita_url: 'berita3.png',
        berita_judul: 'Prosedur Program Magang Kerja Cargiver ke Jepang',
        berita_isi:
          'Bagi kamu yang ingin mendaftarkan diri dan mengikuti Program Magang Kerja Ke Jepang',
      },

      {
        berita_url: 'berita4.png',
        berita_judul:
          'Peluang Kerja Lulusan Avokasi D3 Keperawatan ke Luar Negeri',
        berita_isi:
          'Menurut Badan Pusat Statistika (BPS) menyatakan bahwa jumlah pengangguran..',
      },

      {
        berita_url: 'berita5.png',
        berita_judul: 'Toroku Shien Kikan',
        berita_isi:
          'Parante Higlob adalah TOROKU SHIEN KIKAN(TSK) atau Registered Support Organization',
      },

      {
        berita_url: 'berita6.png',
        berita_judul: 'Program Kerja di Jepang Bidang Pertanian,dan Kontruksi',
        berita_isi:
          'Program Kerja Enggineering ke Jepang merupakan program yang berbeda dengan.',
      },

      {
        berita_url: 'berita7.png',
        berita_judul: 'We Are Hiring! Program Magang Cargiver ke Jepang ',
        berita_isi:
          'Program Kerja Enggineering ke Jepang merupakan program yang berbeda dengan.',
      },

      {
        berita_url: 'berita8.png',
        berita_judul: 'Peluang Working Holiday Untuk 1000 Orang (2019)',
        berita_isi:
          'Visa working holiday subclass 462 Australia setiap tahunnya dibuka penerimaan bagi..',
      },
    ],
  }),

  computed: {
    bannerberita_gambar() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return ''
        case 'sm':
          return ''
        case 'md':
          return 'max-width:27rem'
        case 'lg':
          return 'max-width:37rem'
        case 'xl':
          return 'max-width:37rem'
      }
    },
    card_berita_gambar() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'max-height:240px;text-align:center'
        case 'sm':
          return 'max-height:168px'
        case 'md':
          return 'max-width:13rem'
        case 'lg':
          return 'max-width:17rem!important'
        case 'xl':
          return 'max-width:17rem!important'
      }
    },

    padding_section2() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'padding:2rem'
        case 'sm':
          return ''
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },
  },
}
</script>

<style lang="scss">
//
.banner-berita {
  max-width: 27rem;
}
img.card-gambar {
  max-width: 13rem;
}
h3.h3-section3 {
  font-size: 16px;
}
p.p-section3 {
  font-size: 14px;
}
@media screen and (min-width: 0px) and (max-width: 600px) {
  .section1-berita {
    padding: 1rem;
  }
  .h1-bannerawal {
    font-size: 21px;
    margin-bottom: 1rem;
  }
  .p-bannerawal {
    color: #868686;
    font-size: 14px;
    line-height: 22px;
  }

  .kolom-pencarian {
    width: 14rem;
  }

  .banner-berita {
    max-height: 200px;
    padding-left: 2.4rem;
    margin-bottom: 2rem;
  }

  .padding-section2 {
    padding: 2rem;
  }

  .search-button {
    width: 52px;
  }

  .berita-h1 {
    font-size: 18px;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  .berita-p {
    line-height: 30px;
    font-size: 14px;

    .section3-berita {
      padding: 20px;
    }

    .h3-section3 {
      font-size: 18px !important;
    }
    .p-section3 {
      line-height: 28px;
      width: 90%;
      font-size: 15px;
    }
    .section-3 {
      padding-left: 2rem !important;
    }
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .v-row {
    padding: 1rem;
  }
  .section1-berita {
    padding: 1rem;
  }
  .h1-bannerawal {
    font-size: 21px;
    margin-bottom: 1rem;
  }
  .p-bannerawal {
    color: #868686;
    font-size: 14px;
    line-height: 22px;
  }

  .kolom-pencarian {
    width: 14rem;
  }

  .banner-berita {
    max-height: 269spx;
    padding-left: 2.4rem;
    margin-bottom: 4rem;
  }

  .padding-section2 {
    padding: 2rem;
  }

  .search-button {
    width: 52px;
  }

  .berita-h1 {
    font-size: 18px;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  .berita-p {
    line-height: 30px;
    font-size: 14px;

    .section3 {
      h4 {
        margin-left: 2rem;
      }
    }
    .section3-berita {
      padding: 20px;
    }

    .h3-section3 {
      font-size: 18px !important;
    }
    .p-section3 {
      line-height: 28px;
      width: 90%;
      font-size: 15px;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1264px) {
  }
  @media screen and (min-width: 1264px) and (max-width: 1904px) {
  }
}

.v-btn--is-elevated.v-btn--fab {
  box-shadow: none;
}

.panel {
  margin-bottom: 1.5rem;
}
.panel-p {
  font-size: smaller;
  font-weight: 300;
}
.heading-font {
  font-family: 'Poppins', sans-serif;
}
.heading-font-p {
  font-family: 'Poppins', sans-serif;
  color: #868686;
}

.card_berita {
  list-style-type: none;
}
.card_berita p {
  color: #595959;
}

.theme--light.v-pagination .v-pagination__item {
  color: #3e00ff;
}
</style>
