<template>
  <div :class="$vuetify.breakpoint.xs ? 'mx-3' : 'mx-0'">
    <v-container
      :class="!$vuetify.breakpoint.xs ? 'override__container' : 'mx-0'"
    >
      <v-container class="hero__utama" fluid>
        <template>
          <v-parallax
            dark
            :src="require('@/assets/images/hero-landing-page.png')"
          >
            <v-row class="hero__utama-row" align="center" justify="center">
              <v-col class="text-center hero__utama-col" cols="12">
                <h1 class="mb-4 hero__utama-h1">
                  Selamat Datang Di LPK Higlob Gabung dan
                  <span class="hero__utama-h1special">Raih Mimpimu</span>
                </h1>
                <p class="hero__utama-p text-center">
                  Hi Global adalah sebuah pintu bagi anda untuk mencapai impian
                  Studi maupun Bekerja di Luar Negeri. Kami membantu anda mulai
                  dari persiapan berupa pembekalan skill bahasa dan segala
                  informasi yang diperlukan. Solusi integral dari persiapan,
                  pendidikan, hingga pekerjaan di Luar Negeri.
                </p>

                <div class="text-center">
                  <v-btn
                    class="ma-2 text-capitalize"
                    style="border-color: #ff9900; font-weight: 300"
                    outlined
                    color="white"
                  >
                    Ayo Mulai
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-parallax>
        </template>
      </v-container>
    </v-container>

    <v-container :class="!$vuetify.breakpoint.xs ? 'override__container' : ''">
      <v-row>
        <!-- ==== BELIEVE ==== -->
        <!-- <v-col
          cols="12"
          :class="
            $vuetify.breakpoint.xs
              ? 'container3__text mt-7'
              : 'container3__text mt-15 mb-0 '
          "
        >
          <div class="text-center mb-5 d-flex justify-center">
            Patner Kerja Kami
          </div>
          <div class="d-flex justify-end align-start flex-wrap">
            <div
              :class="$vuetify.breakpoint.xs ? 'mt-8' : 'my-8'"
              v-for="(el, index) in media_patner"
              :key="index"
            >
              <v-img
                :src="require(`@/assets/images/${el.src}`)"
                :alt="el.title"
              ></v-img>
            </div>
          </div>
        </v-col> -->
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <div
            style="height: 100%"
            class="mb-5 d-flex align-center flex-wrap container3__text"
            :class="$vuetify.breakpoint.xs ? ' text-center' : ' justify-start'"
          >
            Partner kerja kami dalam mengembangkan bisnis
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <div
            class="d-flex align-center flex-wrap"
            :class="$vuetify.breakpoint.xs ? ' justify-center' : ' justify-end'"
          >
            <div
              :class="$vuetify.breakpoint.xs ? 'mt-8' : 'my-8'"
              v-for="(el, index) in media_patner"
              :key="index"
            >
              <v-img
                :src="require(`@/assets/images/${el.src}`)"
                :alt="el.title"
              ></v-img>
            </div>
          </div>
        </v-col>
        <!-- ==== END BELIEVE ==== -->
      </v-row>
    </v-container>

    <!-- ================================BIKINAN FAH INTRODUCTION DIRECTURE =======================================-->
    <v-container>
      <section class="introduction__directur">
        <v-row class="introduction__directur-row">
          <v-col
            class="introduction__directur-colkiri order-2 order-sm-2 order-md-1"
            cols="12"
            xs="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
          >
            <v-img
              class="introduction__directur-img"
              cover
              width="calc(100vh - 100px)"
              :src="require('@/assets/images/directure-intro.png')"
              alt="logo higlob"
            />
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
            class="
              introduction__directur-colkanan
              order-1 order-sm-1 order-md-2
            "
          >
            <h1 class="introduction__directur-h1">Introduction Directur</h1>
            <p class="introduction__directur-p">
              SELAMAT DATANG SANGAT BAIK DAN HANGAT UNTUK ANDA.
            </p>
            <p class="introduction__directur-p">
              Organisasi kami adalah kumpulan profesional pekerja keras,
              berpengalaman, dinamis dan berdedikasi yang bekerja untuk
              memberikan solusi bisnis yang berkualitas dan unggul bagi mitra.
            </p>
            <p class="introduction__directur-p">
              Kami sangat berdiri untuk menengahi antara pencipta dan pencari
              kerja. Komitmen kami yang terbukti untuk mempromosikan hubungan
              dekat antara pengusaha dan karyawan menjadikan organisasi kami
              salah satu yang terbaik di negara ini untuk ditangani.
            </p>
            <p class="introduction__directur-p">
              Kami berharap dapat memberikan pelayanan yang terbaik untuk Anda
              dan perusahaan. Terima kasih telah memilih PT. Higlob Sinar Utama
              sebagai mitra bisnis Anda. Kami menjamin Anda layanan terbaik kami
              setiap saat.
            </p>
            <p class="introduction__directur-p">Terima kasih.</p>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ================================END BIKINAN FAH INTRODUCTION DIRECTURE =======================================-->

    <!-- =============================== BIKINAN FAH Program Kerja Yang Diunggulkan =======================================-->
    <v-container>
      <section class="program__kerja">
        <h3 class="program__kerja-h3 text-center">
          Memiliki Program Kerja yang Luas
        </h3>
        <h1 class="program__kerja-h1 text-center">
          Program Kerja LPK Higlob yang di Unggulkan
        </h1>
        <p class="program__kerja-patas text-center">
          Berbagai macam program yang kami sediakan untuk mendukung kebutuhanmu
        </p>
        <v-row class="program__kerja-row">
          <v-col
            class="program__kerja-col"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card elevation="0" class="program__kerja-card">
              <ul class="program__kerja-ul">
                <li class="program__kerja-li">
                  <v-img
                    class="program__kerja-img"
                    :src="require('@/assets/images/program-love.png')"
                  ></v-img>
                </li>
                <li class="program__kerja-li">
                  <h4 class="program__kerja-h4">Perawat</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                Program Kerja sebagai perawat yang di khususkan bagi anda yang
                berminat
              </p>
            </v-card>
          </v-col>
          <v-col
            class="program__kerja-col"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card elevation="0" class="program__kerja-card">
              <ul class="program__kerja-ul">
                <li class="program__kerja-li">
                  <v-img
                    class="program__kerja-img"
                    :src="require('@/assets/images/program-star.png')"
                  ></v-img>
                </li>
                <li class="program__kerja-li">
                  <h4 class="program__kerja-h4">Pemagangan</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                Program Kerja sebagai perawat yang di khususkan bagi anda yang
                berminat
              </p>
            </v-card>
          </v-col>
          <v-col
            class="program__kerja-col"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card elevation="0" class="program__kerja-card">
              <ul class="program__kerja-ul">
                <li class="program__kerja-li">
                  <v-img
                    class="program__kerja-img"
                    :src="require('@/assets/images/program-gear.png')"
                  ></v-img>
                </li>
                <li class="program__kerja-li">
                  <h4 class="program__kerja-h4">Kontruksi</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                Program Kerja sebagai perawat yang di khususkan bagi anda yang
                berminat
              </p>
            </v-card>
          </v-col>
          <v-col
            class="program__kerja-col"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card elevation="0" class="program__kerja-card">
              <ul class="program__kerja-ul">
                <li class="program__kerja-li">
                  <v-img
                    class="program__kerja-img"
                    :src="require('@/assets/images/program-bucket.png')"
                  ></v-img>
                </li>
                <li class="program__kerja-li">
                  <h4 class="program__kerja-h4">Pertanian</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                Program Kerja sebagai perawat yang di khususkan bagi anda yang
                berminat
              </p>
            </v-card>
          </v-col>
          <v-col
            class="program__kerja-col"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card elevation="0" class="program__kerja-card">
              <ul class="program__kerja-ul">
                <li class="program__kerja-li">
                  <v-img
                    class="program__kerja-img"
                    :src="require('@/assets/images/program-point.png')"
                  ></v-img>
                </li>
                <li class="program__kerja-li">
                  <h4 class="program__kerja-h4">Pengolahan Makanan</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                Program Kerja sebagai perawat yang di khususkan bagi anda yang
                berminat
              </p>
            </v-card>
          </v-col>
          <v-col
            class="program__kerja-col"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card elevation="0" class="program__kerja-card">
              <ul class="program__kerja-ul">
                <li class="program__kerja-li">
                  <v-img
                    class="program__kerja-img"
                    :src="require('@/assets/images/program-world.png')"
                  ></v-img>
                </li>
                <li class="program__kerja-li">
                  <h4 class="program__kerja-h4">Caregiver</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                Program Kerja sebagai perawat yang di khususkan bagi anda yang
                berminat
              </p>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ================================END BIKINAN FAH Program Kerja yang Diunggulkan =======================================-->

    <!-- ================================BIKINAN FAH Pasar GLobal =======================================-->
    <v-container class="pasar__global" fluid style="background-color: #00346d">
      <section class="pasar__global-section">
        <h1 class="pasar__global-h1 text-center">
          Kami melayani pasar secara global
        </h1>
        <p class="pasar__global-p text-center">
          Kami memperluas pemasaran di berbagai dunia untuk membantu anda meraih
          impian
        </p>
        <div class="d-flex justify-center">
          <v-img
            class="pasar__global-img"
            :src="require('@/assets/images/pasar-global-jepang.png')"
          ></v-img>
        </div>
      </section>
    </v-container>

    <!-- ================================END BIKINAN FAH Pasar Global=======================================-->

    <!-- ================================BIKINAN FAH Mengapa Memilih Tenaga Kinerja Indonesia =======================================-->
    <v-container>
      <section class="tenaga__indonesia">
        <v-row class="tenaga__indonesia-row">
          <v-col
            class="tenaga__indonesia-colkiri"
            cols="12"
            xs="12"
            sm="8"
            md="8"
            lg="8"
            xl="8"
          >
            <h4 class="tenaga__indonesia-h4">
              Membantu anda meningkatkan tenaga kerja
            </h4>
            <h1 class="tenaga__indonesia-h1">
              Mengapa Memilih Tenaga Kerja Indonesia?
            </h1>
            <p class="tenaga__indonesia-p">
              Sebagaimana diketahui dunia, Indonesia merupakan negara dengan
              jumlah penduduk yang besar. Dengan globalisasi, Layanan Penempatan
              Kerja Luar Negeri telah mengambil langkah dan membuka gerbang bagi
              pekerja Indonesia untuk membuktikan keberanian mereka. Tenaga
              kerja Indonesia membawa wawasan dan pendekatan baru untuk
              pemberian layanan dengan kualifikasim kami pengetahuan,
              pengalaman, sikap dan keterampilan. Dan banyak pekerja Indonesia
              yang bekerja di luar negeri di berbagai sektor industri seperti
              industri perhotelan termasuk industri kapal pesiar, profesional
              perawatan kesehatan, keperawatan,manufaktur dan banyak lainnya.
              Untuk mencapai penyelesaian bisnis Anda yang sukses, tepat waktu
              dan ekonomis, penting untuk mempekerjakan mereka dengan
              kualifikasi dan keterampilan mereka dengan biaya yang efektif
            </p>
          </v-col>
          <v-col
            class="tenaga__indonesia-colkanan"
            cols="12"
            xs="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
          >
            <v-img
              class="tenaga__indonesia-img"
              :src="require('@/assets/images/tenaga-kerja-indonesia.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ================================END BIKINAN FAH Mengapa Memilih Tenaga Kinerja Indonesia =======================================-->

    <!-- ================================BIKINAN FAH Tentang Indonesia =======================================-->

    <v-container>
      <section class="tentang__indonesia">
        <h4 class="tentang__indonesia-h4 text-center">Ada apa di indonesia?</h4>
        <h1 class="tentang__indonesia-h1 text-center">
          Tentang Negara Indonesia
        </h1>

        <v-row class="tentang__indonesia-row">
          <v-col
            class="tentang__indonesia-colkiri"
            cols="12"
            xs="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
          >
            <ul class="tentang__indonesia-ul">
              <li class="tentang__indonesia-li">
                The current population of Indonesia is 276,446,216 as of
                Wednesday, July 7, 2021, based on Worldometer elaboration of the
                latest United Nations data
              </li>
              <li class="tentang__indonesia-li">
                Indonesia 2020 population is estimated at 273,523,615 people at
                mid year according to UN data.
              </li>
              <li class="tentang__indonesia-li">
                Indonesia population is equivalent to 3.51% of the total world
                population.
              </li>
              <li class="tentang__indonesia-li">
                Indonesia ranks number 4 in the list of countries (and
                dependencies) by population.
              </li>
              <li class="tentang__indonesia-li">
                The population density in Indonesia is 151 per Km2 (391 people
                per mi2).
              </li>
              <li class="tentang__indonesia-li">
                The total land area is 1,811,570 Km2 (699,451 sq. miles)
              </li>
              <li class="tentang__indonesia-li">
                56.4 % of the population is urban (154,188,546 people in 2020)
              </li>
              <li class="tentang__indonesia-li">
                The median age in Indonesia is 29.7 years
              </li>
            </ul>
          </v-col>
          <v-col
            class="tentang__indonesia-colkanan"
            cols="12"
            xs="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
          >
            <v-img
              class="tentang__indonesia-img"
              :src="require('@/assets/images/tentang-indonesia.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- ================================END BIKINAN FAH Tentang Indonesia =======================================-->

    <!-- ================================BIKINAN FAH Statistik Indonesia =======================================-->
    <v-container>
      <section class="statistik__indonesia">
        <v-row class="statistik__indonesia-row">
          <v-col
            class="statistik__indonesia-colkiri"
            cols="12"
            xs="12"
            sm="12"
            md="8"
            lg="8"
            xl="8"
          >
            <v-img
              class="statistik__indonesia-imgkiri"
              :src="require('@/assets/images/forecast.png')"
            ></v-img>
          </v-col>
          <v-col
            class="statistik__indonesia-colkanan"
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <v-img
              class="statistik__indonesia-imgkanan"
              :src="require('@/assets/images/statistik-indonesia.png')"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ================================end  BIKINAN FAH Statistik Indonesia =======================================-->

    <v-container :class="!$vuetify.breakpoint.xs ? 'override__container' : ''">
      <v-row>
        <!-- ==== CARD & YAKIN ==== -->
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="order-2 order-sm-2 order-md-1 order-md-lg-1"
        >
          <div
            v-if="!$vuetify.breakpoint.xs"
            class="d-flex justify-center align-center flex-wrap"
          >
            <v-hover
              v-slot="{ hover }"
              v-for="(el, idx) in card_menu"
              :key="idx"
            >
              <v-card
                elevation="0"
                :width="$vuetify.breakpoint.lgAndDown ? '258' : '275'"
                :height="
                  $vuetify.breakpoint.lgAndDown
                    ? `${el.height_custom}`
                    : `${el.height}`
                "
                :style="
                  hover
                    ? 'box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 12px !important'
                    : ''
                "
                class="rounded-lg pa-2 my-1 mx-3"
              >
                <v-card-title
                  style="font-weight: 600; font-size: 16px; line-height: 151.7%"
                  class="mb-5"
                >
                  <v-avatar>
                    <img :src="require(`@/assets/images/${el.icon}`)" contain />
                  </v-avatar>
                  {{ el.title }}
                </v-card-title>
                <v-card-subtitle
                  style="
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 151.7%;
                    overflow-wrap: break-word;
                  "
                >
                  {{ el.description }}
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </div>
          <div v-else>
            <v-carousel
              style="height: 450px"
              cycle
              interval="6000"
              :show-arrows="$vuetify.breakpoint.xs ? true : true"
              v-model="carousel"
              hide-delimiters
            >
              <v-carousel-item v-for="(el, idx) in card_menu" :key="idx">
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-hover v-slot="{ hover }">
                      <v-card
                        width="285"
                        :height="
                          $vuetify.breakpoint.xs ? '295' : `${el.height}`
                        "
                        :style="
                          hover
                            ? 'box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 12px'
                            : 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px'
                        "
                        class="rounded-lg pa-2 ma-2"
                      >
                        <v-card-title
                          style="
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 151.7%;
                          "
                          class="mb-5"
                        >
                          <v-avatar>
                            <img
                              :src="require(`@/assets/images/${el.icon}`)"
                              contain
                            />
                          </v-avatar>
                          {{ el.title }}
                        </v-card-title>
                        <v-card-subtitle
                          style="
                            font-weight: 500;
                            font-size: 13px;
                            line-height: 151.7%;
                          "
                        >
                          {{ el.description }}
                        </v-card-subtitle>
                      </v-card>
                    </v-hover>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
        <!-- ==== END CARD & YAKIN ==== -->

        <!-- ==== NETWORK ==== -->
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          style="display: flex; align-items: center"
          class="order-1 order-sm-1 order-md-2 order-md-lg-2 col-yakin"
        >
          <div class="pa-2">
            <h5
              class="text__1"
              :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
            >
              Memiliki jaringan yang luas
            </h5>
            <h2 class="text__2 mt-2 mb-3">
              Apa yang membuatmu yakin untuk memilih
              <span class="text__2-unik" style="color: #3e00ff"
                >LPK Hi Global</span
              >
            </h2>
            <p
              class="text__3"
              :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
            >
              Higlob menjadi tempat rekomendasi bagi teman - teman yang ingin
              magang maupun bekerja diluar negeri, serta hi global dapat
              membantu untuk bekerja di perusahaan yang sesuai dengan passion
              yang anda miliki.
            </p>

            <!-- <v-btn
              style="
                padding: 1rem;
                box-shadow: -2px 11px 55px rgba(80, 96, 137, 0.31) !important;
                border-radius: 50px !important;
              "
              :height="$vuetify.breakpoint.mdAndDown ? '40px' : '50px'"
              :width="$vuetify.breakpoint.mdAndDown ? '200px' : '190'"
              class="rounded-xl text-capitalize"
              color="#FF9900"
              dark
            >
              Pelajari Lebih Lanjut
            </v-btn> -->
          </div>
        </v-col>
        <!-- ==== END NETWORK ==== -->
      </v-row>
    </v-container>

    <div fluid class="bungkus-masadepan">
      <v-container
        :class="!$vuetify.breakpoint.xs ? 'override__container' : ''"
      >
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="container__blue"
          >
            <div class="align-center">
              <h5
                class="text__1 mb-2"
                :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
              >
                Mulai bangun masa depan bersama kami
              </h5>
              <h2
                class="text__2"
                style="color: #ffffff"
                :style="$vuetify.breakpoint.xs ? 'font-size: 32px;' : ''"
              >
                Apa anda tertarik bergabung dengan
                <span class="text__2-special" style="color: #ffffff"
                  >Hi Global</span
                >
                ?
              </h2>

              <p
                class="text__3-p"
                style="color: #ffffff"
                :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
              >
                Dapatkan layanan terbaik mengenai persiapan, pendidikan, dan
                peluang kerja di luar negeri dengan mudah, nyaman, dan
                terpercaya, bersama Hi Global. Hubungi kami untuk mendapatkan
                info lebih lengkap dan terkini.
              </p>
              <div>
                <v-btn
                  style="
                    padding: 1rem;
                    box-shadow: 9px 17px 50px rgba(30, 49, 99, 0.22) !important;
                    border-radius: 50px !important;
                  "
                  height="50px"
                  class="rounded-xl mt-4 text-capitalize font-weight-regular"
                  color="#FF9900"
                  dark
                  width="180"
                >
                  Hubungi Kami
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
            <div
              :class="
                $vuetify.breakpoint.xs ? 'mx-auto' : 'mx-auto push__right'
              "
            >
              <v-img
                class="container__blue-img"
                cover
                width="calc(100vh - 100px)"
                :src="require('@/assets/images/model_hero2.png')"
                alt="logo higlob"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- ==== TESTIMONY ==== -->
    <v-container>
      <section class="my-5">
        <v-row>
          <!-- #TITLE -->
          <v-col cols="12">
            <div
              class="d-flex justify-center align-center flex-wrap flex-column"
            >
              <h1 class="testimony__title">Berita Terbaru</h1>
              <h3
                class="testimony__subtitle text-center"
                style="font-size: 14px"
              >
                Dapatkan Berita terbaru dari informasi pekerjaan, persiapan
                kerja maupun magang serta
                <br v-show="!$vuetify.breakpoint.xs" />
                informasi lainya hanya di LPK Hi Global
              </h3>
            </div>
          </v-col>
          <!-- #ARTICLE -->
          <v-col elevation="0" cols="12">
            <div class="d-flex justify-center align-center flex-wrap">
              <div v-for="(el, index) in article_card" :key="index">
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="ma-5"
                    max-width="300"
                    height="555"
                    :style="
                      hover
                        ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px;'
                        : 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 5%); border-radius: 10px;'
                    "
                  >
                    <v-card-title class=""
                      ><v-img
                        :src="require(`@/assets/images/${el.img_url}`)"
                      ></v-img
                    ></v-card-title>
                    <v-card-text class="article">
                      <h3 class="article__title">{{ el.title }}</h3>
                      <p class="article__desc">{{ el.desc }}</p>
                      <small class="article__more">Lanjut Baca</small>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </div>

            <div class="d-flex justify-center flex-wrap mb-15 mt-5">
              <v-btn
                style="
                  padding: 1rem;
                  box-shadow: 9px 17px 50px rgba(30, 49, 99, 0.22) !important;
                  border-radius: 50px !important;
                "
                height="50px"
                class="rounded-xl mt-4 text-capitalize"
                color="#FF9900"
                dark
              >
                Baca Berita lainya
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ==== END TESTIMONY ==== -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      loading: false,
      model: 0,
      article_card: [
        {
          author: 'Adnan Aziz D',
          img_url: 'article.png',
          title: 'Rekayasa Program ke Jepang',
          desc: 'Program kerja engineering ke Jepang merupakan program yang berbeda dengan program lainnya',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article1.png',
          title:
            'Ketahui Persyaratan dan Gaji Menjadi Care Giver di Jepang yang Tinggi',
          desc: 'Profesi care giver di Jepang sangat dibutuhkan dan merupakan salah satu profesi yang menjamin tunjangan',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article2.png',
          title:
            'Peluang Kerja atau D3 Keperawatan Avokasi Lulusan Luar Negeri ',
          desc: 'Menurut Badan Pusat Statistik (BPS) menyebutkan, jumlah pengangguran',
        },
      ],
      testimony_card: [
        {
          author: 'Michael Dustin',
          image: 'model6.png',
          caption:
            'Terima kasih kepada teman - teman hi global yang telah membantu saya untuk meraih mimpi saya',
          score: '4.6',
        },
        {
          author: 'Alexia Sania',
          image: 'model5.png',
          caption:
            'Terima kasih Hi global yang telah membimbing saya selama 4 tahun ini, Love You!',
          score: '4.9',
        },
        {
          author: 'Christian James',
          image: 'model7.png',
          caption:
            ' good luck! semoga hi global kedepanya makin maju dan berkembang.',
          score: '5.0',
        },
        {
          author: 'Reza Ballack',
          image: 'model8.png',
          caption:
            'Terima kasih Hi global yang telah membantu saya bekerja di jerman',
          score: '4.9',
        },
      ],
      card_menu: [
        {
          icon: 'icon1.png',
          height: '294px',
          height_custom: '320px',
          title: 'Hi Global telah memiliki lebih dari ratusan pelajar',
          description:
            ' Hi global telah memiliki lebih dari 500 pelajar lebih yang telah bergabung dan membantu mereka dalam untuk meriah impianya',
        },
        {
          icon: 'icon2.png',
          height: '250px',
          height_custom: '265px',
          title: 'Higlob telah beroperasi 3 tahun lamanya',
          description:
            'Selama tiga tahun terakhir higlob perusahaan telah tumbuh dan memiliki membantu banyak siswa untuk raih mimpinya',
        },
        {
          icon: 'icon3.png',
          height: '223px',
          height_custom: '250px',
          title: 'hi Global Telah menyediakan berbagai jasa',
          description:
            'Hi Global telah menyediakan berbagai layanan yang memudahkan anda untuk bergabung dengan kami',
        },
        {
          icon: 'icon4.png',
          height: '294px',
          height_custom: '294px',
          title: 'Higlob telah terhubung dengan berbagai negara',
          description:
            'Higlob telah terhubung dan bekerja sama dengan berbagai negara yang bertujuan untuk membantu anda menggapai impian anda ',
        },
      ],

      media_patner: [
        {
          title: 'PT-Sarimadu Jayanusa',
          src: 'kerjasama1.png',
        },
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    custom_maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return ''
        case 'sm':
          return ''
        case 'md':
          return ''
        case 'lg':
          return 'max-width:100%'
        case 'xl':
          return 'max-width:80%'
      }
    },
  },
}
</script>

