var gov_niem_release_niem_domains_intelligence__3_Module_Factory = function () {
  var gov_niem_release_niem_domains_intelligence__3 = {
    name: 'gov_niem_release_niem_domains_intelligence__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/intelligence\/3.2\/',
    dependencies: ['TSOA_Track.NIEM_Core'],
    typeInfos: [],
    elementInfos: [{
        typeInfo: 'TSOA_Track.NIEM_Core.SystemIdentificationType',
        elementName: 'SystemIdentification'
      }]
  };
  return {
    gov_niem_release_niem_domains_intelligence__3: gov_niem_release_niem_domains_intelligence__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_domains_intelligence__3_Module_Factory);
}
else {
  var gov_niem_release_niem_domains_intelligence__3_Module = gov_niem_release_niem_domains_intelligence__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_domains_intelligence__3 = gov_niem_release_niem_domains_intelligence__3_Module.gov_niem_release_niem_domains_intelligence__3;
  }
  else {
    var gov_niem_release_niem_domains_intelligence__3 = gov_niem_release_niem_domains_intelligence__3_Module.gov_niem_release_niem_domains_intelligence__3;
  }
}