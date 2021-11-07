<template>
    <v-container>
        <section>

            <!-- Bagian Heading -->
            <br>
            <br>
            <h1 class="heading-font text-center" >Pertanyaan yang sering diajukan</h1>
            <br>
            <p class="heading-font-p text-center">Beberapa pertanyaan yang sering ditanyakan <br> kepada kami</p>
            <br>
            <br>
            <!-- End Heading -->

            <!-- Bagian FAQ -->
            <div class="d-flex justify-center">
                <div class="d-flex">
              
                </div>

                <v-expansion-panels   accordion style="width:70%;font-family: 'Poppins', sans-serif;"
                v-model="panel"
                :disabled="disabled"
                
                >
                <v-expansion-panel  class="panel" >
                    <v-expansion-panel-header style="font-weight:500">Bagaimana cara saya mendaftar di LPK Higlob secara online?</v-expansion-panel-header>
                    <v-expansion-panel-content class="panel-p">
                    Cara mendaftar sebagai pelajar di LPK higlob secara online anda dapat menghubungi nomor yang tersedia di website kami   
                    </v-expansion-panel-content>
               
                </v-expansion-panel>
                

                <v-expansion-panel class="panel">
                    <v-expansion-panel-header style="font-weight:500">Berapa tahun masa belajar di LPK Higlob?</v-expansion-panel-header>
                    <v-expansion-panel-content class="panel-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nesciunt repellendus fugit! Eveniet, ducimus! Corporis saepe, natus ex culpa, at ut tempore dolorum sit non nisi accusamus dolor! Doloribus, nihil.
                    </v-expansion-panel-content>

                </v-expansion-panel>

                 <v-expansion-panel class="panel">
                        <v-expansion-panel-header style="font-weight:500">Berapa tahun masa belajar di LPK Higlob?</v-expansion-panel-header>
                        <v-expansion-panel-content class="panel-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et magnam dolor est amet eaque ducimus saepe perferendis inventore! Incidunt odit dolorem ullam sunt voluptatem sapiente veritatis, error ab! Consequatur!
                        </v-expansion-panel-content>
                     </v-expansion-panel>
                 
                <v-expansion-panel class="panel">
                    <v-expansion-panel-header style="font-weight:500">Bagaimana cara kita dapat berangkat kerja ke jepang setelah lulus?</v-expansion-panel-header>
                    <v-expansion-panel-content class="panel-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ratione delectus eligendi hic nesciunt quis expedita ab corporis dolor, porro, perspiciatis consequuntur ut cumque similique nihil, mollitia vero quod rem.
                    </v-expansion-panel-content>
                
                </v-expansion-panel>
                 

                   <v-expansion-panel class="panel" >
                    <v-expansion-panel-header style="font-weight:500">Apakah kalau kita lulus di LPK higlob, langsung dibantu mencari kerja oleh LPK?</v-expansion-panel-header>
                    <v-expansion-panel-content class="panel-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo vero iste, sint odio voluptatum, delectus minima corrupti natus dignissimos maxime nihil rem sapiente, aliquam veritatis sit ipsum amet a?
                    </v-expansion-panel-content>
                
                </v-expansion-panel>
                 

                </v-expansion-panels>
            </div>
            <!-- END FAQ -->

            <!-- Bagian Heading akhir -->
            <br>
            <br>
            <h1 class="heading-font text-center" >Masih ada pertanyaan?</h1>
            <br>
            <p class="heading-font-p text-center" style="min-width:24rem">Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda di FAQ kami,<br>
                                    Anda selalu dapat menghubungi kami. kami akan menjawab Anda segera!</p>
            <br>
            <br>
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
    .panel{
        margin-bottom: 1.5rem;
    }
    .panel-p{
        font-size: smaller;
        font-weight: 300;
    }
    .heading-font{
        font-family: 'Poppins', sans-serif;
        }
    .heading-font-p{
        font-family: 'Poppins', sans-serif;
        color: #868686;
    }
    
</style>