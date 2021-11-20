<template>
  <div>
    <!-- Banner Persiapan -->

    <v-container>
      <section
        class="banner__persiapan"
        :style="$vuetify.breakpoint.mdAndUp ? 'margin-top : 8rem;' : ''"
      >
        <v-row>
          <v-col
            class="banner__persiapan-colkiri order-1 order-sm-1 order-md-1"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h4 class="banner__persiapan-h4">Layanan Kami</h4>
            <h1 class="banner__persiapan-h1">Persiapan Bahasa</h1>
            <p class="banner__persiapan-p">
              Higlob menyediakan kelas pembelajaran bahasa Jepang dan juga
              asrama untuk persiapan bekerja maupun magang di Jepang.
            </p>
          </v-col>
          <v-col
            offset-x="100"
            offset-y="10"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="
              banner__persiapan-colkanan
              justify-end
              order-2 order-sm-2 order-md-2
            "
          >
            <v-img
              class="banner__persiapan-img"
              :src="require('@/assets/images/banner-persiapanbahasa.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- END BANNER Persiapan -->

    <!--Start BANNER SYARAT -->

    <v-container>
      <section class="banner__syarat">
        <v-row class="banner__syarat-row">
          <v-col
            class="d-flex justify-start banner__syarat-tulisankiri"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><h1 class="banner__syarat-h1atas">
              “Ayo mulai bergabung di layanan Persiapan Bahasa kami“
            </h1></v-col
          >
          <v-col
            class="d-flex justify-end banner__syarat-tulisankanan"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            ><p class="banner__syarat-patas">
              Bergabung dengan LPK Higlob dapat mempermudah kamu untuk meraih
              mimpimu dengan cepat.
            </p></v-col
          >
        </v-row>

        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__syarat-colkiri order-2 order-sm-2 order-md-1"
          >
            <v-img
              class="banner__syarat-img"
              :src="require('@/assets/images/banner-syaratbahasa.png')"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__syarat-colkanan order-1 order-sm-1 order-md-1"
          >
            <h4 class="banner__syarat-h4">S&K Persiapan Bahasa LPK</h4>
            <h1 class="banner__syarat-h1">
              Syarat & Ketentuan bergabung Persiapan Bahasa
            </h1>
            <ul class="banner__syarat-ul">
              <li class="banner__syarat-ul">
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Pendidikan terakhir minimal SMU/SMK Sederajat
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Tinggi badan pria minimal 165cm dan wanita 150cm
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Tidak minus dan berkacamat, tidak bertindik, tidak ada
                  catatan kriminal dan tidak bertato
                </p>
              </li>
              <li>
                <p class="banner__syarat-p">
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
    <!-- End BANNER SYARAT -->

    <!-- START Banner Fasilitas  Bahasa -->
    <v-container>
      <section class="banner__fasilitasbahasa">
        <v-row class="banner__fasilitasbahasa-row">
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__fasilitasbahasa-colkiri"
          >
            <h4 class="banner__fasilitasbahasa-h4">Fasilitas</h4>
            <h1 class="banner__fasilitasbahasa-h1">
              Apa keuntungan bergabung Persiapan Bahasa?
            </h1>

            <ul class="banner__fasilitasbahasa-ul">
              <li>
                <h5 class="banner__fasilitasbahasa-h5">
                  Mendapatkan kelas bahasa jepang dan inggris secara offline
                </h5>
              </li>
              <li>
                <p class="banner__fasilitasbahasa-p">
                  Mendapatkan kelas bahasa selama 3 sampai 6 bulan manufacture
                  dan caregiver
                </p>
              </li>
            </ul>
            <ul class="banner__fasilitasbahasa-ul">
              <li>
                <h5 class="banner__fasilitasbahasa-h5">
                  Mendapatkan Seragam, Modul, Asrama dan Kelas Pembelajaran
                </h5>
              </li>
              <li>
                <p class="banner__fasilitasbahasa-p">
                  Mendapatkan kelas bahasa selama 3 sampai 6 bulan manufacture
                  dan caregiver
                </p>
              </li>
            </ul>
            <ul class="banner__fasilitasbahasa-ul">
              <li>
                <h5 class="banner__fasilitasbahasa-h5">
                  Mendapatkan teman - teman yang menarik
                </h5>
              </li>
              <li>
                <p class="banner__fasilitasbahasa-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__fasilitasbahasa-colkanan"
          >
            <v-img
              class="banner__fasilitasbahasa-img"
              :src="require('@/assets/images/banner-fasilitaspersiapan.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner Fasilitas Persiapan Bahasa -->

    <!-- START BANNER LAYANAN BAHASA -->

    <v-container>
      <section class="banner__layananbahasa">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__layananbahasa-colkiri order-2 order-sm-2 order-md-1"
          >
            <v-img
              class="banner__layananbahasa-img"
              :src="require('@/assets/images/banner-layanankami.png')"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="banner__layananbahasa-colkanan order-1 order-sm-1 order-md-2"
          >
            <h4 class="banner__layananbahasa-h4">Layanan Kami</h4>
            <h1 class="banner__layananbahasa-h1">
              Kenapa anda harus memilih Persiapan Bahasa?
            </h1>
            <p class="banner__layananbahasa-p">
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

    <!-- START BANNER FAQ BAHASA -->
    <v-container>
      <section class="pertanyaan__bahasa">
        <v-row>
          <v-col
            class="pertanyaan__bahasa-colkiri"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <h1 class="pertanyaan__bahasa-h1">
              Pertanyaan yang sering diajukan <br />
              kepada kami
            </h1>
            <p class="pertanyaan__bahasa-p" style="color: #868686">
              Beberapa pertanyaan tentang working holiday yang sering ditanyakan
              kepada kami
            </p>
            <v-img
              class="pertanyaan__bahasa-img"
              :src="require('@/assets/images/garislinier.svg')"
            ></v-img>
          </v-col>

          <!-- Bagian FAQ -->
          <v-col
            class="pertanyaan__bahasa-colkanan"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="d-flex justify-center">
              <div class="d-flex"></div>

              <v-expansion-panels
                class="pertanyaan__bahasa-panel"
                accordion
                style="font-family: 'Poppins', sans-serif"
              >
                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    Apa aja yang kita dapatkan ketika telah bergabung di
                    persiapan bahasa ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    Ada banyak manfaat profesional dan personal jika mengikuti
                    program Working Holiday Maker (WHM). Gap year (cuti sekolah)
                    adalah kesempatan yang luar biasa untuk belajar,
                    mengembangkan diri, dan meningkatkan pengalaman. Karena
                    dengan bepergian, Anda akan bertemu dengan orang-orang baru,
                    belajar budaya baru, dan mengembangkan keterampilan serta
                    minat.
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    kapan kita dapat mendaftar persiapan bahasa
                    ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias nesciunt repellendus fugit! Eveniet, ducimus!
                    Corporis saepe, natus ex culpa, at ut tempore dolorum sit
                    non nisi accusamus dolor! Doloribus, nihil.
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    Bagaimana cara bergabung di persiapan bahasa
                    ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo et magnam dolor est amet eaque ducimus saepe
                    perferendis inventore! Incidunt odit dolorem ullam sunt
                    voluptatem sapiente veritatis, error ab! Consequatur!
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="pertanyaan__bahasa-paneljudul">
                  <v-expansion-panel-header
                    class="pertanyaan__bahasa-panelheader"
                  >
                    Bagaimana cara bergabung di persiapan bahasa secara online
                    ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    class="pertanyaan__bahasa-panelisi"
                    style="color: #868686"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati ratione delectus eligendi hic nesciunt quis
                    expedita ab corporis dolor, porro, perspiciatis consequuntur
                    ut cumque similique nihil, mollitia vero quod rem.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END FAQ -->
            <!-- END FAQ -->
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
li {
  list-style-type: none;
}

