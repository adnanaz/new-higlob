<template>
  <v-container class="">
    <div class="text-center d-flex justify-center flex-wrap">
      <div class="main">
        <h1>
          Ada Blog Apa di <br v-show="$vuetify.breakpoint.xs" />
          LPK Higlob
        </h1>
        <p>
          Baca blog terkait magang kerja, bekerja luar negeri hanya di LPK
          Higlob
        </p>
        <div class="main__search d-flex justify-center" style="width: 100%">
          <v-text-field
            class="mt-5"
            :dense="$vuetify.breakpoint.mdAndDown"
            style="max-width: 75%; box-shadow: none !important"
            append-icon="mdi-magnify"
            outlined
            v-model="searching"
            label="Cari Blog Disini"
            rounded
          ></v-text-field>
        </div>
      </div>
    </div>
    <div class="blog">
      <v-row v-for="(el, slug) in newest_article" :key="slug">
        <v-col
          v-if="!searching"
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="gambar blog__padding"
        >
          <div>
            <v-img
              max-height="555"
              class="rounded-lg"
              :src="require(`~/assets/blog_image/${el.img}`)"
            ></v-img>
          </div>
        </v-col>
        <v-col
          v-if="!searching"
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="blog__padding"
        >
          <v-chip
            class="chip__berita"
            :class="$vuetify.breakpoint.mdAndDown ? 'mt-7' : ''"
            style="background-color: #eeefff; color: #3e00ff"
            label
          >
            Blog Terbaru
          </v-chip>
          <div class="blog__article">
            <!-- <pre>{{ newest_article }}</pre> -->
            <h2>{{ el.title }}</h2>
            <p>
              {{ el.description }}
            </p>
            <v-btn
              :to="{
                path: `/lang-id/blog/${el.slug}`,
                params: { slug: el.slug },
              }"
              :small="$vuetify.breakpoint.mdAndDown"
              :text="$vuetify.breakpoint.xs"
              class="text-capitalize font-weight-regular lanjut__baca"
              elevation="0"
            >
              Lanjut Baca <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- <v-col
          v-if="searching"
          cols="12"
          class="d-flex justify-center text-center flex-column"
          justify="center"
        >
          <h4>Maaf Blog yang kamu cari tidak ada, coba cari lagi ya..</h4>
        </v-col> -->

        <!-- MORE ? -->
        <v-col
          cols="12"
          class="d-flex blog__padding"
          :style="
            $vuetify.breakpoint.xs ? 'padding:0 16px; margin:2rem 0;' : ''
          "
        >
          <div class="baca__lainya">Baca juga lainnya</div>
          <v-spacer></v-spacer>
          <div class="divider"></div>
        </v-col>
        <!-- CARD BLOG -->
        <v-col
          cols="12"
          :class="
            $vuetify.breakpoint.mdAndDown
              ? 'd-flex align-center justify-center flex-wrap'
              : 'd-flex align-center justify-space-start flex-wrap'
          "
        >
          <div
            class="card__margin"
            v-for="article of filteredArticles"
            :key="article.slug"
          >
            <v-hover v-slot="{ hover }">
              <NuxtLink
                :to="{
                  path: `/lang-id/blog/${article.slug}`,
                  params: { slug: article.slug },
                }"
              >
                <v-card
                  :max-width="$vuetify.breakpoint.xs ? '240px' : '300px'"
                  :height="$vuetify.breakpoint.xs ? '360px' : '444px'"
                  :class="$vuetify.breakpoint.xs ? 'ma-0' : 'cards ma-5'"
                  :style="
                    hover
                      ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px; cursor:pointer;'
                      : 'box-shadow: none'
                  "
                >
                  <v-card-title
                    class="d-flex justify-center"
                    :class="$vuetify.breakpoint.xs ? 'pa-0' : 'px-2 py-3'"
                  >
                    <v-img
                      v-if="article.img"
                      :src="require(`@/assets/blog_image/${article.img}`)"
                    ></v-img>
                  </v-card-title>

                  <v-card-text class="pa-0 cards__text">
                    <h3>{{ article.title }}</h3>
                    <p class="">
                      {{ article.description | desc }}
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
                        {{ article.author.name }}
                      </div>
                      <v-spacer></v-spacer>
                      <small>Pada : {{ formatDate(article.updatedAt) }}</small>
                    </div>
                  </v-card-text>
                </v-card>
              </NuxtLink>
            </v-hover>
          </div>
        </v-col>

        <v-col class="blog__padding" cols="12">
          <h2>Label</h2>
          <ul class="mb-10" style="list-style-type: none; margin-left: -31px">
            <li
              class="d-flex d-inline-flex"
              v-for="tag of tags"
              :key="tag.slug"
            >
              <NuxtLink :to="`/lang-id/blog/tag/${tag.slug}`" class="">
                <v-btn
                  style="border-radius: 25px"
                  class="ma-1 btn__category text-capitalize"
                  outlined
                  color="#868686"
                >
                  {{ tag.name }}
                </v-btn>
              </NuxtLink>
            </li>
          </ul>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let articles = await $content('articles')
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'createdAt',
        'updatedAt',
      ])
      .sortBy('createdAt', 'desc')
      .fetch()

    let newest_article = await $content('articles')
      .sortBy('createdAt', 'desc')
      .limit(1)
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

    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    // console.log(articles)

    const nextPage = articles.length === 5
    const posts = nextPage ? articles.slice(0, -1) : articles

    return {
      articles,
      newest_article,
      tags,
      nextPage,
      posts,
    }
  },

  data: () => ({
    searchingNotFound: false,
    isShowPagination: false,
    searching: '',
    status: false,
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
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
  },
}
</script>

