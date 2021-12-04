<template>
  <div :class="$vuetify.breakpoint.xs ? 'mx-0' : 'mx-0'">
    <!-- <v-container
      :class="!$vuetify.breakpoint.xs ? 'override__container' : 'mx-0'"
    >
    </v-container> -->
    <div class="hero__utama">
      <template>
        <v-parallax
          class="hero__utama-parallax"
          dark
          :src="require('@/assets/images/hero-landing-page.png')"
        >
          <v-row class="hero__utama-row" align="center" justify="center">
            <v-col class="text-center hero__utama-col" cols="12">
              <h1 class="mb-5 hero__utama-h1">
                LPKヒグロブへようこそ参加
                <span class="hero__utama-h1special"
                  >あなたの夢を手に入れよう</span
                >
              </h1>
              <p class="hero__utama-p text-center">
                こんにちはグローバルはあなたが留学や海外で働くというあなたの夢を達成するための扉です。
                私たちはあなたが言語スキルとすべてを提供するという形で準備から始めるのを助けます
                必要な情報。 準備の統合ソリューション、 教育、海外で働くこと。
              </p>

              <div class="text-center">
                <v-btn
                  class="ma-2 text-capitalize"
                  style="border-color: #ff9900; font-weight: 300"
                  outlined
                  color="white"
                >
                  はじめましょう
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-parallax>
      </template>
    </div>

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
            事業開発のパートナー
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
            <h1 class="introduction__directur-h1">
              イントロダクションディレクター
            </h1>
            <p class="introduction__directur-p">優秀で温かいおもてなしを。</p>
            <p class="introduction__directur-p">
              私たちの組織は勤勉な専門家の集まりであり、
              経験豊富でダイナミックで献身的な
              パートナーに高品質で優れたビジネスソリューションを提供します。
            </p>
            <p class="introduction__directur-p">
              私たちは、クリエイターとシーカーの間を仲介することを強く望んでいます
              仕事。 関係を促進するための私たちの証明されたコミットメント
              雇用主と従業員の親密さが私たちの組織を作ります
              対処するために国内で最高の1つ。
            </p>
            <p class="introduction__directur-p">
              私たちはあなたに最高のサービスを提供したいと思っています と会社。
              PTをお選びいただきありがとうございます。 メインレイヒグロブ
              あなたのビジネスパートナーとして。
              私たちはあなたに私たちの最高のサービスを保証します 常に。
            </p>
            <p class="introduction__directur-p">ありがとうございました。</p>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- ================================END BIKINAN FAH INTRODUCTION DIRECTURE =======================================-->

    <!-- =============================== BIKINAN FAH Program Kerja Yang Diunggulkan =======================================-->
    <v-container>
      <section class="program__kerja">
        <h3 class="program__kerja-h3 text-center">
          広範な作業プログラムを持っている
        </h3>
        <h1 class="program__kerja-h1 text-center">
          注目のLPKヒグロブワークプログラム
        </h1>
        <p class="program__kerja-patas text-center">
          お客様のニーズをサポートするさまざまなプログラムを提供しています
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
                  <h4 class="program__kerja-h4">看護婦</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                特にあなたのような人のための看護師としてのワークプログラム
                興味がある
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
                  <h4 class="program__kerja-h4">見習い</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                ぎのうじすすい見習いプログラム、<br />
                TG tokutei Ginou /SSW と Gakko
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
                  <h4 class="program__kerja-h4">工事</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                としての日本への作業プログラム <br />技術者または建設の分野で。
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
                  <h4 class="program__kerja-h4">農業</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                プログラムへの参加に興味のある方のためのワークプログラム
                日本の農業
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
                  <h4 class="program__kerja-h4">食品加工</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                働きたい人のための日本への食品加工プログラム 日本では
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
                  <h4 class="program__kerja-h4">介護者</h4>
                </li>
              </ul>
              <p class="program__kerja-p">
                仕事に興味のある方のための日本へのカーギバーワークプログラム
                日本では
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
          私たちはグローバル市場にサービスを提供します
        </h1>
        <p class="pasar__global-p text-center">
          私たちはあなたが達成するのを助けるために世界中でマーケティングを拡大しています
          夢
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
              あなたがあなたの労働力を増やすのを手伝う
            </h4>
            <h1 class="tenaga__indonesia-h1">
              なぜインドネシア人労働者を選ぶのか？
            </h1>
            <p class="tenaga__indonesia-p">
              世界が知っているように、インドネシアは 人口が多い。
              グローバリゼーションにより、配置サービス 海外事業は一歩踏み出し、
              インドネシアの労働者は彼らの気概を証明する。 力
              インドネシアの仕事は、新しい洞察とアプローチをもたらします
              私たちの知識の資格を備えたサービス提供、 経験、態度、スキル。
              そして多くのインドネシア人労働者
              のような様々な産業部門で海外で働く人
              クルーズ船業界を含むホスピタリティ業界、専門家
              ヘルスケア、看護、製造、その他多数。
              あなたのビジネスの成功した完了を時間通りに達成するために
              経済的で、それらを使用することが重要です
              費用効果の高い方法での資格とスキル
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
        <h4 class="tentang__indonesia-h4 text-center">
          インドネシアで何が起こっているのですか？
        </h4>
        <h1 class="tentang__indonesia-h1 text-center">インドネシアについて</h1>

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
                インドネシアの現在の人口は276,446,216人です。
                2021年7月7日水曜日、Worldometerの詳細に基づく 最新の国連データ
              </li>
              <li class="tentang__indonesia-li">
                インドネシア2020年の人口は273,523,615人と推定されています
                国連のデータによると、年の半ば。
              </li>
              <li class="tentang__indonesia-li">
                インドネシアの人口は全世界の3.51％に相当します 人口。
              </li>
              <li class="tentang__indonesia-li">
                インドネシアは国のリストで4位にランクされています（そして
                依存関係）人口による。
              </li>
              <li class="tentang__indonesia-li">
                インドネシアの人口密度は1平方キロメートルあたり151人（391人）
                mi2あたり）。
              </li>
              <li class="tentang__indonesia-li">
                総面積は1,811,570平方キロメートル（699,451平方マイル）です。)
              </li>
              <li class="tentang__indonesia-li">
                人口の56.4％が都市部です（2020年には154,188,546人）
              </li>
              <li class="tentang__indonesia-li">
                インドネシアの年齢の中央値は29.7歳です
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
                  style="font-weight: 500; font-size: 13px; line-height: 151.7%"
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
                <v-sheet height="70%" tile>
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
          <div class="pa-2 yakin-bungkus">
            <h5
              class="text__1"
              :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
            >
              広範なネットワークを持っている
            </h5>
            <h2 class="text__2 mt-2 mb-3">
              何があなたを確実に選ぶのか
              <span class="text__2-unik" style="color: #3e00ff"
                >LPK Hi Global</span
              >
            </h2>
            <p
              class="text__3"
              :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : ''"
            >
              Higlobは、
              インターンシップや海外での仕事、そしてグローバルなこんにちは
              あなたの情熱に合った会社で働くのを手伝ってください
              あなたが持っていること。
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
        <v-row class="bungkus-row">
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
                style="color: #ffffff"
              >
                私たちと一緒に未来を築き始めましょう
              </h5>
              <h2
                class="text__2"
                style="color: #ffffff"
                :style="$vuetify.breakpoint.xs ? 'font-size: 32px;' : ''"
              >
                参加に興味がありますか
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
                準備、教育、および 海外での就職の機会を簡単に、快適に、そして
                信頼できる、こんにちはグローバル。
                取得するにはお問い合わせください より完全で最新の情報。
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
                  お問い合わせ
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
            <div :class="$vuetify.breakpoint.xs ? 'mx-auto' : 'mx-auto '">
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
              <h1 class="testimony__title">最新ニュース</h1>
              <h3 class="testimony__subtitle text-center">
                仕事情報、準備の最新ニュースを入手
                仕事とインターンシップだけでなく
                <br v-show="!$vuetify.breakpoint.xs" />
                LPK HiGlobalでのみその他の情報
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
                      <small class="article__more">読み続けて</small>
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
                ニュースをもっと読む
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
          title: '日本への工学プログラム',
          desc: '日本へのエンジニアリング作業プログラムは、他のプログラムとは異なるプログラムです。',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article1.png',
          title: '日本で介護者になるための高い要件と給与を知っている',
          desc: '日本の介護福祉士の職業は非常に必要とされており、利益を保証する職業の1つです。',
        },
        {
          author: 'Adnan Aziz D',
          img_url: 'article2.png',
          title: '就職の機会またはD3看護アドボカシー海外卒業生 ',
          desc: '中央統計局（BPS）によると、失業者の数',
        },
      ],
      testimony_card: [
        {
          author: 'Michael Dustin',
          image: 'model6.png',
          caption:
            '私の夢を実現するのを助けてくれたグローバルなこんにちは友達に感謝します',
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
          title: 'こんにちはグローバルにはすでに数百人以上の学生がいます',
          description:
            ' こんにちはグローバルには500人以上の学生が参加し、彼らの夢を実現するのを助けました',
        },
        {
          icon: 'icon2.png',
          height: '250px',
          height_custom: '265px',
          title: 'Higlobは3年間運用されています',
          description:
            '過去3年間で、higlobの会社は成長し、多くの学生が夢を実現するのを支援してきました。',
        },
        {
          icon: 'icon3.png',
          height: '223px',
          height_custom: '250px',
          title: 'こんにちはグローバルは様々なサービスを提供してきました',
          description:
            'こんにちはグローバルはあなたが私たちに参加するのを簡単にするさまざまなサービスを提供しています',
        },
        {
          icon: 'icon4.png',
          height: '294px',
          height_custom: '294px',
          title: 'Higlobはさまざまな国とつながっています',
          description:
            'Higlobは、あなたが夢を実現するのを支援することを目的として、さまざまな国とつながり、協力してきました。',
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
  padding-right: 6rem;
  padding-left: 2rem;
  font-size: 20px !important;
}
.text__1 {
  font-size: 12px !important;
  line-height: 160%;
}

.hero__utama {
  &-parallax {
    height: 565px !important;
  }
  &-h1special {
    color: #00ffa3;
  }
  &-h1 {
    padding: 0px 23rem 0 23rem;
    margin-top: 8rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 135%;
    /* or 68px */
    margin-bottom: 30px !important;
    text-align: center;

    color: #ffffff;
  }
  &-p {
    padding: 0 21.9rem 0 21.9rem;
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
  margin-top: 4rem;
  margin-bottom: 4rem;
  &-h1 {
    margin-bottom: 1rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 160%;
    /* identical to box height, or 58px */

    letter-spacing: 0.003em;

    /* Colour : Font Title */

    color: #252525;
  }
  &-colkanan {
    margin-left: -23px;
    margin-top: 1rem;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 170%;
    /* or 27px */

    letter-spacing: 0.003em;

    color: #000000;
  }
  &-img {
    max-width: 25rem;
    margin: 0 auto;
  }
}

.program__kerja {
  margin-bottom: 5rem;
  &-h3 {
    color: #03914d;
    font-size: 14px;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 170%;
    /* or 54px */
    letter-spacing: 0.003em;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 22rem 0 22rem;
  }
  &-patas {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* identical to box height, or 29px */
    text-align: center;

    /* Colour : Font Paragraf */

    color: #868686;
  }
  &-row {
    margin-top: 3rem;
    margin-left: 2rem;
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
    font-size: 18px;
    line-height: 160%;
    /* or 35px */
    color: #000000;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    padding-right: 2rem;
    line-height: 26px;
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
  margin-top: 1rem;
  &-section {
    height: 452px;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
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
    font-size: 14px;
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
    margin-top: 1rem;
  }
}

.tenaga__indonesia {
  margin-top: 12rem;
  &-h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* identical to box height, or 29px */
    color: #03914d;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 170%;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-right: 11rem;
    /* or 54px */
    /* Colour : Font Title */
    color: #252525;
  }
  &-colkiri {
    margin-top: 3rem;
  }
  &-p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 190%;
    padding-right: 7rem;
    /* or 34px */
    letter-spacing: 0.003em;
    color: #000000;
  }
  &-img {
    max-width: 22rem;
    margin-left: -25px;
  }
}

.tentang__indonesia {
  margin-top: 3rem;
  &-h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* identical to box height, or 29px */
    color: #03914d;
  }
  &-h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 170%;
    /* or 54px */
    /* Colour : Font Title */
    color: #252525;
  }
  &-colkiri {
    margin-top: 4rem;
    padding-right: 4rem;
  }
  &-row {
    margin-top: 2rem;
  }
  &-li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 190%;
    /* or 34px */
  }
}

