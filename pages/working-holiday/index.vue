<template>
  <div>
    <!-- Banner VISA -->
    <v-container>
      <section class="banner__visa">
        <v-row>
          <v-col cols="6">
            <h4 class="banner__visa-h4">Layanan Kami</h4>
            <h1 class="banner__visa-h1">Visa Working Holiday</h1>
            <p class="banner__visa-p">
              Working Holiday Visa merupakan jenis visa yang diberikan oleh
              pemerintah suatu negara kepada warga negara asing untuk bertempat
              tinggal sementara di wilayah negaranya, juga biasanya dapat
              diberikan kesempatan untuk melakukan kegiatan berlibur sambil
              bekerja dan belajar (pendidikan & pelatihan).
            </p>
            <v-row>
              <v-col cols="3">
                <ul class="banner__visa-ul">
                  <li>
                    <h1 class="banner__visa-h1kolom">205+</h1>
                  </li>
                  <li>
                    <p class="banner__visa-pkolom">visa disetujui</p>
                  </li>
                </ul>
              </v-col>
              <v-col cols="3">
                <ul class="banner__visa-ul">
                  <li>
                    <h1 class="banner__visa-h1kolom">4+</h1>
                  </li>
                  <li>
                    <p class="banner__visa-pkolom">Tahun Pengalaman</p>
                  </li>
                </ul>
              </v-col>
              <v-col cols="3">
                <ul class="banner__visa-ul">
                  <li>
                    <h1 class="banner__visa-h1kolom">213+</h1>
                  </li>
                  <li>
                    <p class="banner__visa-pkolom">Jumlah Client</p>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-img :src="require('@/assets/images/visabanner.png')"></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- END BANNER VISA -->

    <!-- START BANNER KETENTUAN -->
    <v-container>
      <section class="banner__ketentuan">
        <v-row>
          <v-col cols="6">
            <v-img
              class="banner__ketentuan-img"
              :src="require('@/assets/images/ketentuanbanner.png')"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <h4 class="banner__ketentuan-h4">Layanan Kami</h4>
            <h1 class="banner__ketentuan-h1">
              Syarat & Ketentuan Working Holiday
            </h1>
            <ul class="banner__ketentuan-ul">
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Pria Ielts kurang 4.5 ikut latihan bahasa inggris max 6 tahun
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Usia maximal 21 sampai 30 tahun
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Mengumpulkan dokumen SKL, SKCK, Sertfikat Ielts, dan Pas Foto
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Pendidikan Minimal D3 / S1 / Semester 5 Aktif
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Wawancara SRPI (Surat Rekomendasi Pemerintah indonesia)
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Telah melakukan Apply Visa dan Medical Check Up
                </p>
              </li>
              <li>
                <p class="">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >Dukungan bank menyatakan dana +- UAD $5000
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner KETENTUAN -->

    <!-- START Banner Fasilitas -->
    <v-container>
      <section>
        <v-row>
          <v-col cols="6">
            <h4 class="banner__visa-h4">Fasilitas</h4>
            <h1 class="banner__visa-h1">
              Apa keuntungan bergabung Working Holiday?
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
              :src="require('@/assets/images/fasilitasbanner.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- END Banner Fasilitas -->

    <!-- Start Pelajar Yang Telah Bergabung -->
    <v-container>
      <section>
        <h1 class="text-center">
          Pelajar yang telah bergabung <span> working holiday</span> bersama
          kami
        </h1>
        <p class="text-center">
          Beberapa pelajar yang berhasil bergabung dengan working holiday
          terbang ke luar negeri
        </p>
        <v-img :src="require('@/assets/images/petaworkingholiday.png')"></v-img>
      </section>
    </v-container>
    <!-- End Pelajar Yang Telah Bergabung -->

    <v-container>
      <section>
        <v-row>
          <v-col cols="6">
            <h1>Pertanyaan yang sering diajukan kepada kami</h1>
            <p>
              Beberapa pertanyaan tentang working holiday yang sering ditanyakan
              kepada kami
            </p>
            <v-img :src="require('@/assets/images/garislinier.svg')"></v-img>
          </v-col>
          <v-col cols="6">
            <!-- FAQ -->

            <!-- Bagian FAQ -->
            <div class="d-flex justify-center">
              <div class="d-flex"></div>

              <v-expansion-panels
                accordion
                style="width: 70%; font-family: 'Poppins', sans-serif"
                v-model="panel"
                :disabled="disabled"
              >
                <v-expansion-panel class="panel-working">
                  <v-expansion-panel-header style="font-weight: 500"
                    >Apa saja keuntungan gap year/working holiday di Australia
                    ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="panel-p">
                    Ada banyak manfaat profesional dan personal jika mengikuti
                    program Working Holiday Maker (WHM). Gap year (cuti sekolah)
                    adalah kesempatan yang luar biasa untuk belajar,
                    mengembangkan diri, dan meningkatkan pengalaman. Karena
                    dengan bepergian, Anda akan bertemu dengan orang-orang baru,
                    belajar budaya baru, dan mengembangkan keterampilan serta
                    minat.
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="panel-working">
                  <v-expansion-panel-header style="font-weight: 500"
                    >Berapa batas usia untuk working holiday di Australia
                    ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="panel-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias nesciunt repellendus fugit! Eveniet, ducimus!
                    Corporis saepe, natus ex culpa, at ut tempore dolorum sit
                    non nisi accusamus dolor! Doloribus, nihil.
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="panel-working">
                  <v-expansion-panel-header style="font-weight: 500"
                    >Apa saja yang diperlukan untuk melengkapi pengajuan visa
                    Working Holiday Australia ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="panel-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo et magnam dolor est amet eaque ducimus saepe
                    perferendis inventore! Incidunt odit dolorem ullam sunt
                    voluptatem sapiente veritatis, error ab! Consequatur!
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="panel-working">
                  <v-expansion-panel-header style="font-weight: 500"
                    >Visa mana yang harus saya ajukan
                    ?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="panel-p">
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
export default {}
</script>

<style lang="scss">
// STYLE KHUSUS BANNER VISA
.banner__visa {
  margin-top: 8rem;
  &-ul li {
    list-style-type: none;
    display: inline-flex;
  }
  &-h4 {
  }
}
// END STYLE BANNER VISA

// STYLE KHUSUS BANNER KETENTUAN
.banner_ketentuan {
  &-ul {
    list-style-type: none;
    display: inline-flex;
  }
}
// END STYLE KHUSUS BANNER KETENTUAN

.panel-working {
  margin-bottom: 1rem;
}
</style>