<style lang="scss">
.main {
  margin-top: 10rem;
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
  }
}

.blog {
  &__article {
    h2 {
      padding: 1rem 0;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 139%;
    }

    p {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 170%;
      /* or 31px */

      color: #595959;
    }
  }
}

.cards {
  &__text {
    h3 {
      margin: 10px 0;
      padding: 0 1rem;
      color: #202020;
    }

    p {
      color: #595959;
      padding: 0 1rem;
    }

    small {
      padding: 0 1rem;
      color: #00346d;
    }

    .admin__avatar {
      padding: 0 1rem;
    }
  }
}

.btn__category:hover {
  color: #3e00ff !important;
}

.blog__padding {
  padding: 0 2.5rem;
  margin-top: 3rem;
  h2 {
    margin-bottom: 1rem;
  }
}

.baca__lainya {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 139%;
}

.divider {
  border-bottom: 3px solid #3e00ff;
  width: 85px;
  margin: 1rem;
}

@media screen and (min-width: 300px) and (max-width: 503px) {
  .main {
    margin-top: 6rem;
    margin-bottom: 0rem;
    h1 {
      font-size: 24px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 13px;
      margin: 1rem 0;
    }
  }

  .blog__padding {
    padding: 0 1rem;
  }

  .gambar {
    margin-top: 1.7rem;
  }

  .baca__lainya {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 139%;
    margin-top: 1rem;
  }

  .divider {
    border-bottom: 3px solid #3e00ff;
    width: 85px;
    margin: 0.5rem;
  }

  .blog {
    &__article {
      h2 {
        padding: 1rem 0;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 139%;
        margin-bottom: 0;
      }

      .lanjut__baca {
        padding: 0;
        letter-spacing: 0.5px;
      }

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 170%;
        /* or 31px */

        color: #595959;
      }
    }
  }

  .card__margin {
    margin: 1rem;
  }
}

@media screen and (min-width: 504px) and (max-width: 600px) {
  .card__margin {
    margin: 1rem;
  }
}

@media screen and (min-width: 600px) and (max-width: 1024px) {
  .main {
    margin-top: 6rem;
    margin-bottom: 1.5rem;
    h1 {
      font-size: 28px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
      margin: 1rem 0;
    }
  }

  .blog__padding {
    padding: 0 5rem;
  }

  .baca__lainya {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 139%;
    margin-top: 1rem;
  }

  .divider {
    border-bottom: 3px solid #3e00ff;
    width: 85px;
    margin: 0.5rem;
  }

  .blog {
    &__article {
      h2 {
        padding: 1rem 0;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 139%;
      }

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 170%;
        /* or 31px */

        color: #595959;
      }
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1366px) {
  .main {
    margin-top: 6rem;
    margin-bottom: 1.5rem;
    h1 {
      font-size: 28px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
      margin: 1rem 0;
    }
  }

  .blog__padding {
    padding: 0 5rem;
  }

  .baca__lainya {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 139%;
    margin-top: 3rem;
  }

  .divider {
    border-bottom: 3px solid #3e00ff;
    width: 85px;
    margin: 0.5rem;
  }

  .chip__berita {
    margin-top: 2rem;
  }

  .blog {
    &__article {
      h2 {
        padding: 1rem 0;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 139%;
      }

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 170%;
        /* or 31px */

        color: #595959;
      }
    }
  }
}
</style>
