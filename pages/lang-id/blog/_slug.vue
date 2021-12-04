<template>
  <v-container>
    <article>
      <div class="hero">
        <h1>{{ article.title }}</h1>
        <div class="author">
          <div class="d-flex flex-wrap align-center mb-2">
            <v-avatar size="32" class="mr-2">
              <v-img
                v-if="article.author.img"
                :src="
                  require(`@/assets/blog_image/avatar/${article.author.img}`)
                "
              />
            </v-avatar>
            <div class="date">
              Dipost Oleh {{ article.author.name }},
              {{ formatDate(article.updatedAt) }}
            </div>
            <v-spacer></v-spacer>
            <div class="btn__socmed">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <ShareNetwork
                    network="facebook"
                    :url="`www.higlob.id/lang-id${$nuxt.$route.path}`"
                    :title="`${article.title}`"
                    :description="`${article.description}`"
                    media="https://opengraph.githubassets.com/6a295dd63328cba2424fad9a4feecb41bdf15de307a0c9f088db14feaeb3757b/nuxt/nuxt.js/issues/6725"
                    quote="Higlob Indonesia"
                    hashtags="GoesJapan, Tips"
                  >
                    <v-btn v-bind="attrs" v-on="on" icon color="#3b5998">
                      <v-icon> mdi-facebook </v-icon>
                    </v-btn>
                  </ShareNetwork>
                </template>
                <span>Bagikan Ke Facebook</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <ShareNetwork
                    media="https://opengraph.githubassets.com/6a295dd63328cba2424fad9a4feecb41bdf15de307a0c9f088db14feaeb3757b/nuxt/nuxt.js/issues/6725"
                    network="twitter"
                    :url="`www.higlob.id/lang-id${$nuxt.$route.path}`"
                    :title="`${article.title}`"
                    :description="`${article.description}`"
                    quote="Higlob Indonesia"
                    hashtags="GoesJapan,Tips"
                  >
                    <v-btn v-bind="attrs" v-on="on" icon>
                      <v-icon color="#00acee"> mdi-twitter </v-icon>
                    </v-btn>
                  </ShareNetwork>
                </template>
                <span>Bagikan Ke Twitter</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <ShareNetwork
                    network="linkedin"
                    url="https://news.vuejs.org/issues/180"
                    :title="`${article.title}`"
                    :description="`${article.description}`"
                    quote="Higlob Indonesia"
                    hashtags="GoesJapan, Tips"
                  >
                    <v-btn v-bind="attrs" v-on="on" icon color="#0e76a8">
                      <v-icon> mdi-linkedin </v-icon>
                    </v-btn>
                  </ShareNetwork>
                </template>
                <span>Bagikan Ke Linkedin</span>
              </v-tooltip>
            </div>
          </div>
        </div>
        <div>
          <v-img
            class="rounded-lg hero__img"
            :src="require(`~/assets/blog_image/${article.imgContentBerita}`)"
          ></v-img>
        </div>
      </div>
      <div class="content">
        <p>
          <nuxt-content :document="article" />
        </p>
      </div>
    </article>
  </v-container>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      // prev,
      // next
    }
  },

  head() {
    return {
      title: 'Blog',
      meta: createSEOMeta(this.content),
      image: this.article.img,
    }
  },

  data: () => ({
    // SEO
    content: {
      url: 'www.higlob.id/lang-id/blog',
      title: 'tesss',
      description: 'Solusi Dagang',
      image: '',
    },
    social_media: [
      {
        title: 'Facebook',
        link: `https://www.facebook.com/sharer/sharer.php?u=`,
        icon: require('@/assets/sosmed/ic_share_fb.svg'),
      },
      {
        title: 'Twitter',
        link: `https://www.twitter.com/share?url=`,
        icon: require('@/assets/sosmed/ic_share_tw.svg'),
      },
      {
        title: 'Whatsapp',
        link: `https://api.whatsapp.com/send?text=`,
        icon: require('@/assets/sosmed/ic_share_wa.svg'),
      },
      {
        title: 'Linkedin',
        link: `https://www.linkedin.com/sharing/share-offsite/?url=`,
        icon: require('@/assets/sosmed/login_linkedin.png'),
      },
    ],
  }),

  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }
      return new Date(date).toLocaleTimeString('id', options)
    },
  },
}
</script>

<style lang="scss">
.hero {
  padding: 8rem 30rem 1rem 30rem;

  .author {
    margin: 1rem 0 1.5rem;
  }
}

.content {
  color: #252525;
  padding: 1rem 30rem 1rem 30rem;

  &__img {
    margin: 1rem 0;
  }

  p {
    line-height: 1.7;
  }
}

.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

@media screen and (min-width: 0px) and (max-width: 300px) {
  .hero {
    h1 {
      font-size: 18px;

      margin-top: 3rem;
      margin-bottom: 1rem;
    }

    padding: 1rem 1rem 1rem 1rem;

    .author {
      margin: 1rem 0 1.1rem;

      .date {
        margin: 1rem 0;
      }
    }
  }

  .content {
    color: #252525;
    padding: 1rem 1rem 1rem 1rem;

    h2 {
      font-size: 18px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 1rem;
    }

    &__img {
      margin: 1rem 0;
    }

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }

  //content style
  .nuxt-content h2 {
    font-size: 20px;
    margin-bottom: 18px;
  }
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .hero {
    h1 {
      font-size: 23px;

      margin-top: 3rem;
      margin-bottom: 1rem;
    }

    padding: 1.5rem 1.5rem 1.5rem 1.5rem;

    .author {
      margin: 1.5rem 0 1.1rem;

      .date {
        margin: 1rem 0;
      }

      .btn__socmed {
        margin: 0rem auto;
      }
    }

    &__img {
      height: 200px;
    }
  }

  .content {
    color: #252525;
    padding: 1rem 1rem 1rem 1rem;

    h2 {
      font-size: 18px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 1rem;
    }

    &__img {
      margin: 1rem 0;
    }

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }

  //content style
  .nuxt-content h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .hero {
    h1 {
      font-size: 1.5rem;
    }

    padding: 2rem 6rem 1rem 6rem;
    margin-top: 4rem;

    .author {
      margin: 1rem 0;
      font-size: 12px;

      .btn__socmed {
        margin: 1rem auto;
      }
    }
  }

  .content {
    color: #252525;
    padding: 1rem 6rem 1rem 6rem;

    &__img {
      margin: 1rem 0;
    }

    p {
      line-height: 1.7;
    }
  }

  //content style
  .nuxt-content h2 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .hero {
    h1 {
      font-size: 1.5rem;
    }

    padding: 2rem 7rem 1rem 7rem;
    margin-top: 5rem;

    .author {
      margin: 1rem 0;
      font-size: 12px;

      .btn__socmed {
        margin: 1rem auto;
      }
    }
  }

  .content {
    color: #252525;
    padding: 1rem 7rem 1rem 7rem;

    &__img {
      margin: 1rem 0;
    }

    p {
      line-height: 1.7;
    }
  }

  //content style
  .nuxt-content h2 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .hero {
    padding: 8rem 15rem 1rem 15rem;

    .author {
      margin: 1rem 0 1.5rem;
    }
  }

  .content {
    color: #252525;
    padding: 1rem 15rem 1rem 15rem;

    &__img {
      margin: 1rem 0;
    }

    p {
      line-height: 1.7;
    }
  }

  .nuxt-content p {
    margin-bottom: 20px;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 1.2rem;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
}

@media screen and (min-width: 1904px) {
}
</style>
