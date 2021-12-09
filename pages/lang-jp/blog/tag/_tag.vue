<template>
  <div style="min-height: calc(100vh - 288px)">
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
    <v-container v-if="!articles.length == 0" ref="awal">
      <div class="text-center d-flex justify-center bungkus-atas flex-wrap">
        <div class="main">
          <h1>
            {{ articles.length }}
            ラベルの付いた記事 {{ tag.name }}
          </h1>
          <!-- <p>Baca Artikel Berdasarkan Label</p> -->
          <div class="main__search d-flex justify-center" style="width: 100%">
            <v-text-field
              v-model="searching"
              class="mt-5"
              :dense="$vuetify.breakpoint.mdAndDown"
              style="max-width: 75%; box-shadow: none !important"
              append-icon="mdi-magnify"
              outlined
              label="ここでブログを検索"
              rounded
            ></v-text-field>
          </div>
        </div>
      </div>

      <div class="testt-blog ml-8 d-flex flex-wrap align-start flex-column">
        <h2>ラベル</h2>

        <v-chip
          style="border-radius: 25px"
          class="ml-3 btn__category text-capitalize"
          outlined
          color="#3e00ff"
        >
          {{ tag.name }}
        </v-chip>
        <!-- <pre>{{ articles }}</pre> -->
      </div>

      <div class="my-5 blog">
        <div
          class="testt"
          v-for="(article, index) in filteredArticles"
          :key="index"
        >
          <v-hover v-slot="{ hover }">
            <NuxtLink
              :to="{
                path: `/lang-jp/blog/${article.slug}`,
                params: { slug: article.slug },
              }"
            >
              <v-card
                class="ma-1 testt-card"
                :style="
                  hover
                    ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px; cursor:pointer;'
                    : 'box-shadow: none'
                "
              >
                <v-row class="testt-row">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="5"
                    lg="4"
                    xl="4"
                    class="my-auto testt-colkiri"
                    :class="$vuetify.breakpoint.xs ? ' pl-0' : ' pl-10'"
                  >
                    <div>
                      <v-img
                        max-height="500"
                        class="rounded-lg testt-img"
                        :src="require(`@/assets/blog_image/${article.img}`)"
                      ></v-img>
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="7"
                    lg="8"
                    xl="8"
                    class="pb-5 pr-5 pl-5 testt-colkanan"
                  >
                    <div class="blog__article">
                      <h2 class="blog__article-h2">
                        {{ article.title }}
                      </h2>
                      <p class="blog__article-p">
                        {{ article.description }}
                      </p>

                      <div class="d-flex align-center flex-wrap admin__avatar">
                        <v-avatar class="" size="35">
                          <v-img
                            v-if="article.img"
                            :src="
                              require(`@/assets/blog_image/avatar/${article.author.img}`)
                            "
                          ></v-img>
                        </v-avatar>
                        <div
                          style="
                            font-size: 11.2px;
                            margin-left: 5px;
                            color: #00346d;
                          "
                        >
                          に {{ article.author.name }}
                        </div>
                        <v-spacer></v-spacer>
                        <small class="mr-5 admin__avatar-small"
                          >オン : {{ formatDate(article.updatedAt) }}</small
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </NuxtLink>
          </v-hover>
        </div>
      </div>
    </v-container>

    <v-container v-else>
      <div class="text-center d-flex justify-center flex-wrap">
        <div class="main push__top d-flex justify-center flex-column">
          <span class="text-center">
            管理者はラベルの付いた記事を作成していません
            <b> {{ tag.name }}</b>
          </span>
          <span class="mt-2"
            >最初にインスピレーションを待つ..
            <v-icon color="#252525">mdi-emoticon</v-icon>
          </span>
          <div class="text-center mx-auto">
            <v-img
              class="mt-10"
              cover
              :src="require('@/assets/images/astro.png')"
            ></v-img>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="$router.push('/lang-jp/blog')"
                  v-bind="attrs"
                  v-on="on"
                  class="my-11 rounded-md"
                  icon
                >
                  <img :src="require('@/assets/images/btn-kembali.png')" />
                </v-btn>
              </template>
              <span>戻る </span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()

    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles')
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'createdAt',
        'updatedAt',
      ])
      .fetch()
    return {
      articles,
      tag,
    }
  },
  data: () => ({
    searching: '',
  }),
  computed: {
    filteredArticles() {
      return this.articles.filter((item) => {
        if (!this.searching) return this.articles
        return item.title.toLowerCase().includes(this.searching.toLowerCase())
      })
    },
  },
  methods: {
    scrollMeTo(refname) {
      let element = this.$refs[refname]
      // let top = element.offsetTop
      // window.scrollTo(0, top)

      element.scrollIntoView({ behavior: 'smooth' })
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss">
.testt {
  padding: 1rem 20rem;
}
.btn-munggah {
  position: fixed;
  bottom: 0;
  right: 20px;
  top: 550px;
  z-index: 3000;
}
.blog {
  &__pa-left {
    padding-left: 3rem;
    // max-width: 50%;
  }

  &__article {
    h2 {
      line-height: 1.5;
      font-size: 24px !important;
    }

    p {
      font-size: 16px !important;
      line-height: 190%;
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .bungkus-atas {
    margin-top: 7rem;
  }
  h1 {
    font-size: 20px !important;
  }
  .testt-blog {
    // padding: 0 8rem 0 2rem !important;
  }
  .testt {
    padding: 0rem 2rem !important;
    &-row {
      margin-top: 2rem !important;
      margin-bottom: 2rem !important;
    }
    &-colkiri {
      padding-left: 0 !important;
    }
  }

  .admin__avatar {
    &-small {
      margin-top: 0.7rem;
    }
  }

  .btn__category {
    margin-top: 1rem;
  }

  .blog {
    &__pa-left {
      padding-left: 3rem;
      // max-width: 50%;
    }

    &__article {
      h2 {
        line-height: 1.5;
        font-size: 16px !important;
      }

      p {
        font-size: 12px !important;
        line-height: 190%;
      }
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .bungkus-atas {
    margin-top: 7rem;
  }
  .main h1 {
    font-size: 24px;
  }
  .testt-blog {
    // padding: 0 29rem 0 8rem;
  }
  .testt {
    padding: 0rem 2rem;
    &-row {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 0 5rem;
    }
  }

  .admin__avatar {
    &-small {
      margin-top: 0.7rem;
    }
  }

  .btn__category {
    margin-top: 1rem;
  }

  .blog {
    &__pa-left {
      padding-left: 3rem;
      // max-width: 50%;
    }

    &__article {
      h2 {
        line-height: 1.5;
        font-size: 16px !important;
      }

      p {
        font-size: 12px !important;
        line-height: 190%;
      }
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1024px) {
  .main h1 {
    font-size: 24px;
  }
  .bungkus-atas {
    margin-top: 7rem;
  }
  .testt-blog {
    // padding: 0 34rem 0 8rem;
  }
  .testt {
    padding: 0rem 2rem;
    &-row {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 0 5rem;
    }
    &-colkiri {
      margin-top: 0 !important;
    }
  }

  .admin__avatar {
    &-small {
      margin-top: 0.7rem;
    }
  }

  .btn__category {
    margin-top: 1rem;
  }

  .blog {
    &__pa-left {
      padding-left: 3rem;
      // max-width: 50%;
    }

    &__article {
      h2 {
        line-height: 1.5;
        font-size: 16px !important;
      }

      p {
        font-size: 12px !important;
        line-height: 190%;
      }
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1904px) {
  .main h1 {
    font-size: 24px;
  }
  .bungkus-atas {
    margin-top: 9rem;
  }
  .testt-blog {
    // padding: 0 55rem 0 8rem;
  }
  .testt {
    padding: 0rem 2rem;
    &-row {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 0 5rem;
    }
    &-colkiri {
      margin-top: 0 !important;
    }
  }

  .admin__avatar {
    &-small {
      margin-top: 0.7rem;
    }
  }

  .btn__category {
    margin-top: 1rem;
  }

  .blog {
    &__pa-left {
      padding-left: 3rem;
      // max-width: 50%;
    }

    &__article {
      h2 {
        line-height: 1.5;
        font-size: 16px !important;
      }

      p {
        font-size: 12px !important;
        line-height: 190%;
      }
    }
  }
}
@media screen and (min-width: 1904px) {
  .btn__category {
    margin-top: 2rem;
  }
  .testt-blog {
    // padding-right: 97rem;
  }
  .bungkus-atas {
    margin-top: 9rem;
  }
}
</style>