<style lang="scss">
// ====================================== CSS Bikinan FAH =============================

.container3__text {
  padding-right: 2rem;
  padding-left: 2rem;
  font-size: 24px;
}
.hero__utama {
  &-h1special {
    color: #00ffa3;
  }
  &-h1 {
    padding: 0px 14rem 0 14rem;
    margin-top: 5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 135%;
    /* or 68px */

    text-align: center;

    color: #ffffff;
  }
  &-p {
    padding: 0 14.9rem 0 14.9rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 180%;
    /* or 32px */

    text-align: center;

    color: #ffffff;
  }
}

.bungkus-masadepan {
  background: #00346d;
  margin-left: -12px !important;
  margin-right: -12px !important;
  padding: 2rem 1rem 0 1rem;
}
.introduction__directur {
  &-h1 {
    margin-bottom: 1rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 160%;
    /* identical to box height, or 58px */

    letter-spacing: 0.003em;

    /* Colour : Font Title */

    color: #252525;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170%;
    /* or 27px */

    letter-spacing: 0.003em;

    color: #000000;
  }
}

.program__kerja {
  margin-bottom: 5rem;
  &-h3 {
    color: #03914d;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 170%;
    /* or 54px */
    letter-spacing: 0.003em;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 20rem 0 20rem;
  }
  &-patas {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    /* identical to box height, or 29px */
    text-align: center;

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-row {
    margin-top: 3rem;
  }
  &-ul {
    padding-left: 0 !important;
  }
  &-h4 {
    margin-top: 6px;
    margin-left: 1rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    /* or 35px */
    color: #000000;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 2rem;
    /* or 26px */

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-ul {
    list-style-type: none;
    display: inline-flex;
  }
}

.pasar__global {
  &-section {
    height: 538px;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    /* or 48px */

    letter-spacing: 0.003em;

    color: #ffffff;
    padding-left: 30rem;
    padding-right: 30rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    /* identical to box height, or 29px */

    text-align: center;

    /* Colour : Baground */

    color: #ffffff;
  }
  &-img {
    text-align: center;
    max-width: 872px;
    max-height: 414px;
    position: absolute;
    margin-top: 5rem;
  }
}

.tenaga__indonesia {
  margin-top: 12rem;
  &-h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    /* identical to box height, or 29px */
    color: #03914d;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 170%;
    width: 100%;
    /* or 54px */
    /* Colour : Font Title */
    color: #252525;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 190%;
    /* or 34px */
    letter-spacing: 0.003em;
    color: #000000;
  }
  &-img {
    max-width: 33rem;
  }
}

.tentang__indonesia {
  margin-top: 3rem;
  &-h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    /* identical to box height, or 29px */
    color: #03914d;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 170%;
    /* or 54px */
    /* Colour : Font Title */
    color: #252525;
  }
  &-colkiri {
    margin-top: 2rem;
  }
  &-row {
    margin-top: 2rem;
  }
  &-li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 190%;
    /* or 34px */
  }
}

