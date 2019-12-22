function cloneObject(o) {
  var ret = {};
  Object.keys(o).forEach(function(val) {
    ret[val] = o[val];
  });
  return ret;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomString(length, chars) {
  var mask = '';
  if (chars.indexOf('a') > -1) {
    mask += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (chars.indexOf('A') > -1) {
    mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (chars.indexOf('#') > -1) {
    mask += '0123456789';
  }
  if (chars.indexOf('!') > -1) {
    mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  }
  var result = '';
  for (var i = length; i > 0; --i) {
    result += mask[Math.floor(Math.random() * mask.length)];
  }
  return result;
}

function priceTransform(salePrice) {
  let finalPrice = salePrice;

  if (finalPrice > 1000000) {
    finalPrice = finalPrice / 1000000 + 'M';
  } else if (finalPrice > 1000) {
    finalPrice = finalPrice / 1000 + 'K';
  }

  return 'HK$' + finalPrice;
}

export {cloneObject, getRandomColor, randomString, priceTransform};
