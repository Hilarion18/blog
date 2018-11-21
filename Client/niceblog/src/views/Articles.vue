<template>
  <div class="articles">
    <h1>This is Article Page</h1>
    <!-- <hero-dota :hero="hero" @data-data="menerimaData"></hero-dota> -->
    <!-- {{ articles }} -->
    <section class="details-card">
    <div class="container">
        <div class="row">
          <div :key="index" v-for="(article, index) in articlesReady">
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="https://placeimg.com/380/230/nature" alt="">
                        <span><h3>{{ article.title }}</h3></span>
                    </div>
                    <div class="card-desc">
                      <h4>{{ article.author }}</h4>
                      <p>{{ article.content }}</p>
                        <a href="#" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</section>
  </div>
</template>


<script>
// @ is an alias to /src
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from '@/config.js'
 
Vue.use(VueAxios, axios)

export default {
  name: 'articles',
  components: {

  },
  data() {
    return {
      articlesReady: [],
      datayangditerima: '',
    };
  },
  methods: {
    getArticles: function() {
      axios({
        method: 'GET',
        url: `${config.port}/article`
      })
      .then((response) => {
        // console.log('=== masuk articles', response);
        this.articlesReady = []
        this.articlesReady = response.data.response
      })
      .catch((err) => {
        console.log(err);
        console.log('this is an error to get article');
      })
    }
    // menerimaData: function (val) {
    //   // console.log('menerima data')
    //   this.datayangditerima = val;
    // },
  },
  created() {
    this.getArticles()
  },
  // watch() {
  //   this.getArticles()
  // },
};
</script>