<template>
  <div>
    <!-- <div>{{post}}</div>
    <div>{{$route.params.slug}}</div> -->
    <HeaderContent :title="post[0].Title" />
    <div class="content">
      <div v-html="$md.render(post[0].Content)"></div>
    </div>
    
    <!-- <div>---------------------------</div>
    <div>{{url}}</div>
    <div>---------------------------</div>
    <div>{{ arrLink }}</div>
    <div>{{ linkPre }}</div>
    <div>{{ linkNext }}</div> -->
    <PaginateNext v-if="linkPre == null && linkNext != null" :data="linkNext" />
    <PaginateMiddle
      v-if="linkPre != null && linkNext != null"
      :next="linkNext"
      :pre="linkPre"
    />
    <PaginatePrevious v-if="linkNext == null && linkPre != null" :data="linkPre" />
     <FooterContent
    
    />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import HeaderContent from '~/components/content/HeaderContent.vue'
import PaginateNext from '~/components/content/PaginateNext'
import PaginatePrevious from '~/components/content/PaginatePrevious'
import PaginateMiddle from '~/components/content/PaginateMiddle'
import FooterContent from '~/components/content/FooterContent.vue'
export default {
  layout: 'DashBoard',
  components: {
    HeaderContent,
    PaginateNext,
    PaginatePrevious,
    PaginateMiddle,
    FooterContent
  },
  computed: {
    ...mapState(['post', 'linkPre', 'linkNext', 'arrLink','url']),
  },
  created() {
    this.fitterPost(this.$route.params.slug)
    this.setLink(this.$route.path)
    this.setRoute(this.$route.path)
  },
  methods: {
    ...mapMutations(['fitterPost', 'setLink','setRoute']),
  },
}
</script>
