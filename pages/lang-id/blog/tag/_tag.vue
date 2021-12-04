<template>
  <div style="min-height: calc(100vh - 288px)">
    <v-container v-if="!articles.length == 0">
      <div class="text-center d-flex justify-center flex-wrap">
        <div class="main">
          <h1>
            {{ articles.length }}
            Artikel yang berlabel {{ tag.name }}
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
              label="Cari Blog Disini"
              rounded
            ></v-text-field>
          </div>
        </div>
      </div>

      <div class="testt ml-8 d-flex flex-wrap align-center">
        <h2>Label</h2>
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
                path: `/lang-id/blog/${article.slug}`,
                params: { slug: article.slug },
              }"
            >
              <v-card
                class="ma-1"
                :style="
                  hover
                    ? 'box-shadow: 14px 16px 50px rgba(0, 0, 0, 15%); border-radius: 10px; cursor:pointer;'
                    : 'box-shadow: none'
                "
              >
                <v-row>
                  <v-col cols="4" class="pl-10 my-auto">
                    <div>
                      <v-img
                        max-height="500"
                        class="rounded-lg"
                        :src="require(`@/assets/blog_image/${article.img}`)"
                      ></v-img>
                    </div>
                  </v-col>
                  <v-col cols="8" class="pb-5 pr-5 pl-5">
                    <div class="blog__article">
                      <h2 class="">
                        {{ article.title }}
                      </h2>
                      <p>
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
                          By {{ article.author.name }}
                        </div>
                        <v-spacer></v-spacer>
                        <small class="mr-5"
                          >Pada : {{ formatDate(article.updatedAt) }}</small
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
            Oops Admin Belum membuat artikel yang berlabel
            <b> {{ tag.name }}</b>
          </span>
          <span class="mt-2"
            >Tunggu dapet inspirasi dulu ya..
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
                  @click="$router.push('/lang-id/blog')"
                  v-bind="attrs"
                  v-on="on"
                  class="my-11 rounded-md"
                  icon
                >
                  <img :src="require('@/assets/images/btn-kembali.png')" />
                </v-btn>
              </template>
              <span>Kembali </span>
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
</style>