.statistik__indonesia {
  margin-top: 3rem;
}
//300-600
@media screen and (min-width: 300px) and (max-width: 600px) {
  .override__container {
    margin: 0 !important;
  }
  .container3__text {
    font-size: 18px !important;
    line-height: 160%;
  }
  .hero__utama {
    &-h1special {
      color: #00ffa3;
    }
    &-h1 {
      padding: 0;
      margin-top: 3rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 135%;
      text-align: center;
      color: #ffffff;
    }
    &-p {
      padding: 0;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 180%;
      /* or 32px */

      text-align: center;

      color: #ffffff;
    }
  }

  .bungkus-masadepan {
    background: #00346d;
    margin-left: -12px !important;
    margin-right: -12px !important;
    padding: 2rem 1rem 0 1rem;
  }
  .text__1 {
    font-size: 12px !important;
    line-height: 160%;
  }
  .text__2 {
    font-size: 20px !important;
    &-unik {
      color: #ffffff;
    }
  }
  .text__2-special {
    font-weight: 600;
    font-size: 20px !important;
    line-height: 160%;
    color: #ffffff !important;
  }
  .introduction__directur {
    &-colkanan {
      padding-left: 0.8rem;
    }
    &-h1 {
      margin-bottom: 1rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      letter-spacing: 0.003em;
      color: #252525;
    }
    &-p {
      font-size: 14px;
    }
  }
  .program__kerja {
    &-h3 {
      font-size: 12px;
    }
    &-h1 {
      padding: 0;
      font-size: 18px;
    }
    &-patas {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 179%;
      /* or 21px */

      text-align: center;
    }
    &-h4 {
      font-size: 16px;
    }
    &-p {
      font-size: 13px;
    }
    &-card {
      margin-bottom: 1rem;
    }
    &-row {
      padding-left: 1rem;
    }
  }

  .pasar__global {
    border-radius: 9px;
    &-section {
      height: 251px !important;
      padding: 0.9rem;
    }
    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      /* or 24px */
      padding: 0 1rem 0 1rem;
      text-align: center;
      letter-spacing: 0.003em;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: #ffffff;
    }
    &-p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 170%;
      /* or 20px */

      text-align: center;
    }
    &-img {
      text-align: center;
      max-width: 302px;
      max-height: 276.67px;
      position: absolute;
      margin-top: 1rem;
    }
  }
  .tenaga__indonesia {
    margin-top: 7rem;
    &-h4 {
      font-size: 12px;
      line-height: 160%;
    }
    &-h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
      margin-bottom: 1rem;
      margin-top: 7px;
    }
    &-p {
      font-size: 14px;
      line-height: 190%;
      /* or 27px */

      letter-spacing: 0.003em;
    }
    &-img {
      display: none;
    }
  }

  .tentang__indonesia {
    margin-top: 1rem;
    &-h4 {
      font-size: 12px;
      line-height: 160%;
      /* or 19px */
    }
    &-h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
    }
    &-li {
      font-size: 14px;
      line-height: 190%;
      /* or 27px */
    }
    &-colkiri {
      margin-top: 0;
    }
  }
}

