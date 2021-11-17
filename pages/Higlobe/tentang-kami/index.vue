<template>
  <v-container>
    <section>
      <!-- Banner 1 -->
      <br> <br> <br> <br>
      <div class="d-flex justify-center">
        <v-card
          class="banner-1 pa-4"
          max-width="1200"
          max-height="160"
          style="border-radius: 17px"
          :style="banner1_tentangkami"
        >
          <v-card-title class="card-judul" :style="card_judul">
            Company Profile LPK Higlob
          </v-card-title>
          <v-card-text class="card-isi" :style="card_isi">
            LPK Higlob di dirikan pada tahun 2014 yang bergerak di bidang kursus
            bahasa jepang, magang ke jepang, Pelatihan in house, Program
            pelatihan eknis dan lain-lainya.
          </v-card-text>
        </v-card>
        <br />
        <br />
      </div>
      <!-- end Banner 1 -->

      <!-- Section 1 -->
      <br />
      <br />
      <section>
      <div>
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
            class="list-section1 order-sm-1"
            
          >
          <!-- List Visi Perusahaan -->
            <ul v-for="(item, index) in visi_perusahaan"
                :key="index" style="list-style-type: none">
                    <li>
                      <h2 :style="visi_judul">{{ item.judul_visi }}</h2>
                      </li>
                    <li :style="visi_isi">
                      <p>{{ item.isi_visi }}</p>
                    </li>
              
            </ul>
          <!-- End Visi Perusahaan -->

          <!-- List Misi Perusahaan -->
            <ul v-for="(item, index) in misi_perusahaan"
                :key="index" style="list-style-type: none">
              <li><h2 :style="visi_judul">{{ item.judul_misi }}</h2></li>
              
              <li>
                <p>
                  {{item.isi_misi}}
                </p>
              </li>
              
            </ul>  
            <!-- End Misi Perusahaan -->
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
            class="order-sm-2"
          >
            <v-img
              :src="require('@/assets/images/section1-tentangkami.png')"
              style=""
            ></v-img>
          </v-col>
        </v-row>
        <br />
        <br />
      </div>
    </section>
      <!-- Section 2 -->