.statistik__indonesia {
  margin-top: 3rem;
}
//300-600
@media screen and (min-width: 300px) and (max-width: 600px) {
  .v-window.v-item-group.theme--dark.v-carousel {
    height: 349px !important;
  }
  .v-application--is-ltr .v-window__next {
    right: -17px !important;
  }
  .v-application--is-ltr .v-window__prev {
    left: -17px !important;
  }
  .testimony__title {
    font-weight: 600;
    font-size: 20px !important;
    line-height: 160%;
  }
  .testimony__subtitle {
    font-weight: 400;
    margin: 0.5rem;
    font-size: 12px !important;
    color: #868686;
    line-height: 160%;
  }
  .override__container {
    margin: 0 !important;
  }
  .yakin-bungkus {
    padding: 1rem;
  }
  .container3__text {
    font-size: 18px !important;
    line-height: 160%;
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }

  .container__blue {
    padding: 1.5rem;
    &-img {
      width: calc(100vh - 100px);
      max-width: 20rem !important;
      margin: 0 auto !important;
    }
  }
  .text__3-p {
    font-weight: normal;
    font-size: 12px !important;
    line-height: 160%;
    margin: 1rem 0;
    color: #868686;
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
      font-size: 20px !important;
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
      padding-left: 2.8rem;
      margin-left: -16px;
      margin-top: 1rem;
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
      font-size: 12px;
    }
    &-img {
      width: calc(100vh - 100px);
      max-width: 18rem;
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
      font-size: 14px;
    }
    &-p {
      font-size: 12px;
    }
    &-card {
      margin-bottom: 1rem;
    }
    &-row {
      padding-left: 0rem;
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
    &-colkiri {
      padding-left: 2rem;
    }
    &-h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
      margin-bottom: 1rem;
      margin-top: 7px;
      padding-right: 1rem;
    }
    &-p {
      font-size: 12px;
      line-height: 190%;
      padding-right: 2rem;
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
      font-size: 12px;
      line-height: 190%;
      /* or 27px */
    }
    &-colkiri {
      margin-top: 0;
      padding-right: 1rem;
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
      max-width: 30rem !important;
      margin: 0 auto !important;
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
    &-img {
      width: calc(100vh - 100px);
      max-width: 23rem !important;
      margin: 0 auto !important;
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
//1264-1904
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .text__2 {
    font-weight: 600;
    font-size: 34px;
    line-height: 160%;
    color: black;
  }
  .container__blue {
    &-img {
      width: calc(100vh - 100px);
      margin: 0 12rem !important;
      max-width: 34rem;
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

.text__1 {
  color: #ffffff;
  font-size: 14px;
  line-height: 160%;
  font-weight: normal;
}

.text__2 {
  font-weight: 600;
  font-size: 30px !important;
  line-height: 160%;
  color: black;
}

.text__2-special {
  font-weight: 600;
  font-size: 30px;
  line-height: 160%;
  color: #3e00ff;
}
.text__3 {
  font-size: 12px !important;
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

  //want join?
  .want__join {
    .push__right {
      margin-left: 0;
    }
  }

  //testimony

  .footer {
    width: 100%;

    &__container {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
