<template>
  <div class="container">
    <!-- <router-view/> -->
    <div>
      <div class="row">
        <div class="col-9">
          <form class="form-inline">
            <input
              class="form-control form-control-sm w-100"
              type="text"
              placeholder="Pozisyon veya Şirket Adı Giriniz."
              aria-label="Search"
              v-model="search"
            />
          </form>
        </div>
        <div class="col-3">
          <select class="form-control" v-model="selected">
            <option selected>Şehir Seçiniz</option>
            <option v-bind:value="'Mersin'">Mersin</option>
            <option v-bind:value="'Adana'">Adana</option>
            <option v-bind:value="'İstanbul'">İstanbul</option>
          </select>
        </div>
      </div>

      <div class="card-group">
        <div class="card">
          <div class="row" id="rows" v-for="item in filtered" :key="item">
            <div class="col-2">
              <img
                class="img"
                :src="require(`../assets/${item.resim}`)"
                alt="Card image cap"
              />
            </div>
            <div class="col-7">
              <div class="card-body">
                <h5 class="card-title">{{ item.pozisyonAdi }}</h5>
                <h6 class="card-subtitle">{{ item.sirketAdi }}</h6>
                <p class="card-text">{{ item.il }} / {{ item.ilce }}</p>

                <small>{{ item.sure }}</small>
              </div>
            </div>
            <div class="col-3" >
              <small class="text-muted">
                <button
                  type="button"
                  class="btn btn-link"
                  @click="addToCart(item)"
                >
                  İlanın Detaylarını Görüntüle
                </button>
              </small>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Items: [],
      cartItems: [],
      search: "",
      selected: "Şehir Seçiniz"
    };
  },

  mounted() {
    this.$http
      .get("http://localhost:3000/Items")
      .then(function(res) {
        this.Items = res.body;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  },

  computed: {
    filtered() {
      if (this.selected == "Şehir Seçiniz" || this.selected == "") {
        return this.Items.filter(list => {
          return (
            list.pozisyonAdi.toUpperCase().match(this.search.toUpperCase()) ||
            list.sirketAdi.toUpperCase().match(this.search.toUpperCase())
          );
        });
      } else {
        return this.Items.filter(list => {
          return (
            list.il.toUpperCase().match(this.selected.toUpperCase()) &&
            (list.pozisyonAdi.toUpperCase().match(this.search.toUpperCase()) ||
              list.sirketAdi.toUpperCase().match(this.search.toUpperCase()))
          );
        });
      }
    }
  },

  methods: {
    addToCart(item) {
      this.$emit("addToCart", item);
      this.$router.push(`/jobdetail/${item.id}`);
    },
    data() {
      return {};
    }
  }
};
</script>

<style>
.list {
  border: 2px solid #666;
  padding: 5px 10px;
  width: 300px;
  margin-bottom: 5px;
}
.list:hover {
  border: 8px solid #000;
  transition: all 0.5s;
}
.img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.col-3{
  margin-top: auto;
  margin-bottom: auto;
}
#rows{
  margin: 10px;
}
.form-control {
  margin-top: 10px;
  margin-bottom: 10px;
}
.dropdown {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