//600-960
@media screen and (min-width: 600px) and (max-width: 960px) {
  .override__container {
    margin: 0 !important;
  }
  .hero__utama {
    &-h1 {
      padding: 0px 4rem 0 4rem;
      margin-top: 4rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 135%;
      text-align: center;
      color: #ffffff;
    }
    &-p {
      padding: 0 5rem 0 5rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 180%;
      text-align: center;
      color: #ffffff;
    }
  }
  .container3__text {
    font-size: 18px !important;
  }
  .container__blue {
    padding: 3rem;
    &-img {
      width: calc(100vh - 100px);
      max-width: 23rem;
      margin: 0px auto;
    }
  }
  .text__1 {
    font-size: 14px !important;
  }
  .text__2 {
    font-size: 20px !important;
    &-special {
      font-size: 20px !important;
    }
  }
  .text__3 {
    font-size: 12px !important;
    padding-right: 5rem;
    &-p {
      font-size: 13px !important;
    }
  }
  .col-yakin {
    padding: 2rem;
  }
  .introduction__directur {
    margin: 0 2rem;
    &-h1 {
      font-size: 26px;
    }
    &-p {
      font-size: 14px;
    }
    &-img {
      max-width: 23rem;
      margin: 0 auto;
    }
  }
  .program__kerja {
    &-h3 {
      font-size: 14px;
    }
    &-row {
      margin-top: 3rem;
      padding: 2rem;
    }
    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 170%;
      letter-spacing: 0.003em;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      padding: 0 11rem 0 11rem;
    }
    &-patas {
      font-size: 14px;
      line-height: 160%;
      text-align: center;
      color: #868686;
    }
    &-h4 {
      margin-top: 6px;
      margin-left: 1rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      color: #000000;
    }
    &-p {
      font-size: 14px;
    }
  }
  .pasar__global {
    margin: 0;
    border-radius: 9px;
    &-section {
      height: 251px !important;
      padding: 0.9rem;
    }
    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      /* or 24px */
      padding: 0 1rem 0 1rem;
      text-align: center;
      letter-spacing: 0.003em;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: #ffffff;
    }
    &-p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 170%;
      /* or 20px */

      text-align: center;
    }
    &-img {
      text-align: center;
      max-width: 424px;
      max-height: 276.67px;
      position: absolute;
      margin-top: 1rem;
    }
  }
  .tenaga__indonesia {
    margin-top: 7rem;
    &-h4 {
      font-size: 14px;
      line-height: 160%;
    }
    &-h1 {
      font-weight: 600;
      font-size: 17px;
      line-height: 160%;
      margin-bottom: 1rem;
      margin-top: 7px;
    }
    &-colkiri {
      padding: 2rem;
    }
    &-p {
      font-size: 11px;
      line-height: 190%;
      /* or 27px */

      letter-spacing: 0.003em;
    }
    &-img {
    }
  }
  .tentang__indonesia {
    &-h4 {
      font-size: 14px;
    }
    &-colkiri {
      margin-top: 0rem;
      padding: 1.5rem;
    }
    &-h1 {
      font-size: 24px;
    }
    &-li {
      font-size: 14px;
      line-height: 185%;
      margin-bottom: 0.3rem;
    }
    &-img {
      max-width: 32rem;
      margin: 0 auto;
    }
  }

  .statistik__indonesia {
    &-imgkiri {
      max-width: 44rem;
      margin: 0 auto;
    }
    &-imgkanan {
      max-width: 28rem;
      margin: 1rem auto;
    }
  }
}
//960-1264
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .override__container {
    margin: 0 auto !important;
  }
  .hero__utama {
    &-h1 {
      padding: 0px 4rem 0 4rem !important;
      margin-top: 4rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 24px !important;
      line-height: 135%;
      text-align: center;
      color: #ffffff;
      margin-bottom: 1rem !important;
    }
    &-p {
      padding: 0 7rem 0 7rem !important;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px !important;
      line-height: 180%;
      text-align: center;
      color: #ffffff;
    }
  }
  .container3__text {
    font-size: 20px !important;
  }
  .container__blue {
    padding: 3rem !important;
    &-img {
      width: calc(100vh - 100px);
      max-width: 23rem !important;
      margin: 0px auto !important;
    }
  }
  .text__1 {
    font-size: 14px !important;
  }
  .text__2 {
    font-size: 20px !important;
    &-special {
      font-size: 20px !important;
    }
  }
  .text__3 {
    font-size: 12px !important;
    padding-right: 5rem !important;
    &-p {
      font-size: 13px !important;
    }
  }
  .col-yakin {
    padding: 2rem;
  }
  .introduction__directur {
    margin: 0 2rem;
    &-h1 {
      font-size: 32px !important;
    }
    &-p {
      font-size: 13px !important;
    }
    &-img {
      max-width: 23rem;
      margin: 0 auto;
    }
  }
  .program__kerja {
    &-h3 {
      font-size: 14px !important;
    }
    &-row {
      margin-top: 3rem !important;
      padding: 2rem !important;
    }
    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 24px !important;
      line-height: 170%;
      letter-spacing: 0.003em;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      padding: 0 11rem 0 11rem !important;
    }
    &-patas {
      font-size: 14px !important;
      line-height: 160%;
      text-align: center;
      color: #868686;
    }
    &-h4 {
      margin-top: 6px;
      margin-left: 1rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 19px !important;
      line-height: 160%;
      color: #000000;
    }
    &-p {
      font-size: 14px !important;
    }
  }
  .pasar__global {
    margin: 0;
    border-radius: 9px;
    &-section {
      height: 360px !important;
      padding: 0.9rem;
    }
    &-h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 28px !important;
      line-height: 150%;
      letter-spacing: 0.003em;
      color: #ffffff;
      padding-left: 6rem !important;
      padding-right: 6rem !important;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    &-p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px !important;
      line-height: 170%;
      /* or 20px */

      text-align: center;
    }
    &-img {
      text-align: center;
      max-width: 620px;
      max-height: 276.67px;
      position: absolute;
      margin-top: 2rem;
    }
  }
  .tenaga__indonesia {
    margin-top: 14rem;
    &-h4 {
      font-size: 14px !important;
      line-height: 160%;
    }
    &-h1 {
      font-weight: 600;
      font-size: 28px !important;
      line-height: 160%;
      margin-bottom: 1rem;
      margin-top: 7px;
    }
    &-colkiri {
      padding: 2rem;
    }
    &-p {
      font-size: 12px !important;
      line-height: 190%;
      /* or 27px */

      letter-spacing: 0.003em;
    }
    &-img {
    }
  }
  .tentang__indonesia {
    &-h4 {
      font-size: 14px !important;
    }
    &-colkiri {
      margin-top: 0rem;
      padding: 1.5rem;
    }
    &-h1 {
      font-size: 28px !important;
    }
    &-li {
      font-size: 12px !important;
      line-height: 185%;
      margin-bottom: 0.3rem;
    }
    &-img {
      max-width: 32rem;
      margin: 0 auto;
    }
  }

  .statistik__indonesia {
    &-imgkiri {
      max-width: 44rem;
      margin: 0 auto;
    }
    &-imgkanan {
      max-width: 28rem;
      margin: 1rem auto;
    }
  }
}

