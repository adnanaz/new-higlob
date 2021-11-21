<template>
  <v-container>
    <section>
      <!-- Bagian Heading -->
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 class="heading-font text-center">よくある質問</h1>
      <br />
      <p class="heading-font-p text-center">私たちのよくある質問のいくつか</p>
      <br />
      <br />
      <!-- End Heading -->

      <!-- Bagian FAQ -->
      <div class="d-flex justify-center">
        <div class="d-flex"></div>

        <v-expansion-panels
          accordion
          style="width: 70%; font-family: 'Poppins', sans-serif"
          v-model="panel"
          :disabled="disabled"
        >
          <v-expansion-panel class="panel">
            <v-expansion-panel-header style="font-weight: 500"
              >LPK
              Higlobにオンラインで登録するにはどうすればよいですか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="panel-p">
              オンラインでLPKhiglobに学生として登録する方法は、当社のWebサイトに記載されている番号に連絡できます。
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="panel">
            <v-expansion-panel-header style="font-weight: 500"
              >LPKヒグロブで何年勉強しましたか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="panel-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias nesciunt repellendus fugit! Eveniet, ducimus! Corporis
              saepe, natus ex culpa, at ut tempore dolorum sit non nisi
              accusamus dolor! Doloribus, nihil.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="panel">
            <v-expansion-panel-header style="font-weight: 500"
              >LPKヒグロブで何年勉強しましたか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="panel-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
              magnam dolor est amet eaque ducimus saepe perferendis inventore!
              Incidunt odit dolorem ullam sunt voluptatem sapiente veritatis,
              error ab! Consequatur!
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="panel">
            <v-expansion-panel-header style="font-weight: 500"
              >卒業後、どうやって日本で働きに行くことができますか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="panel-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati ratione delectus eligendi hic nesciunt quis expedita ab
              corporis dolor, porro, perspiciatis consequuntur ut cumque
              similique nihil, mollitia vero quod rem.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="panel">
            <v-expansion-panel-header style="font-weight: 500"
              >LPK
              higlobを卒業した場合、LPKはすぐに仕事を見つけるのに役立ちますか？</v-expansion-panel-header
            >
            <v-expansion-panel-content class="panel-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              illo vero iste, sint odio voluptatum, delectus minima corrupti
              natus dignissimos maxime nihil rem sapiente, aliquam veritatis sit
              ipsum amet a?
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!-- END FAQ -->

      <!-- Bagian Heading akhir -->
      <br />
      <br />
      <h1 class="heading-font text-center">まだ質問がありますか？</h1>
      <br />
      <p class="heading-font-p text-center" style="min-width: 24rem">
        FAQで質問の答えが見つからない場合は、<br />
        あなたはいつでも私達に連絡することができます。 すぐに返信します！
      </p>
      <br />
      <br />
      <br />
      <br />
      <!-- End Heading akhir -->
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    panel: [0, 1],
    disabled: false,
    readonly: false,
  }),
}
</script>

<style lang="scss">
.panel {
  margin-bottom: 1.5rem;
}
.panel-p {
  font-size: smaller;
  font-weight: 300;
}
.heading-font {
  font-family: 'Poppins', sans-serif;
}
.heading-font-p {
  font-family: 'Poppins', sans-serif;
  color: #868686;
}
</style>
