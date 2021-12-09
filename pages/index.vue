<template></template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.state.isNotFound = false
    this.$router.push('/lang-jp')
  },
}
</script>
