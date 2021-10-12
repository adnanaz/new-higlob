import Vue from 'vue'

Vue.filter('phone', function (value) {
  if (!value) return ''
  return value.substring(0, 4) + ' - XXXX - XXXX'
})

Vue.filter('email', function (value) {
  if (!value) return ''
  return value.substring(0, 5) + '@XXXXX'
})

Vue.filter('address', function (value) {
  if (!value) return ''
  return value.substring(0, 10) + ' . . .'
})

Vue.filter('title', function (value) {
  if (!value) return ''
  if (value.length > 70) {
    return value.substring(0, 70) + ' . . .'
  } else {
    return value
  }
})

Vue.filter('desc', function (value) {
  if (!value) return ''
  if (value.length > 100) {
    return value.substring(0, 100) + ' . . .'
  } else {
    return value
  }
})

Vue.filter("initial", function (value) {
  if (!value) return ""
  let splitName = value.split(" ")
  let initial = value.charAt(0)
  if(splitName[1] !== undefined) {
    initial += splitName[1].charAt(0)
  }

  return initial.toUpperCase()
})

Vue.filter("numberFormat", (number = 0, decimals = 0, decPoint = ',', thousandsSep = '.') => {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  let n = !isFinite(+number) ? 0 : +number;
  let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  let dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  let s = '';

  let toFixedFix = function (n, prec) {
      let k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k).toFixed(prec);
  }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
})

export default {
}