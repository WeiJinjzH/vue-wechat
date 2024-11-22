export default class ResourceManager {
    // static getEmojiPath(emojiName) {
    //   if (process.env.NODE_ENV === 'production') {
    //     return `./static/images/${emojiName}`
    //   }
    //   return require(`@/assets/images/${emojiName}`)
    // }
  
    static getAvatarPath(avatarName) {
      if (process.env.NODE_ENV === 'production') {
        return `./static/images/${avatarName}`
      }
      return require(`@/assets/images/${avatarName}`)
    }
  
    // static getIconPath(iconName) {
    //   if (process.env.NODE_ENV === 'production') {
    //     return `./static/images/${iconName}`
    //   }
    //   return require(`@/assets/images/${iconName}`)
    // }
  
    static handleImageError(e, fallbackImage) {
      e.target.src = fallbackImage || './static/images/header/header01.png'
    }
  }