<template>
  <!-- 修改个人信息 -->
  <div class="edit-nick">
    <header id="wx-header">
        <div class="other" @click.stop="handleSave"><span>保存</span></div>
        <div class="center">
            <router-link to="/self/profile" tag="div" class="iconfont icon-return-arrow">
                <span>取消</span>
            </router-link>
            <span>{{ $route.query.actionName }}</span>
        </div>
    </header>
    <input class="nick-input" v-model="nickName" />
  </div>
</template>

<script>
export default {
  data() {
    return {
        nickName: this.$route.query.oldName,
    };
  },
  methods: {
    handleSave() {
        if (this.$route.query.oldName === '设置名字') {
            localStorage.setItem('nickName', this.nickName);
        } else {
            localStorage.setItem('wechatId', this.nickName);
        }
        this.$router.go(-1);
    },
  },
}
</script>

<style lang="less" scoped>
.edit-nick {
    width: 100%;
    .save-btn {
        display: inline-block;

    }
    .nick-input {
        width: 100%;
        height: 42px;
        border: none;
    }
}
</style>