<template>
  <div>
    <HeaderContent :header="header_content" />
    <Content3 />
    <PaginatePrevious :data="paginate" />
    <FooterContent :data="footer" />
  </div>
</template>
<script>
import HeaderContent from '~/components/content/HeaderContent.vue'
import Content3 from '~/components/content/Content3.vue'
import FooterContent from '~/components/content/FooterContent'
import PaginatePrevious from '~/components/content/PaginatePrevious'
export default {
  layout: 'Left',
  components: {
    HeaderContent,
    Content3,
    FooterContent,
    PaginatePrevious,
  },
  data() {
    return {
      header_content: {
        title: 'THÔNG TIN LIÊN HỆ',
        descriptions: `GoPage - Phần mềm quản lý fanpage tốt nhất, hiệu quả nhất. Vui lòng liên hệ với chúng tôi nếu bạn quan tâm đến phần mềm, cần tư vấn chi tiết về các tính năng và hướng dẫn sử dụng.`,
      },
      paginate: {
        part: 'IV/ KIẾM TIỀN CÙNG GOPAGE - Previous',
        pre: 'Tham gia kiếm tiền Affiliate',
        url: '/'
      },
      footer: {
        src: 'https://lh5.googleusercontent.com/-ylV7XAIKYHg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmEmBiM_IwhA7rA05EdvDzODpHYaQ/photo.jpg',
        name: 'Ngà Phạm Thị Thanh',
        update: 'Last updated 1 year ago',
      },
    }
  },
}
</script>
