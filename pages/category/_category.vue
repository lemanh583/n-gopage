<template>
  <div>
    <!-- <div > -->
        <HeaderContent :title="postsForCategory.parent" />
      <a-card hoverable style="width: 240px" v-for="(post, index) in postsForCategory.child" :key="index">
        <img
          slot="cover"
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
        <a-card-meta :title="post.titlePost">
          <template slot="description"> www.instagram.com </template>
        </a-card-meta>
      </a-card>
    <!-- </div> -->

    <h1>{{ $route.path }}</h1>
    <h1>{{ postsForCategory }}</h1>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import HeaderContent from '~/components/content/HeaderContent.vue'
export default {
  layout: 'DashBoard',
  components: {
      HeaderContent
  },
  computed: {
    ...mapState(['postsForCategory']),
  },
  created() {
    this.setPostsForCategory(this.$route.path)
    this.setRoute(this.$route.path)
  },
  methods: {
    ...mapMutations(['setPostsForCategory','setRoute']),
  },
}
</script>
