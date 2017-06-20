var gov_niem_release_niem_domains_screening__3_Module_Factory = function () {
  var gov_niem_release_niem_domains_screening__3 = {
    name: 'gov_niem_release_niem_domains_screening__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/screening\/3.2\/',
    dependencies: ['NIEM_Core'],
    typeInfos: [],
    elementInfos: [{
        typeInfo: 'NIEM_Core.IdentificationType',
        elementName: 'PersonIdentification'
      }]
  };
  return {
    gov_niem_release_niem_domains_screening__3: gov_niem_release_niem_domains_screening__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_domains_screening__3_Module_Factory);
}
else {
  var gov_niem_release_niem_domains_screening__3_Module = gov_niem_release_niem_domains_screening__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_domains_screening__3 = gov_niem_release_niem_domains_screening__3_Module.gov_niem_release_niem_domains_screening__3;
  }
  else {
    var gov_niem_release_niem_domains_screening__3 = gov_niem_release_niem_domains_screening__3_Module.gov_niem_release_niem_domains_screening__3;
  }
}