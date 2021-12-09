<template>
  <v-container>
    <section class="section__faq" ref="awal">
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
      <!-- Bagian Heading -->
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 class="section__faq-h1 text-center">
        Pertanyaan yang sering diajukan
      </h1>
      <br />
      <p class="section__faq-p text-center">
        Beberapa pertanyaan yang sering ditanyakan <br />
        kepada kami
      </p>
      <br />
      <br />
      <!-- End Heading -->

      <!-- Bagian FAQ -->
      <div class="d-flex justify-center section__faq-divbawah">
        <v-expansion-panels
          class="section__faq-expansionpanels"
          accordion
          v-model="panel"
          :disabled="disabled"
        >
          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >Apakah pelajaran di LPK Higlob diajarkan dalam bahasa Jepang atau
              bahasa lain?
            </v-expansion-panel-header>
            <v-expansion-panel-content class="section__faq-panelp">
              Pelajaran di LPK Higlob akan diajarkan menggunakan bahasa jepang,
              agar siswa siswi dapat lebih fasih dalam menggunakan ketika
              melakukan magang/kerja ke jepang
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >Apakah Semua sensei di LPK Higlob adalah orang jepang
              ?</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              Tidak semua, sensei di LPK Higlob semuanya telah profesional dalam
              belajar mengajar dan telah memiliki sertifikat pengajar
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >Bagaimana cara mendaftar di LPK Higlob?</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              Pendaftaran dapat menghubungi nomor whatsapp sebagai berikut +62
              857 1314 9249
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >Berapa jam waktu belajar di LPK higlob ? Dari jam berapa sampai
              jam berapa ?</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              Satu hari sekolah 4 Jam. Siswa dibagi menjadi salah satu dari 2
              kelas: Kelas Pagi dan Kelas Siang. Kelas Pagi di mulai jam 9:00 -
              12:50. Kelas Siang dimulai jam 13:10 - 16:50
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="section__faq-panel">
            <v-expansion-panel-header
              class="section__faq-panelheader"
              style="font-weight: 500"
              >Apakah LPK Higlob dapat menjamin pasti berangkat ke jepang
              ?</v-expansion-panel-header
            >
            <v-expansion-panel-content class="section__faq-panelp">
              Jika calon Pemagang telah lulus dapat telah menyelesaikan
              persyaratan yang tertera pasti akan berangkat ke Jepang. Namun,
              pihak LPK Higlob juga dapat membatalkan, jika calon Pemagang
              dinilai tidak bisa mengikuti Program Pendidikan, memiliki masalah
              kesehatan atau masalah sikap mental yang dianggap tidak bisa
              beradaptasi hidup di Jepang kemudian harinya.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!-- END FAQ -->

      <!-- Bagian Heading akhir -->

      <h1 class="section__faq-h1akhir text-center">Masih ada pertanyaan?</h1>

      <p class="section__faq-pakhir text-center">
        Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda di FAQ
        kami, Anda selalu dapat menghubungi kami. kami akan menjawab Anda
        segera!
      </p>
      <br />
      <br />
      <br />
      <br />
      <!-- End Heading akhir -->
    </section>
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Higlob - FAQ',
  },
  data: () => ({
    panel: [0, 1],
    disabled: false,
    readonly: false,
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
.v-expansion-panel--active > .v-expansion-panel-header {
  color: #3e00ff;
}

.section__faq {
  &-expansionpanels {
    width: 90%;
  }

  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #252525;
  }
  &-p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    text-align: center;

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-panel {
    margin-bottom: 2rem;
  }
  &-panelheader {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    text-align: center;
  }
  &-panelp {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-h1akhir {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 160%;
    /* identical to box height, or 58px */
    margin-top: 2rem;
    color: #000000;
  }
  &-pakhir {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    text-align: center;

    /* Colour : Font Paragraf */
    padding: 0 12rem 0 12rem;
    margin-top: 1rem;
    color: #868686;
  }
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .section__faq {
    padding: 1rem;
    &-expansionpanels {
      width: 85% !important;
    }
    &-h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height */

      /* Colour : Font Title */

      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 172.5%;
      /* or 28px */

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
    &-panelp {
      font-size: 12px;
      line-height: 176.5%;
      /* or 21px */

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 170%;
      /* or 24px */
      padding: 0;

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .section__faq {
    padding: 4rem;
    &-expansionpanels {
      width: 80% !important;
    }
    &-h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height */

      /* Colour : Font Title */

      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 172.5%;
      /* or 28px */

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
    &-panelp {
      font-size: 16px;
      line-height: 176.5%;
      /* or 21px */

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      /* or 24px */
      padding: 0;

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
  }
}
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .section__faq {
    padding: 4rem;
    &-expansionpanels {
      width: 80% !important;
    }
    &-h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height */

      /* Colour : Font Title */

      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 172.5%;
      /* or 28px */

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
    &-panelp {
      font-size: 16px;
      line-height: 176.5%;
      /* or 21px */

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      /* or 24px */
      padding: 0 2rem;

      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
  }
}
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .section__faq {
    padding: 6rem;
    &-expansionpanel {
      width: 87% !important;
    }

    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 54px;
      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 31px;
      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      text-align: center;
    }
    &-panelp {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */
      margin-top: 2rem;
      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      text-align: center;

      /* Colour : Font Paragraf */
      padding: 0px 7rem 0 7rem;
      margin-top: 1rem;
      color: #868686;
    }
  }
}
@media screen and (min-width: 1904px) {
  .section__faq {
    padding: 6rem;
    &-expansionpanels {
      width: 55% !important;
    }

    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 54px;
      color: #252525;
    }
    &-p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 31px;
      text-align: center;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-panel {
      margin-bottom: 2rem;
    }
    &-panelheader {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      text-align: center;
    }
    &-panelp {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;

      /* Colour : Font Paragraf */

      color: #868686;
    }
    &-h1akhir {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */
      margin-top: 2rem;
      color: #000000;
    }
    &-pakhir {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      text-align: center;

      /* Colour : Font Paragraf */
      padding: 0px 25rem 0 26rem;
      margin-top: 1rem;
      color: #868686;
    }
  }
}

// .panel
//   margin-bottom: 1.5rem;
//
// .panel-p
//   font-size: smaller;
//   font-weight: 300;
//
// .heading-font
//   font-family: 'Poppins', sans-serif;
//
// .heading-font-p
//   font-family: 'Poppins', sans-serif;
//   color: #868686;
//
</style>
