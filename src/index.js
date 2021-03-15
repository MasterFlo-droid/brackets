module.exports = function check(str, bracketsConfig) {
  let bracket = str;
  for (let i = 0; i < bracket.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(bracket[i] === bracketsConfig[j][0] && bracket[i + 1] === bracketsConfig[j][1]) {
        let pairs = bracketsConfig[j].join('');
        bracket = bracket.replace(pairs, '');
        i -= 2;
      }
    }
  }
  return bracket == '';
}
