<template>
  <!--我 组件-->
  <div id="self">
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/self/profile" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('header/header01.png')" alt="" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">{{ nickName }}</h4>

            <p class="self-wxid">微信号: {{ wechatId }}</p>
          </div>
          <div class="weui-cell__ft">
            <img :src="getIconPath('chat-info-qr.png')">
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('me_more-my-album.png')">
          </div>
          <div class="weui-cell__bd">
            <p>相册</p>
          </div>
        </router-link>
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('me_more-my-favorites.png')">
          </div>
          <div class="weui-cell__bd">
            <p>收藏</p>
          </div>
        </router-link>
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('me_more-my-bank-card.png')">
          </div>
          <div class="weui-cell__bd">
            <p>钱包</p>
          </div>
        </router-link>
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('me_my-card-package-icon.png')">
          </div>
          <div class="weui-cell__bd">
            <p>卡券</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('me_more-expression.png')">
          </div>
          <div class="weui-cell__bd">
            <p>表情</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/settings" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img :src="getIconPath('me_more-setting.png')">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ResourceManager from '@/utils/resource';
  export default {
    mixins: [window.mixin],
    data() {
      return {
        "pageName": "我",
        nickName: '阿荡',
        wechatId: '10086',
      }
    },
    mounted() {
      this.$store.commit("toggleTipsStatus", -1)
      // 检查 localStorage 中是否有昵称数据
      const nickName = localStorage.getItem('nickName');
        if (nickName) {
            this.nickName = nickName;
        }
        const wechatId = localStorage.getItem('wechatId');
        if (wechatId) {
            this.wechatId = wechatId;
        }
    },
    activated() {
      this.$store.commit("toggleTipsStatus", -1)
    },
    methods:{
      getIconPath(iconName) {
        return ResourceManager.getAvatarPath(iconName)
      },
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/self.less";
</style>
