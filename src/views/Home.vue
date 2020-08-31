<template>
  <div class="app">
    <div class="container">
      <div class="d-flex justify-content-between flex-row mt-5">
        <!-- <div style="width:540px;height:400px">test</div> -->
        <img src="https://picsum.photos/540/400" alt srcset />

        <div class="d-flex flex-column justify-content-between">
          <img src="https://picsum.photos/255/185" alt srcset />
          <img src="https://picsum.photos/255/185" alt srcset />
          <!-- <div style="width:255;height:185px">test</div>
          <div style="width:255;height:185px">test</div>-->
        </div>
        <img src="https://picsum.photos/255/400" alt srcset />
      </div>

      <div class="mt-5">
        <div class="unggulan text-left">
          <div class="unggulan-text">Produk Unggulan Kami</div>
          <div class="unggulan-subtext">Coba dulu aja siapa tau suka kan.</div>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <img v-for="kelas in 4" :key="kelas.index" src="https://picsum.photos/255/400" alt srcset />
        </div>
      </div>
      <div class="mt-5">
        <div class="menu">
          <div class="menu-text text-center">Menu</div>
          <div class="menu-subtext text-center">Pilih sesuai selera kamu.</div>
          <div class="menu-category my-4">
            <button
              class="btn btn-primary px-5 mr-4 py-0"
              v-for="category in 4"
              :key="category.index"
            >Test</button>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap mt-4">
          <img
            v-for="kelas in 9"
            :key="kelas.index"
            style="margin-bottom:30px"
            src="https://picsum.photos/255/255"
            alt
            srcset
          />
        </div>
      </div>
    </div>
    <div class="footer py-5 bg-primary">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div style="width:317px">
            <div class="brand-logo">Nyuss</div>
            <div>
              Minuman yang bikin nyuss. bikin seleb
              bilang “Rasanya mau meninggal”.
            </div>
            <div class="info">
              <div class="contact">contact@nyuss.com</div>
              <div class="telp">+62 812 8192 5236</div>
            </div>
          </div>
          <div style="width:317px">
            <div class="footer-help">Sales Support</div>
            <div>
              Ingin membuat mitra atau kerjasama
              dengan kami? silakan hubungi.
            </div>
            <div class="info">
              <div class="contact">contact@nyuss.com</div>
              <div class="telp">+62 812 8192 5236</div>
            </div>
          </div>
          <div style="width:317px">
            <div class="footer-help">Tech Support</div>
            <div>
              Terdapat kesalahan pada sistem kami?
              silakan hubungi.
            </div>
            <div class="info">
              <div class="contact">contact@nyuss.com</div>
              <div class="telp">+62 812 8192 5236</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
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
  margin-top: 8px;
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
