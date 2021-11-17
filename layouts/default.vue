<template>
  <v-app>
    <Header />
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
      <v-main>
        <nuxt />
        <Footer />
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss"></style>
