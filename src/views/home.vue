<template>
  <section class="homepage">
    <div class="hp-header">
      <div class="hp-header-container">
        <div class="header-text">
          <div class="hp-header-title">
            <!-- A better & Easy way to create websites -->
            Hassle-free website creation for simply every one
          </div>
          <div class="hp-header-subtitle">
            You can create an amazing website with Webix in just minutes.
          </div>
        </div>
        <div class="hp-header-video-container">
          <video
            class="hp-header-video"
            src="https://elementor.com/wp-content/uploads/2020/05/Homepage_Main_Video.mp4"
            autoplay=""
            loop=""
            muted="muted"
            controlslist="nodownload"
          ></video>
        </div>
      </div>
    </div>
    <div class="hp-main-content">
      <div class="hp-main-container">
        <div class="hp-main-content-title">
          Built for SMB's, Freelancers, and basicly any type of business initiative there is! 
        </div>
        <div class="hp-card-1">
          <div class="hp-card-text">
            <div class="hp-card-first-txt">
            <div class="hp-card-tag">
              DESIGN
            </div>
            <div class="hp-card-title">
              Pixel Perfect Design in WordPress
            </div>
            <div class="hp-card-pa">
              The only complete design platform to offer pixel perfect design, yet produces 100% clean code. Take your design vision and turn it into a stunning custom-made website.
            </div>
            </div>
            <div class="hp-card-btn">
              Learn More »
            </div>
            
          </div>
          <div class="hp-card-img">
            <img src="https://elementor.com/wp-content/uploads/2019/12/Homepage_Design_Optimised1-768x471.png" alt="" srcset="">
          </div>
        </div>
        <div class="hp-card-1" data="card-2">
                    <div class="hp-card-img">
            <img src="https://elementor.com/wp-content/uploads/2018/10/Homepage_Marketing_Optimized-768x558.png" alt="" srcset="">
          </div>
          <div class="hp-card-text">
            <div class="hp-card-first-txt">
            <div class="hp-card-tag">
              DESIGN
            </div>
            <div class="hp-card-title">
              Pixel Perfect Design in WordPress
            </div>
            <div class="hp-card-pa">
              The only complete design platform to offer pixel perfect design, yet produces 100% clean code. Take your design vision and turn it into a stunning custom-made website.
            </div>
            </div>
            <div class="hp-card-btn">
              Learn More »
            </div>
            
          </div>
        </div>
           <div class="hp-card-1">
          <div class="hp-card-text">
            <div class="hp-card-first-txt">
            <div class="hp-card-tag">
              DESIGN
            </div>
            <div class="hp-card-title">
              Pixel Perfect Design in WordPress
            </div>
            <div class="hp-card-pa">
              The only complete design platform to offer pixel perfect design, yet produces 100% clean code. Take your design vision and turn it into a stunning custom-made website.
            </div>
            </div>
            <div class="hp-card-btn">
              Learn More »
            </div>
            
          </div>
          <div class="hp-card-img">
            <img src="https://elementor.com/wp-content/uploads/2018/10/Homepage_Development__Optimized-1024x715.png" alt="" srcset="">
          </div>
        </div>
         <div class="hp-card-1" data="hp-title-pa">
          <div class="hp-card-text">
            <div class="hp-card-title">
              Create Any Website You Can Imagine
            </div>
            <div class="hp-card-pa">
              Elementor was built for you. Designers, developers, marketers, and entrepreneurs. Create stunning landing pages, design a blog, customize your online store – everything is within reach!
            </div>
            <div class="hp-card-btn">
              Start Creating Now »
            </div>
            
          </div>
        </div>
        <div class="hp-big-img">
          <img src="https://i.ibb.co/xFK1ZFF/Screenshot-1.png" alt="" srcset="">
        </div>
            <!-- <div class="template-previews-list">
      <span class="template-preview" @click="goToEditor">
        <div class="template-name">
          <img class="dots" src="@/assets/dots.png" />
          <span class="spec-name"> Create new website</span>
        </div>
        <div class="template-img">
          <img class="dots" src="@/assets/blank.png" @click="createNewWeb" />
        </div>
      </span>
      <div
        class="template-preview"
        v-for="(template, idx) in templates"
        :key="idx"
        @click="chooseTemplate(template)"
        @mouseenter.capture="isShowBtns = true"
        @mouseleave="isShowBtns = false"
      >
        <div class="template-name">
          <img class="dots" src="@/assets/dots.png" />
          <span class="spec-name">
            {{ template.name }}
          </span>
        </div>
        <div class="template-img">
          <img :src="template.previewImg" alt="" srcset="" />
        </div>

      </div>
    </div> -->
        <div class="hp-footer">
                        <div class="hp-footer-left">
                            <div class="hp-footer-icons">
                                <span>Connect With Us</span>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-behance"></i></a>
                            </div>
                        </div>
                        <div class="hp-footer-right">
                            <div class="hp-footer-txt">
                                <ul>
                                    <li><a href="#">Comapny</a></li>
                                    <li><a href="#">Team Members</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Help &amp; FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
      </div>
    </div>
  </section>
</template>

<script>
// import templatePreview from '@/cmps/template.list.cmps/template.preview.cmp';

export default {
  name: 'homepage',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
};
</script>



<style lang="css">
  #app .main-nav {
    border-bottom: 0!important;
  }
</style>