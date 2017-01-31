function TrackInfo() {
  this.getModuleArray = function() {
    var TrackInfo = require('../mapping/TrackInfo.js').TrackInfo;
    var disa_udop_tracks__1_0_lib = require('../mapping/disa_udop_tracks__1_0_lib.js').disa_udop_tracks__1_0_lib;
    var disa_udop_tracks__1_0_ea = require('../mapping/disa_udop_tracks__1_0_ea.js').disa_udop_tracks__1_0_ea;
    var disa_udop_tracks__1_0_unit = require('../mapping/disa_udop_tracks__1_0_unit.js').disa_udop_tracks__1_0_unit;
    var NiemCore_TrackInfo = require('../mapping/NiemCore_TrackInfo.js').NiemCore_TrackInfo;
    var NiemMilitaryoperations_TrackInfo = require('../mapping/NiemMilitaryoperations_TrackInfo.js').NiemMilitaryoperations_TrackInfo;
    var NiemProxyXd_TrackInfo = require('../mapping/NiemProxyXd_TrackInfo.js').NiemProxyXd_TrackInfo;
    var NiemStructures_TrackInfo = require('../mapping/NiemStructures_TrackInfo.js').NiemStructures_TrackInfo;
    var disa_udop_tracks__1_0_genlib = require('../mapping/disa_udop_tracks__1_0_genlib.js').disa_udop_tracks__1_0_genlib;
    var gov_niem_release_niem_domains_cbrn__3 = require('../mapping/gov_niem_release_niem_domains_cbrn__3.js').gov_niem_release_niem_domains_cbrn__3;
    var net_opengis_gml_v_3_2_1 = require('../mapping/net_opengis_gml_v_3_2_1.js').net_opengis_gml_v_3_2_1;
    var gov_niem_release_niem_codes_nga_datum__3 = require('../mapping/gov_niem_release_niem_codes_nga_datum__3.js').gov_niem_release_niem_codes_nga_datum__3;
    var gov_niem_release_niem_codes_unece_rec20__3 = require('../mapping/gov_niem_release_niem_codes_unece_rec20__3.js').gov_niem_release_niem_codes_unece_rec20__3;
    return [TrackInfo, disa_udop_tracks__1_0_lib
      , disa_udop_tracks__1_0_ea, disa_udop_tracks__1_0_unit, NiemCore_TrackInfo
      , NiemMilitaryoperations_TrackInfo, NiemProxyXd_TrackInfo, NiemStructures_TrackInfo
      , disa_udop_tracks__1_0_genlib, gov_niem_release_niem_domains_cbrn__3
      , net_opengis_gml_v_3_2_1, gov_niem_release_niem_codes_nga_datum__3
    , gov_niem_release_niem_codes_unece_rec20__3];
  }
}

module.exports = TrackInfo;