// ====================================== END CSS Bikinan FAH =========================
.override__container {
  margin: 0 5rem;
}

.note pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}

.v-window {
  &-x-transition,
  &-x-reverse-transition,
  &-y-transition,
  &-y-reverse-transition {
    &-enter-active,
    &-leave-active {
      transition: 1.5s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
    }
  }
}

.v-carousel__controls {
  background: none;
}

.slide-fade-enter-active {
  transition: all 5s ease;
}

.mdi-chevron-right::before {
  content: '\F0142';
  background: white;
}

.mdi-chevron-left::before {
  content: '\F0141';
  background: white;
}

.theme--dark.v-btn.v-btn--icon {
  color: #3e00ff !important;
}

.lang {
  cursor: pointer;
}

.lang:hover {
  color: rgba(15, 39, 177, 0.533);
}

// .nuxt__link {
//   font-weight: 500;
// }

// .nuxt__link:hover {
//   color: #002382;
//   @include transition-ease;
// }

.header__text {
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 127%;

  &-special {
    color: #3e00ff;
  }

  &-p {
    color: #868686;
    margin: 1.2rem 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 180%;
  }
}

.container__text {
  margin-top: 10rem;
}

.container3__text {
  font-weight: 600;
  font-size: 28px;
  line-height: 160%;
}