// STYLE KHUSUS BANNER PERSIAPAN

.banner__persiapan {
  // margin-top: 8rem;
  &-colkiri {
    margin-top: 4rem;
    padding: 2rem;
  }
  &-h1 {
    font-weight: 600;
    font-size: 48px;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: #171717;
  }

  &-p {
    font-size: 14px;
    line-height: 26px;
    color: #171717;
  }
  &-ul li {
    list-style-type: none;
    display: inline-flex;
  }

  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE BANNER PERSIAPAN

// STYLE KHUSUS BANNER SYARAT

.banner__syarat {
  margin-top: 6rem;
  &-colkanan {
    padding-left: 2rem;
    margin-top: 2rem;
  }
  &-row {
    margin-bottom: 4rem;
  }
  &-ul {
    list-style-type: none;
    padding: 0 !important;
  }
  &-p {
    display: inline-flex;
  }
  &-h1atas {
    font-size: 30px;
  }
  &-patas {
    margin-top: 1rem;
    font-size: 15px;
  }
  &-h1 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 32px;
    color: #171717;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE KHUSUS BANNER SYARAT

// STYLE KHUSUS BANNER FASILITAS BAHASA
.banner__fasilitasbahasa {
  margin-top: 7rem;

  &-colkiri {
    margin-top: 3rem;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
    margin-left: 2px;
  }
  &-h1 {
    font-size: 32px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: #171717;
  }
  &-ul {
    padding: 0 !important;
  }
  &-h5 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #171717;
  }
  &-p {
    font-size: 14px;
    color: #171717;
  }
}
// END KHUSUS BANNER FASILITAS BAHASA

// STYLE KHUSUS BANNER LAYANAN BAHASA

.banner__layananbahasa {
  margin-top: 6rem;
  &-colkanan {
    padding-left: 0rem;
    margin-top: 2rem;
  }
  &-ul {
    list-style-type: none;
    padding: 0 !important;
  }
  &-p {
    display: inline-flex;
  }
  &-h1 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 32px;
    color: #171717;
  }
  &-h4 {
    color: #3e00ff;
    font-weight: 500;
  }
}
// END STYLE KHUSUS BANNER BAHASA

