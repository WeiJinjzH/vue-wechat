<template>
<!--个人信息组件-->
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>个人信息</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell" id="avatarCell">
                <div class="weui-cell__bd">
                    <p>头像</p>
                </div>
                <div class="weui-cell__ft editbled">
                    <input class="upload-btn" type="file" accept="image/" @change="hanldeUpload" />
                    <img :src="avatarURL" style="width: 50px;height: 50px;border-radius: 4px;">
                </div>
            </div>
            <router-link :to="{path:'/self/profile/edit-nick',query: { actionName: '设置名字', oldName: '阿荡'}}">
                <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>名字</p>
                </div>
                <div class="weui-cell__ft editbled">
                    {{ nickName }}
                </div>
            </div>
            </router-link>
            <router-link :to="{path:'/self/profile/edit-nick',query: { actionName: '设置微信号', oldName: '10086'}}">
                <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>微信号</p>
                </div>
                <div class="weui-cell__ft editbled">
                    {{ wechatId }}
                </div>
            </div>
            </router-link>
            <router-link to="/self/profile/my-qrcode" class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的二维码</p>
                </div>
                <div class="weui-cell__ft">
                    <img :src="getIconPath('contact_add-friend-my-qr.png')" @error="handleImageError" style="vertical-align: middle;;width:24px" class="_align-middle">
                </div>
            </router-link>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>我的地址</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>性别</p>
                </div>
                <div class="weui-cell__ft">
                    男
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft">
                    奥地利 维也纳
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>个性签名</p>
                </div>
                <div class="weui-cell__ft">
                    未填写
                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>LinkedIn帐号</p>
                </div>
                <div class="weui-cell__ft">
                    未设置
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import ResourceManager from '@/utils/resource';
    export default {
        data() {
            return {
                pageName: "个人信息",
                avatarURL: this.getIconPath('header/header01.png'),
                nickName: '阿荡',
                wechatId: '10086',
            }
        },
        created() {
            // 检查 localStorage 中是否有头像数据
            const savedAvatar = localStorage.getItem('avatar');
            if (savedAvatar) {
                this.avatarURL = savedAvatar; // 初始化头像预览
            }
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
        methods: {
            hanldeUpload(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.avatarURL = e.target.result; // 更新头像预览
                        localStorage.setItem('avatar', e.target.result); // 保存到 localStorage
                    };
                    reader.readAsDataURL(file);
                }
            },
            getIconPath(iconName) {
                return ResourceManager.getAvatarPath(iconName)
            },
            // getImagePath(imagePath) {
            //     if (process.env.NODE_ENV === 'production') {
            //         // 处理APK中的图片路径
            //         if (window.plus) {
            //             return `./static/images/${imagePath}`;
            //         }
            //     }
            //     // 开发环境使用原路径
            //     return require(`@/assets/images/${imagePath}`);
            // },
            // handleImageError(e) {
            //     console.warn('Image load failed:', e);
            //     e.target.src = this.fallbackImage;
            // }
        },
    }
</script>
<style lang="less" scoped>
.editbled {
    &::after {
            content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    transform: matrix(.71, .71, -.71, .71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 2px;
        }
}
.weui-cell__ft {
        position: relative;
        padding-right: 15px;
    
    .upload-btn {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 99;
        height: 50px;
        opacity: 0;
    }
}
</style>