<!-- Section 3 -->

      <!-- heading 2 -->
    <section>
      <div class="heading2 text-center">
        <h1 style="font-family: 'poppins'">
          Syarat dan ketentuan magang <br />Jepang LPK Higlob
        </h1>
        <br /><br />
      </div>

      <!-- End Heading 2 -->

      
      
        <v-row>
          <v-col
            class="order-3 order-sm-3 order-md-1"
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <v-img
              :src="require('@/assets/images/section3-tentangkami.png')"
            ></v-img>
          </v-col>
          <v-col
            class="order-1 order-sm-1 order-md-2"
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
          <!-- List Persyaratan -->

            <ul v-for="(item, index) in persyaratan_umum"
                :key="index" 
             class="col-tentangkami" style="list-style-type: none">
              <li>
                <h2
                  style="
                    font-family: 'poppins';
                    font-size: 18px;
                    font-weight: 600;
                    font-style: normal;
                  "
                >
                  {{ item.judul_persyaratan}}
                </h2>
              </li>
             
              <li class="ul-tentangkami">
                <p style="display: inline-flex; font-family: 'poppins'">
                  <v-img
                  
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >
                  {{item.isi_persyaratan}}
                </p>
              </li> 
            </ul>
        <!-- End List Pertanyaan -->

          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="col-tentangkami order-2 order-sm-2 order-md-3"
          >
          <!-- List Catatan Khusus -->
            <ul v-for="(item, index) in catatan_khusus"
                :key="index"  style="list-style-type: none">
              <li>
                <h2
                  style="
                    font-family: 'poppins';
                    font-size: 18px;
                    font-weight: 600;
                    font-style: normal;
                  "
                >
                  {{item.judul_catatan}}
                </h2>
              </li>
             
              <li>
                <p style="display: inline-flex; font-family: 'poppins'">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >
                  {{item.isi_catatan}}
                </p>
              </li>   
            </ul>

            <!-- End List Catatan Khusus -->
            
          </v-col>
        </v-row>
      </section>

      <!-- End Section 3 -->

      <!-- Section Persyaratan -->
      <section style="background-color: ">
        <v-row>
          <v-col  cols="12" xs="12" sm="12" md="5" lg="5" xl="5">

            <!-- List Persyaratan Khusus -->
            <ul v-for="(item, index) in persyaratan_khusus"
                :key="index" class="col-tentangkami" style="list-style-type: none">
              <li>
                <h2
                  style="
                    font-family: 'poppins';
                    font-size: 18px;
                    font-weight: 600;
                    font-style: normal;
                  "
                >
                  {{item.judul_persyaratan}}
                </h2>
              </li>
              
              <li class="ul-tentangkami">
                <p style="display: inline-flex; font-family: 'poppins'">
                  <v-img
                    :src="require('@/assets/images/checklist.svg')"
                    style="width: 25px; height: 24px; margin-right: 0.8rem"
                  ></v-img
                  >
                  {{item.isi_persyaratan}}
                </p>
              </li>
            </ul>
            <!-- end List Persyaratan Khusus -->

             <v-btn
              style="
                font-family: 'Poppins', sans-serif;
                margin-left: 4rem;
                margin-top: 1.5rem;
              "
              align-end
              color="#3E00FF"
              large
              elevation="4"
              ><v-img
                left
                :src="require('@/assets/images/download.png')"
              ></v-img
              ><span class="white--text text-capitalize mx-2">
                Download Brosur</span
              >
            </v-btn>
          </v-col>
          

          <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
            <v-img
              :src="require('@/assets/images/persyaratan-tentangkami.png')"
              style=""
            ></v-img>
          </v-col>
        </v-row>
      </section>
      <!-- End Section Persyaratan -->

      <!-- Start Pimpinan LPK -->
      <section>
        <h1 class="h1-pimpinan text-center">Pimpinan LPK Higlob</h1>
        <p class="p-pimpinan text-center">
          Pimpinan dari LPK Higlob yang telah membangun lembaga <br />menjadi
          berkembang
        </p>
        <br />

        <v-row>
          <v-col v-for="(item, index) in pimpinan_lpk"
                :key="index" cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require(`@/assets/images/${item.gambar_pimpinan}`)"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">{{item.nama_pimpinan}}</h4></li>
              <li><p class="p-pimpinancard">{{item.jabatan_pimpinan}}</p></li>
            </ul>
          </v-col>
          
        </v-row>
      </section>
      <!-- END Pimpinan LPK Higlob -->

      <!-- Start Team IT Development -->
      <section>
        <div class="">
          <h1 class="h1-teamit">
            Team IT Development <br />
            Kami
            
          </h1>
          <br>
        </div>
        <div class="p-teamit">
          <p >
            Dalam pengembangan tidak dilakukan oleh satu orang dengan ini kami
            
            menyelesaikan secara bersama disinilah kami team IT Development
          </p>
        </div>
        <br />

        <v-row class="justify-center float-none">
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/adnan.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">Adnan Aziz Dani</h4></li>
              <li><p class="p-pimpinancard">Front End Develpoment</p></li>
            </ul>
          </v-col>
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/fahreza.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">Fahreza Adi Saputra</h4></li>
              <li><p class="p-pimpinancard">Front End Development</p></li>
            </ul>
          </v-col>
          <v-col cols="6" xs="6" sm="3" md="3" lg="3" xl="3">
            <ul class="text-center" style="list-style-type: none">
              <li>
                <v-img :src="require('@/assets/images/lupek.png')"></v-img>
              </li>
              <li><h4 class="h4-pimpinancard">Lutfi Surachman</h4></li>
              <li><p class="p-pimpinancard">UI/UX Designer</p></li>
            </ul>
          </v-col>
        </v-row>
      </section>
      <!-- END Team IT Development -->
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => ({

      visi_perusahaan: [
        {
         judul_visi:'Visi Perusahaan', 
        },
        {
         isi_visi:'Membangun jembatan karir dan kesuksesan di dunia global', 
        },
        {
         isi_visi:' Membangun jembatan karir dan kesuksesan menuju dunia global ', 
        },     
      ],

      misi_perusahaan: [
        {
          judul_misi:'Misi Perusahaan',
        },
        {
          isi_misi:' Mengembangkan sumber daya manusia agar siap untuk bersaing ',
        },
        {
          isi_misi:'Meningkatkan keterampilan kerja',
        },
        {
          isi_misi:'Meningkatkan sumber daya manusia untuk bersaing',
        },
        {
          isi_misi:' Meningkatkan pengetahuan, peningkatan dan keterampilan kerja ',
        },
      ],

    persyaratan_umum: [
       {  
        judul_persyaratan :'Persyaratan Umum :',
      },
      {
        
        isi_persyaratan :'Laki-laki / Perempuan WNI Usia 18 - 27 Tahun ',
      },
       {
         
        isi_persyaratan :'Pendidikan terakhir minimal SMU/Sederajat ',
      },
      {
        
        isi_persyaratan :'Sehat Jasmani Rohani (Tidak cacat fisik maupun mental) ',
      },
      {
        
        isi_persyaratan :'Tinggi badan pria minimal (165cm) dan wanita (155cm) ',
      },
      {
        
        isi_persyaratan :'Peserta benar - benar memiliki semangat dan kemauan yang untuk melakukan pelatihan ',
      },
      {
        
        isi_persyaratan :'Berdisiplin tinggi, mau mematuhi dan menaati peraturan yang ditetapkan LPK Higlob ',
      },
      {
        
        isi_persyaratan :'Belum pernah datang ke jepang sebagai training/Non Exc jepang ',
      },
      {
        isi_persyaratan :'Tidak cacat muka karna kriminal, patah tulang dan tidak bertato ',
      },
      
    ],

    catatan_khusus: [
      {
        judul_catatan :'Catatan Umum : ',
       },
       {
        checklist:'checklist.svg',
        isi_catatan :'Calon peserta diharuskan memenuhi admnistrasi sebelum mengikuti program diklat ',
       },
       {
        checklist:'checklist.svg',
        isi_catatan :'Selamat mengikuti pendidikan diklat peserta di wajibkan mengenakan kemeja putih, celana hitam bukan jeans, sepatu hitam dan dasi ',
       },
       {
        checklist:'checklist.svg',
        isi_catatan :'Sehat Jasmani Rohani (Tidak cacat fisik maupun mental)  ',
       },
       {
        checklist:'checklist.svg',
        isi_catatan :'Menyediakan pakaian olahraga lengkap dengan sepatunya  ',
       },
      {
        checklist:'checklist.svg',
        isi_catatan :'Peserta wajib mengikuti tata tertib yang ada di LPK Higlob ',
       },
    ],


    persyaratan_khusus: [
       {  
        judul_persyaratan :'Persyaratan Umum :',
      },
      {
        checklist:'checklist.svg',
        isi_persyaratan :'Laki-laki / Perempuan WNI Usia 18 - 27 Tahun ',
      },
       {
         checklist:'checklist.svg',
        isi_persyaratan :'Pendidikan terakhir minimal SMU/Sederajat ',
      },
      {
        checklist:'checklist.svg',
        isi_persyaratan :'Sehat Jasmani Rohani (Tidak cacat fisik maupun mental) ',
      },
      {
        checklist:'checklist.svg',
        isi_persyaratan :'Tinggi badan pria minimal (165cm) dan wanita (155cm) ',
      },
      {
        checklist:'checklist.svg',
        isi_persyaratan :'Peserta benar - benar memiliki semangat dan kemauan yang untuk melakukan pelatihan ',
      },
      {
        checklist:'checklist.svg',
        isi_persyaratan :'Berdisiplin tinggi, mau mematuhi dan menaati peraturan yang ditetapkan LPK Higlob ',
      },
      {
        checklist:'checklist.svg',
        isi_persyaratan :'Belum pernah datang ke jepang sebagai training/Non Exc jepang ',
      },
      {
        isi_persyaratan :'Tidak cacat muka karna kriminal, patah tulang dan tidak bertato ',
      },
      
    ],

    pimpinan_lpk: [
       {  
        gambar_pimpinan :'pimpinan1.png',
        nama_pimpinan:'Reza Ramadhan',
        jabatan_pimpinan:'Direktur LPK Higlob',
      },
      {  
        gambar_pimpinan :'pimpinan2.png',
        nama_pimpinan:'Agus Cahyo Putro',
        jabatan_pimpinan:'Manager LPK Higlob',
      },{  
        gambar_pimpinan :'pimpinan3.png',
        nama_pimpinan:'Putri Suraya',
        jabatan_pimpinan:'Lead Marketing LPK Higlob',
      },{  
        gambar_pimpinan :'pimpinan4.png',
        nama_pimpinan:'Devi Cantika',
        jabatan_pimpinan:'Advisor LPK Higlob',
      },
    ],

  }),

  computed: {
    banner1_tentangkami() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'max-height:190px;border-radius:22px'
        case 'sm':
          return 'max-height:168px'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },

    card_judul() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:15px'
        case 'sm':
          return 'font-size:22px'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },

    card_isi() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:12px'
        case 'sm':
          return 'font-size:13px'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
      }
    },
  },

  visi_judul() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 'font-size:22px;color:red!important'
      case 'sm':
        return 'font-size:'
      case 'md':
        return ''
      case 'lg':
        return ''
      case 'xl':
        return ''
    }
  },

  visi_isi() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 'font-size:14px;line-height:2rem;text-align:center'
      case 'sm':
        return 'font-size:'
      case 'md':
        return ''
      case 'lg':
        return ''
      case 'xl':
        return ''
    }
  },
}
</script>

