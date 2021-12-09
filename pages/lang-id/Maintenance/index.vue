<template>
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
        <img cover :src="require('@/assets/images/astro.png')" />
        <h1
          class="my-5"
          :style="$vuetify.breakpoint.xs ? 'font-size:20px;' : ''"
        >
          Halaman sedang dalam pemeliharaan
        </h1>
        <p
          style=""
          :style="
            $vuetify.breakpoint.xs
              ? 'font-size:16px;'
              : ' font-style: normal;font-weight: 400;font-size: 16px;line-height: 60px;'
          "
        >
          Maaf halaman wesbite higlob sedang dalam perbaikan. Terima Kasih
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
</template>

<script>
export default {
  head: {
    titleTemplate: 'Higlob - Maintenance',
  },
  name: 'maintenance',
  mounted() {
    this.$store.state.isNotFound = true
  },
  methods: {
    test() {
      this.$router.push('/')
      this.$store.state.isNotFound = false
    },
  },
}
</script>

<style></style>