.container__blue {
  margin: auto;
}

.text__1 {
  color: #ffffff;
  font-size: 18px;
  line-height: 160%;
  font-weight: normal;
}

.text__2 {
  font-weight: 600;
  font-size: 38px;
  line-height: 160%;
  color: black;
}

.text__2-special {
  font-weight: 600;
  font-size: 39px;
  line-height: 160%;
  color: #3e00ff;
}
.text__3 {
  font-size: 18px;
  line-height: 180%;
  color: #868686;
}

.text__3-p {
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  margin: 1rem 0;
  color: #868686;
}
.testimony {
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 160%;
    margin: 0.5rem;
    text-align: center;
  }

  &__subtitle {
    font-weight: 400;
    margin: 0.5rem;
    font-size: 18px;
    color: #868686;
    line-height: 160%;
  }

  .card__transition {
    transition: 0.3s ease;
  }

  &__card-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    margin-top: 1rem;
  }

  &__card-caption {
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
  }
}

.article {
  &__title {
    margin: 1rem;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 141.19%;
    /* or 25px */
    text-transform: capitalize;
    color: #202020;
  }

  &__desc {
    margin: 1rem;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */
    color: #595959;
  }

  &__more {
    margin: 1rem;
    font-weight: 500;
    font-size: 12px;
    line-height: 141.19%;
    /* identical to box height, or 17px */
    text-transform: capitalize;
    /* Colour : Font Title */
    color: #171717;
  }
}

