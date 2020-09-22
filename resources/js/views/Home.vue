<template>
  <div class="app">
    <div class="container">
      <section id="promo" class="d-flex justify-content-between flex-row mt-5">
        <img src="/promo/1.jpg" alt srcset />
        <div class="d-flex flex-column justify-content-between">
          <img src="/promo/2.jpg" alt srcset />
          <img src="/promo/3.jpg" alt srcset />
        </div>
        <img src="/promo/4.jpg" alt srcset />
      </section>
      <a class="myBtn" href="#app">^</a>
      <section id="unggulan" class="mt-5">
        <div class="unggulan text-left">
          <div class="unggulan-text">Produk Unggulan Kami</div>
          <div class="unggulan-subtext">Coba dulu aja siapa tau suka kan.</div>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <img
            v-for="(kelas, index) in 4"
            :key="kelas.index"
            :src="'/unggul/' + (index + 1) + '.jpg'"
            alt
            srcset
          />
        </div>
      </section>
      <section id="menu" class="mt-5">
        <div class="menu">
          <div class="menu-text text-center">Menu</div>
          <div class="menu-subtext text-center">Pilih sesuai selera kamu.</div>
          <div class="menu-category my-4 text-center">
            <button
              v-on:click="filterKey = category.filter"
              class="btn btn-primary px-5 mr-3 py-0"
              v-for="category in category"
              :key="category.index"
            >{{ category.nama }}</button>
          </div>
        </div>
        <div class="class-menu d-flex justify-content-between flex-wrap mt-4">
          <div
            class="item-menu"
            v-for="(photoCategory, index) in filterCategory"
            :key="photoCategory.index"
          >
            <img
              height="255"
              width="255"
              style="margin-bottom:30px;filter:drop-shadow(5px 8px 5px rgba(0, 0, 0, 0.25));"
              :src="photoCategory.gambar"
              :data-aos="photoCategory.animation"
              :data-aos-delay="(index + 1) * 50"
              data-aos-anchor-placement="top-center"
            />
          </div>
        </div>
      </section>
    </div>
    <section id="kontak" class="footer py-5 bg-primary">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div style="width:317px">
            <div class="brand-logo">Nyuss</div>
            <div>
              Minuman yang bikin nyuss. bikin seleb bilang “Rasanya mau
              meninggal”.
            </div>
            <div class="info">
              <div class="contact">contact@nyuss.com</div>
              <div class="telp">+62 812 8192 5236</div>
            </div>
          </div>
          <div style="width:317px">
            <div class="footer-help">Sales Support</div>
            <div>Ingin membuat mitra atau kerjasama dengan kami? silakan hubungi.</div>
            <div class="info">
              <div class="contact">contact@nyuss.com</div>
              <div class="telp">+62 812 8192 5236</div>
            </div>
          </div>
          <div style="width:317px">
            <div class="footer-help">Tech Support</div>
            <div>Terdapat kesalahan pada sistem kami? silakan hubungi.</div>
            <div class="info">
              <div class="contact">contact@nyuss.com</div>
              <div class="telp">+62 812 8192 5236</div>
            </div>
            <Hello/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      filterKey: "IceTea",
      category: [
        {
          nama: "Ice Tea",
          filter: "IceTea",
        },
        {
          nama: "Cheese",
          filter: "Cheese",
        },
        {
          nama: "Hot",
          filter: "Hot",
        },
        {
          nama: "Yakult",
          filter: "Yakult",
        },
      ],
      // category: ["Cheese", "Ice Tea", "Hot", "Yakult"],
    };
  },
  components: {
    // VLazyImage,
    // ImageBlur,
  },
  computed: {
    filterCategory() {
      return this[this.filterKey];
    },
    IceTea() {
      return this.$store.state.iceTea;
    },
    Cheese() {
      return this.$store.state.cheese;
    },
    Hot() {
      return this.$store.state.hot;
    },
    Yakult() {
      return this.$store.state.yakult;
    },
  },
};
</script>

<style scoped>
.item-menu {
  width: 25%;
}
.class-menu::after {
  content: "";
  flex: 1 100px;
}
.myBtn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #000; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  font-weight: 700;
  text-decoration: none;
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 20px; /* Increase font size */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
a:hover {
  background-color: #513ba9 !important;
}
.bg-primary {
  background-color: #513ba9 !important;
}
.menu-category button {
  border-radius: 40px;
  font-size: 18px;
  font-size: 400;
  background-color: #513ba9;
}
.footer-help {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
}
.footer {
  color: white;
}
img {
  border-radius: 8px;
}
.unggulan .unggulan-text,
.menu .menu-text {
  font-size: 36px;
  font-weight: 700;
}
.unggulan .unggulan-subtext,
.menu .menu-subtext {
  font-size: 24px;
}
</style>
