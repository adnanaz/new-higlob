<template>
  <div>
    <v-container>
      <section>
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
              会社概要 LPK Higlob
            </v-card-title>
            <v-card-text class="card-isi" :style="card_isi">
              LPK
              Higlobは2014年に設立され、日本語コース、日本へのインターンシップ、社内トレーニング、技術トレーニングプログラムなどを行っています。
            </v-card-text>
          </v-card>
          <br />
          <br />
        </div>
      </section>
    </v-container>
    <!-- end Banner 1 -->

    <!-- Section 1 -->

    <v-container>
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
                v-for="(item, idx) in visi_perusahaan"
                :key="idx"
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
                v-for="(item, id) in misi_perusahaan"
                :key="id"
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
    <v-container>
      <!-- heading 2 -->
      <section>
        <div class="heading2 text-center">
          <h1 class="h1-heading2" style="font-family: 'poppins'">
            LPKヒグロブ日本語インターンシップの利用規約
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
                  男性/女性インドネシア市民年齢18-27歳
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
                  男性/女性インドネシア市民年齢18-27歳
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
                  参加者は本当にトレーニングをする情熱と意欲を持っています
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
                  高度に訓練され、LPKヒグロブによって設定された規則に従い、従うことをいとわない
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
                  犯罪による顔の欠陥、骨折、入れ墨はありません
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
                  参加予定者は、トレーニングプログラムに参加する前に、管理を遂行する必要があります。
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
                  教育およびトレーニング中、参加者は白いシャツ、ジーンズの代わりに黒いズボン、黒い靴、ネクタイを着用する必要があります
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
                  靴を備えたスポーツウェアを提供する
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
                  参加者はLPKHiglobのルールに従う必要があります
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
    <v-container fluid style="background: #f8faff">
      <section
        class="mt-10"
        :class="!$vuetify.breakpoint.xs ? 'override__container' : ''"
      >
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
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
                  心理テストや面接テストなど、委員会の選考に合格する
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
                  KK、KTP、出生証明書、卒業証書（SD-Last）のコピー各2枚
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
                  パスポート写真を提出する3x4（10枚）4,5x4,5（4枚）、4x6（4枚）白い背景
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
                  LPKヒグロブが指定した健康診断書に歯を含む健康診断の結果を提出してください
                </p>
              </li>
            </ul>
            <!-- end List Persyaratan Khusus -->

            <v-btn
              style="
                font-family: 'Poppins', sans-serif;
                margin-left: 4rem;
                margin-top: 0.2rem;
              "
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
          開発のための制度を構築したLPKヒグロブのリーダー
        </p>
        <br />

        <v-row>
          <v-col
            v-for="(item, id) in pimpinan_lpk"
            :key="id"
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
            class="d-flex justify-start"
            ><h1
              class="h1-teamit"
              :class="
                $vuetify.breakpoint.xsAndUp
                  ? 'justify-center;mx-auto'
                  : 'justify-center'
              "
              :style="$vuetify.breakpoint.xsAndUp ? 'text-center' : 'text-left'"
            >
              IT開発チーム
            </h1></v-col
          >
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="d-flex justify-end"
          >
            <p
              class="p-team-it"
              :class="
                $vuetify.breakpoint.xsAndUp ? 'justify-center' : 'justify-end'
              "
              :style="
                $vuetify.breakpoint.xsAndUp ? 'text-center' : 'text-center'
              "
            >
              開発では、一人で行うのではなく、一緒に完成させます。ここがIT開発チームです。
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
              <li><h4 class="h4-pimpinancard">アドナンアジズダニ</h4></li>
              <li><p class="p-pimpinancard">フロントエンド開発</p></li>
            </ul>
          </v-col>
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/fahreza.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">ファレザアディサプトラ</h4></li>
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
        id: 1,
        judul_visi: '会社のビジョン',
      },
      {
        id: 2,
        isi_visi: 'グローバルな世界でのキャリアブリッジと成功の構築',
      },
      {
        id: 3,
        isi_visi: ' グローバルな世界へのキャリアブリッジと成功の構築 ',
      },
    ],

    misi_perusahaan: [
      {
        id: 1,
        judul_misi: '会社の使命',
      },
      {
        id: 2,
        isi_misi: ' 競争する準備ができている人材を育成する',
      },
      {
        id: 3,

        isi_misi: '競争するための人材を向上させる',
      },
      {
        id: 4,

        isi_misi: ' 知識、アップグレード、および作業スキルを向上させる ',
      },
    ],

    // persyaratan_umum: [
    //   {
    //     judul_persyaratan: '一般的な要件：',
    //   },
    //   {
    //     isi_persyaratan: '男性/女性インドネシア市民年齢18-27歳 ',
    //   },
    //   {
    //     isi_persyaratan: 'Pendidikan terakhir minimal SMU/Sederajat ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Sehat Jasmani Rohani (Tidak cacat fisik maupun mental) ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Tinggi badan pria minimal (165cm) dan wanita (155cm) ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Peserta benar - benar memiliki semangat dan kemauan yang untuk melakukan pelatihan ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Berdisiplin tinggi, mau mematuhi dan menaati peraturan yang ditetapkan LPK Higlob ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Belum pernah datang ke jepang sebagai training/Non Exc jepang ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Tidak cacat muka karna kriminal, patah tulang dan tidak bertato ',
    //   },
    // ],

    // catatan_khusus: [
    //   {
    //     judul_catatan: 'Catatan Umum : ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_catatan:
    //       'Calon peserta diharuskan memenuhi admnistrasi sebelum mengikuti program diklat ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_catatan:
    //       'Selamat mengikuti pendidikan diklat peserta di wajibkan mengenakan kemeja putih, celana hitam bukan jeans, sepatu hitam dan dasi ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_catatan: 'Sehat Jasmani Rohani (Tidak cacat fisik maupun mental)  ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_catatan: 'Menyediakan pakaian olahraga lengkap dengan sepatunya  ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_catatan:
    //       'Peserta wajib mengikuti tata tertib yang ada di LPK Higlob ',
    //   },
    // ],

    // persyaratan_khusus: [
    //   {
    //     judul_persyaratan: 'Persyaratan Umum :',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan: 'Laki-laki / Perempuan WNI Usia 18 - 27 Tahun ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan: 'Pendidikan terakhir minimal SMU/Sederajat ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan:
    //       'Sehat Jasmani Rohani (Tidak cacat fisik maupun mental) ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan:
    //       'Tinggi badan pria minimal (165cm) dan wanita (155cm) ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan:
    //       'Peserta benar - benar memiliki semangat dan kemauan yang untuk melakukan pelatihan ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan:
    //       'Berdisiplin tinggi, mau mematuhi dan menaati peraturan yang ditetapkan LPK Higlob ',
    //   },
    //   {
    //     checklist: 'checklist.svg',
    //     isi_persyaratan:
    //       'Belum pernah datang ke jepang sebagai training/Non Exc jepang ',
    //   },
    //   {
    //     isi_persyaratan:
    //       'Tidak cacat muka karna kriminal, patah tulang dan tidak bertato ',
    //   },
    // ],

    pimpinan_lpk: [
      {
        id: 1,

        gambar_pimpinan: 'pimpinan1.png',
        nama_pimpinan: 'レザラマダン',
        jabatan_pimpinan: 'LPKヒグロブのディレクター',
      },
      {
        id: 2,

        gambar_pimpinan: 'pimpinan2.png',
        nama_pimpinan: 'アグスカヒョプトロ',
        jabatan_pimpinan: 'LPKヒグロブのマネージャー',
      },
      {
        id: 3,

        gambar_pimpinan: 'pimpinan3.png',
        nama_pimpinan: 'スラヤ姫',
        jabatan_pimpinan: 'リードマーケティングLPKヒグロブ',
      },
      {
        id: 4,
        gambar_pimpinan: 'pimpinan4.png',
        nama_pimpinan: '  美しいデーヴィー',
        jabatan_pimpinan: 'LPKヒグロブアドバイザー',
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
  // h1_teamit() {
  //   switch (this.$vuetify.breakpoint.name) {
  //     case 'xs':
  //       return 'text-align:center'
  //     case 'sm':
  //       return ''
  //     case 'md':
  //       return ''
  //     case 'lg':
  //       return ''
  //     case 'xl':
  //       return ''
  //   }
  // },

  // p_teamit() {
  //   switch (this.$vuetify.breakpoint.name) {
  //     case 'xs':
  //       return ''
  //     case 'sm':
  //       return ''
  //     case 'md':
  //       return ''
  //     case 'lg':
  //       return ''
  //     case 'xl':
  //       return ''
  //   }
  // },
}
</script>

<style lang="scss">
.override__container {
  margin: 0 5rem;
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
  .gambar-visimisi-ijo {
    margin-left: -0.5rem;
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
    margin-top: -1rem;
  }
  .p-pimpinan {
    font-size: 11px !important;
  }
  .p-teamit {
    font-size: 10.5px;
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
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .h1-teamit {
    text-align: center;
  }
  .p-teamit {
    p {
      text-align: center !important;
      padding: 0 5rem 0 5rem;
      font-size: 15px;
      line-height: 2rem;
    }
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
    padding: 6rem;
  }
  .gambar-section3 {
    padding: 10rem;
  }
  .gambar-persyaratan {
    padding: 5rem;
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
    text-align: center;
  }
  .p-teamit {
    p {
      text-align: center !important;
      padding: 0 10rem 0 10rem;
      font-size: 15px;
      line-height: 2rem;
    }
  }
  .p-keseluruhan {
    font-size: 14px;
  }
  .gambar-persyaratan-angel {
    margin-top: 2rem;
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
  .p-keseluruhan {
    line-height: 20px;
    font-size: 14px;
  }
  .col-tentangkami {
    line-height: 0.5rem;

    padding: 47px 0px 0px 0px;
  }
  .gambar-persyaratan-angel {
    margin-top: 2rem;
  }
}
</style>
