/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4) {
    return false;
  }

  const path = [];
  const result = [];

  function isValidIp(str) {
    if (str.length > 3) {
      return false;
    } else if (str[0] === "0" && str.length > 1) {
      return false;
    } else if (parseInt(str) > 255) {
      return false;
    }
    return true;
  }
  function divideHelper(starIndex) {
    if (starIndex >= s.length && path.length === 4) {
      result.push(path.join("."));
      return;
    }

    for (let j = starIndex; j < s.length; j++) {
      let str = s.substr(starIndex, j - starIndex + 1);
      if (!isValidIp(str)) continue;
      path.push(str);
      divideHelper(j + 1);
      path.pop();
    }
  }
  divideHelper(0);
  return result;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
