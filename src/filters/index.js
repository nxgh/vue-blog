const install = Vue => {
  Vue.filter('Id2Time', value => {
    let timestamp = parseInt(value.slice(0, 8), 16)
    let a = new Date(timestamp * 1000)
    let day = a.getDay() < 10 ? '0' + a.getDay() : a.getDay()
    let m = a.getMonth() + 1
    let month = m < 10 ? '0' + m : m
    let time = a.getFullYear() + '-' + month + '-' + day
    return time
  })
}

export default { install }
