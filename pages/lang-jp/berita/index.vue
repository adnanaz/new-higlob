<template>
  <v-container>
    <section class="section1-berita">
      <!-- Start Banner 1 -->
      <div class="text-center justify-center pembungkus-berita">
        <h1 class="h1-bannerawal">LPKヒグロブのニュースは何ですか</h1>
        <p class="p-bannerawal">
          インターンシップに関連するニュースを読み、LPKヒグロブでのみ海外で働く
        </p>
        <v-row class="d-flex d-inline-flex row-cari">
          <v-col cols="10" style="">
            <v-text-field
              class="kolom-pencarian"
              label="タイトルでニュースを検索"
              outlined
              v-model="searching"
              dense
              height="45px"
              style="width: 19rem; border-radius: 45px"
            ></v-text-field>
          </v-col>
          <v-col cols="2" style="padding: 0; margin-top: 0.5rem">
            <!-- <v-btn class="" fab color="none">
              <img
                class="search-button"
                :src="require('@/assets/images/search-button.png')"
                alt=""
                style="width: 5vh"
              />
            </v-btn> -->
            <v-btn
              height="45px"
              width="45px"
              color="#011B4B"
              small
              class="white--text mt-1"
              fab
            >
              <v-icon> mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <!-- End Banner 1 -->
    </section>

    <!-- Start Section 2 -->

    <section class="section2-beritaterbaru">
      <v-row v-if="!searching">
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
            最新ニュース
          </v-chip>
          <h1 class="berita-h1">
            日本の介護者の条件と給与が高いことを知っている
          </h1>
          <p class="berita-p" style="color: #868686">
            この世には海外でのキャリアを積みたいと思っている人がたくさんいますが、もちろん日本が選ばれます。
            何故ですか？
            これは、日本が高い福利厚生と給与を提供する国であり、さらにすべての人に技術開発があるためです...
          </p>

          <p class="berita-p">
            読み続けて
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
      <div class="my-10">
        <h4 style="font-size: 18px">また読む</h4>
        <hr
          class="my-2"
          style="border-bottom: 2px solid #3e00ff; width: 120px"
        />
      </div>

      <!-- START CARD BERITA LENGKAP -->

      <v-row class="d-flex justify-center section3__row">
        <div v-if="searchingNotFound">
          申し訳ありませんが、お探しのニュースは存在しません。
        </div>
        <v-col
          class="section3__col"
          style="padding: 0"
          v-for="(post, index) in filteredList"
          :key="index"
          cols="12"
          xs="12"
          sm="5"
          md="3"
          lg="3"
          xl="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              height="450px"
              class="ma-5 section3__card"
              :style="
                hover
                  ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px; cursor:pointer;'
                  : 'box-shadow: none'
              "
            >
              <v-card-title class="" style="padding: 0"
                ><v-img
                  class="section3__cardimg"
                  :src="require(`@/assets/images/${post.berita_url}`)"
                ></v-img
              ></v-card-title>
              <v-card-text class="section3__article">
                <h3
                  class="section3__article-h3"
                  style="
                    margin-top: 1rem;
                    margin-left: -0.5rem;
                    color: #202020;
                    font-weight: 500;
                  "
                >
                  {{ post.berita_judul | desc }}
                </h3>
                <p
                  class="section3__article-p"
                  style="
                    margin-top: 1rem;
                    margin-left: -0.5rem;
                    color: #595959;
                    max-width: 276px;
                  "
                >
                  {{ post.berita_isi }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <!-- END CARD BERITA LENGKAP -->

      <div class="text-center mt-5 mb-5">
        <v-pagination
          v-model="page"
          :length="1"
          elevation="0"
          circle
        ></v-pagination>
      </div>

      <h4>ニュースラベル</h4>
      <ul class="mb-10 mt-8" style="list-style-type: none; margin-left: -31px">
        <li
          class="d-flex d-inline-flex"
          v-for="(item, index) in label_isi"
          :key="index"
        >
          <v-btn
            style="border-radius: 25px"
            class="ma-1"
            outlined
            color="#868686"
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
class Post {
  constructor(title, link, desc) {
    this.berita_judul = title
    this.berita_url = link
    this.berita_isi = desc
  }
}

export default {
  data: () => ({
    searchingNotFound: false,
    isShowPagination: false,
    searching: '',
    page: 1,
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
        button_label: '#Caregiver',
      },
    ],

    postList: [
      new Post(
        '日本での仕事をのぞいてみましょう',
        'berita1.png',
        'こんにちわ！ 以前、雇用機会について話し合いました。'
      ),

      new Post(
        '日本へのエンジニアリングプログラム',
        'berita2.png',
        '日本へのエンジニアリング作業プログラムは、とは別のプログラムです。'
      ),
      new Post(
        '日本へのカーギバーインターンシッププログラムの手続き',
        'berita3.png',
        '日本のインターンシッププログラムに登録して参加したい方のために。'
      ),

      new Post(
        '日本へのエンジニアリングプログラム',
        'berita2.png',
        '日本へのエンジニアリング作業プログラムは、とは別のプログラムです。'
      ),
      new Post(
        '海外のD3看護アドボカシー卒業生のための仕事の機会',
        'berita4.png',
        '中央統計局（BPS）によると、失業者の数は...'
      ),

      new Post(
        'とろくしえんきかん',
        'berita2.png',
        'Paraante Higlobは、TOROKU SHIEN KIKAN（TSK）または登録サポート組織です。'
      ),
      new Post(
        '日本の農業・建設作業プログラム ',
        'berita6.png',
        '日本へのエンジニアリングワークプログラムは、とは別のプログラムです。'
      ),

      new Post(
        '私達は雇っています！ 日本での介護者インターンシッププログラム',
        'berita7.png',
        '日本へのエンジニアリングワークプログラムは、とは別のプログラムです。'
      ),
      new Post(
        '1000人のワーキングホリデーの機会（2019）',
        'berita8.png',
        'オーストラリアのワーキングホリデーサブクラス462ビザは毎年受け入れられます...'
      ),
    ],
  }),

  computed: {
    filteredList() {
      let that = this
      return this.postList.filter((post) => {
        let a = post.berita_judul
          .toLowerCase()
          .includes(that.searching.toLowerCase())
        // console.log(a)
        if (a) {
          this.searchingNotFound = false
          return a
        } else {
          this.searchingNotFound = true
          return a
        }
      })
    },
    // filteredList() {
    //   return this.cardberita_gambar.filter((post) => {
    //     return post.berita_judul
    //       .toLowerCase()
    //       .includes(this.searching.toLowerCase())
    //   })
    // },

    bannerberita_gambar() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'margin:auto;max-width:95%'
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
    // card_berita_gambar() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs':
    //       return 'max-height:240px;text-align:center'
    //     case 'sm':
    //       return 'max-height:168px'
    //     case 'md':
    //       return 'max-width:13rem'
    //     case 'lg':
    //       return 'max-width:17rem!important'
    //     case 'xl':
    //       return 'max-width:17rem!important'
    //   }
    // },

    // padding_section2() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs':
    //       return 'padding:2rem'
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
  },
}
</script>

