<template>
  <div>
    <v-container>
      <section class="jobseeker__awal">
        <v-row class="jobseeker__awal-row">
          <v-col
            class="jobseeker__awal-colkiri"
            cols="12"
            xs="12"
            sm="6"
            md="6"
            lg="6"
            xl="6"
          >
            <h1 class="jobseeker__awal-h1">
              “ Temukan Pekerjaan yang sesuai passionmu sekarang. “
            </h1>
            <p class="jobseeker__awal-p">
              LPK Higlob memberikan solusi tenaga kerja inovatif yang cukup
              gesit untuk memenuhi kebutuhan bakat yang berubah dengan cepat di
              Era Manusia. Apa pun bentuk solusi ini – Perekrutan Permanen,
              Pencarian Eksekutif, Pengalihdayaan, Kepegawaian Sementara,
              Pengalihdayaan Proses Perekrutan atau Konsultasi Sumber Daya
              Manusia – kami menyediakan akses cepat ke talenta yang sangat
              berkualitas dan pendekatan yang lebih baik untuk mencocokkan
              kandidat yang tepat dan bekerja sama dengan posisi yang tepat
              menghasilkan hasil bisnis yang lebih baik.
            </p>
          </v-col>
          <v-col
            class="jobseeker__awal-colkanan"
            cols="12"
            xs="12"
            sm="6"
            md="6"
            lg="6"
            xl="6"
          >
            <v-img
              class="jobseeker__awal-img"
              :src="require('@/assets/images/jobseeker-awal.png')"
            >
            </v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- ============================================================================================== -->
    <!-- SECTION JOBSeeker Banner -->
    <v-container>
      <section class="jobseeker__banner">
        <v-row class="jobseeker__banner-row">
          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker1.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>ELECTRICAL ENGGINERING</span> <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker2.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>CONTRUCTION ENGGINERING</span> <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker3.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>FARMER</span> <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker4.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>CAREGIVER</span> <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker5.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span
                  >AUTOMOTIF <br />
                  TECHNICIAN
                </span>
                <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker6.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>HOUSEMAID</span> <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker7.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>NANIES</span> <br />
                <br />
                <span>Location : Japan</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>

          <v-col cols="3">
            <div class="jobseeker__banner-bungkus">
              <v-img :src="require('@/assets/images/jobseeker1.png')"> </v-img>
              <div class="jobseeker__banner-info">
                <span>ELECTRICAL ENGGINERING</span> <br />
                <br />
                <span>Location : Germany</span> <br />
                <span>Wages : 1500 USD</span>
                <span>Contract : 5 Year</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="jobseeker__banner-bungkusbtn text-center">
          <v-btn color="#FF9900" class="jobseeker__banner-btn white--text"
            >Lebih Banyak</v-btn
          >
        </div>
      </section>
    </v-container>
    <!-- END SECTION CANDIDATES -->
    <!-- ============================================================================================== -->
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
.jobseeker__banner {
  margin-top: 5rem;
  &-bungkus {
    width: 14rem;
  }
  &-info {
    background-color: #0a1325;
    color: white;
    position: relative;
    margin: -87px 0px 0px 0;
    left: 60px;
    grid-area: 2/1/3/2;
    justify-self: start;
    align-self: start;
    max-width: 13rem;
    padding: 17px 0px 30px 20px;
  }
  &-bungkusbtn {
    margin-top: 5rem;
  }
}

.jobseeker__awal {
  margin-top: 7rem;
  &-colkiri {
    margin-top: 2rem;
  }
  &-h1 {
    font-size: 37px;
    margin-bottom: 2rem;
  }
  &-p {
    line-height: 1.5rem;
  }
}
@media screen and (min-width: 0px) and (max-width: 300px) {
  .jobseeker__awal {
    margin-top: 4rem;
    &-row {
      padding: 1rem;
    }
    &-colkiri {
      margin-top: 2rem;
      padding: 0.3rem;
    }
    &-colkanan {
      padding: 0 !important;

      margin-left: 1rem;
    }
    &-img {
      width: 25rem;
    }
    &-h1 {
      font-size: 16px;
      margin-bottom: 2rem;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 12px;
    }
  }

  .jobseeker__banner {
    margin-top: 5rem;
    &-bungkus {
      width: 14rem;
    }
    &-info {
      background-color: #0a1325;
      color: white;
      position: relative;
      margin: -87px 0px 0px 0;
      left: 60px;
      grid-area: 2/1/3/2;
      justify-self: start;
      align-self: start;
      max-width: 13rem;
      padding: 17px 0px 30px 20px;
    }
    &-bungkusbtn {
      margin-top: 5rem;
    }
    &-row {
      padding: 0.3rem;
    }
    &-btn {
      margin-bottom: 2rem;
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .jobseeker__awal {
    margin-top: 4rem;
    &-row {
      padding: 1rem;
    }
    &-colkiri {
      margin-top: 2rem;
    }
    &-colkanan {
      padding: 0 !important;

      margin-left: 2rem;
    }
    &-img {
      width: 25rem;
    }
    &-h1 {
      font-size: 22px !important;
      margin-bottom: 2rem;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 14px;
    }
  }

  .jobseeker__banner {
    margin-top: 5rem;
    &-bungkus {
      width: 14rem;
    }
    &-info {
      background-color: #0a1325;
      color: white;
      position: relative;
      margin: -87px 0px 0px 0;
      left: 60px;
      grid-area: 2/1/3/2;
      justify-self: start;
      align-self: start;
      max-width: 13rem;
      padding: 17px 0px 30px 20px;
    }
    &-bungkusbtn {
      margin-top: 5rem;
    }
    &-row {
      margin-left: 2rem;
    }
    &-btn {
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .jobseeker__awal {
    margin-top: 4rem;
    &-row {
      padding: 1rem;
    }
    &-colkiri {
      margin-top: 2rem;
    }
    &-colkanan {
      padding: 0 !important;

      margin-left: 11rem;
    }
    &-img {
      width: 25rem;
    }
    &-h1 {
      font-size: 26px;
      margin-bottom: 2rem;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 14px;
    }
  }

  .jobseeker__banner {
    margin-top: 5rem;
    &-bungkus {
      width: 14rem;
    }
    &-info {
      background-color: #0a1325;
      color: white;
      position: relative;
      margin: -87px 0px 0px 0;
      left: 60px;
      grid-area: 2/1/3/2;
      justify-self: start;
      align-self: start;
      max-width: 12rem;
      padding: 17px 0px 30px 20px;
    }
    &-bungkusbtn {
      margin-top: 5rem;
    }
    &-row {
      margin-left: 3rem;
    }
    &-btn {
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 300px) and (max-width: 1264px) {
  .jobseeker__awal {
    margin-top: 5rem;
    &-row {
      padding: 1rem;
    }
    &-colkiri {
      margin-top: 2rem;
    }
    &-colkanan {
      padding: 0 !important;
    }
    &-img {
      width: 25rem;
    }
    &-h1 {
      font-size: 23px;
      margin-bottom: 1rem;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 12px;
      line-height: 1.2rem;
    }
  }

  .jobseeker__banner {
    margin-top: 5rem;
    &-bungkus {
      width: 14rem;
    }
    &-info {
      background-color: #0a1325;
      color: white;
      position: relative;
      margin: -87px 0px 0px 0;
      left: 60px;
      grid-area: 2/1/3/2;
      justify-self: start;
      align-self: start;
      max-width: 12rem;
      padding: 17px 0px 30px 20px;
    }
    &-bungkusbtn {
      margin-top: 5rem;
    }
    &-row {
    }
    &-btn {
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 1904px) {
}
</style>
