// 格式数量
export function getSongCount (num){
  if(num < 0) {
    return 0
  } else if (num < 10000) {
    return num
  } else if (num < 100000000) {
    return  Math.floor(num / 100) / 100 + 'W'  
  } else {
    return Math.floor(num / 1000000) / 100 + 'E'
  }
}

// 时间格式化处理
export function formatDate(time, formatTime) {
  let date = new Date(time)
  if(/(Y+)/.test(formatTime)) {
    formatTime = formatTime.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let temp = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let i in temp) {
    if (new RegExp(`(${i})`).test(formatTime)) {
      let str = temp[i] + '';
      formatTime = formatTime.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return formatTime;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}


// 格式化分秒
export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}