<style lang="scss">
//
.banner-berita {
  max-width: 27rem;
}
.section1-berita {
  margin-top: 10rem;
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
.berita-h1 {
  font-size: 31px;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.berita-p {
  margin-left: 0.5rem;
  line-height: 2rem;
  margin-top: 1rem;
}
.h1-bannerawal {
  margin-bottom: 1rem;
  font-size: 35px;
}
.p-bannerawal {
  color: #868686;
  margin-bottom: 1rem;
}
.row-cari {
  margin-top: 0.5rem;
}
.section2-beritaterbaru {
  margin-top: 5rem;
}
.padding-section2 {
  margin-top: 1rem;
}
.section3 {
  margin-top: 5rem !important;
  &__h4 {
    margin-bottom: 3rem;
    font-size: 22.5px;
  }
}
@media screen and (min-width: 0px) and (max-width: 300px) {
}
@media screen and (min-width: 300px) and (max-width: 600px) {
  .theme--dark.v-btn.v-btn--has-bg {
    background-color: none;
  }
  .search-button {
    width: 54px;
  }
  .padding-section2 {
    margin-top: -6rem;
  }
  .section1-berita {
    padding: 1rem;
    margin-top: 5rem;
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
    // max-height: 200px;
    // padding-left: 2.4rem;
    // margin-bottom: 2rem;
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
      &__row {
        padding: 4rem;
      }
      &__h4 {
        font-size: 18px !important;
        margin-left: 0.6rem;
      }
      &__cardimg {
        height: 3rem !important;
      }
    }
    .v-image.v-responsive.section3__cardimg.theme--light {
      height: 13rem !important;
    }
    .card_berita p {
      padding-right: 9rem;
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
    .pembungkus-berita {
      margin-top: 7rem !important;
    }
    .berita-h1 {
      font-size: 31px !important;
    }
    .section3 {
      &__berita {
      }
      &__card {
        max-height: 483px;
        max-width: 500px;
      }
      &-row {
        margin-top: 10rem !important;
      }
      &__col {
        padding: 0 !important;
      }
    }
    h3.section3__article-h3 {
      margin-top: 1rem;
    }
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
