/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(pref = []) {
  let spich = 0;
  const tri = [];
  for (let count = 0; count < pref.length; count++) {
    if (!(tri.indexOf(count) + 1)) {
      if ((count + 1) === pref[count]) {
        tri.push(count)
      } else {
        const pew = pref[pref[pref[count] - 1] - 1] - 1;
        if (pew === count) {
          spich++;
          tri.push(count);
          tri.push(pref[count] - 1);
          tri.push(pref[pref[count] - 1] - 1)
        };
      };
    };
  };
  return spich
};