// STYLE KHUSUS BANNER PERTANYAAN BAHASA
// STYLE KHUSUS PERTANYAAN
.v-expansion-panel--active > .v-expansion-panel-header {
  color: #3e00ff;
}
.pertanyaan__bahasa {
  margin-top: 5rem;
  margin-bottom: 5rem;
  &-img {
    max-width: 18rem;
    margin-top: 2rem;
    margin-left: -4rem;
  }
  &-col-kiri {
    margin-top: 1rem;
  }
  &-paneljudul {
    margin-bottom: 1rem;
    border-radius: 6px;
    line-height: 1.6rem;
  }
  &-panelheader {
    font-weight: 500;
    line-height: 1.6rem;
  }
}
// END KHUSUS PERTANYAAN
// END STYLE KHUSUS BANNER PERTANYAAN BAHASA

// MEDIA QUERY

@media screen and (min-width: 0px) and (max-width: 300px) {
}
@media screen and (min-width: 300px) and (max-width: 600px) {
  // STYLE KHUSUS BANNER PERSIAPAN

  .banner__persiapan {
    padding: 7px;
    margin-top: 2rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 1rem;
    }
    &-colkanan {
      margin-left: 2rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2.4rem;
    }
    &-p {
      font-size: 14px;
      line-height: 26px;
      color: #171717;
    }
    &-img {
      margin-left: -2rem;
      padding: 0 !important;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -24px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE BANNER PERSIAPAN

  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    padding: 7px;
    margin-top: 2rem;
    &-row {
      margin-bottom: 2rem;
    }
    &-colkanan {
      padding-left: 1rem;
      margin-top: 0rem;
    }
    &-colkiri {
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
    }
    &-patas {
      font-size: 12px;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 22px;
      color: #171717;
    }
    &-h1atas {
      font-size: 19px;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }

  // END STYLE KHUSUS BANNER SYARAT

  .banner__fasilitasbahasa {
    padding: 7px;
    margin-top: 4rem;

    &-colkiri {
      margin-top: -1rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
    }
    &-h1 {
      font-size: 22px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
    }
    &-h5 {
      font-size: 14px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      line-height: 1.5rem;
      font-size: 12px;
      color: #171717;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    padding: 7px;
    margin-top: 4rem;
    &-colkiri {
      margin-top: 2rem;
      padding: 0 !important;
      margin-left: 2rem;
    }
    &-colkanan {
      margin-left: 0rem;
      padding-left: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 2.4rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-img {
      margin-left: 1rem;
      padding: 0 !important;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -24px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }

  // END STYLE KHUSUS BANNER LAYANAN BAHASA

  // STYLE  KHSUSUS PERTANYAAN BAHASA
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    padding: 7px;
    margin-top: 2rem;
    margin-bottom: 5rem;
    &-h1 {
      font-size: 16px;
      margin-bottom: 1rem;
    }

    &-p {
      font-size: 13px;
    }
    &-img {
      max-width: 12rem;
      margin-top: 2rem;
      margin-left: -2rem;
    }
    &-colkiri {
      margin-top: 1rem;
    }
    &-colkanan {
      margin-top: 3rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;

      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
    &-panelheader {
      font-weight: 500;
      font-size: 13px;
      line-height: 1.6rem;
    }
  }
  // END STYLE KHUSUS PERTANYAAN BAHASA
}
// UKURAN TABLET
@media screen and (min-width: 600px) and (max-width: 960px) {
  // STYLE KHUSUS BANNER PERSIAPAN

  .banner__persiapan {
    // margin-top: 8rem;
    margin-top: 4rem;
    padding: 2rem;
    &-colkiri {
      margin-top: 2rem;
    }
    &-img {
      max-width: 37rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 32px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 1rem;
    }
    &-p {
      font-size: 14px;
      line-height: 26px;
      color: #171717;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -37px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE BANNER PERSIAPAN

  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    margin-top: 2rem;
    padding-left: 1rem;
    &-colkanan {
    }
    &-row {
      padding-left: 2rem;
      margin-bottom: 0rem;
    }
    &-colkiri {
      padding-left: 5rem;
      margin-top: 2rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
    }
    &-img {
      max-width: 35rem;
    }
    &-tulisankanan {
      padding-right: 4rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 25px;
      color: #171717;
    }
    &-h1atas {
      padding-right: 4.5rem;
      font-size: 25px;
    }
    &-patas {
      line-height: 2rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER SYARAT

  // STYLE KHUSUS BANNER FASILITAS BAHASA
  .banner__fasilitasbahasa {
    margin-top: 2rem;
    padding: 2.2rem;

    &-colkiri {
      margin-top: 3rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
    }
    &-img {
      max-width: 38rem;
      margin-left: 1rem;
      margin-top: 1rem;
    }
    &-h1 {
      font-size: 25px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
      margin-left: 1rem;
      margin-bottom: 1.2rem;
    }
    &-h5 {
      font-size: 16px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      font-size: 14px;
      color: #171717;
    }
  }
  // END KHUSUS BANNER FASILITAS BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    margin-top: 3rem;
    padding-left: 3rem;
    &-colkanan {
      padding-left: 0rem;
      margin-top: 2rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-img {
      max-width: 38rem;
      margin-left: 5rem;
      margin-top: 3rem;
    }
    &-p {
      display: inline-flex;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 32px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER PERTANYAAN BAHASA
  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    margin-top: 1rem;
    margin-bottom: 5rem;
    padding: 2rem;
    &-img {
      max-width: 18rem;
      margin-top: 2rem;
      margin-left: -4rem;
    }
    &-p {
      padding-right: 5rem;
    }
    &-col-kiri {
      margin-top: 1rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;
      line-height: 1.6rem;
    }
    &-panelheader {
      font-weight: 500;
      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
  }
  // END KHUSUS PERTANYAAN
  // END STYLE KHUSUS BANNER PERTANYAAN BAHASA
}
//END UKURAN TABLET

// ukuran IPAD PRO
@media screen and (min-width: 960px) and (max-width: 1264px) {
  // STYLE KHUSUS BANNER PERSIAPAN

  .banner__persiapan {
    // margin-top: 8rem;
    margin-top: 4rem;
    padding: 2rem;
    &-colkiri {
      margin-top: 2rem;
    }
    &-img {
      max-width: 22rem;
      margin-top: 1rem;
      margin-left: 3rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #171717;
    }
    &-h1kolom {
      margin-left: 1rem;
    }
    &-p {
      font-size: 12px;
      line-height: 26px;
      color: #171717;
    }
    &-ul li {
      list-style-type: none;
      display: inline-flex;
    }
    &-rowkecil {
      margin-left: -37px !important;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE BANNER PERSIAPAN

  // STYLE KHUSUS BANNER SYARAT

  .banner__syarat {
    margin-top: 2rem;
    padding-left: 1rem;
    &-colkanan {
    }
    &-row {
      padding-left: 2rem;
      margin-bottom: 0rem;
    }
    &-colkiri {
      padding-left: 5rem;
      margin-top: 2rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-p {
      display: inline-flex;
      font-size: 14px;
    }
    &-img {
      max-width: 35rem;
    }
    &-tulisankanan {
      padding-right: 4rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 0.7rem;
      font-size: 22px;
      color: #171717;
    }
    &-h1atas {
      padding-right: 4.5rem;
      font-size: 18px;
    }
    &-patas {
      line-height: 1.3rem;
      margin-top: 0rem;
      font-size: 12px;
      margin-left: 1rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER SYARAT

  // STYLE KHUSUS BANNER FASILITAS BAHASA
  .banner__fasilitasbahasa {
    margin-top: 2rem;
    padding: 2.2rem;

    &-colkiri {
      margin-top: 3rem;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
      margin-left: 2px;
    }
    &-img {
      max-width: 38rem;
      margin-top: 1rem;
    }
    &-h1 {
      font-size: 22px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #171717;
    }
    &-ul {
      padding: 0 !important;
      margin-left: 1rem;
      margin-bottom: 1.2rem;
    }
    &-h5 {
      font-size: 14px;
      margin-bottom: 8px;
      color: #171717;
    }
    &-p {
      font-size: 12px;
      color: #171717;
    }
  }

  // END KHUSUS BANNER FASILITAS BAHASA

  // STYLE KHUSUS BANNER LAYANAN BAHASA

  .banner__layananbahasa {
    margin-top: 3rem;
    padding-left: 3rem;
    &-colkanan {
      padding-left: 0rem;
      margin-top: 3rem;
    }
    &-ul {
      list-style-type: none;
      padding: 0 !important;
    }
    &-img {
      max-width: 38rem;
      margin-top: 3rem;
    }
    &-p {
      display: inline-flex;
      font-size: 14px;
      line-height: 1.8rem;
    }
    &-h1 {
      margin-top: 0.5rem;
      margin-bottom: 0.7rem;
      font-size: 26px;
      color: #171717;
    }
    &-h4 {
      color: #3e00ff;
      font-weight: 500;
    }
  }
  // END STYLE KHUSUS BANNER BAHASA

  // STYLE KHUSUS BANNER PERTANYAAN BAHASA
  // STYLE KHUSUS PERTANYAAN
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #3e00ff;
  }
  .pertanyaan__bahasa {
    margin-top: 1rem;
    margin-bottom: 5rem;
    padding: 2rem;
    &-img {
      max-width: 18rem;
      margin-top: 2rem;
      margin-left: -4rem;
    }
    &-h1 {
      font-size: 20px;
      margin-bottom: 0.8rem;
    }
    &-p {
      padding-right: 5rem;
    }
    &-col-kiri {
      margin-top: 1rem;
    }
    &-paneljudul {
      margin-bottom: 1rem;
      border-radius: 6px;
      line-height: 1.6rem;
    }
    &-panelheader {
      font-weight: 500;
      line-height: 1.6rem;
    }
    &-panelisi {
      font-size: 12px;
    }
  }
  // END KHUSUS PERTANYAAN
  // END STYLE KHUSUS BANNER PERTANYAAN BAHASA
}
// END UKURAN IPAD PRO
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
</style>
