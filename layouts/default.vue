<template>
  <v-app>
    <Header v-if="!$store.state.isNotFound"  />
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
      <v-main>
        <LoadSpinner v-if="showHideSpinner" />
        <nuxt />
        <Footer v-if="!$store.state.isNotFound" />
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import LoadSpinner from '@/components/LoadSpinner.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer, LoadSpinner },
  data() {
    return {
      showHideSpinner: true,
    }
  },
  beforeCreate() {
    this.showHideSpinner = true
  },
  mounted() {
    if (this.$route.fullPath.includes('/lang-jp')) {
      this.$store.state.toggleLang = true
      this.$store.state.language = 'JP'
    } else if (this.$route.fullPath.includes('/lang-id')) {
      this.$store.state.toggleLang = false
      this.$store.state.language = 'ID'
    }
    this.showHideSpinner = false
  },
  methods: {},
}
</script>

<style lang="scss">