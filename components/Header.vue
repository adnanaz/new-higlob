<template>
  <div>
    <div v-if="!$store.state.toggleLang">
      <v-app-bar
        :height="$vuetify.breakpoint.mdAndUp ? '100' : ''"
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <div
          style="width: 100%"
          :class="$vuetify.breakpoint.mdAndDown ? 'd-flex' : 'd-none'"
        >
          <v-toolbar-title class="my-auto mx-5">
            <img
              style="width: 35px"
              :src="require('@/assets/images/logo.png')"
              alt="logo higlob"
            />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon class="mx-5" @click="drawer = true"
            ><img :src="require('@/assets/images/bar-chart.png')" alt=""
          /></v-app-bar-nav-icon>
        </div>

        <v-container class="hidden-md-and-down">
          <div class="d-flex align-center">
            <v-toolbar-title class="d-flex align-center flex-column">
              <img
                style="width: 40px"
                :src="require('@/assets/images/logo.png')"
                alt="logo higlob"
              />
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <nuxt-link
              class="mx-3"
              style="text-decoration: none; color: black"
              to="/"
            >
              <div class="nuxt__link nuxt-link-exact-active ma-2">家</div>
            </nuxt-link>

            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="nuxt__link ma-2" v-on="on" v-bind="attrs">
                  サービス <v-icon color="black">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title class="lang">
                    <NuxtLink style="color: black" :to="item.url" :key="i">
                      {{ item.title }}
                    </NuxtLink></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>

            <NuxtLink
              v-for="(item, index) in menu"
              :key="index"
              :to="item.link"
              class="mx-3"
              style="text-decoration: none; color: black"
            >
              <div class="nuxt__link ma-2">
                {{ item.label }}
              </div>
            </NuxtLink>

            <div style="border-left: solid 2px black; height: 40px">
              <v-menu
                transition="slide-y-transition"
                bottom
                class="ml-5"
                top
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    color="black"
                    class="rounded-sm px-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon class="mx-1">mdi-web</v-icon>
                    <div style="font-size: 16px; margin-top: 2px">
                      {{ language }} <v-icon right>mdi-chevron-down</v-icon>
                    </div>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in lang" :key="index">
                    <v-btn @click="changeLanguage(index)" text>
                      <v-list-item-icon
                        class="d-flex justify-center align-center"
                      >
                        <img
                          style="width: 30px"
                          :src="require(`@/assets/images/${item.icon}`)"
                        />
                      </v-list-item-icon>
                      <v-list-item-title class="lang">{{
                        item.title
                      }}</v-list-item-title>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-container>
      </v-app-bar>

      <v-navigation-drawer
        v-if="!$store.state.toggleLang"
        v-model="drawer"
        absolute
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  H I G L O B
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-title @click="$router.push('/lang-jp')"
                >家</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500"
                      >サービス</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item>
                      <v-list-item-title class="link">
                        <NuxtLink
                          to="/lang-jp/persiapan-bahasa"
                          class="black--text"
                        >
                          言語の準備
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>
                    <!-- <v-list-item>
                    <v-list-item-title
                      >Pendidikan Luar Negeri</v-list-item-title
                    >
                  </v-list-item> -->
                    <v-list-item>
                      <v-list-item-title>
                        <NuxtLink
                          to="/lang-jp/working-holiday"
                          class="black--text"
                          >ワーキングホリデー
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>

            <v-list-item>
              <NuxtLink to="/lang-jp/galeri" class="black--text">
                <v-list-item-title>ギャラリー</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/lang-jp/berita" class="black--text">
                <v-list-item-title>ニュース</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/lang-jp/tentang-kami" class="black--text">
                <v-list-item-title>私たちに関しては</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/lang-jp/kontak" class="black--text">
                <v-list-item-title>コンタクト</v-list-item-title>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500">言語</span>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item>
                      <v-list-item-title @click="mobileLangTrigger('id')"
                        >Indonesia</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="mobileLangTrigger('jp')"
                        >Japanese</v-list-item-title
                      >
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div v-else>
      <v-app-bar
        :height="$vuetify.breakpoint.mdAndUp ? '100' : ''"
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <div
          style="width: 100%"
          :class="$vuetify.breakpoint.mdAndDown ? 'd-flex' : 'd-none'"
        >
          <v-toolbar-title class="my-auto mx-5">
            <img
              style="width: 35px"
              :src="require('@/assets/images/logo.png')"
              alt="logo higlob"
            />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon class="mx-5" @click="drawer_id = true"
            ><img :src="require('@/assets/images/bar-chart.png')" alt=""
          /></v-app-bar-nav-icon>
        </div>

        <v-container class="hidden-md-and-down">
          <div class="d-flex align-center">
            <v-toolbar-title class="d-flex align-center flex-column">
              <img
                style="width: 40px"
                :src="require('@/assets/images/logo.png')"
                alt="logo higlob"
              />
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <nuxt-link
              class="mx-3"
              style="text-decoration: none; color: black"
              to="/"
            >
              <div
                class="nuxt__link nuxt-link-exact-active ma-2"
                @click="$router.push('/lang-id')"
              >
                Beranda
              </div>
            </nuxt-link>

            <nuxt-link
              class="mx-3"
              style="text-decoration: none; color: black"
              to="#"
            >
              <v-menu transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="nuxt__link ma-2" v-on="on" v-bind="attrs">
                    Layanan <v-icon color="black">mdi-chevron-down</v-icon>
                  </div>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in items_id" :key="i">
                    <v-list-item-title class="lang">
                      <NuxtLink style="color: black" :to="item.url">
                        {{ item.title }}
                      </NuxtLink></v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </nuxt-link>

            <NuxtLink
              v-for="(item, index) in menu_id"
              :key="index"
              :to="item.link"
              class="mx-3"
              style="text-decoration: none; color: black"
            >
              <div class="nuxt__link ma-2">
                {{ item.label }}
              </div>
            </NuxtLink>

            <div style="border-left: solid 2px black; height: 40px">
              <v-menu
                transition="slide-y-transition"
                bottom
                class="ml-5"
                top
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    color="black"
                    class="rounded-sm px-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div style="font-size: 16px; margin-top: 2px">
                      <v-icon class="mx-1">mdi-web</v-icon>
                      {{ language }} <v-icon right>mdi-chevron-down</v-icon>
                    </div>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in lang_id" :key="index">
                    <v-btn @click="changeLanguage(index)" text>
                      <v-list-item-icon
                        class="d-flex justify-center align-center"
                      >
                        <img
                          style="width: 30px"
                          :src="require(`@/assets/images/${item.icon}`)"
                        />
                      </v-list-item-icon>
                      <v-list-item-title class="lang">{{
                        item.title
                      }}</v-list-item-title>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-container>
      </v-app-bar>

      <v-navigation-drawer
        v-if="$store.state.toggleLang"
        v-model="drawer_id"
        absolute
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group_id"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  H I G L O B
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-title @click="$router.push('/lang-id')"
                >Beranda</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500"
                      >Layanan</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item>
                      <v-list-item-title class="link">
                        <NuxtLink
                          to="/lang-id/persiapan-bahasa"
                          class="black--text"
                        >
                          Persiapan Bahasa
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <NuxtLink
                          to="/lang-id/working-holiday"
                          class="black--text"
                          >Working Holiday
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="$router.push('/lang-id/galeri')"
                >Gallery</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push('/lang-id/berita')"
                >Berita</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/tetang-kami" class="black--text">
                <v-list-item-title>Tentang Kami</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/kontak" class="black--text">
                <v-list-item-title>Kontak</v-list-item-title>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500"
                      >Bahasa</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item>
                      <v-list-item-title @click="mobileLangTrigger('id')"
                        >Indonesia</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="mobileLangTrigger('jp')"
                        >Jepang</v-list-item-title
                      >
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: 'JP',

      router: {
        linkExactActiveClass: 'exact-active-link',
      },
      lang: [
        {
          title: 'Indonesia',
          icon: 'indonesia.png',
        },
        {
          title: 'Jepang',
          icon: 'japan.png',
        },
      ],
      group: null,
      drawer: false,
      items: [
        { title: '言語の準備', url: '/lang-jp/persiapan-bahasa' },
        { title: 'ワーキングホリデー', url: '/lang-jp/galeri' },
      ],

      // ======================================================================================================
      // INDONESIA
      // ======================================================================================================
      lang_id: [
        {
          title: 'Indonesia',
          icon: 'indonesia.png',
        },
        {
          title: 'Jepang',
          icon: 'japan.png',
        },
      ],
      group_id: null,
      drawer_id: false,
      items_id: [
        { title: 'Persiapan Bahasa', url: '/lang-id/persiapan-bahasa' },
        { title: 'Working Holiday', url: '/lang-id/working-holiday' },
      ],
    }
  },
  mounted() {
    if ($nuxt.$route.path === '/lang-jp') {
      this.$store.state.toggleLang = false
    } else {
      this.$store.state.toggleLang = true
    }
  },
  methods: {
    mobileLangTrigger(key) {
      switch (key) {
        case 'id':
          this.$store.state.toggleLang = true
          this.language = 'ID'
          this.$router.push('/lang-id')
          break
        case 'jp':
          this.$store.state.toggleLang = false
          this.language = 'JP'
          this.$router.push('/lang-jp')
          break

        default:
          break
      }
    },

    changeLanguage(id) {
      if (id === 0) {
        this.$router.push('/lang-id')
        this.language = 'ID'
        this.$store.state.toggleLang = true
      } else if (id === 1) {
        this.$router.push('/lang-jp')
        this.language = 'JP'
        this.$store.state.toggleLang = false
      }
    },
  },
  computed: {
    menu() {
      return [
        {
          label: 'ギャラリー',
          link: '/lang-jp/galeri',
        },
        {
          label: 'ニュース',
          link: '/lang-jp/berita',
        },
        {
          label: '私たちに関しては',
          link: '/lang-jp/tentang-kami',
        },
        {
          label: 'コンタクト  ',
          link: '/lang-jp/kontak',
        },
      ]
    },

    menu_id() {
      return [
        {
          label: 'Galeri',
          link: '/lang-id/galeri',
        },
        {
          label: 'Berita',
          link: '/lang-id/berita',
        },
        {
          label: 'Tentang Kami',
          link: '/lang-id/tentang-kami',
        },
        {
          label: 'Kontak',
          link: '/lang-id/kontak',
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.v-menu__content {
  top: 70px !important;
}

.link.nuxt-link-active {
  font-weight: red;
}
/* exact link will show the primary color for only the exact matching link */
.link.nuxt-link-exact-active {
  color: red;
}
</style>
