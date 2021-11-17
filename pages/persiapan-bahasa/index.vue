<template>
  <div>
    <!-- Banner Persiapan -->

    <v-container>
      <section class="banner__persiapan">
        <v-row>
          <v-col cols="6">
            <h4 class="banner__persiapan-h4">Layanan Kami</h4>
            <h1 class="banner__persiapan-h1">Persiapan Bahasa</h1>
            <p class="banner__persiapan-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
          </v-col>
          <v-col offset-x="100" offset-y="10" cols="6">
            <v-img
              :src="require('@/assets/images/banner-persiapanbahasa.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- END BANNER Persiapan -->

    <!--Start Syarat Persiapan Bahasa -->

    <v-container>
      <section class="banner__syarat">
        <v-row>
          <v-col class="d-flex justify-start" cols="6"
            ><h1>
              “Ayo mulai bergabung di layanan Persiapan Bahasa kami“
            </h1></v-col
          >
          <v-col class="d-flex justify-end" cols="6"
            ><p>
              Bergabung dengan LPK Higlob dapat mempermudah kamu untuk meraih
              mimpimu dengan cepat.
            </p></v-col
          >
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-img
              class="banner__syarat-img"
              :src="require('@/assets/images/banner-syaratbahasa.png')"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <h4 class="banner__syarat-h4">S&K Persiapan Bahasa LPK</h4>
            <h1 class="banner__syarat-h1">
              Syarat & Ketentuan bergabung Persiapan Bahasa
            </h1>
            <ul class="banner__syarat-ul">
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Pendidikan terakhir minimal SMU/SMK Sederajat
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Tinggi badan pria minimal 165cm dan wanita 150cm
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Tidak minus dan berkacamat, tidak bertindik, tidak ada
                  catatan kriminal dan tidak bertato
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Mendapatkan Izin dari kedua orang tua
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- End Syarat Persiapan Bahasa -->

    <!-- START Banner Fasilitas Persiapan Bahasa -->
    <v-container>
      <section>
        <v-row>
          <v-col cols="6">
            <h4 class="banner__visa-h4">Fasilitas</h4>
            <h1 class="banner__visa-h1">
              Apa keuntungan bergabung Persiapan Bahasa?
            </h1>

            <ul>
              <li>
                <h5>
                  Mendapatkan kelas bahasa jepang dan inggris secara offline
                </h5>
              </li>
              <li>
                <p>
                  Mendapatkan kelas bahasa selama 3 sampai 6 bulan manufacture
                  dan caregiver
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h5>
                  Mendapatkan Seragam, Modul, Asrama dan Kelas Pembelajaran
                </h5>
              </li>
              <li>
                <p>
                  Mendapatkan kelas bahasa selama 3 sampai 6 bulan manufacture
                  dan caregiver
                </p>
              </li>
            </ul>
            <ul>
              <li><h5>Mendapatkan teman - teman yang menarik</h5></li>
              <li>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </li>
            </ul>
          </v-col>
          <v-col cols="6">
            <v-img
              :src="require('@/assets/images/banner-fasilitaspersiapan.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner Fasilitas Persiapan Bahasa -->

    <!-- Layanan Kami Persiapan Bahasa -->

    <v-container>
      <section class="banner__layanankami">
        <v-row>
          <v-col cols="6">
            <v-img
              :src="require('@/assets/images/banner-layanankami.png')"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <h4 class="banner__layanankami-h4">Layanan Kami</h4>
            <h1 class="banner__layanankami-h1">
              Kenapa harus anda harus memilih Persiapan Bahasa?
            </h1>
            <p class="banner__layanan-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- End Layanan Kami Persiapan Bahasa -->
  </div>
</template>

<style lang="scss">
.banner__persiapan {
  margin-top: 8rem;
}
li {
  list-style-type: none;
}
</style>
