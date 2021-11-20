<template>
  <div>
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
          <!-- v-for="(item, index) in menu" :key="index" :to="item.link" -->
          <nuxt-link
            class="mx-3"
            style="text-decoration: none; color: black"
            to="/"
          >
            <!-- <div class="nuxt__link ma-2">
              {{ item.label }}
            </div> -->
            <div class="nuxt__link nuxt-link-exact-active ma-2">Beranda</div>
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
                <v-list-item v-for="(item, i) in items" :key="i">
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
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
            class="mx-3"
            style="text-decoration: none; color: black"
          >
            <div class="nuxt__link ma-2">
              {{ item.label }}
            </div>
            <!-- <div class="nuxt__link ma-2">Beranda</div> -->
          </NuxtLink>

          <div style="border-left: solid 2px black; height: 40px">
            <v-menu
              transition="slide-y-transition"
              bottom
              class="ml-5"
              open-on-hover
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
                    ID <v-icon right>mdi-chevron-down</v-icon>
                  </div>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in lang" :key="index">
                  <v-list-item-icon class="d-flex justify-center align-center">
                    <img
                      style="width: 30px"
                      :src="require(`@/assets/images/${item.icon}`)"
                    />
                  </v-list-item-icon>
                  <v-list-item-title class="lang">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
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
            <v-list-item-title>Beranda</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-expansion-panels flat dense>
              <v-expansion-panel>
                <v-expansion-panel-header class="pa-0">
                  <span style="font-size: 13px; font-weight: 500">Layanan</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list-item>
                    <v-list-item-title class="link">
                      <NuxtLink to="persiapan-bahasa" class="black--text">
                        Persiapan Bahasa
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
                      <NuxtLink to="working-holiday" class="black--text"
                        >Working Holiday
                      </NuxtLink></v-list-item-title
                    >
                  </v-list-item>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Berita</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="maintenance" class="black--text">
              <v-list-item-title>Tentang Kami</v-list-item-title>
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="maintenance" class="black--text">
              <v-list-item-title>Kontak</v-list-item-title>
            </NuxtLink>
          </v-list-item>

          <v-list-item>
            <v-expansion-panels flat dense>
              <v-expansion-panel>
                <v-expansion-panel-header class="pa-0">
                  <span style="font-size: 13px; font-weight: 500">Bahasa</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list-item>
                    <v-list-item-title>Indonesia</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Jepang</v-list-item-title>
                  </v-list-item>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        { title: 'Persiapan Bahasa', url: 'persiapan-bahasa' },
        { title: 'Working Holiday', url: 'working-holiday' },
      ],
    }
  },
  mounted() {
    console.log(this.router)
  },
  computed: {
    menu() {
      return [
        {
          label: 'Galeri',
          link: 'galeri',
        },
        {
          label: 'Berita',
          link: '/maintenance',
        },
        {
          label: 'Tentang Kami',
          link: '/maintenance',
        },
        {
          label: 'Kontak',
          link: '/maintenance',
        },
      ]
    },
    // test() {
    //   console.log(this.$router)
    // },
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