<style lang="scss">
.banner-1 {
  background: url('@/assets/images//bg-tentang-kami.svg');
  // :src="require('@/assets/images/kontak-1.png')"
  background-size: cover;
  height: 100vh;
}

.card-judul {
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 145%;
}
.card-isi {
  color: white !important;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 180%;
}

.list-section1 {
  h2 {
    font-family: 'Poppins';
    font-weight: 700;
  }
  p {
    color: #868686;
    font-family: 'Poppins';
    // line-height: 1.1rem;
  }

  .ul-tentangkami.img {
    margin-right: 1rem;
  }
}

.h1-pimpinan {
  font-family: 'poppins';
  line-height: 4rem;
  font-size: 24px;
}
.p-pimpinan {
  font-family: 'poppins';
  color: #868686;
  line-height: 2rem;
  font-size: 15px;
}
.h4-pimpinancard {
  font-family: 'poppins';
  color: #03914d;
  margin-top: 1rem;
}
.p-pimpinancard {
  font-family: 'poppins';
  color: #868686;
  font-size: 13px;
  line-height: 2rem;
}
.h1-teamit {
  font-family: 'poppins';

  font-size: 21px;
}
.p-teamit {
  font-family: 'poppins';
  color: #868686;
  line-height: 1.3rem;
  font-size: 11px;
}


@media screen and (min-width: 0px) and (max-width:300px){
  .p-pimpinan{
    font-size: 11px;
  }
  .p-teamit{
    font-size: 10.5px;
  }
}
@media screen and (min-width: 300px) and (max-width:600px){
  .p-pimpinan{
    font-size: 11px !important;
  }
  .p-teamit{
    font-size: 10.5px;
    text-align: center !important;
    padding: 0 5rem 0 5rem;
  }
  .h1-teamit{
    text-align: center;
  }

}
@media screen and (min-width: 600px) and (max-width:960px){
  .h1-teamit{
    text-align: center;
  }
 .p-teamit{
   p{
       text-align: center !important;
       padding: 0 5rem 0 5rem;
       font-size: 15px;
      line-height: 2rem;
   }
  
 }
}
@media screen and (min-width: 960px) and (max-width:1264px){
    .h1-teamit{
    text-align: center;
  }
 .p-teamit{
   p{
       text-align: center !important;
       padding: 0 10rem 0 10rem;
       font-size: 15px;
      line-height: 2rem;
   }
  
 }
}
@media screen and (min-width: 1264px) and (max-width:1904px){

}
</style>
