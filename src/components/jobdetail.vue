<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="post">
          <div class="post-img-content">
            <img
              :src="require(`../assets/${this.Item.resim}`)"
              class="imgcenter"
            />
            <span class="post-title">
              <b>{{this.Item.pozisyonAdi}}</b><br />
              <b>{{this.Item.sirketAdi}}</b></span
            >
          </div>
          <div class="content">
            <div class="author">
              İlanı Yayınlayan :  <b>{{this.Item.ilaniYayinlayanKisi}}</b> |
              <time datetime="2014-01-20">{{this.Item.sure}}</time>
            </div>
            <div>
               {{this.Item.aciklama}}
               <hr/>
            </div>
            <div>
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Genel Nitelikler ve İş tanımı
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <h3>GENEL NİTELİKLER</h3>
                      {{this.Item.genelNitelikler}} 
                      <hr/>
                      <h3>İŞ TANIMI</h3> 
                      {{this.Item.isTanimi}} 
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Aday Kriterleri
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      {{this.Item.adayKriterleri}}
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Pozisyon Bilgileri
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      {{this.Item.pozisyonBilgileri}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: String },

  data() {
    return {
      Item: {}
    };
  },
  mounted() {
    this.$http
      .get(`http://localhost:3000/Items/${encodeURIComponent(this.id)}`)
      .then(function(res) {
        this.Item = res.body;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  }
};
</script>

<style>
body {
  padding-top: 20px;
  background-color: #f7f7f7;
}

.imgcenter{
  display: block;
    margin: 0 auto;
}
.post {
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 1px #ccc;
}
/* .post img {
  filter: blur(2px);
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
} */
.post .content {
  padding: 15px;
}
.post .author {
  font-size: 11px;
  color: #737373;
  padding: 25px 30px 20px;
}
.post .post-img-content {
  height: 196px;
  position: relative;
}
.post .post-img-content img {
  position: absolute;
  width: 300px;
  height: 200px;
}
.post .post-title {
  display: table-cell;
  vertical-align: bottom;
  z-index: 2;
  position: relative;
}
.post .post-title b {
  background-color: rgba(51, 51, 51, 0.58);
  display: inline-block;
  margin-bottom: 5px;
  color: #fff;
  padding: 10px 15px;
  margin-top: 10px;
  margin-left:10px;
}
 
</style>
