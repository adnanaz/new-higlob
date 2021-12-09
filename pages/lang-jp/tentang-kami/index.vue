<template>
  <div>
    <v-container class="container-all">
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
      <section ref="awal">
        <!-- Banner 1 -->
        <br />
        <br />
        <br />
        <br />
        <div class="d-flex justify-center">
          <v-card
            elevation="0"
            class="banner-1 pa-4 mb-5"
            style="border-radius: 17px"
            :style="banner1_tentangkami"
          >
            <v-card-title class="card-judul" :style="card_judul">
              会社概要LPKヒグロブ
            </v-card-title>
            <v-card-text class="card-isi" :style="card_isi">
              LPK Higlobは2014年に設立され、
              日本語コース、日本でのインターンシップ、社内研修、
              技術トレーニングプログラムなど。
            </v-card-text>
          </v-card>
          <br />
          <br />
        </div>
      </section>
    </v-container>
    <!-- end Banner 1 -->

    <!-- Histori LPK Higlob -->
    <v-container class="container-all">
      <section class="histori__lpk">
        <h1 class="text-center histori__lpk-h1">LPKヒグロブの歴史</h1>
        <div>
          <v-stepper
            class="histori__lpk-stepper"
            max-width="100%"
            elevation="0"
            alt-labels
            color="black"
            vertical
          >
            <v-stepper-header class="histori__lpk-stepperheader">
              <v-stepper-step class="histori__lpk-stepperstep" step="">
                <span class="histori__lpk-span">2016年6月</span>
                Higlob InternationalEducationの発足とクラスの開始
                日本語、英語、ドイツ語
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step class="histori__lpk-stepperstep" step="">
                <span class="histori__lpk-span">2017年7月</span>
                みらえアカデミー韓国語学習
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step class="histori__lpk-stepperstepkhusus" step="">
                <span class="histori__lpk-span">2018年3月</span>
                労働省が発行した送信機関許可 インドネシア共和国。
              </v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step class="histori__lpk-stepperstep" step="">
                <span class="histori__lpk-span">2021年6月</span>
                省が発行した送信機関許可の延長 インドネシアの労働者。
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
      </section>
    </v-container>
    <!-- END Histori LPK Higlob -->

    <!-- Section 1 -->

    <v-container class="container-all">
      <section>
        <div>
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="7"
              lg="7"
              xl="7"
              class="list-section1 order-sm-1 pt-7"
            >
              <!-- List Visi Perusahaan -->
              <ul
                v-for="(item, id) in visi_perusahaan"
                :key="'A' + id"
                style="list-style-type: none"
              >
                <li>
                  <h2 :style="visi_judul">
                    {{ item.judul_visi }}
                  </h2>
                </li>
                <li :style="visi_isi">
                  <p>{{ item.isi_visi }}</p>
                </li>
              </ul>
              <br />
              <!-- End Visi Perusahaan -->

              <!-- List Misi Perusahaan -->
              <ul
                class=""
                v-for="(item, idnx) in misi_perusahaan"
                :key="'B' + idnx"
                style="list-style-type: none"
              >
                <li>
                  <h2 :style="visi_judul">{{ item.judul_misi }}</h2>
                </li>

                <li>
                  <p>
                    {{ item.isi_misi }}
                  </p>
                </li>
              </ul>
              <!-- End Misi Perusahaan -->
            </v-col>
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="5"
              lg="5"
              xl="5"
              class="order-sm-2 gambar-visimisi"
            >
              <v-img
                class="gambar-visimisi-ijo"
                :src="require('@/assets/images/section1-tentangkami.png')"
                style=""
              ></v-img>
            </v-col>
          </v-row>
          <br />
          <br />
        </div>
      </section>
      <!-- END Section 1 -->
    </v-container>
    <!-- Section 2 -->
    <v-container class="container-all">
      <!-- heading 2 -->
      <section>
        <div class="heading2 text-center">
          <h1 class="h1-heading2" style="font-family: 'poppins'">
            インターンシップの利用規約<br />
            日本LPKヒグロブ
          </h1>
          <br /><br />
        </div>

        <!-- End Heading 2 -->

        <v-row>
          <v-col
            class="order-3 order-sm-3 order-md-1 gambar-section3"
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <v-img
              class="gambar-persyaratan-angel"
              :src="require('@/assets/images/section3-tentangkami.png')"
            ></v-img>
          </v-col>
          <v-col
            class="order-1 order-sm-1 order-md-2"
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <!-- List Persyaratan -->

            <ul class="col-tentangkami" style="list-style-type: none">
              <li>
                <h2
                  class="h2-keseluruhan mb-4"
                  style="
                    font-family: 'poppins';
                    font-size: 18px;
                    font-weight: 600;
                    font-style: normal;
                  "
                >
                  一般的な要件：
                </h2>
              </li>

              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  男性/女性インドネシア市民年齢18〜27歳
                </p>
              </li>

              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  最低限の教育高校/同等
                </p>
              </li>

              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  身体的および精神的に健康（身体的または精神的に障害がない）
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  男性（165cm）と女性（155cm）の最低身長
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  男性/女性インドネシア市民年齢18〜27歳
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  参加者は本当に熱意と意欲を持っています トレーニングを行う
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  高度に訓練され、規則に従い、従うことをいとわない
                  LPKヒグロブによって設定
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  日本語研修/非Excとして日本に来たことはありません
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  犯罪による顔の欠陥、骨折などはありません 入れ墨
                </p>
              </li>
            </ul>
            <!-- End List Pertanyaan -->
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="col-tentangkami order-2 order-sm-2 order-md-3"
          >
            <!-- List Catatan Khusus -->
            <ul class="ul-khusus" style="list-style-type: none">
              <li>
                <h2
                  class="h2-keseluruhan mb-4"
                  style="
                    font-family: 'poppins';
                    font-size: 18px;
                    font-weight: 600;
                    font-style: normal;
                  "
                >
                  特記事項：
                </h2>
              </li>

              <li>
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  参加予定者は、事前に行政に会う必要があります
                  トレーニングプログラムに従ってください
                </p>
              </li>
              <li>
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  教育およびトレーニング中は、参加者が必要です
                  白いシャツ、ジーンズの代わりに黒いズボン、靴を履いている
                  黒とネクタイ
                </p>
              </li>
              <li>
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  靴を履いたスポーツウェアを提供する
                </p>
              </li>
              <li>
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  参加者はLPKヒグロブのルールに従う必要があります
                </p>
              </li>
            </ul>

            <!-- End List Catatan Khusus -->
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- End Section 2 -->

    <!-- Section Persyaratan -->
    <v-container class="container-all" fluid style="background: #f8faff">
      <section
        class="mt-10 persyaratan__khusus"
        :class="!$vuetify.breakpoint.xs ? 'override__container' : ''"
      >
        <v-row class="persyaratan__khusus-row">
          <v-col
            class="persyaratan__khusus-col"
            cols="12"
            xs="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
          >
            <!-- List Persyaratan Khusus -->
            <ul class="col-tentangkami" style="list-style-type: none">
              <li>
                <h2
                  class="h2-keseluruhan mb-4"
                  style="
                    font-family: 'poppins';
                    font-size: 18px;
                    font-weight: 600;
                    font-style: normal;
                  "
                >
                  特別な要件：
                </h2>
              </li>

              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  高い起業家精神を持っている
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  心理テストを含む委員会の選考に合格 と面接テスト
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  見習いプログラム参加者の管理費を支払う
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  KK、KTP、出生証明書、卒業証書のコピー（SD-Last） 各2枚
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  パスポート写真を提出する3x4（10枚）4,5x4,5（4枚）、4x6
                  （4枚）白い背景
                </p>
              </li>
              <li class="ul-tentangkami">
                <p
                  class="p-keseluruhan"
                  style="display: inline-flex; font-family: 'poppins'"
                >
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img>
                  健康診断の結果を提出する（健康診断）
                  党によって任命された健康意図への歯を含む LPKヒグロブ
                </p>
              </li>
            </ul>
            <!-- end List Persyaratan Khusus -->

            <div class="btn-downloadbrosur">
              <v-btn
                style="
                  font-family: 'Poppins', sans-serif;
                  margin-left: 4rem;
                  margin-top: 0.2rem;
                "
                href="https://drive.google.com/file/d/1CBeA0H4rT3Fi2WtKz-GcMf8bq3iL44BV/view?usp=sharing"
                target="_blank"
                class="mb-10 py-6"
                align-end
                color="#3E00FF"
                large
                elevation="0"
                ><v-img
                  left
                  :src="require('@/assets/images/download.png')"
                ></v-img
                ><span
                  class="white--text text-capitalize mx-2"
                  style="font-weight: 400"
                >
                  パンフレットをダウンロード</span
                >
              </v-btn>
            </div>
          </v-col>

          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
            class="gambar-persyaratan"
          >
            <v-img
              class="gambar-persyaratan-img"
              :src="require('@/assets/images/persyaratan-tentangkami.png')"
              style=""
            ></v-img>
          </v-col>
        </v-row>
      </section>
      <!-- End Section Persyaratan -->
    </v-container>

    <v-container>
      <!-- Start Pimpinan LPK -->
      <section class="mt-8">
        <v-row></v-row>
        <h1 class="h1-pimpinan text-center">LPKヒグロブのリーダー</h1>
        <p class="p-pimpinan text-center">
          機関を建設したLPKヒグロブのリーダー <br />になる 発展
        </p>
        <br />

        <v-row>
          <v-col
            v-for="(item, indx) in pimpinan_lpk"
            :key="'C' + indx"
            cols="6"
            xs="6"
            sm="3"
            md="3"
            lg="3"
            xl="3"
          >
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img
                  :src="require(`@/assets/images/${item.gambar_pimpinan}`)"
                ></v-img>
              </li>
              <li>
                <h4 class="h4-pimpinancard">{{ item.nama_pimpinan }}</h4>
              </li>
              <li>
                <p class="p-pimpinancard">{{ item.jabatan_pimpinan }}</p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </section>
      <!-- END Pimpinan LPK Higlob -->
    </v-container>

    <v-container>
      <!-- Start Team IT Development -->
      <section class="mb-5 mt-10">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="d-flex align-center flex-wrap"
            :class="
              $vuetify.breakpoint.xsAndUp ? ' text-center' : ' justify-start'
            "
            ><h1
              class="h1-teamit"
              :style="$vuetify.breakpoint.xs ? 'margin:0 auto' : ''"
            >
              IT開発チーム <br />
              私たち
            </h1></v-col
          >
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="d-flex align-center flex-wrap"
            :class="$vuetify.breakpoint.xs ? ' text-center' : ' justify-end'"
          >
            <p
              class="p-team-it"
              :style="$vuetify.breakpoint.xs ? 'margin:0 auto' : ''"
            >
              開発中は一人で行うことはありません。
              一緒に解決してください、これが私たちがIT開発チームであるところです
            </p>
          </v-col>
        </v-row>

        <br />

        <v-row class="justify-center float-none mt-5">
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/adnan.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">Adnan Aziz Dani</h4></li>
              <li><p class="p-pimpinancard">フロントエンド開発</p></li>
            </ul>
          </v-col>
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/fahreza.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">Fahreza Adi Saputra</h4></li>
              <li><p class="p-pimpinancard">フロントエンド開発</p></li>
            </ul>
          </v-col>
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/lupek.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">Lutfi Surachman</h4></li>
              <li><p class="p-pimpinancard">UI / UXデザイナー</p></li>
            </ul>
          </v-col>
        </v-row>
      </section>
      <!-- END Team IT Development -->
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    visi_perusahaan: [
      {
        id: 0,
        judul_visi: '会社のビジョン',
      },
      {
        id: 1,

        isi_visi: 'グローバルな世界でのキャリアブリッジと成功の構築',
      },
      {
        id: 2,

        isi_visi: ' グローバルな世界へのキャリアブリッジと成功の構築 ',
      },
    ],
    misi_perusahaan: [
      {
        id: 0,

        judul_misi: '会社の使命',
      },
      {
        id: 1,

        isi_misi: ' 競争する準備ができている人材を育成する',
      },
      {
        id: 2,

        isi_misi: '競争するための人材を向上させる',
      },
      {
        id: 3,

        isi_misi: ' 知識、アップグレード、および作業スキルを向上させる ',
      },
    ],

    pimpinan_lpk: [
      {
        gambar_pimpinan: 'pimpinan1.png',
        nama_pimpinan: '先生 Puspita',
        jabatan_pimpinan: '先生 LPK Higlob',
      },
      {
        gambar_pimpinan: 'pimpinan2.png',
        nama_pimpinan: '先生 Taufik',
        jabatan_pimpinan: '先生 LPK Higlob',
      },
      {
        gambar_pimpinan: 'pimpinan3.png',
        nama_pimpinan: '先生 Munir',
        jabatan_pimpinan: '先生 LPK Higlob',
      },
      {
        gambar_pimpinan: 'pimpinan4.png',
        nama_pimpinan: '先生 Nur',
        jabatan_pimpinan: '先生 LPK Higlob',
      },
    ],
  }),
  computed: {
    banner1_tentangkami() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'max-height:190px;border-radius:22px'
        case 'sm':
          return 'max-height:168px'
        case 'md':
          return 'max-width:830px;max-height:160px'
        case 'lg':
          return 'max-width:1200px;max-height:160px'
        case 'xl':
          return 'width:1700px;height:160px'
      }
    },
    card_judul() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:15px'
        case 'sm':
          return 'font-size:22px'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },
    card_isi() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:12px'
        case 'sm':
          return 'font-size:13px'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },
    visi_judul() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:22px;'
        case 'sm':
          return 'font-size:'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },
    visi_isi() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:14px;line-height:2rem;text-align:center'
        case 'sm':
          return 'font-size:'
        case 'md':
          return ''
        case 'lg':
          return ''
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
.override__container {
  margin: 0 5rem;
}
.persyatan__khusus {
  padding: 0 2rem;
}
.histori__lpk {
  &-span {
    margin-left: 4rem;
    margin-bottom: 2rem;
    color: #868686;
  }
}
.v-stepper__header {
  box-shadow: none !important;
}
.v-stepper__label {
  width: 12rem !important;
  line-height: 20px !important;
  font-size: 14px !important;
  text-align: center !important;
  color: #3e00ff !important;
}
.theme--light.v-stepper
  .v-stepper_step:not(.v-stepperstep--active):not(.v-stepperstep--complete):not(.v-stepper_step--error)
  .v-stepper_step_step {
  background: #252525;
}
.theme--light.v-stepper .v-stepper__header .v-divider {
  border-color: #bdbdbd;
}
.col-tentangkami {
  padding: 2rem;
}
.v-application .mb-4 {
  margin-bottom: 26px !important;
}
.p-team-it {
  color: #868686;
  padding-left: 3rem;
  font-size: 14px;
}
.banner-1 {
  background: url('@/assets/images//bg-tentang-kami.svg');
  // :src="require('@/assets/images/kontak-1.png')"
  background-size: cover;
  height: 100vh;
}
.card-judul {
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 145%;
}
.card-isi {
  color: white !important;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 180%;
}
.list-section1 {
  h2 {
    font-family: 'Poppins';
    font-weight: 700;
  }
  p {
    color: #868686;
    font-family: 'Poppins';
    // line-height: 1.1rem;
  }
  .ul-tentangkami.img {
    margin-right: 1rem;
  }
}
.h1-pimpinan {
  font-family: 'poppins';
  line-height: 4rem;
  font-size: 24px;
}
.p-pimpinan {
  font-family: 'poppins';
  color: #868686;
  line-height: 2rem;
  font-size: 15px;
}
.h4-pimpinancard {
  font-family: 'poppins';
  color: #03914d;
  margin-top: 1rem;
}
.p-pimpinancard {
  font-family: 'poppins';
  color: #868686;
  font-size: 13px;
  line-height: 2rem;
}
.h1-teamit {
  font-family: 'poppins';
  font-size: 21px;
}
.p-teamit {
  font-family: 'poppins';
  color: #868686;
  line-height: 1.3rem;
  font-size: 11px;
}
@media screen and (min-width: 0px) and (max-width: 300px) {
  .p-pimpinan {
    font-size: 11px;
  }
  .p-teamit {
    font-size: 10.5px;
  }
}
@media screen and (min-width: 300px) and (max-width: 600px) {
  // Penting
  .v-row {
    margin-left: -30px !important;
    padding: 1rem !important;
  }
  .histori__lpk {
    &-stepperstep {
      margin: 0 auto;
    }
    &-stepperstepkhusus {
      margin: 0 auto;
    }
  }
  .v-divider {
    display: none;
  }

  .v-stepper__label {
    width: 13rem !important;
    line-height: 20px !important;
    font-size: 14px !important;
    text-align: center !important;
    color: #3e00ff !important;
  }

  .gambar-visimisi-ijo {
    margin-left: 4.5rem;
    max-width: 21rem;
  }
  .ul-khusus {
    margin-left: -1rem;
  }
  .v-application ul,
  .v-application ol {
    padding-left: 0 !important;
  }
  .banner-1 {
    max-height: 200px;
  }
  .ul-khusus {
    padding: 1px;
  }
  .h1-heading2 {
    font-size: 20px;
  }
  .col-tentangkami {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .p-pimpinan {
    font-size: 11px !important;
  }
  .p-team-it {
    font-size: 14px;
    text-align: center !important;
    padding: 0 1rem 0 1rem;
  }
  .h1-teamit {
    text-align: center;
  }
  .gambar-persyaratan {
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
  .gambar-persyaratan-angel {
    max-width: 19rem;
    margin: 0 auto;
  }
  .gambar-section3 {
    padding: 2rem;
  }
  .gambar-section1 {
    padding: 1.8rem;
  }
  .list-section1 {
    padding: 1rem;
    padding-left: 3rem;
  }
  .list-section1 h2 {
    font-size: 20px;
    text-align: center;
    margin-left: -2rem;
  }
  .list-section1 p {
    font-size: 14px !important;
    text-align: center;
    margin-left: -2rem;
    line-height: 1.5rem;
  }
  .list-section1 h2 {
    font-size: 20px;
    text-align: center;
  }
  .list-section1 p {
    font-size: 12px;
    text-align: center;
  }
  .h2-keseluruhan {
    font-size: 14px;
    font-weight: 500;
  }
  .p-keseluruhan {
    font-size: 14px;
    font-weight: 400px;
  }

  .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: flex !important;
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .h1-teamit {
    text-align: center;
    margin: 0 auto;
  }
  .histori__lpk-span {
    margin-left: 3rem;
    margin-bottom: 2rem;
    color: #868686;
  }
  .v-stepper__label {
    width: 11rem !important;
    line-height: 20px !important;
    font-size: 14px !important;
    text-align: center !important;
  }
  .p-team-it {
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 14px;
    text-align: center;
    p {
      text-align: center !important;
      padding: 0 5rem 0 5rem;
      font-size: 15px;
      line-height: 2rem;
    }
  }
  .col-tentangkami {
    padding-left: 3rem;
  }
  .gambar-section3 {
    padding: 2rem;
  }
  .gambar-section1 {
    padding: 1.8rem;
  }
  .v-row {
    padding: 2rem !important;
  }
  .list-section1 h2 {
    text-align: center;
  }
  .list-section1 p {
    text-align: center;
  }
  .gambar-visimisi {
    padding: 4rem;
  }
  .gambar-section3 {
    padding: 1rem;
  }
  .gambar-persyaratan {
    padding: 0;
  }
  .gambar-persyaratan-angel {
    max-width: 22rem;
    margin: 0 auto;
  }
  .h1-heading2 {
    font-size: 21px;
  }
  .h2-keseluruhan {
    font-size: 16px;
  }
  .p-keseluruhan {
    font-size: 15px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .h1-teamit {
  }
  .p-teamit {
    p {
      text-align: center !important;
      padding: 0 10rem 0 10rem;
      font-size: 15px;
      line-height: 2rem;
    }
  }
  .list-section1 {
    p {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }
  .col-tentangkami {
    padding: 0rem;
    padding-left: 0rem;
  }
  .p-keseluruhan {
    font-size: 12px;
  }
  .gambar-persyaratan-angel {
    margin-top: 2rem;
  }
  .btn-downloadbrosur {
    margin: 15px 0 0 0;
  }
}
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .h1-teamit {
    text-align: left;
    margin-left: 1.5rem;
  }
  .p-teamit {
    p {
      text-align: center !important;
      padding: 0 18rem 0 18rem;
      font-size: 15px;
      line-height: 2rem;
    }
  }
  .persyaratan_khusus-row {
    padding-left: 5rem !important;
  }
  .p-keseluruhan {
    line-height: 25px;
    font-size: 14px;
  }
  .gambar-persyaratan-img {
    max-width: 35rem;
  }
  .btn-downloadbrosur {
    margin-top: 1rem;
  }
  .col-tentangkami {
    line-height: 0.5rem;
    padding: 32px 0px 0px 0px;
  }
  .gambar-persyaratan-angel {
    margin-top: -1rem;
    max-width: 20rem;
  }
}

@media screen and (min-width: 1904px) {
  .container-all {
    padding: 0 4rem;
  }
  .banner-1 {
    margin-top: 3rem;
  }
  .h1-teamit {
    text-align: left;
    margin-left: 1.5rem;
  }
  .list-section1 {
    padding: 4rem;
  }
  .gambar-visimisi-ijo {
    max-width: 35rem;
    margin: 0 auto;
  }
  .p-teamit {
    p {
      text-align: center !important;
      padding: 0 18rem 0 18rem;
      font-size: 15px;
      line-height: 2rem;
    }
  }
  .persyaratan__khusus-col {
    margin-top: 3rem;
  }
  .persyaratan__khusus-row {
    padding-left: 6rem !important;
  }
  .p-keseluruhan {
    line-height: 25px;
    font-size: 14px;
  }
  .gambar-persyaratan-img {
    max-width: 46rem !important;
    margin-left: 10rem !important;
  }

  .btn-downloadbrosur {
    margin-top: 1rem;
  }
  .col-tentangkami {
    line-height: 0.5rem;
    padding: 32px 0px 0px 0px;
  }
  .gambar-persyaratan-angel {
    margin-top: -1rem;
    max-width: 24rem;
    margin: 0 auto;
  }
}
</style>
