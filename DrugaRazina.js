(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("DrugaRazina",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 196, 298, 162, 163, 164, 165, 166, 167, 168, 169, 170,
            180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 196, 298, 181, 182, 183, 184, 185, 186, 187, 188, 189,
            199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 186, 212, 213, 214, 215, 216, 217, 196, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
            218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 196, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227,
            237, 238, 239, 240, 241, 248, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 214, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246,
            256, 257, 258, 259, 259, 298, 262, 263, 264, 265, 266, 298, 298, 269, 270, 271, 272, 273, 274, 298, 256, 257, 258, 259, 260, 298, 262, 263, 264, 265,
            298, 298, 298, 298, 298, 298, 281, 300, 300, 300, 300, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 281, 300, 300, 300,
            267, 267, 267, 267, 267, 267, 300, 300, 300, 300, 300, 298, 298, 300, 300, 300, 300, 300, 300, 300, 294, 295, 296, 297, 298, 299, 300, 300, 300, 300],
         "height":8,
         "id":3,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            199, 200, 201, 202, 203, 204, 205, 0, 0, 0, 209, 210, 0, 212, 0, 0, 0, 0, 0, 0, 199, 200, 201, 202, 203, 204, 205, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 231, 0, 0, 0, 289, 0, 0, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 357, 0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 237, 0, 0, 0, 0, 0, 0, 0, 357, 0,
            258, 258, 258, 258, 258, 0, 262, 258, 258, 258, 258, 0, 0, 258, 258, 258, 258, 258, 274, 267, 267, 267, 267, 267, 267, 0, 281, 266, 266, 266,
            0, 0, 0, 0, 0, 0, 281, 0, 0, 0, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 0, 0, 0,
            258, 258, 258, 258, 258, 258, 0, 0, 0, 0, 300, 258, 258, 258, 258, 258, 258, 258, 258, 258, 270, 270, 270, 270, 270, 270, 0, 0, 0, 0],
         "height":8,
         "id":5,
         "name":"Platforma",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"objects",
         "objects":[
                {
                 "gid":314,
                 "height":64,
                 "id":6,
                 "name":"Projektil1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":512,
                 "y":64
                }, 
                {
                 "gid":315,
                 "height":64,
                 "id":7,
                 "name":"Projektil2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":576,
                 "y":64
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":8,
                 "name":"c1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":128,
                 "y":384
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":9,
                 "name":"c2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":448,
                 "y":256
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":10,
                 "name":"c3",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":576,
                 "y":256
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":11,
                 "name":"c4",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":896,
                 "y":256
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":12,
                 "name":"c7",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":1216,
                 "y":384
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":13,
                 "name":"c6",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":1088,
                 "y":256
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":14,
                 "name":"c5",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":960,
                 "y":384
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":15,
                 "name":"c8",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":768,
                 "y":64
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":22,
                 "name":"c9",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":1344,
                 "y":256
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":23,
                 "name":"c11",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":1792,
                 "y":192
                }, 
                {
                 "gid":346,
                 "height":64,
                 "id":24,
                 "name":"c10",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":1408,
                 "y":64
                }, 
                {
                 "gid":186,
                 "height":13,
                 "id":25,
                 "name":"mud",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":383,
                 "x":897,
                 "y":307
                }, 
                {
                 "gid":358,
                 "height":64,
                 "id":38,
                 "name":"spike1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":101,
                 "y":384
                }, 
                {
                 "gid":358,
                 "height":64,
                 "id":39,
                 "name":"spike2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":30.5,
                 "x":256,
                 "y":384
                }, 
                {
                 "gid":358,
                 "height":64,
                 "id":40,
                 "name":"spike3",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":33,
                 "x":927,
                 "y":384
                }, 
                {
                 "gid":358,
                 "height":64,
                 "id":41,
                 "name":"spike4",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":38,
                 "x":1088,
                 "y":384
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[332, 333, 334, 335, 336, 337, 338, 339, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":8,
         "id":8,
         "name":"Boss",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"boss"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            342, 343, 344, 345, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":8,
         "id":7,
         "name":"Enemy-mumia",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"mummy"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            324, 325, 326, 327, 328, 329, 330, 331, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":8,
         "id":9,
         "name":"Joe",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"joe"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":10,
 "nextobjectid":42,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":64,
 "tilesets":[
        {
         "columns":20,
         "firstgid":1,
         "image":"maps\/Razina1\/Druga_razina1.png",
         "imageheight":512,
         "imagewidth":1280,
         "margin":0,
         "name":"Druga_razina1",
         "spacing":0,
         "tilecount":160,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":19,
         "firstgid":161,
         "image":"maps\/Razina1\/Druga_razina.png",
         "imageheight":561,
         "imagewidth":1234,
         "margin":0,
         "name":"Druga_razina",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":152,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":1,
         "firstgid":313,
         "image":"maps\/Razina1\/spike.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"spike",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":2,
         "firstgid":314,
         "image":"maps\/Razina1\/Projketili37.png",
         "imageheight":64,
         "imagewidth":128,
         "margin":0,
         "name":"Projketili37",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":2,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":8,
         "firstgid":316,
         "image":"maps\/Razina1\/asseti64x64.png",
         "imageheight":320,
         "imagewidth":512,
         "margin":0,
         "name":"asseti64x64",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":40,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":2,
         "firstgid":356,
         "image":"maps\/Razina1\/boxes2.png",
         "imageheight":64,
         "imagewidth":128,
         "margin":0,
         "name":"boxes2",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":2,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":1,
         "firstgid":358,
         "image":"maps\/Razina1\/spike.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"spikev2",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":30
});