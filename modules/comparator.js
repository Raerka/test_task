/**
 * @description Compare two strings semver version.
 * @param {string} f first arg - version in semver format
 * @param {string} s second arg - version in semver format
 * @return {number} -1, 0, or 1 depending on which argument larger
 */
function compareVersion(f, s) {
  const strF = f.split('.');
  const strS = s.split('.');
  for (let i = 0; i < 3; i++) {
    if (!strF[i]) {
      strF[i] = 0;
    }
    if (!strS[i]) {
      strS[i] = 0;
    }
    
    const numF = Number(strF[i]);
    const numS = Number(strS[i]);
    
    if (numF > numS || !isNaN(numF) && isNaN(numS)) {
      return 1;
    }
    if (numF < numS || isNaN(numF) && !isNaN(numS)) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareVersion;
