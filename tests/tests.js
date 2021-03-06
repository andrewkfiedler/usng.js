var chai = require('chai');
var usngs = require('../usng');
var converter = new usngs.Converter();

describe('Get Zone number from lat/lon', function(){
  describe('around Arizona in the United States', function(){
    it('should return 12', function(){
      chai.assert.equal(12, converter.getZoneNumber(34, -111));
    });
  });
  describe('around Prescott/Chino Valley in Arizona', function(){
    it('should return 12', function(){
      chai.assert.equal(12, converter.getZoneNumber(34.5, -112.5));
    });
  });
  describe('immediately around Prescott city in Arizona', function(){
    it('should return 12', function(){
      chai.assert.equal(12, converter.getZoneNumber(34.545, -112.465));
    });
  });
  describe('around Uruguay', function(){
    it('should return 21', function(){
      chai.assert.equal(21, converter.getZoneNumber(-32.5, -55.5));
    });
  });
  describe('around Buenos Aires city in Argentina', function(){
    it('should return 21', function(){
      chai.assert.equal(21, converter.getZoneNumber(-34.5, -58.5));
    });
  });
  describe('around Merlo town in Buenos Aires', function(){
    it('should return 21', function(){
      chai.assert.equal(21, converter.getZoneNumber(-34.66, -58.73));
    });
  });
  describe('around Madagascar', function(){
    it('should return 38', function(){
      chai.assert.equal(38, converter.getZoneNumber(-18.5, 46.5));
    });
  });
  describe('around Toliara city in Madagascar', function(){
    it('should return 38', function(){
      chai.assert.equal(38, converter.getZoneNumber(-22.5, 43.5));
    });
  });
  describe('around Toliara city center in Madagascar', function(){
    it('should return 38', function(){
      chai.assert.equal(38, converter.getZoneNumber(-23.355, 43.67));
    });
  });
  describe('around Central Japan', function(){
    it('should return 54', function(){
      chai.assert.equal(54, converter.getZoneNumber(37, 140.5));
    });
  });
  describe('around Tokyo city in Japan', function(){
    it('should return 54', function(){
      chai.assert.equal(54, converter.getZoneNumber(35.5, 139.5));
    });
  });
  describe('around Tokyo city center in Japan', function(){
    it('should return 54', function(){
      chai.assert.equal(54, converter.getZoneNumber(35.69, 139.77));
    });
  });
  describe('around the international date line', function(){
    describe('to the immediate west', function(){
      it('should return 60', function(){
        chai.assert.equal(60, converter.getZoneNumber(28, 179));
      });
    });
    describe('to the immediate east', function(){
      it('should return 1', function(){
        chai.assert.equal(1, converter.getZoneNumber(28, -179));
      });
    });
    describe('with midpoint directly on it (-180)', function(){
      it('should return 1', function(){
        chai.assert.equal(1, converter.getZoneNumber(28, -180));
      });
    });
    describe('with midpoint directly on it (+180)', function(){
      it('should return 1', function(){
        chai.assert.equal(1, converter.getZoneNumber(28, 180));
      });
    });
  });
  describe('around the equator', function(){
    describe('to the immediate north', function(){
      it('should return 54', function(){
        chai.assert.equal(54, converter.getZoneNumber(1, 141));
      });
    });
    describe('to the immediate south', function(){
      it('should return 54', function(){
        chai.assert.equal(54, converter.getZoneNumber(-1, 141));
      });
    });
    describe('with midpoint directly on it', function(){
      it('should return 54', function(){
        chai.assert.equal(54, converter.getZoneNumber(0, 141));
      });
    });
  });
  describe('around the international date line and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return 60', function(){
        chai.assert.equal(60, converter.getZoneNumber(1, 179));
      });
    });
    describe('to the immediate west and south', function(){
      it('should return 1', function(){
        chai.assert.equal(60, converter.getZoneNumber(-1, 179));
      });
    });
    describe('to the immediate east and north', function(){
      it('should return 60', function(){
        chai.assert.equal(1, converter.getZoneNumber(1, -179));
      });
    });
    describe('to the immediate east and south', function(){
      it('should return 1', function(){
        chai.assert.equal(1, converter.getZoneNumber(-1, -179));
      });
    });
    describe('with midpoint directly on it (0, -180)', function(){
      it('should return 1', function(){
        chai.assert.equal(1, converter.getZoneNumber(0, -180));
      });
    });
    describe('with midpoint directly on it (0, +180)', function(){
      it('should return 1', function(){
        chai.assert.equal(1, converter.getZoneNumber(0, 180));
      });
    });
  });
});
describe('Get Zone letter from lat', function(){
  describe('around Arizona in the United States', function(){
    it('should return S', function(){
      chai.assert.equal("S", converter.UTMLetterDesignator(34));
    });
  });
  describe('around Prescott/Chino Valley in Arizona', function(){
    it('should return S', function(){
      chai.assert.equal("S", converter.UTMLetterDesignator(34.5));
    });
  });
  describe('immediately around Prescott city in Arizona', function(){
    it('should return S', function(){
      chai.assert.equal("S", converter.UTMLetterDesignator(34.545));
    });
  });
  describe('around Uruguay', function(){
    it('should return H', function(){
      chai.assert.equal("H", converter.UTMLetterDesignator(-32.5));
    });
  });
  describe('around Buenos Aires city in Argentina', function(){
    it('should return H', function(){
      chai.assert.equal("H", converter.UTMLetterDesignator(-34.5));
    });
  });
  describe('around Merlo town in Buenos Aires', function(){
    it('should return H', function(){
      chai.assert.equal("H", converter.UTMLetterDesignator(-34.66));
    });
  });
  describe('around Madagascar', function(){
    it('should return K', function(){
      chai.assert.equal("K", converter.UTMLetterDesignator(-18.5));
    });
  });
  describe('around Toliara city in Madagascar', function(){
    it('should return K', function(){
      chai.assert.equal("K", converter.UTMLetterDesignator(-22.5));
    });
  });
  describe('around Toliara city center in Madagascar', function(){
    it('should return K', function(){
      chai.assert.equal("K", converter.UTMLetterDesignator(-23.355));
    });
  });
  describe('around Central Japan', function(){
    it('should return S', function(){
      chai.assert.equal("S", converter.UTMLetterDesignator(37));
    });
  });
  describe('around Tokyo city in Japan', function(){
    it('should return S', function(){
      chai.assert.equal("S", converter.UTMLetterDesignator(35.5));
    });
  });
  describe('around Tokyo city center in Japan', function(){
    it('should return S', function(){
      chai.assert.equal("S", converter.UTMLetterDesignator(35.69));
    });
  });
  describe('around the equator', function(){
    describe('to the immediate north', function(){
      it('should return N', function(){
        chai.assert.equal('N', converter.UTMLetterDesignator(1));
      });
    });
    describe('to the immediate south', function(){
      it('should return M', function(){
        chai.assert.equal('M', converter.UTMLetterDesignator(-1));
      });
    });
    describe('with midpoint directly on it', function(){
      it('should return N', function(){
        chai.assert.equal('N', converter.UTMLetterDesignator(0));
      });
    });
    describe('imediately south of north polar maximum', function(){
      it('should return X', function(){
        chai.assert.equal('X', converter.UTMLetterDesignator(83));
      });
    });
    describe('imediately north of north polar maximum', function(){
      it('should return Z (invalid designator)', function(){
        chai.assert.equal('Z', converter.UTMLetterDesignator(85));
      });
    });
    describe('directly on north polar maximum', function(){
      it('should return X (invalid designator)', function(){
        chai.assert.equal('X', converter.UTMLetterDesignator(84));
      });
    });
    describe('imediately north of south polar minimum', function(){
      it('should return C', function(){
        chai.assert.equal('C', converter.UTMLetterDesignator(-79));
      });
    });
    describe('imediately south of south polar minimum', function(){
      it('should return Z (invalid designator)', function(){
        chai.assert.equal('Z', converter.UTMLetterDesignator(-81));
      });
    });
    describe('directly on south polar minimum', function(){
      it('should return C (invalid designator)', function(){
        chai.assert.equal('C', converter.UTMLetterDesignator(-80));
      });
    });
  });
});
describe('Parse USNG', function(){
  describe('with single digit zone', function(){
    it('should return zone=5; letter=Q', function(){
      var parts = {};
      converter.parseUSNG_str("5Q", parts);
      chai.assert.equal(5, parts.zone);
      chai.assert.equal('Q', parts.let);
    });
  });
  describe('with two digit zone', function(){
    it('should return zone=12; letter=S', function(){
      var parts = {};
      converter.parseUSNG_str("12S", parts);
      chai.assert.equal(12, parts.zone);
      chai.assert.equal('S', parts.let);
    });
  });
  describe('with single digit zone and squares', function(){
    it('should return zone=5; letter=Q; square1=K; square2=B', function(){
      var parts = {};
      converter.parseUSNG_str("5Q KB", parts);
      chai.assert.equal(5, parts.zone);
      chai.assert.equal('Q', parts.let);
      chai.assert.equal('K', parts.sq1);
      chai.assert.equal('B', parts.sq2);
    });
  });
  describe('with two digit zone and squares', function(){
    it('should return zone=12; letter=S; square1=V; square2=C', function(){
      var parts = {};
      converter.parseUSNG_str("12S VC", parts);
      chai.assert.equal(12, parts.zone);
      chai.assert.equal('S', parts.let);
      chai.assert.equal('V', parts.sq1);
      chai.assert.equal('C', parts.sq2);
    });
  });
  describe('with single digit zone, squares and 5 digit meters', function(){
    it('should return zone=5; letter=Q; square1=K; square2=B; easting=42785; northing=31517', function(){
      var parts = {};
      converter.parseUSNG_str("5Q KB 42785 31517", parts);
      chai.assert.equal(5, parts.zone);
      chai.assert.equal('Q', parts.let);
      chai.assert.equal('K', parts.sq1);
      chai.assert.equal('B', parts.sq2);
      chai.assert.equal(5, parts.precision);
      chai.assert.equal('42785', parts.east);
      chai.assert.equal('31517', parts.north);
    });
  });
  describe('with two digit zone, squares and 5 digit meters', function(){
    it('should return zone=12; letter=S; square1=V; square2=C; easting=12900; northing=43292', function(){
      var parts = {};
      converter.parseUSNG_str("12S VC 12900 43292", parts);
      chai.assert.equal(12, parts.zone);
      chai.assert.equal('S', parts.let);
      chai.assert.equal('V', parts.sq1);
      chai.assert.equal('C', parts.sq2);
      chai.assert.equal(5, parts.precision);
      chai.assert.equal('12900', parts.east);
      chai.assert.equal('43292', parts.north);
    });
  });
});
describe('Convert USNG to UTM', function(){
  describe('with single digit zone', function(){
    it('should return north=2131517; east=242785; zone=5; letter=Q', function(){
      var usng = "5Q KB 42785 31517";
      var zone = 5;
      var letter = "Q";
      var sq1 = "K";
      var sq2 = "B";
      var easting = "42785";
      var northing = "31517";
      var coords = {};
      converter.USNGtoUTM(zone, letter, sq1, sq2, easting, northing, coords);
      chai.assert.equal(2131517, Math.floor(coords.N));
      chai.assert.equal(242785, Math.floor(coords.E));
      chai.assert.equal(5, coords.zone);
      chai.assert.equal("Q", coords.letter);
    });
  });
  describe('with two digit zone', function(){
    it('should return north=43292; east=12900; zone=12; letter=S', function(){
      var usng = "12S VC 12900 43292";
      var zone = 12;
      var letter = "S";
      var sq1 = "V";
      var sq2 = "C";
      var easting = "12900";
      var northing = "43292";
      var coords = {};
      converter.USNGtoUTM(zone, letter, sq1, sq2, easting, northing, coords);
      chai.assert.equal(3743292, Math.floor(coords.N));
      chai.assert.equal(412900, Math.floor(coords.E));
      chai.assert.equal(12, coords.zone);
      chai.assert.equal("S", coords.letter);
    });
  });
});
describe('Convert UTM to Lat/Lon', function(){
  describe('with single digit zone and specifying accuracy', function(){
    it('should return north=1; east=-157; south=0; west=-158', function(){
      var northing = 42785;
      var easting = 31517;
      var zone = 5;
      var accuracy = 100000;
      var latLon = converter.UTMtoLL(northing, easting, zone, accuracy);
      chai.assert.equal(1, Math.floor(latLon.north));
      chai.assert.equal(-157, Math.floor(latLon.east));
      chai.assert.equal(0, Math.floor(latLon.south));
      chai.assert.equal(-158, Math.floor(latLon.west));
    });
  });
  describe('with single digit zone and not specifying accuracy', function(){
    it('should return lat=0; east=-158', function(){
      var northing = 42785;
      var easting = 31517;
      var zone = 5;
      var latLon = converter.UTMtoLL(northing, easting, zone);
      chai.assert.equal(0, Math.floor(latLon.lat));
      chai.assert.equal(-158, Math.floor(latLon.lon));
    });
  });
  describe('with two digit zone and specifying accuracy', function(){
    it('should return north=1; east=-115; south=0; west=-116', function(){
      var northing = 12900;
      var easting = 43292;
      var zone = 12;
      var accuracy = 100000;
      var latLon = converter.UTMtoLL(northing, easting, zone, accuracy);
      chai.assert.equal(1, Math.floor(latLon.north));
      chai.assert.equal(-115, Math.floor(latLon.east));
      chai.assert.equal(0, Math.floor(latLon.south));
      chai.assert.equal(-116, Math.floor(latLon.west));
    });
  });
  describe('with two digit zone and not specifying accuracy', function(){
    it('should return lat=0; lon=-116', function(){
      var northing = 12900;
      var easting = 43292;
      var zone = 12;
      var latLon = converter.UTMtoLL(northing, easting, zone);
      chai.assert.equal(0, Math.floor(latLon.lat));
      chai.assert.equal(-116, Math.floor(latLon.lon));
    });
  });
});
describe('Convert USNG to Lat/Lon', function(){
  describe('with single digit zone', function(){
    it('should return north=19; east=-155; south=19; west=-155', function(){
      var usng = "5Q KB 42785 31517";
      var latLon = converter.USNGtoLL(usng);
      chai.assert.equal(19, Math.floor(latLon.north));
      chai.assert.equal(-156, Math.floor(latLon.east));
      chai.assert.equal(19, Math.floor(latLon.south));
      chai.assert.equal(-156, Math.floor(latLon.west));
    });
  });
  describe('with two digit zone', function(){
    it('should return north=33; east=-111; south=33; west=-111', function(){
      var usng = "12S VC 12900 43292";
      var latLon = converter.USNGtoLL(usng);
      chai.assert.equal(33, Math.floor(latLon.north));
      chai.assert.equal(-112, Math.floor(latLon.east));
      chai.assert.equal(33, Math.floor(latLon.south));
      chai.assert.equal(-112, Math.floor(latLon.west));
    });
  });
});
describe('Convert Lat/Lon Bounding Box to USNG', function(){
  describe('around Arizona in the United States', function(){
    it('should return 12S', function(){
      chai.assert.equal("12S", converter.LLBboxtoUSNG(37, 31, -108, -114));
    });
  });
  describe('around Prescott/Chino Valley in Arizona', function(){
    it('should return 12S UD', function(){
      chai.assert.equal("12S UD ", converter.LLBboxtoUSNG(35, 34, -112, -113));
    });
  });
  describe('immediately around Prescott city in Arizona', function(){
    it('should return 12S UD 65 23', function(){
      chai.assert.equal("12S UD 65 23", converter.LLBboxtoUSNG(34.55, 34.54, -112.46, -112.47));
    });
  });
  describe('around Uruguay', function(){
    it('should return 21H', function(){
      chai.assert.equal("21H", converter.LLBboxtoUSNG(-30, -35, -53, -58));
    });
  });
  describe('around Buenos Aires city in Argentina', function(){
    it('should return 21H UB', function(){
      chai.assert.equal("21H UB ", converter.LLBboxtoUSNG(-34, -35, -58, -59));
    });
  });
  describe('around Merlo town in Buenos Aires', function(){
    it('should return 21H UB 41 63', function(){
      chai.assert.equal("21H UB 41 63", converter.LLBboxtoUSNG(-34.65, -34.67, -58.72, -58.74));
    });
  });
  describe('around Madagascar', function(){
    it('should return 38K', function(){
      chai.assert.equal("38K", converter.LLBboxtoUSNG(-11, -26, 51, 42));
    });
  });
  describe('around Toliara city in Madagascar', function(){
    it('should return 38K LA', function(){
      chai.assert.equal("38K LA ", converter.LLBboxtoUSNG(-22, -23, 44, 43));
    });
  });
  describe('around Toliara city center in Madagascar', function(){
    it('should return 38K LV 64 17', function(){
      chai.assert.equal("38K LV 64 17", converter.LLBboxtoUSNG(-23.31, -23.39, 43.71, 43.63));
    });
  });
  describe('around Central Japan', function(){
    it('should return 54S', function(){
      chai.assert.equal("54S", converter.LLBboxtoUSNG(41, 33, 143, 138));
    });
  });
  describe('around Tokyo city in Japan', function(){
    it('should return 54S UE', function(){
      chai.assert.equal("54S UE ", converter.LLBboxtoUSNG(36, 35, 140, 139));
    });
  });
  describe('around Tokyo city center in Japan', function(){
    it('should return 54S UE 41 63', function(){
      chai.assert.equal("54S UE 88 50", converter.LLBboxtoUSNG(35.71, 35.67, 139.80, 139.74));
    });
  });
  describe('around the international date line', function(){
    describe('to the immediate west', function(){
      it('should return 60R', function(){
        chai.assert.equal("60R", converter.LLBboxtoUSNG(34, 23, 179, 172));
      });
    });
    describe('to the immediate east', function(){
      it('should return 1R', function(){
        chai.assert.equal("1R", converter.LLBboxtoUSNG(34, 23, -179, -172));
      });
    });
    describe('with date line crossing the middle', function(){
      it('should return 1R', function(){
        chai.assert.equal("1R BM ", converter.LLBboxtoUSNG(34, 23, 179, -179));
      });
    });
  });
  describe('around the equator', function(){
    describe('to the immediate north', function(){
      it('should return 58N', function(){
        chai.assert.equal("58N", converter.LLBboxtoUSNG(8, 1, 166, 159));
      });
    });
    describe('to the immediate south', function(){
      it('should return 58M', function(){
        chai.assert.equal("58M", converter.LLBboxtoUSNG(-1, -8, 166, 159));
      });
    });
    describe('with equator crossing the middle', function(){
      it('should return 58N', function(){
        chai.assert.equal("58N", converter.LLBboxtoUSNG(8, -8, 166, 159));
      });
    });
  });
  describe('around the international date line and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return 60N', function(){
        chai.assert.equal("60N", converter.LLBboxtoUSNG(8, 1, 179, 172));
      });
    });
    describe('to the immediate west and south', function(){
      it('should return 60M', function(){
        chai.assert.equal("60M", converter.LLBboxtoUSNG(-1, -8, 179, 172));
      });
    });
    describe('to the immediate east and north', function(){
      it('should return 1N', function(){
        chai.assert.equal("1N", converter.LLBboxtoUSNG(8, 1, -179, -172));
      });
    });
    describe('to the immediate east and south', function(){
      it('should return 1M', function(){
        chai.assert.equal("1M", converter.LLBboxtoUSNG(-1, -8, -179, -172));
      });
    });
    describe('with crossing of date line and equator at center point', function(){
      it('should return 1N', function(){
        chai.assert.equal("1N AA ", converter.LLBboxtoUSNG(8, -8, -179, 179));
      });
    });
  });
  describe('around the prime meridian', function(){
    describe('to the immediate west', function(){
      it('should return 30R', function(){
        chai.assert.equal("30R", converter.LLBboxtoUSNG(34, 23, -1, -8));
      });
    });
    describe('to the immediate east', function(){
      it('should return 31R', function(){
        chai.assert.equal("31R", converter.LLBboxtoUSNG(34, 23, 1, 8));
      });
    });
    describe('with date line crossing the middle', function(){
      it('should return 31R', function(){
        chai.assert.equal("31R", converter.LLBboxtoUSNG(34, 23, -1, 1));
      });
    });
  });
  describe('around the prime meridian and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return 30N', function(){
        chai.assert.equal("30N", converter.LLBboxtoUSNG(8, 1, -1, -8));
      });
    });
    describe('to the immediate west and south', function(){
      it('should return 30M', function(){
        chai.assert.equal("30M", converter.LLBboxtoUSNG(-1, -8, -1, -8));
      });
    });
    describe('to the immediate east and north', function(){
      it('should return 31N', function(){
        chai.assert.equal("31N", converter.LLBboxtoUSNG(8, 1, 8, 1));
      });
    });
    describe('to the immediate east and south', function(){
      it('should return 31M', function(){
        chai.assert.equal("31M", converter.LLBboxtoUSNG(-1, -8, 8, 1));
      });
    });
    describe('with crossing of prime meridian and equator at center point', function(){
      it('should return 31N', function(){
        chai.assert.equal("31N", converter.LLBboxtoUSNG(8, -8, 1, -1));
      });
    });
  });
});
describe('Convert Lat/Lon to USNG', function(){
  describe('around Arizona in the United States', function(){
    it('should return 12S WC 0 0', function(){
      chai.assert.equal("12S WC 0 0", converter.LLtoUSNG(34, -111, 0));
    });
  });
  describe('around Prescott/Chino Valley in Arizona', function(){
    it('should return 12S UD 0 0', function(){
      chai.assert.equal("12S UD 0 0", converter.LLtoUSNG(34.5, -112.5, 0));
    });
  });
  describe('immediately around Prescott city in Arizona', function(){
    it('should return 12S UD 65 23', function(){
      chai.assert.equal("12S UD 65 23", converter.LLtoUSNG(34.545, -112.465, 2));
    });
  });
  describe('around Uruguay', function(){
    it('should return 21H XE 0 0', function(){
      chai.assert.equal("21H XE 0 0", converter.LLtoUSNG(-32.5, -55.5, 0));
    });
  });
  describe('around Buenos Aires city in Argentina', function(){
    it('should return 21H UB 0 0', function(){
      chai.assert.equal("21H UB 0 0", converter.LLtoUSNG(-34.5, -58.5, 0));
    });
  });
  describe('around Merlo town in Buenos Aires', function(){
    it('should return 21H UB 41 63', function(){
      chai.assert.equal("21H UB 41 63", converter.LLtoUSNG(-34.66, -58.73, 2));
    });
  });
  describe('around Madagascar', function(){
    it('should return 38K PE 0 0', function(){
      chai.assert.equal("38K PE 0 0", converter.LLtoUSNG(-18.5, 46.5, 0));
    });
  });
  describe('around Toliara city in Madagascar', function(){
    it('should return 38K LA 0 0', function(){
      chai.assert.equal("38K LA 0 0", converter.LLtoUSNG(-22.5, 43.5, 0));
    });
  });
  describe('around Toliara city center in Madagascar', function(){
    it('should return 38K LA 64 17', function(){
      chai.assert.equal("38K LA 45 11", converter.LLtoUSNG(-22.5, 43.5, 2));
    });
  });
  describe('around Central Japan', function(){
    it('should return 54S VF 0 0', function(){
      chai.assert.equal("54S VF 0 0", converter.LLtoUSNG(37, 140.5, 0));
    });
  });
  describe('around Tokyo city in Japan', function(){
    it('should return 54S UE 0 0', function(){
      chai.assert.equal("54S UE 0 0", converter.LLtoUSNG(35.5, 139.5, 0));
    });
  });
  describe('around Tokyo city center in Japan', function(){
    it('should return 54S UE 41 63', function(){
      chai.assert.equal("54S UE 88 50", converter.LLtoUSNG(35.69, 139.77, 2));
    });
  });
  describe('around the international date line', function(){
    describe('to the immediate west', function(){
      it('should return 60R US 0 0', function(){
        chai.assert.equal("60R US 0 0", converter.LLtoUSNG(28.5, 175.5, 0));
      });
    });
    describe('to the immediate east', function(){
      it('should return 1R FM 0 0', function(){
        chai.assert.equal("1R FM 0 0", converter.LLtoUSNG(28.5, -175.5, 0));
      });
    });
    describe('with date line crossing the middle', function(){
      it('should return 1R BM 0 0', function(){
        chai.assert.equal("1R BM 0 0", converter.LLtoUSNG(28.5, 180, 0));
      });
    });
  });
  describe('around the equator', function(){
    describe('to the immediate north', function(){
      it('should return 58N BK 0 0', function(){
        chai.assert.equal("58N BK 0 0", converter.LLtoUSNG(4.5, 162.5, 0));
      });
    });
    describe('to the immediate south', function(){
      it('should return 58M BA 0 0', function(){
        chai.assert.equal("58M BA 0 0", converter.LLtoUSNG(-4.5, 162.5, 0));
      });
    });
    describe('with equator crossing the middle', function(){
      it('should return 58N BF 0 0', function(){
        chai.assert.equal("58N BF 0 0", converter.LLtoUSNG(0, 162.5, 0));
      });
    });
  });
  describe('around the international date line and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return 60N UK 0 0', function(){
        chai.assert.equal("60N UK 0 0", converter.LLtoUSNG(4.5, 175.5, 0));
      });
    });
    describe('to the immediate west and south', function(){
      it('should return 60M UA 0 0', function(){
        chai.assert.equal("60M UA 0 0", converter.LLtoUSNG(-4.5, 175.5, 0));
      });
    });
    describe('to the immediate east and north', function(){
      it('should return 1N FE 0 0', function(){
        chai.assert.equal("1N FE 0 0", converter.LLtoUSNG(4.5, -175.5, 0));
      });
    });
    describe('to the immediate east and south', function(){
      it('should return 1M FR 0 0', function(){
        chai.assert.equal("1M FR 0 0", converter.LLtoUSNG(-4.5, -175.5, 0));
      });
    });
    describe('with crossing of date line and equator at center point', function(){
      it('should return 1N AA 0 0', function(){
        chai.assert.equal("1N AA 0 0", converter.LLtoUSNG(0, 180, 0));
      });
    });
  });
  describe('around the prime meridian', function(){
    describe('to the immediate west', function(){
      it('should return 30R US 0 0', function(){
        chai.assert.equal("30R US 0 0", converter.LLtoUSNG(28.5, -4.5, 0));
      });
    });
    describe('to the immediate east', function(){
      it('should return 31R FM 0 0', function(){
        chai.assert.equal("31R FM 0 0", converter.LLtoUSNG(28.5, 4.5, 0));
      });
    });
    describe('with date line crossing the middle', function(){
      it('should return 31R BM 0 0', function(){
        chai.assert.equal("31R BM 0 0", converter.LLtoUSNG(28.5, 0, 0));
      });
    });
  });
  describe('around the prime meridian and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return 30N UK 0 0', function(){
        chai.assert.equal("30N UK 0 0", converter.LLtoUSNG(4.5, -4.5, 0));
      });
    });
    describe('to the immediate west and south', function(){
      it('should return 30M UA 0 0', function(){
        chai.assert.equal("30M UA 0 0", converter.LLtoUSNG(-4.5, -4.5, 0));
      });
    });
    describe('to the immediate east and north', function(){
      it('should return 31N FE 0 0', function(){
        chai.assert.equal("31N FE 0 0", converter.LLtoUSNG(4.5, 4.5, 0));
      });
    });
    describe('to the immediate east and south', function(){
      it('should return 31M FR 0 0', function(){
        chai.assert.equal("31M FR 0 0", converter.LLtoUSNG(-4.5, 4.5, 0));
      });
    });
    describe('with crossing of prime meridian and equator at center point', function(){
      it('should return 31N AA 0 0', function(){
        chai.assert.equal("31N AA 0 0", converter.LLtoUSNG(0, 0, 0));
      });
    });
  });
});
describe('Convert Lat/Lon to UTM', function(){
  describe('around Arizona in the United States', function(){
    it('should return easting=500000; northing=3762155; zone=12', function(){
      var coords = [];
      converter.LLtoUTM(34, -111, coords);
      chai.assert.equal(500000, parseInt(coords[0]));
      chai.assert.equal(3762155, parseInt(coords[1]));
      chai.assert.equal(12, coords[2]);
    });
  });
  describe('around Prescott/Chino Valley in Arizona', function(){
    it('should return easting=362289; northing=3818618; zone=12', function(){
      var coords = [];
      converter.LLtoUTM(34.5, -112.5, coords);
      chai.assert.equal(362289, parseInt(coords[0]));
      chai.assert.equal(3818618, parseInt(coords[1]));
      chai.assert.equal(12, coords[2]);
    });
  });
  describe('immediately around Prescott city in Arizona', function(){
    it('should return easting=365575; northing=3823561; zone=12', function(){
      var coords = [];
      converter.LLtoUTM(34.545, -112.465, coords);
      chai.assert.equal(365575, parseInt(coords[0]));
      chai.assert.equal(3823561, parseInt(coords[1]));
      chai.assert.equal(12, coords[2]);
    });
  });
  describe('around Uruguay', function(){
    it('should return easting=640915; northing=-3596850; zone=21', function(){
      var coords = [];
      converter.LLtoUTM(-32.5, -55.5, coords);
      chai.assert.equal(640915, parseInt(coords[0]));
      chai.assert.equal(-3596850, parseInt(coords[1]));
      chai.assert.equal(21, coords[2]);
    });
  });
  describe('around Buenos Aires city in Argentina', function(){
    it('should return easting=362289; northing=-3818618; zone=21', function(){
      var coords = [];
      converter.LLtoUTM(-34.5, -58.5, coords);
      chai.assert.equal(362289, parseInt(coords[0]));
      chai.assert.equal(-3818618, parseInt(coords[1]));
      chai.assert.equal(21, coords[2]);
    });
  });
  describe('around Merlo town in Buenos Aires', function(){
    it('should return easting=341475; northing=-3836700; zone=21', function(){
      var coords = [];
      converter.LLtoUTM(-34.66, -58.73, coords);
      chai.assert.equal(341475, parseInt(coords[0]));
      chai.assert.equal(-3836700, parseInt(coords[1]));
      chai.assert.equal(21, coords[2]);
    });
  });
  describe('around Madagascar', function(){
    it('should return easting=658354; northing=-2046162; zone=38', function(){
      var coords = [];
      converter.LLtoUTM(-18.5, 46.5, coords);
      chai.assert.equal(658354, parseInt(coords[0]));
      chai.assert.equal(-2046162, parseInt(coords[1]));
      chai.assert.equal(38, coords[2]);
    });
  });
  describe('around Toliara city in Madagascar', function(){
    it('should return easting=345704; northing=-2488944; zone=38', function(){
      var coords = [];
      converter.LLtoUTM(-22.5, 43.5, coords);
      chai.assert.equal(345704, parseInt(coords[0]));
      chai.assert.equal(-2488944, parseInt(coords[1]));
      chai.assert.equal(38, coords[2]);
    });
  });
  describe('around Toliara city center in Madagascar', function(){
    it('should return easting=364050; northing=-2583444; zone=38', function(){
      var coords = [];
      converter.LLtoUTM(-23.355, 43.67, coords);
      chai.assert.equal(364050, parseInt(coords[0]));
      chai.assert.equal(-2583444, parseInt(coords[1]));
      chai.assert.equal(38, coords[2]);
    });
  });
  describe('around Central Japan', function(){
    it('should return easting=455511; northing=4094989; zone=54', function(){
      var coords = [];
      converter.LLtoUTM(37, 140.5, coords);
      chai.assert.equal(455511, parseInt(coords[0]));
      chai.assert.equal(4094989, parseInt(coords[1]));
      chai.assert.equal(54, coords[2]);
    });
  });
  describe('around Tokyo city in Japan', function(){
    it('should return easting=363955; northing=3929527; zone=54', function(){
      var coords = [];
      converter.LLtoUTM(35.5, 139.5, coords);
      chai.assert.equal(363955, parseInt(coords[0]));
      chai.assert.equal(3929527, parseInt(coords[1]));
      chai.assert.equal(54, coords[2]);
    });
  });
  describe('around Tokyo city center in Japan', function(){
    it('should return easting=388708; northing=3950262; zone=54', function(){
      var coords = [];
      converter.LLtoUTM(35.69, 139.77, coords);
      chai.assert.equal(388708, parseInt(coords[0]));
      chai.assert.equal(3950262, parseInt(coords[1]));
      chai.assert.equal(54, coords[2]);
    });
  });
  describe('around the international date line', function(){
    describe('to the immediate west', function(){
      it('should return easting=353193; northing=3153509; zone=60', function(){
      	var coords = [];
      	converter.LLtoUTM(28.5, 175.5, coords);
        chai.assert.equal(353193, parseInt(coords[0]));
        chai.assert.equal(3153509, parseInt(coords[1]));
        chai.assert.equal(60, coords[2]);
      });
    });
    describe('to the immediate east', function(){
      it('should return easting=646806; northing=3153509; zone=1', function(){
      	var coords = [];
      	converter.LLtoUTM(28.5, -175.5, coords);
        chai.assert.equal(646806, parseInt(coords[0]));
        chai.assert.equal(3153509, parseInt(coords[1]));
        chai.assert.equal(1, coords[2]);
      });
    });
    describe('with date line crossing the middle', function(){
      it('should return easting=206331; northing=3156262; zone=1', function(){
      	var coords = [];
      	converter.LLtoUTM(28.5, 180, coords);
        chai.assert.equal(206331, parseInt(coords[0]));
        chai.assert.equal(3156262, parseInt(coords[1]));
        chai.assert.equal(1, coords[2]);
      });
    });
  });
  describe('around the equator', function(){
    describe('to the immediate north', function(){
      it('should return easting=222576; northing=497870; zone=58', function(){
      	var coords = [];
      	converter.LLtoUTM(4.5, 162.5, coords);
        chai.assert.equal(222576, parseInt(coords[0]));
        chai.assert.equal(497870, parseInt(coords[1]));
        chai.assert.equal(58, coords[2]);
      });
    });
    describe('to the immediate south', function(){
      it('should return easting=222576; northing=-497870; zone=58', function(){
      	var coords = [];
      	converter.LLtoUTM(-4.5, 162.5, coords);
        chai.assert.equal(222576, parseInt(coords[0]));
        chai.assert.equal(-497870, parseInt(coords[1]));
        chai.assert.equal(58, coords[2]);
      });
    });
    describe('with equator crossing the middle', function(){
      it('should return easting=221723; northing=0; zone=58', function(){
      	var coords = [];
      	converter.LLtoUTM(0, 162.5, coords);
        chai.assert.equal(221723, parseInt(coords[0]));
        chai.assert.equal(0, parseInt(coords[1]));
        chai.assert.equal(58, coords[2]);
      });
    });
  });
  describe('around the international date line and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return easting=333579; northing=497566; zone=60', function(){
      	var coords = [];
      	converter.LLtoUTM(4.5, 175.5, coords);
        chai.assert.equal(333579, parseInt(coords[0]));
        chai.assert.equal(497566, parseInt(coords[1]));
        chai.assert.equal(60, coords[2]);
      });
    });
    describe('to the immediate west and south', function(){
      it('should return easting=333579; northing=-497566; zone=60', function(){
      	var coords = [];
      	converter.LLtoUTM(-4.5, 175.5, coords);
        chai.assert.equal(333579, parseInt(coords[0]));
        chai.assert.equal(-497566, parseInt(coords[1]));
        chai.assert.equal(60, coords[2]);
      });
    });
    describe('to the immediate east and north', function(){
      it('should return easting=666420; northing=497566; zone=1', function(){
      	var coords = [];
      	converter.LLtoUTM(4.5, -175.5, coords);
        chai.assert.equal(666420, parseInt(coords[0]));
        chai.assert.equal(497566, parseInt(coords[1]));
        chai.assert.equal(1, coords[2]);
      });
    });
    describe('to the immediate east and south', function(){
      it('should return easting=666420; northing=666420; zone=1', function(){
      	var coords = [];
      	converter.LLtoUTM(-4.5, -175.5, coords);
        chai.assert.equal(666420, parseInt(coords[0]));
        chai.assert.equal(666420, parseInt(coords[0]));
        chai.assert.equal(1, coords[2]);
      });
    });
    describe('with crossing of date line and equator at center point', function(){
      it('should return easting=166021; northing=0; zone=1', function(){
      	var coords = [];
      	converter.LLtoUTM(0, 180, coords);
        chai.assert.equal(166021, parseInt(coords[0]));
        chai.assert.equal(0, parseInt(coords[1]));
        chai.assert.equal(1, coords[2]);
      });
    });
  });
  describe('around the prime meridian', function(){
    describe('to the immediate west', function(){
      it('should return easting=353193; northing=3153509; zone=30', function(){
      	var coords = [];
      	converter.LLtoUTM(28.5, -4.5, coords);
        chai.assert.equal(353193, parseInt(coords[0]));
        chai.assert.equal(3153509, parseInt(coords[1]));
        chai.assert.equal(30, coords[2]);
      });
    });
    describe('to the immediate east', function(){
      it('should return easting=646806; northing=3153509; zone=31', function(){
      	var coords = [];
      	converter.LLtoUTM(28.5, 4.5, coords);
        chai.assert.equal(646806, parseInt(coords[0]));
        chai.assert.equal(3153509, parseInt(coords[1]));
        chai.assert.equal(31, coords[2]);
      });
    });
    describe('with date line crossing the middle', function(){
      it('should return easting=206331; northing=3156262; zone=31', function(){
      	var coords = [];
      	converter.LLtoUTM(28.5, 0, coords);
        chai.assert.equal(206331, parseInt(coords[0]));
        chai.assert.equal(3156262, parseInt(coords[1]));
        chai.assert.equal(31, coords[2]);
      });
    });
  });
  describe('around the prime meridian and equator', function(){
    describe('to the immediate west and north', function(){
      it('should return easting=333579; northing=497566; zone=30', function(){
      	var coords = [];
      	converter.LLtoUTM(4.5, -4.5, coords);
        chai.assert.equal(333579, parseInt(coords[0]));
        chai.assert.equal(497566, parseInt(coords[1]));
        chai.assert.equal(30, coords[2]);
      });
    });
    describe('to the immediate west and south', function(){
      it('should return easting=333579; northing=-497566; zone=30', function(){
      	var coords = [];
      	converter.LLtoUTM(-4.5, -4.5, coords);
        chai.assert.equal(333579, parseInt(coords[0]));
        chai.assert.equal(-497566, parseInt(coords[1]));
        chai.assert.equal(30, coords[2]);
      });
    });
    describe('to the immediate east and north', function(){
      it('should return easting=666420; northing=497566; zone=31', function(){
      	var coords = [];
      	converter.LLtoUTM(4.5, 4.5, coords);
        chai.assert.equal(666420, parseInt(coords[0]));
        chai.assert.equal(497566, parseInt(coords[1]));
        chai.assert.equal(31, coords[2]);
      });
    });
    describe('to the immediate east and south', function(){
      it('should return easting=666420; northing=-497566; zone=31', function(){
      	var coords = [];
      	converter.LLtoUTM(-4.5, 4.5, coords);
        chai.assert.equal(666420, parseInt(coords[0]));
        chai.assert.equal(-497566, parseInt(coords[1]));
        chai.assert.equal(31, coords[2]);
      });
    });
    describe('with crossing of prime meridian and equator at center point', function(){
      it('should return easting=166021; northing=0; zone=31', function(){
      	var coords = [];
      	converter.LLtoUTM(0, 0, coords);
        chai.assert.equal(166021, parseInt(coords[0]));
        chai.assert.equal(0, parseInt(coords[1]));
        chai.assert.equal(31, coords[2]);
      });
    });
  });
});