.address {
  width: 30%;
}
.push__right {
  margin-left: 5rem;
}

.push__top {
  margin-top: 7rem;
}

@include media-xsAndUp {
  .v-toolbar__content {
    padding: 0;
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
  }
  //HERO

  .container__text {
    margin-top: 5rem;
    font-size: 12px;
    margin-bottom: 0 !important;

    .header__text {
      font-weight: bold;
      font-size: 32px;
      line-height: 130%;

      &-special {
        color: #3e00ff;
      }

      &-p {
        margin: 1.2rem 0;
        font-weight: normal;
        font-size: 1rem;
        line-height: 180%;
      }
    }
  }

  .text__2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 140%;
  }

  .text__3 {
    font-weight: normal;
    font-size: 1rem;
    line-height: 180%;
  }

  //want join?
  .want__join {
    .container__blue {
      margin: 1rem 0;
    }

    .push__right {
      margin-left: 0;
    }

    .text__3-p {
      font-weight: normal;
      font-size: 1rem;
      line-height: 170%;
      margin: 1rem 0;
    }
  }

  //testimony
  .testimony {
    &__title {
      font-weight: 600;
      font-size: 28px;
      line-height: 160%;
    }

    &__subtitle {
      font-weight: normal;
      font-size: 1rem;
      line-height: 160%;
    }
  }

  .footer {
    width: 100%;

    &__container {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
