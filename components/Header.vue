<template>
  <div>
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <div
        style="width: 100%"
        :class="$vuetify.breakpoint.mdAndDown ? 'd-flex' : 'd-none'"
      >
        <v-toolbar-title class="mx-5">
          <img
            style="width: 40px"
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
          <v-toolbar-title>
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
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
          >
            <div class="nuxt__link ma-2">
              {{ item.label }}
            </div>
          </nuxt-link>

          <div style="border-left: solid 1.5px black; height: 45px">
            <v-menu class="ml-5" open-on-hover top offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text color="black" v-bind="attrs" v-on="on" icon>
                  <span style="margin-top: -1px; margin-left: 1rem">
                    ID <v-icon>mdi-chevron-down</v-icon>
                  </span>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in lang" :key="index">
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
                    <v-list-item-title>Persiapan Bahasa</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >Pendidikan Luar Negeri</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Working Holiday</v-list-item-title>
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
            <v-list-item-title>Tentang Kami</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Kontak</v-list-item-title>
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
      lang: [
        {
          title: 'ID',
        },
        {
          title: 'JP',
        },
      ],
      group: null,
      drawer: false,
    }
  },
  mounted() {},
  computed: {
    menu() {
      return [
        {
          label: 'Beranda',
          link: '/',
        },
        {
          label: 'Layanan',
          link: '#syarat',
        },
        {
          label: 'Berita',
          link: '#langkah',
        },
        {
          label: 'Galeri',
          link: '/galeri',
        },
        {
          label: 'Tentang Kami',
          link: '#syarat',
        },
        {
          label: 'Kontak',
          link: '/kontak',
        },
      ]
    },
  },
}
</script>

<style>
</style>