<template>
    <div class="container-fluid">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
        <a @click="scrollToTop()" class="scroll-button"><i class="fas fa-chevron-up"></i></a>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
    methods: {
        scrollToTop(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>


