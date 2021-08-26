<template>
  <div>
    <HeaderContent :header="header_content"/>
    <Content />
    <PaginateNext :data="paginate"/>
    <FooterContent :data="footer" />
  </div>
</template>
<script>
import HeaderContent from '~/components/content/HeaderContent.vue'
import Content from '~/components/content/Content.vue'
import PaginateNext from '~/components/content/PaginateNext';
import FooterContent from '~/components/content/FooterContent';

export default {
  components: {HeaderContent, Content,PaginateNext, FooterContent},
  layout: 'Left',
  data(){
    return{
      header_content:{
        title: 'Hướng dẫn sử dụng phần mềm GoPage',
        descriptions: `Gopage là phần mềm quản lý fanpage tốt nhất, hỗ trợ chăm sóc khách hàng,
      tối ưu hiệu quả bán hàng trên Facebook, tích hợp nhiều tính năng nhắn tin
      hàng loạt, chốt đơn livestream tự động, quay số...`
      },
      paginate: {
        part: "I/ TỔNG QUAN",
        next: "GIỚI THIỆU GOPAGE",
        url: "/tongquan/dang-ky"
      },
      footer: {
        src: "https://lh5.googleusercontent.com/-ylV7XAIKYHg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmEmBiM_IwhA7rA05EdvDzODpHYaQ/photo.jpg",
        name: "Ngà Phạm Thị Thanh",
        update: "Last updated 1 year ago"
      }
    }
  }
}
</script>
