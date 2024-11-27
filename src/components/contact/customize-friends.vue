<template>
  <div class="customize-friends">
    <header id="wx-header">
        <div class="other" @click.stop="handleSave"><span>保存</span></div>
        <div class="center">
            <div v-on:click="$router.back()" class="iconfont icon-return-arrow">
                <span>返回</span>
            </div>
            <span>朋友信息</span>
        </div>
    </header>
    <div class="weui-cells">
        <div class="weui-cell" id="avatarCell">
            <div class="weui-cell__bd">
                <p>头像</p>
            </div>
            <div class="weui-cell__ft editbled">
                <input class="upload-btn" type="file" accept="image/" @change="hanldeUpload" />
                <img v-if="avatarURL" :src="avatarURL" style="width: 50px;height: 50px;border-radius: 4px;">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>名字</p>
            </div>
            <input class="cell-input" type="text" v-model="nickName" />
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>备注</p>
            </div>
            <input class="cell-input" type="text" v-model="remarkName" />
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>微信号</p>
            </div>
            <input class="cell-input" type="text" v-model="wechatId" :disabled="wechatId" />
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>性别</p>
            </div>
            <input class="cell-input" type="text" v-model="gender" />
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>地区</p>
            </div>
            <input class="cell-input" type="text" v-model="area" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        avatarURL: '',
        nickName: '',
        wechatId: this.$route.query?.wxid,
        gender: '',
        area: '',
        remarkName: '',
    };
  },
  methods: {
    hanldeUpload() {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.avatarURL = e.target.result; // 更新头像预览
            };
            reader.readAsDataURL(file);
        }
    },
    handleSave() {
        // 保存好友
        // 添加输入的账号为好友
        const friend = { //昵称备注都有的朋友
            "wxid": this.$route.query?.wxid,
            "initial": 'a',
            "headerUrl": this.avatarURL,
            "nickname": this.nickName,
            "sex": this.gender === '男' ? 1 : 2,
            "remark": this.remarkName,
            "signature": "很丰富，简介不了",
            "telphone": 15573220014,
            "album": [{
                imgSrc: ""
            }],
            "area": [this.area],
            "from": "",
            "tag": "",
            "desc": {
            }
        };
        this.$store.commit("addNewFriend", friend);
        this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.weui-cell__ft {
        position: relative;
        padding-right: 15px;
    
    .upload-btn {
        position: absolute;
        right: 0;
        top: -15px;
        z-index: 99;
        height: 30px;
        opacity: 0;
    }
}
.cell-input {
    width: 80%;
    height: 25px;
    border: none;
}
</style>
