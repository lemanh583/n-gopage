<template>
<div>

    <div>dfkvnfkdnv </div>
    <div v-for="(a,index) in arrLink" :key="index">
      <div>{{a}}</div>
      <div>---------------------------------------</div>
    </div>
    <div>----------------------------------------------</div>
    <div>{{menus}}</div>
    <!-- <div>{{category}} </div> -->
    <!-- <HeaderContent :title="posts[0].title" :descriptions="posts[0].descriptions"/>
    <div class="content">
      <div v-for="(line,index) in posts[0].contents" :key="index" class="render" v-html="$md.render(line)"></div>
    </div>
     <PaginateNext v-if="posts[0].post_pre == null" :data="posts[0].post_next" />
    <PaginateMiddle
      v-if="posts[0].post_next != null && posts[0].post_pre != null"
      :next="posts[0].post_next"
      :pre="posts[0].post_pre"
    />
    <PaginatePrevious
      v-if="posts[0].post_next == null"
      :data="posts[0].post_pre"
    />
    <FooterContent
      :img="posts[0].img_author"
      :name="posts[0].name_author"
      :update="posts[0].update"
    /> -->
</div>
    
</template>
<script>
import {mapState, mapMutations} from 'vuex'
// import HeaderContent from '~/components/content/HeaderContent.vue';
// import FooterContent from '~/components/content/FooterContent.vue'
// import PaginateNext from '~/components/content/PaginateNext'
// import PaginatePrevious from '~/components/content/PaginatePrevious'
// import PaginateMiddle from '~/components/content/PaginateMiddle'

export default {
    layout: 'DashBoard',
    // components:{HeaderContent, FooterContent, PaginateNext, PaginatePrevious, PaginateMiddle},
   data(){
       return {

       }
   },
   computed:{
       ...mapState(['posts','category','menus','arrLink'])
   },
   created(){
      this.setLink(this.$route.path)
      this.setRoute(this.$route.path)
   },
   methods:{
       ...mapMutations(['setLink','setRoute'])
   }
}
</script>
