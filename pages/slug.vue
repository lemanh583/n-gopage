<template>
  <div>
    <HeaderContent
      :title="post[0].title"
      :descriptions="post[0].descriptions"
    />
    <div class="content">
      <div
        v-for="(line, index) in post[0].contents"
        :key="index"
        class="render"
        v-html="$md.render(line)"
      ></div>
    </div>
    <div>
      {{ post[0].post_pre }}
      {{ post[0].post_next }}
    </div>
    <PaginateNext v-if="post[0].post_pre == null" :data="post[0].post_next" />
    <PaginateMiddle
      v-if="post[0].post_next != null && post[0].post_pre != null"
      :next="post[0].post_next"
      :pre="post[0].post_pre"
    />
    <PaginatePrevious
      v-if="post[0].post_next == null"
      :data="post[0].post_pre"
    />
    <FooterContent
      :img="post[0].img_author"
      :name="post[0].name_author"
      :update="post[0].update"
    />
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
// import marked from 'marked'
import HeaderContent from '~/components/content/HeaderContent.vue'
import FooterContent from '~/components/content/FooterContent.vue'
import PaginateNext from '~/components/content/PaginateNext'
import PaginatePrevious from '~/components/content/PaginatePrevious'
import PaginateMiddle from '~/components/content/PaginateMiddle'

// import {mapM}
export default {
  layout: 'DashBoard',
  components: {
    HeaderContent,
    FooterContent,
    PaginateNext,
    PaginatePrevious,
    PaginateMiddle,
  },
  data() {
    return {
      param: this.$route.params.slug,
    }
  },
  computed: {
    ...mapState(['post', 'posts']),
    // compiledMarkdown() {
    //   return marked(this.post[0].contents , { sanitize: true })
    // }
  },
  created() {
    this.fitterPost(this.param[this.param.length - 1])
  },
  methods: {
    ...mapMutations(['fitterPost', 'setPostDefault']),
  },
}
</script>
<style scoped></style>
