<template>
  <div>
    <!-- <div > -->
    <HeaderContent :title="postsForCategory.parent" />
    <a-row type="flex" align="bottom" style="margin-top: 20px" :gutter="24">
      <a-col
        :xl="8"
        :md="8"
        :sm="12"
        :xs="12"
        v-for="(post, index) in postsForCategory.child"
        :key="index"
        style="margin-bottom: 20px; "

      >
       <Nuxt-link :to="post.link"> 
        <a-card hoverable style="width: 100%; border-radius: 5px">
          <div class="card-img">
              <img src="" alt="">
          </div>
          <a-card-meta :title="post.titlePost">
            <template slot="description"> 
                <Nuxt-link :to="post.link"> 
                    <strong style="color: #409eff"> 
                        Xem chi tiết <a-icon type="double-right" />
                    </strong>
                </Nuxt-link>
            </template>
          </a-card-meta>
        </a-card>
       </Nuxt-link>

      </a-col>
      
    </a-row>
    <div style="float: right; margin: 30px 0 50px 0">
        <a-pagination v-model="current" :total="postsForCategory.child.length" show-less-items />
    </div>
   
    <!-- </div> -->

    <!-- <h1>{{ $route.path }}</h1> -->
    <!-- <h1>{{ postsForCategory }}</h1> -->
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import HeaderContent from '~/components/content/HeaderContent.vue'
export default {
  layout: 'DashBoard',
  components: {
    HeaderContent,
  },
  data(){
    return {
      current: 1,
    };
  },
  computed: {
    ...mapState(['postsForCategory']),
  },
  created() {
    this.setPostsForCategory(this.$route.path)
    this.setRoute(this.$route.path)
  },
  methods: {
    ...mapMutations(['setPostsForCategory', 'setRoute']),
  },
}
</script>

<style >
.ant-card-body{
    padding: 0px;
}
.ant-card-body .card-img {
    width: 100%;
    height: 210px;
    background-color: #e6ecf1;
}
.ant-card-meta {
    padding: 10px;
}
</style>