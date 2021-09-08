<template>
  <div>
    <HeaderContent :header="header_content" />
    <Content2 />
    <PaginateMiddle :data="paginate" />
    <FooterContent :data="footer" />
  </div>
</template>
<script>
import HeaderContent from '~/components/content/HeaderContent.vue'
import Content2 from '~/components/content/Content2.vue'
import FooterContent from '~/components/content/FooterContent'
import PaginateMiddle from '~/components/content/PaginateMiddle'
export default {
  layout: 'DashBoard',
  components: {
    HeaderContent,
    Content2,
    FooterContent,
    PaginateMiddle,
  },
  data() {
    return {
      header_content: {
        title: '1.1. Đăng ký và thanh toán gói cước',
        descriptions: `Nâng cấp gói cước giúp bạn sử dụng được phần mềm trong thời gian lâu hơn với nhiều fanpage được kích hoạt, đáp ứng đủ các tính năng cần thiết cho công việc kinh doanh của bạn.`,
      },
      paginate: {
        part_next: 'Next - I/ TỔNG QUAN',
        next: '1.2. Kích hoạt fanpage',
        url_next: '/tongquan/cai-dat-extension-get-token',
        part_pre: 'I/ TỔNG QUAN - Previous',
        pre: 'GIỚI THIỆU GOPAGE',
        url_pre: '/'
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
