<template>
  <div>
    <!-- JEPANG -->
    <div v-if="$store.state.toggleLang">
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
          <v-toolbar-title class="my-auto mx-5 pt-1">
            <img
              style="width: 150px"
              :src="require('@/assets/images/logo.png')"
              alt="logo higlob"
            />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click="toggleNav" class="mx-5"
            ><img :src="require('@/assets/images/bar-chart.png')" alt=""
          /></v-app-bar-nav-icon>
        </div>

        <v-container class="hidden-md-and-down">
          <div class="d-flex align-center">
            <v-toolbar-title class="d-flex align-center flex-column">
              <img
                style="width: 200px"
                :src="require('@/assets/images/logo.png')"
                alt="logo higlob"
              />
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <nuxt-link
              class="mx-3 link__color"
              style="text-decoration: none; color: black"
              to="/lang-jp"
            >
              <div class="nuxt__link ma-2">家</div>
            </nuxt-link>

            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="nuxt__link ma-2" v-on="on" v-bind="attrs">
                  サービス
                  <v-icon color="black">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in items_jp" :key="i">
                  <v-list-item-title class="lang">
                    <NuxtLink
                      class="link__color"
                      style="color: black"
                      :to="item.url"
                    >
                      {{ item.title }}
                    </NuxtLink></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="nuxt__link ma-2" v-on="on" v-bind="attrs">
                  求職者
                  <v-icon color="black">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in jobseeker_jp" :key="i">
                  <v-list-item-title class="lang">
                    <NuxtLink
                      class="link__color"
                      style="color: black"
                      :to="item.url"
                    >
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
              class="mx-3 link__color"
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
                      {{ $store.state.language }} <v-icon right>mdi-chevron-down</v-icon>
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
              <v-list-item-title @click="$router.push('/lang-id')"
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

                    <v-list-item>
                      <v-list-item-title>
                        <NuxtLink
                          to="/lang-jp/working-holiday"
                          class="black--text"
                        >
                          ワーキングホリデー
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500"
                      >求職者</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item>
                      <v-list-item-title class="link">
                        <NuxtLink to="/lang-jp/job-info" class="black--text">
                          仕事情報
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <NuxtLink to="/lang-jp/candidates" class="black--text"
                          >候補者
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="$router.push('/lang-jp/galeri')"
                >ギャラリー</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push('/lang-jp/blog')"
                >ブログ</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <NuxtLink
                to="/lang-jp/tentang-kami"
                class="link__color lack--text"
              >
                <v-list-item-title>私たちに関しては</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/lang-jp/kontak" class="link__color black--text">
                <v-list-item-title>コンタクト</v-list-item-title>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500"> 言語</span>
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

    <!-- ================================================================================================================== -->
    <!-- INDONESIA -->
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
          <v-toolbar-title class="my-auto mx-5 pt-1">
            <img
              style="width: 150px"
              :src="require('@/assets/images/logo.png')"
              alt="logo higlob"
            />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click="toggleNav" class="mx-5"
            ><img :src="require('@/assets/images/bar-chart.png')" alt=""
          /></v-app-bar-nav-icon>
        </div>

        <v-container class="hidden-md-and-down">
          <div class="d-flex align-center">
            <v-toolbar-title class="d-flex align-center flex-column">
              <img
                style="width: 200px"
                :src="require('@/assets/images/logo.png')"
                alt="logo higlob"
              />
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <nuxt-link
              class="mx-3 link__color"
              style="text-decoration: none; color: black"
              to="/lang-id"
            >
              <div class="nuxt__link ma-2">Beranda</div>
            </nuxt-link>

            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="nuxt__link ma-2" v-on="on" v-bind="attrs">
                  Layanan <v-icon color="black">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in items_id" :key="i">
                  <v-list-item-title class="lang">
                    <NuxtLink
                      class="link__color"
                      style="color: black"
                      :to="item.url"
                    >
                      {{ item.title }}
                    </NuxtLink></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="nuxt__link ma-2" v-on="on" v-bind="attrs">
                  Job Seeker <v-icon color="black">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in jobseeker_id" :key="i">
                  <v-list-item-title class="lang">
                    <NuxtLink
                      class="link__color"
                      style="color: black"
                      :to="item.url"
                    >
                      {{ item.title }}
                    </NuxtLink></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>

            <NuxtLink
              v-for="(item, index) in menu_id"
              :key="index"
              :to="item.link"
              class="mx-3 link__color"
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
                      {{ $store.state.language }} <v-icon right>mdi-chevron-down</v-icon>
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

      <v-navigation-drawer v-model="drawer_id" absolute temporary>
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
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500"
                      >Job Seeker</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item>
                      <v-list-item-title class="link">
                        <NuxtLink to="/lang-id/job-info" class="black--text">
                          Job Info
                        </NuxtLink></v-list-item-title
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <NuxtLink to="/lang-id/candidates" class="black--text"
                          >Candidates
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
              <v-list-item-title @click="$router.push('/lang-id/blog')"
                >Blog</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <NuxtLink
                to="/lang-id/tentang-kami"
                class="link__color lack--text"
              >
                <v-list-item-title>Tentang Kami</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/lang-id/kontak" class="link__color black--text">
                <v-list-item-title>Kontak</v-list-item-title>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <v-expansion-panels flat dense>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">
                    <span style="font-size: 13px; font-weight: 500">
                      Bahasa</span
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
      items_jp: [
        { title: '言語の準備', url: '/lang-jp/persiapan-bahasa' },
        { title: 'ワーキングホリデー', url: '/lang-jp/working-holiday' },
      ],
      jobseeker_id: [
        { title: 'Job Info', url: '/lang-id/job-info' },
        { title: 'Candidate', url: '/lang-id/candidates' },
      ],
      jobseeker_jp: [
        { title: '仕事情報', url: '/lang-jp/job-info' },
        { title: '候補者', url: '/lang-jp/candidates' },
      ],
    }
  },
  mounted() {
  },
  methods: {
    toggleNav() {
      if (this.$store.state.toggleLang) {
        this.drawer = true
      } else {
        this.drawer_id = true
      }
    },

    mobileLangTrigger(key) {
      switch (key) {
        case 'id':
          this.$store.state.toggleLang = false
          this.$store.state.language = 'ID'
          this.$router.push('/lang-id')
          break
        case 'jp':
          this.$store.state.toggleLang = true
          this.$store.state.language = 'JP'
          this.$router.push('/lang-jp')
          break

        default:
          break
      }
    },

    changeLanguage(id) {
      if (id === 0) {
        this.$router.push('/lang-id')
        this.$store.state.language = 'ID'
        this.$store.state.toggleLang = false
      } else if (id === 1) {
        this.$router.push('/lang-jp')
        this.$store.state.language = 'JP'
        this.$store.state.toggleLang = true
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
          link: '/lang-jp/blog',
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
          label: 'Blog',
          link: '/lang-id/blog',
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
a.nuxt-link-exact-active {
  color: #3e00ff !important;
}

a:hover {
  color: green;
}

.link__color:hover {
  color: #3e00ff !important;
  transition: all 0.4s ease-in-out;
}

.v-menu__content {
  top: 70px !important;
}
</style>
