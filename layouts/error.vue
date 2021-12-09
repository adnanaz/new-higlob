<template>
  <v-app dark>
    <div v-if="error.statusCode === 404">
      <!-- {{ pageNotFound }}
      <h1>Halaman yang anda tuju tidak ada</h1>
      <p>The link you clicked on may be broken or no longer exist.</p> -->
      <!-- <NuxtLink to="/"> Kembali ke Beranda </NuxtLink> -->

      <v-card class="d-flex align-end flex-row" flat height="100vh" tile>
        <img
          :class="$vuetify.breakpoint.smAndDown ? 'd-none' : ''"
          cover
          :src="require('@/assets/images/bg-kiri.png')"
        />
        <v-card
          elevation="0"
          width="100%"
          class="
            text-center
            align-self-stretch
            d-flex
            justify-center
            align-center
            flex-column
          "
        >
          <div class="">
            <img cover :src="require('@/assets/images/error-alien-fix.png')" />
            <h1
              class="my-5"
              :style="$vuetify.breakpoint.xs ? 'font-size:20px;' : ''"
            >
              Halaman yang anda tuju tidak ditemukan
            </h1>
            <p
              style=""
              :style="
                $vuetify.breakpoint.xs
                  ? 'font-size:16px;'
                  : ' font-style: normal;font-weight: 400;font-size: 16px;line-height: 60px;'
              "
            >
              Silahkan kembali ke halaman beranda.
            </p>
          </div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="test"
                v-bind="attrs"
                v-on="on"
                class="my-2 rounded-md"
                icon
              >
                <img :src="require('@/assets/images/btn-kembali.png')" />
              </v-btn>
            </template>
            <span>Kembali </span>
          </v-tooltip>
        </v-card>
        <v-card class="d-flex align-end" color="" flat height="100vh" tile>
          <img
            cover
            :class="$vuetify.breakpoint.smAndDown ? 'd-none' : ''"
            :src="require('@/assets/images/bg-kanan.png')"
          />
        </v-card>
      </v-card>
    </div>
    <h1 v-else>
      <v-card class="d-flex align-end flex-row" flat height="100vh" tile>
        <img
          :class="$vuetify.breakpoint.smAndDown ? 'd-none' : ''"
          cover
          :src="require('@/assets/images/bg-kiri.png')"
        />
        <v-card
          elevation="0"
          width="100%"
          class="
            text-center
            align-self-stretch
            d-flex
            justify-center
            align-center
            flex-column
          "
        >
          <div class="">
            <img cover :src="require('@/assets/images/error-alien-fix.png')" />
            <h1
              class="my-5"
              :style="$vuetify.breakpoint.xs ? 'font-size:20px;' : ''"
            >
              Halaman yang anda tuju tidak ditemukan
            </h1>
            <p
              style=""
              :style="
                $vuetify.breakpoint.xs
                  ? 'font-size:16px;'
                  : ' font-style: normal;font-weight: 400;font-size: 16px;line-height: 60px;'
              "
            >
              Silahkan kembali ke halaman beranda.
            </p>
          </div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="test"
                v-bind="attrs"
                v-on="on"
                class="my-2 rounded-md"
                icon
              >
                <img :src="require('@/assets/images/btn-kembali.png')" />
              </v-btn>
            </template>
            <span>Kembali </span>
          </v-tooltip>
        </v-card>
        <v-card class="d-flex align-end" color="" flat height="100vh" tile>
          <img
            cover
            :class="$vuetify.breakpoint.smAndDown ? 'd-none' : ''"
            :src="require('@/assets/images/bg-kanan.png')"
          />
        </v-card>
      </v-card>
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  mounted() {
    if (this.error.statusCode === 404) {
      this.$store.state.isNotFound = true
    } else {
      this.$store.state.isNotFound = false
    }
  },
  methods: {
    test() {
      this.$store.state.isNotFound = false
      this.$router.push('/')
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
}
</style>
