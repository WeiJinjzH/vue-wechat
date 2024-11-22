<template>
<!--可复用的相册组件 这里只完成静态页面 不涉及数据-->
    <div class="album">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>相册</span>
            </div>
        </header>
        <div class="home-pic">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img :src="getImagePath('header/header01.png')" @error="handleImageError">
                    </div>
                </div>
                <div class="top-name _ellipsis">阿荡</div>
            </div>
            <p class="sign">填坑小能手</p>
        </div>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">04</b>
                <b class="month">3月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img :src="getImagePath('header/header01.png')" @error="handleImageError" alt="">
                    <img :src="getImagePath('header/header01.png')" @error="handleImageError" alt="">
                    <img :src="getImagePath('header/header01.png')" @error="handleImageError" alt="">
                </div>
                <div class="thumb-desc">
                    这里字比较多，这里字比较多，这里字比较多，这里字比较多，这里字比较多，这里字比较多，这里字比较多，这里字比较多，这里字比较多，
                    <p class="number">共3张</p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">12</b>
                <b class="month">2月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img :src="getImagePath('header/header01.png')" @error="handleImageError" alt="">
                    <img :src="getImagePath('header/header01.png')" @error="handleImageError" alt="">
                </div>
                <div class="thumb-desc">
                    装逼如风 常伴吾生
                    <p class="number">共2张</p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">23</b>
                <b class="month">1月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img :src="getImagePath('header/header01.png')" @error="handleImageError" alt="">
                </div>
                <div class="thumb-desc">
                    装逼如风 常伴吾生
                    <p class="number">共1张</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fallbackImage: './static/images/header/header01.png',
            };
        },
        methods: {
            getImagePath(imagePath) {
                if (process.env.NODE_ENV === 'production') {
                    // 处理APK中的图片路径
                    if (window.plus) {
                        return `./static/images/${imagePath}`;
                    }
                }
                // 开发环境使用原路径
                return require(`@/assets/images/${imagePath}`);
            },
            handleImageError(e) {
                console.warn('Image load failed:', e);
                e.target.src = this.fallbackImage;
            }
        },
    }
</script>
<style lang="less">
    @import "../../assets/less/album.less";
</style>