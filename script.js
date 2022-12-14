(function(){
    var script = {
 "start": "this.playAudioList([this.audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
  "this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
  "this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -153.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BA92827_0C62_9FC0_416A_2B7CA395CCA1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B539748_0C62_9040_4195_240C5AEB96C8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BA3B81C_0C62_9FC0_41A4_5B70ED9AF44E"
},
{
 "thumbnailUrl": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_t.jpg",
 "label": "IMG_20220825_122143_00_496",
 "id": "panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "backwardYaw": -146.96,
   "yaw": -113.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
   "backwardYaw": -42.96,
   "yaw": 84.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E3A97C4D_FF4F_ED02_41B4_80871D640698",
  "this.overlay_E33B2936_FF4F_770E_41E5_5397A093F6A6",
  "this.overlay_E2731514_FF77_1F02_41C1_DEA13ED93A3A",
  "this.overlay_E20098BD_FF79_3503_41ED_B6DC2CBF62CF",
  "this.overlay_E198D65C_FF49_1D01_41E6_8C376C8BB6B9",
  "this.overlay_E1B06576_FF4F_1F0E_41E5_B5F700D49BA3",
  "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581CE96_FF39_6382_41E7_E2755B74444F_camera"
},
{
 "thumbnailUrl": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_t.jpg",
 "label": "IMG_20220825_114312_00_491",
 "id": "panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "backwardYaw": -27.51,
   "yaw": 92.45,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "backwardYaw": 84.66,
   "yaw": -42.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DF536162_FF4B_1706_41E9_5DBE19D74F6A",
  "this.overlay_DF1D189E_FF4B_153E_41DB_587FC7604461",
  "this.overlay_DDDB6F5A_FF49_6B06_41D6_82CB9248FDBE",
  "this.overlay_12EE7DAC_09F0_4F2D_4187_FDD9174E7BFD",
  "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581C873_FF39_6E82_41E5_2D1192608196_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_t.jpg",
 "label": "IMG_20220825_133643_00_523",
 "id": "panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2CF2191E_0CA2_91C0_41A5_A6ADBA298389",
  "this.overlay_2D93A152_0CA3_F040_41A8_EFE27C53870B",
  "this.overlay_2C1526E5_0CA3_7040_41A7_19759B966580",
  "this.overlay_2C92FCC2_0CA2_B040_418A_E3E9D10135B8",
  "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_t.jpg",
 "label": "IMG_20220825_135448_00_530",
 "id": "panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -67.58,
   "yaw": -19.35,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0DE279C_FF59_1B02_41E0_2B0917708254",
  "this.overlay_DE87B9DA_FF5B_7706_41DF_6C794F219CB5",
  "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -144.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B31578B_0C62_90C0_41A2_104FAC794FB2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_308AC473_0C62_9040_419E_A8DA7B21B5A5"
},
{
 "thumbnailUrl": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_t.jpg",
 "label": "IMG_20220825_132747_00_521",
 "id": "panorama_F581C873_FF39_6E82_41E5_2D1192608196",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
   "backwardYaw": -85.04,
   "yaw": 22.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": 165.43,
   "yaw": -74.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_10D250E0_0C9E_9040_417E_71C82D3DE870",
  "this.overlay_13E48E2E_0C9F_93C1_4143_C1E438B67980",
  "this.overlay_122BFD14_0C9F_71C1_4194_84A5C0F71C66",
  "this.overlay_124BBAEC_0CA1_9041_4158_84F12D91B6BC",
  "this.overlay_13D84CF5_0CA1_F043_41A7_59E66B2D2697",
  "this.overlay_12B55702_0CA3_B1C0_4194_1B5894DAA553",
  "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_t.jpg",
 "label": "IMG_20220825_140903_00_536",
 "id": "panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
   "backwardYaw": 135.53,
   "yaw": 129.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
   "backwardYaw": 135.53,
   "yaw": -142.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "backwardYaw": 74.74,
   "yaw": -24.12,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_29D9F18A_0CAF_90C1_41A3_7924D0FB8A43",
  "this.overlay_2826236A_0CAE_B041_4180_66CA34CC4EE6",
  "this.overlay_2A6C48D2_0CA1_7040_41A3_5648E161FB04",
  "this.overlay_28699E27_0CA1_B3C0_419A_2939153B51CD",
  "this.overlay_29C9A930_0CA2_91C0_41A6_CC21BAB063F4",
  "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3273C55A_0C62_9040_4155_3ADB1EB1C30E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 137.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_333494D5_0C62_9040_419E_B6BDD6DFFB88"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3254A56F_0C62_9040_419E_86CB11A4CCB1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -72.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BC3E7FC_0C62_9040_41A2_9397AF428666"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33CFE512_0C62_91C0_418A_D1A117D5C992"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B75A703_0C62_91C0_4195_F6C24C45595C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 55.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B66D6D0_0C62_9040_4191_FC5CE033F6B1"
},
{
 "thumbnailUrl": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_t.jpg",
 "label": "IMG_20220825_125613_00_508",
 "id": "panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "backwardYaw": 138.8,
   "yaw": 77.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "backwardYaw": -100.97,
   "yaw": -127.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_19FC51D0_0CE6_B041_4163_FF4CF42C45C0",
  "this.overlay_143E8516_0CE7_91C0_4180_283DCB816695",
  "this.overlay_1A5F80A8_0CE6_B0C1_4196_46807D0A4E8F",
  "this.overlay_1B937A7E_0CE1_9040_41A3_4D9028D74E9B",
  "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 146.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B7A071A_0C62_91C0_41A1_DCDE040C73B5"
},
{
 "thumbnailUrl": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_t.jpg",
 "label": "IMG_20220825_125931_00_509",
 "id": "panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
   "backwardYaw": -127.5,
   "yaw": -100.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5",
   "backwardYaw": -117.31,
   "yaw": 53.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_15ED2950_0CFE_B040_41A3_B9A625214FC9",
  "this.overlay_1A445D72_0CFE_9041_41A2_D4D303A65715",
  "this.overlay_143F21DF_0CE1_907F_418D_67451AEE6971",
  "this.overlay_1492E473_0CE2_9047_4194_9BA2A603CB82",
  "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B368780_0C62_90C0_41A3_C50166A26968"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B8A9846_0C62_9040_419F_36E8EC3CCEEB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_t.jpg",
 "label": "IMG_20220825_123206_00_501",
 "id": "panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": 21.61,
   "yaw": 0.13,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E430214F_FF49_171E_41EF_232CEEC3471B",
  "this.overlay_E5552A18_FF49_F502_41DD_F499097CF636",
  "this.overlay_E4192837_FF4B_150F_41EC_8B3D51CBFADD",
  "this.overlay_E32F5B63_FF49_2B06_41CB_4EA362AD0FED",
  "this.overlay_E03B02B6_FF49_350E_41D1_89E35A9709C1",
  "this.overlay_E03EFA70_FF4B_1502_41D4_56FE361EE955",
  "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B0C87AE_0C62_90C0_41A7_372911502495"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BEFE7DB_0C62_9040_416A_698AC8F7A4A1"
},
{
 "thumbnailUrl": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_t.jpg",
 "label": "IMG_20220825_130834_00_513",
 "id": "panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
   "backwardYaw": -95.34,
   "yaw": -103.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_154AA596_0CE2_90C0_417B_DC1BBD16260F",
  "this.overlay_102DAA6E_0CE2_9040_419F_5089CEE95A76",
  "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B6936F7_0C62_9040_41A3_0319AEF64E5B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B1527BA_0C62_90C0_4173_8C4F44302175"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_t.jpg",
 "label": "IMG_20220825_114923_00_494",
 "id": "panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "backwardYaw": -120.71,
   "yaw": -56.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "backwardYaw": 151.74,
   "yaw": 35.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1C7EF1AB_09D7_D72A_4181_81E16EDA0046",
  "this.overlay_1EAA6443_09D0_5D5B_4192_140C9A7CD289",
  "this.overlay_1FA0CC4A_09D0_CD6A_4165_407B015F169D",
  "this.overlay_1EC0B63B_09D0_5D2B_4176_734613D38E29",
  "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33B2E531_0C62_91C0_41A6_159AA7DE2CAA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BBE1831_0C62_9FC0_4185_7E44791F6574"
},
{
 "thumbnailUrl": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_t.jpg",
 "label": "IMG_20220825_145056_00_543",
 "id": "panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
   "backwardYaw": 26.55,
   "yaw": -124.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
   "backwardYaw": 129.76,
   "yaw": 61.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_15CD63E4_023B_2FD6_4160_891233A13A04",
  "this.overlay_1A786F4C_0239_18D6_4166_24CDF666802B",
  "this.overlay_1B4DFF92_0239_1873_4166_540C39CB3EC7",
  "this.overlay_1B7FAEEF_0239_79D1_4161_9B166A581908",
  "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 49.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_30AAF451_0C62_9040_4192_DFB7A5F09D7D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3263C550_0C62_9040_41AA_859A6258AA68"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -139.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3349D4B6_0C62_90C0_41A3_A2786B6FAB0C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 123.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B446726_0C62_91C0_41A7_7354AF8EB0B9"
},
{
 "thumbnailUrl": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_t.jpg",
 "label": "IMG_20220825_131659_00_517",
 "id": "panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "backwardYaw": -123.73,
   "yaw": 106.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "backwardYaw": -123.73,
   "yaw": 24.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
   "backwardYaw": -1.3,
   "yaw": -61.94,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "backwardYaw": -74.99,
   "yaw": 165.43,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "backwardYaw": -74.99,
   "yaw": -160.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1EE806F9_0219_E9BE_4141_529AE28F8C8A",
  "this.overlay_23B2DA32_0269_78B2_416F_563237330E2C",
  "this.overlay_1C2F3C32_0269_78B2_4138_39CCF2A71514",
  "this.overlay_1D53939F_026B_2871_4125_2C3AA9984224",
  "this.overlay_17ABF096_0CE1_70C0_41A7_2BC2CE8F2505",
  "this.overlay_17D52562_0CE7_F041_41A0_FFFBAFB05535",
  "this.overlay_1713285D_0CE3_9043_4181_F723C49B4AD1",
  "this.overlay_17BEFE9E_0CE2_90C1_4193_55B1F0561FFB",
  "this.overlay_10ED50E1_0CE2_F040_41A1_416A6E8E9F70",
  "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_camera"
},
{
 "thumbnailUrl": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_t.jpg",
 "label": "IMG_20220825_141310_00_538",
 "id": "panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8",
   "backwardYaw": 120.21,
   "yaw": 107.77,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024",
   "backwardYaw": -101.37,
   "yaw": -106.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "backwardYaw": -136.54,
   "yaw": -4.77,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_29D3C22A_0CA3_73C0_41A9_A0FADD7003E5",
  "this.overlay_29BCF9E2_0CA2_B041_419C_B0E91240900F",
  "this.overlay_2979DD02_0CA2_91C0_4178_9232DCD18ACA",
  "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_tcap0",
  "this.overlay_39485CF3_0DA1_9040_4188_E7730649CAA4",
  "this.overlay_39C3EB43_0DA1_9040_4192_AFB9B112B820"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B4F2731_0C62_91C0_4186_DE7FCCDAC53B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_camera"
},
{
 "thumbnailUrl": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_t.jpg",
 "label": "IMG_20220825_140046_00_533",
 "id": "panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
   "backwardYaw": 46.6,
   "yaw": -92.45,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0E8EA230_01E9_284F_4150_39DCEAA4D128",
  "this.overlay_11F050AD_01EB_E856_4136_967B5F615FC6",
  "this.overlay_0E11B049_01E9_28DE_4143_5BA5F2A23AFD",
  "this.overlay_0E1A75EA_01E9_6BD2_4173_00E3BE872532",
  "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A2CE8A0_0C62_90C0_4196_B1530FCA3035"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B85A83C_0C62_9FC0_419A_B1F866664CCF"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
   "camera": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "camera": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "camera": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "camera": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "camera": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "camera": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
   "camera": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "camera": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC",
   "camera": "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "camera": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
   "camera": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0",
   "camera": "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F",
   "camera": "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
   "camera": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "camera": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "camera": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
   "camera": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "camera": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "camera": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
   "camera": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "camera": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
   "camera": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
   "camera": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
   "camera": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
   "camera": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
   "camera": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "camera": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "camera": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
   "camera": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "camera": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
   "camera": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82",
   "camera": "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
   "camera": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "camera": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5",
   "camera": "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
   "camera": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
   "camera": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34",
   "camera": "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "media": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "camera": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "media": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
   "camera": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A",
   "camera": "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "media": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "camera": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
   "camera": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
   "camera": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "camera": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8",
   "camera": "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 0)",
   "media": "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024",
   "camera": "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B58F75E_0C62_9040_41A5_0C88316A9ED0"
},
{
 "thumbnailUrl": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_t.jpg",
 "label": "IMG_20220825_131455_00_514",
 "id": "panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
   "backwardYaw": 77.5,
   "yaw": 138.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
   "backwardYaw": -102.88,
   "yaw": 36.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_23F1F86F_026B_38D1_4174_EDF0BCAF864E",
  "this.overlay_26D08991_026B_184E_4168_AE78D2C15297",
  "this.overlay_24B2A298_0269_287E_416F_34EF08B3E8CC",
  "this.overlay_27BD9C0A_0269_3853_4161_0469CABDF2FF",
  "this.overlay_180859EB_0CA2_9040_41A7_92AD4B861D34",
  "this.overlay_19D11526_0CE1_B1C0_4196_AD0BDEFA4380",
  "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_t.jpg",
 "label": "IMG_20220825_141113_00_537",
 "id": "panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
   "backwardYaw": 129.38,
   "yaw": 135.53,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2F724C7A_0CA1_9040_4191_44420D0395EA",
  "this.overlay_2B87D74C_0CAE_F040_4199_DA03B6C1FCB7",
  "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_337FF4A1_0C62_90C0_41A4_A5DCC0D9F573"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A45A879_0C62_9040_41A8_6AF0D4A82559"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33FFE508_0C62_91C0_41A6_09BE505F799A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_309E347F_0C62_9040_4175_F775758C0992"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_32F8D5BD_0C62_90C0_41A9_80332CF57462"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_camera"
},
{
 "thumbnailUrl": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_t.jpg",
 "label": "IMG_20220825_140412_00_534",
 "id": "panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "backwardYaw": 40.07,
   "yaw": -105.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "backwardYaw": -92.45,
   "yaw": 46.6,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1311F24C_0229_28D6_417B_1174D06C74E6",
  "this.overlay_137112A6_022F_2853_40EB_C82CE272D480",
  "this.overlay_107FD52C_0229_2856_417F_9447627EDA96",
  "this.overlay_1404A2DF_09F1_B56A_4154_D12FA6EA3EA9",
  "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A70A86E_0C62_9040_4190_D9FCEC6BFC33"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A4B0883_0C62_90C0_4184_8638DD798136"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD.mp3",
  "oggUrl": "media/audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD.ogg"
 },
 "data": {
  "label": "&#x1F9C8; Lofi (Royalty Free Music) - &quot;BUTTER&quot; by @LuKremBo &#x1F1F0;&#x1F1F7;"
 },
 "id": "audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD",
 "autoplay": true,
 "class": "MediaAudio"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_331D14F3_0C62_9040_4196_657304EA3C4D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 58.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3307C4DF_0C62_9040_41AA_1747DA17D99C"
},
{
 "thumbnailUrl": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_t.jpg",
 "label": "IMG_20220825_115213_00_495",
 "id": "panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
   "backwardYaw": -56.02,
   "yaw": -120.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
   "backwardYaw": 92.45,
   "yaw": -27.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "backwardYaw": -127.98,
   "yaw": -161.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "backwardYaw": -127.98,
   "yaw": 146.59,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E1C75258_FF49_3502_41EB_469040BFA8A0",
  "this.overlay_DB8A29FF_FF37_16FF_41B9_1DDFDC2B066C",
  "this.overlay_1D916582_09CF_DFDA_418D_B65F55B15140",
  "this.overlay_1DDE5CD1_09D0_4D76_4183_C7B9C227DEC6",
  "this.overlay_119E6D0B_09D0_CCEA_41A0_E5A9EA29FC64",
  "this.overlay_1C5F270B_09D1_DCEA_4193_6D5BD9679D63",
  "this.overlay_11F0E92C_09D0_572E_4180_C8114B3E43D2",
  "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_t.jpg",
 "label": "IMG_20220825_140659_00_535",
 "id": "panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "backwardYaw": -130.38,
   "yaw": -30.77,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "backwardYaw": -4.77,
   "yaw": -136.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
   "backwardYaw": -24.12,
   "yaw": 74.74,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2D69E456_0CA2_9041_419F_DEF03A4DD1C1",
  "this.overlay_2E34CDDB_0CA1_9047_418B_BD8913E26014",
  "this.overlay_2E5763E3_0CA2_9047_41A0_11C8B0D67A03",
  "this.overlay_2D3B1157_0CA2_9040_419D_ABD01079701A",
  "this.overlay_2FADBC9B_0CA3_90C0_4189_098D9402B8FD",
  "this.overlay_2F089316_0CA3_91C0_41A4_98C72F1CAE84",
  "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_t.jpg",
 "label": "IMG_20220825_141841_00_540",
 "id": "panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "backwardYaw": -106.14,
   "yaw": -101.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_tcap0",
  "this.overlay_3FF5134C_0C61_9040_41A1_07B7E37A2391",
  "this.overlay_39772289_0C62_B0C0_41A5_C3E1153CF1B6",
  "this.overlay_3FBE74F4_0C63_9040_41A8_A23331120A6D",
  "this.overlay_39E31725_0C63_91C0_4165_07F2DFECFE36",
  "this.overlay_3935D994_0C62_90C1_415C_904EEDABEF84"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_t.jpg",
 "label": "IMG_20220825_135304_00_529",
 "id": "panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "backwardYaw": 124.73,
   "yaw": -54.39,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E85D5D3B_FFF9_6F07_41D6_55552E85C315",
  "this.overlay_E5DD4C03_FFFA_ED06_41EB_D42A7359B2C1",
  "this.overlay_E6F0AA34_FFF9_F502_41DA_23651A767CFE",
  "this.overlay_E7785FDB_FFF9_6B06_41ED_401668077244",
  "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3205B58D_0C62_90C0_41A5_FC73C832A5C9"
},
{
 "thumbnailUrl": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_t.jpg",
 "label": "IMG_20220825_130650_00_512",
 "id": "panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
   "backwardYaw": 122.64,
   "yaw": 74.36,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34",
   "backwardYaw": -103.88,
   "yaw": -95.34,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_158DCCAF_0CE1_B0C0_41A3_7361D38E89D0",
  "this.overlay_10E4420C_0CE2_B3C0_4179_BCF9D7E77E61",
  "this.overlay_16237C57_0CE2_9040_4198_473B4DD16FDF",
  "this.overlay_16C78D09_0CE3_B1C3_41A5_1255355A22C3",
  "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_E765417E_FFCF_17FE_41DF_8EED84DCE410",
 "width": 300,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "verticalAlign": "middle",
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "modal": true,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "height": 200,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconHeight": 12,
 "title": "",
 "bodyPaddingBottom": 5,
 "gap": 10,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.4vmin",
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_E76B017E_FFCF_17FE_41E6_1B349F51464F"
 ],
 "headerPaddingLeft": 10,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowHorizontalLength": 3,
 "shadowVerticalLength": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "layout": "vertical",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window29046"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_t.jpg",
 "label": "IMG_20220825_134821_00_525",
 "id": "panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "backwardYaw": 114.05,
   "yaw": -42.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F1FF0DE3_FF5B_2F06_41D9_FFA6427B5FDB",
  "this.overlay_F1B2AE62_FF59_2D06_41E1_FB1767DF8912",
  "this.overlay_EEFF73C7_FF4F_1B0E_41D1_C58D6842B54B",
  "this.overlay_EC1D4B40_FF39_6B02_4157_BBC20EA7FCC0",
  "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3381353C_0C62_91C0_41A7_C21AB2A56EAC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 118.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BE567D0_0C62_9040_41A4_487438E3B227"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -61.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B238769_0C62_9040_41A3_9D00D59159B4"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -65.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B64F6DD_0C62_9040_4190_5B10CBAD88A1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BC9A807_0C62_9FC0_41A3_CEC826F7FEDC"
},
{
 "thumbnailUrl": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_t.jpg",
 "label": "IMG_20220825_134443_00_524",
 "id": "panorama_F581CE96_FF39_6382_41E7_E2755B74444F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0BEDBEC_FF5F_EB01_41E0_89A818E0A9A9",
  "this.overlay_DFC19158_FF5E_F702_41E6_B47D1983D700",
  "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_32E665A5_0C62_90C0_419F_9527710BABD0"
},
{
 "thumbnailUrl": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_t.jpg",
 "label": "IMG_20220825_132521_00_520",
 "id": "panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
   "backwardYaw": 94.71,
   "yaw": -121.34,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
   "backwardYaw": -124.61,
   "yaw": 26.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1A456073_0227_E8B2_4153_CBF266E55DBB",
  "this.overlay_1BDACC2B_0229_7852_4173_C793D7888FB2",
  "this.overlay_1BBBF46A_0229_28D2_4169_63526AB437EC",
  "this.overlay_1C4D1399_022B_687E_417A_2BF05E0E47C5",
  "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_t.jpg",
 "overlays": [
  "this.overlay_0EB9497D_01E9_18B1_4175_633D340286EF",
  "this.overlay_11E89235_01E8_E8B6_4152_FC634BA8A8FA",
  "this.overlay_0E0DC5D8_01E7_2BFE_4159_64D8B19BD568",
  "this.overlay_0E079B7D_01E7_18B6_416F_279630E03C10",
  "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_tcap0"
 ],
 "partial": false,
 "class": "Panorama",
 "label": "IMG_20220825_135849_00_532",
 "id": "panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "hfovMin": "135%",
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_t.jpg",
 "label": "IMG_20220825_114651_00_493",
 "id": "panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "backwardYaw": -161.66,
   "yaw": -127.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
   "backwardYaw": 35.17,
   "yaw": 151.74,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1FFB39B4_09D1_B73D_4182_61025A0EBF6F",
  "this.overlay_1F0DD58E_09D0_DFED_41A3_14227C2B22D4",
  "this.overlay_1F3F236B_09D0_5B2B_4160_DA24EC4D1772",
  "this.overlay_1F681347_09D0_5B5A_417C_4C1A2D28E176",
  "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33939546_0C62_9040_4192_BF0ED7DB9A0E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3369C495_0C62_90C0_419E_6A8EFC4E74A7"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_t.jpg",
 "overlays": [
  "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_tcap0"
 ],
 "partial": false,
 "class": "Panorama",
 "label": "IMG_20220825_123502_00_503",
 "id": "panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "hfovMin": "135%",
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -102.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B90684F_0C62_9040_41A7_93718E7C0FDB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B1D57C5_0C62_9040_417D_8CE6E52786AB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A3038AA_0C62_90C0_41A3_27A92F43F10A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A27F897_0C62_90C0_41A7_037D8C1DDD02"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 137.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B7FB70E_0C62_91C0_4193_78E66517DD58"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 66.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_30DD443B_0C62_97C0_419F_01D0CB9B70E6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -126.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3364048B_0C62_90C0_4190_D0DEF7F0D7BA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_camera"
},
{
 "thumbnailUrl": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_t.jpg",
 "label": "IMG_20220825_131916_00_519",
 "id": "panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
   "backwardYaw": -121.34,
   "yaw": 94.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
   "backwardYaw": 106.27,
   "yaw": -95.34,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1BB2E50A_0229_2852_4171_C1A6C865F894",
  "this.overlay_188B5662_0229_28D2_4161_94FC3A034751",
  "this.overlay_1BAF9E01_0227_184E_4161_2BB5E56F7209",
  "this.overlay_1840B10A_0227_2852_4175_1A8637B31D8F",
  "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_t.jpg",
 "label": "IMG_20220825_145706_00_545",
 "id": "panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -33.04,
   "yaw": 118.07,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E18EFF23_FF57_2B06_41DF_8E22A2E227D2",
  "this.overlay_E0AB8398_FF57_1B02_41CD_0571F0A3A65A",
  "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 79.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A50188D_0C62_90C0_4182_B3571EBADCBE"
},
{
 "thumbnailUrl": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_t.jpg",
 "label": "IMG_20220825_130011_00_510",
 "id": "panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "backwardYaw": 53.26,
   "yaw": -117.31,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1B21F2EF_0CE3_B040_41A3_F167E1D66066",
  "this.overlay_14F3DF70_0CE3_9041_4199_5A63E0D1E046",
  "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_t.jpg",
 "label": "IMG_20220825_130503_00_511",
 "id": "panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
   "backwardYaw": 74.36,
   "yaw": 122.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": -61.94,
   "yaw": -1.3,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_14EC7E06_0CE1_73C1_4181_CB5199DA1723",
  "this.overlay_16824197_0CE6_90C0_41A5_DFF3E8CE9D1A",
  "this.overlay_159B2F58_0CE7_9040_4198_076C0D18302F",
  "this.overlay_15BB71DD_0CE1_9043_41A1_901BC011A198",
  "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_camera"
},
{
 "thumbnailUrl": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_t.jpg",
 "label": "IMG_20220825_135139_00_528",
 "id": "panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "backwardYaw": -14.32,
   "yaw": -11.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC",
   "backwardYaw": -19.35,
   "yaw": -67.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0",
   "backwardYaw": 118.07,
   "yaw": -33.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
   "backwardYaw": 0.13,
   "yaw": 21.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E7C7CFC2_FFC9_6B06_41EC_9B42E860595D",
  "this.overlay_E6741CAF_FFCB_2D1E_41D6_2B971E778D14",
  "this.overlay_E5486F7A_FFCB_2B01_41D9_DADB009D96C3",
  "this.overlay_E745B8A6_FFCF_1501_41C7_3B0EBF2424B8",
  "this.overlay_E66BE5D2_FFC9_1F01_41EF_CC4A22315273",
  "this.overlay_E7355D83_FFC9_2F07_41CE_13EACB139F4C",
  "this.overlay_E6974A6A_FFC9_7506_41DD_D0378E25AE7A",
  "this.overlay_E709C0A9_FFCB_1502_41DD_BF0CFE10DD33",
  "this.overlay_E63FE5E1_FFCB_1F02_41E6_84803E41141A",
  "this.overlay_E68B5220_FFCA_F502_41E5_3D6F4923C07F",
  "this.overlay_E6CC868A_FF49_7D06_41DC_D531E419854C",
  "this.overlay_E728A4F0_FF4B_1D01_41E0_E64A76579FEA",
  "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33D0051D_0C62_91C0_41A5_241407DFC1CC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B6F36E9_0C62_9040_4196_F6F41807836A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3244A565_0C62_9040_417B_FAE4435C3D95"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3343A4AB_0C62_90C0_41A9_1179507A92CF"
},
{
 "thumbnailUrl": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_t.jpg",
 "label": "IMG_20220825_135631_00_531",
 "id": "panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "backwardYaw": -45.69,
   "yaw": -19.85,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "backwardYaw": -17.46,
   "yaw": -103.75,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EC9DEACE_FF3B_F501_41E5_13F74E7D124A",
  "this.overlay_EB2B548F_FF3B_7D1E_41EF_A8A66778989A",
  "this.overlay_E9335AE4_FF39_1502_41E4_F0D2A0E71E96",
  "this.overlay_E845A761_FF37_3B03_41D4_00577A8254A5",
  "this.overlay_EAF4AE4F_FFC9_6D1E_419B_4D44AC2FADD2",
  "this.overlay_EAE05920_FFC9_3702_41C4_108C857F0D0F",
  "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BDEA812_0C62_9FC0_419D_78EF08CF41C0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_camera"
},
{
 "thumbnailUrl": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_t.jpg",
 "label": "IMG_20220825_131618_00_516",
 "id": "panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
   "backwardYaw": 52.78,
   "yaw": 39.06,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": 106.64,
   "yaw": -123.73,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1D11EE39_026B_38B1_4172_3C11B1168A24",
  "this.overlay_205B82BD_0269_69B6_417E_C447E2ACD52F",
  "this.overlay_1DCF995A_0269_38F2_4180_FAD83E8B9E54",
  "this.overlay_20DC66B5_0268_E9B1_4175_EC8CFC0251FB",
  "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_camera"
},
{
 "thumbnailUrl": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_t.jpg",
 "label": "IMG_20220825_135047_00_527",
 "id": "panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "backwardYaw": -103.75,
   "yaw": -17.46,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "backwardYaw": -54.39,
   "yaw": 124.73,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "backwardYaw": -54.39,
   "yaw": -150.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E95977A3_FFCB_1B06_41E2_1970B2B6AD06",
  "this.overlay_E9E6092C_FFC9_7702_41B1_5B25AFB25E4C",
  "this.overlay_E8F6D31F_FFC9_1B3E_41ED_90771D56D3CF",
  "this.overlay_E94680C5_FFCF_3502_41E2_8E561DACB48D",
  "this.overlay_E9163482_FFCF_3D06_41C0_A0F70CB8ABD3",
  "this.overlay_E9FC3BDC_FFCF_2B02_41D5_6CC7D919E89A",
  "this.overlay_E7B4027B_FFFF_1506_41CD_594383504EBE",
  "this.overlay_E717144D_FFF9_1D02_41EC_60776BEFCE16",
  "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -133.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_32257579_0C62_9040_419A_47C4853408CF"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BF637E6_0C62_9040_419B_E8C9E9FA2BB0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_camera"
},
{
 "thumbnailUrl": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_t.jpg",
 "label": "IMG_20220825_132950_00_522",
 "id": "panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "backwardYaw": 22.99,
   "yaw": -85.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_11235A0D_0CA2_93C0_41A3_DE1690A97B52",
  "this.overlay_13EA657D_0CA1_9040_41A0_F9AA034AB803",
  "this.overlay_135BA117_0CA6_91C0_4197_35BABF94B2F0",
  "this.overlay_133D1AF4_0CA7_9040_4188_AF27A7B9BAE3",
  "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE026B_FF39_2282_41B5_0F2204858344_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 134.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A693864_0C62_9040_4184_17F22F425BD3"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_330B44E9_0C62_9040_41A3_3603F3A1A941"
},
{
 "thumbnailUrl": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_t.jpg",
 "label": "IMG_20220825_144834_00_542",
 "id": "panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "backwardYaw": -67.08,
   "yaw": -24.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
   "backwardYaw": 61.8,
   "yaw": 129.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_109E218B_022B_E852_4180_5FA72D9736DD",
  "this.overlay_17AE5928_0228_F85F_4178_02919FF21DBD",
  "this.overlay_1518F8C5_023F_39D6_4164_A296A47029F4",
  "this.overlay_1A433FE6_0238_F7D2_4164_1665B8234FC2",
  "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 87.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_335C04C0_0C62_9040_41A7_5E74825EAF67"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_30855468_0C62_9040_4182_9C112C86DC8C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B5E5752_0C62_9040_4196_E90E44EE0A97"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B3A7796_0C62_90C0_4198_60CECD76E83E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -158.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33EE04FD_0C62_9043_41A5_3E6B05A4FF59"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_30BFE45D_0C62_9040_41A7_56DF56D64D5A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B49173D_0C62_91C0_418A_33D8C92BC1CC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3BFE97F1_0C62_9040_41A2_B2D37C489CF1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_camera"
},
{
 "thumbnailUrl": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_t.jpg",
 "label": "IMG_20220825_131811_00_518",
 "id": "panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
   "backwardYaw": -95.34,
   "yaw": 106.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1843489B_0219_3872_417D_E2176424A2EA",
  "this.overlay_1969D2AD_0219_2856_4153_AD6911A16674",
  "this.overlay_19D90D79_0219_18B1_4180_449620FDE574",
  "this.overlay_194EB99E_021B_3873_4152_5EDB6F359E07",
  "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A657859_0C62_9040_4193_0D1B28D304B2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_t.jpg",
 "label": "IMG_20220825_122635_00_498",
 "id": "panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "backwardYaw": -113.55,
   "yaw": -146.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -11.18,
   "yaw": -14.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E4BD7A25_FF59_7502_41EA_7AD440D14BC8",
  "this.overlay_E4567C35_FF59_2D02_41A8_C1C0499BDD42",
  "this.overlay_E41FE2CD_FF59_1502_41E4_58915321C18A",
  "this.overlay_E4148E91_FF5B_2D03_41E0_DA62496D5BDD",
  "this.overlay_E4415295_FF5B_7502_41DC_29DB4ABA25D3",
  "this.overlay_E44B5EC3_FF5B_2D06_41ED_0AF41A95AF15",
  "this.overlay_115AD6B3_09D1_BD3B_415C_24D291A468DF",
  "this.overlay_10CFB141_09D0_B756_4194_C18B419FE5FA",
  "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_t.jpg",
 "label": "IMG_20220825_141653_00_539",
 "id": "panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "backwardYaw": 107.77,
   "yaw": 120.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2A8BCD82_0CA6_B0C0_4190_B5099F725DF9",
  "this.overlay_2B7FECF3_0CA6_B047_416C_5B030D326B2B",
  "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3217D599_0C62_90C0_41AA_952D9E5B4F94"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 33.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_332F34CA_0C62_9040_419A_83370F14980A"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_t.jpg",
 "overlays": [
  "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_tcap0"
 ],
 "partial": false,
 "class": "Panorama",
 "label": "IMG_20220825_123412_00_502",
 "id": "panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "hfovMin": "135%",
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_t.jpg",
 "label": "IMG_20220825_144752_00_541",
 "id": "panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
   "backwardYaw": -105.51,
   "yaw": 40.07,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
   "backwardYaw": -24.24,
   "yaw": -67.08,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "backwardYaw": -30.77,
   "yaw": -130.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_128B0FEB_09F0_4B2B_419B_702ECCC5CA1B",
  "this.overlay_13863286_09F3_F5DD_41A2_E52FC2D68533",
  "this.overlay_124C3BD9_09F0_4B76_41A0_DC8749ACDC4B",
  "this.overlay_156B1852_09F0_D57A_4151_9E5885E440A2",
  "this.overlay_24F4041B_0CBE_97C7_419E_6AF7CFDD4BF3",
  "this.overlay_2EC5FC1F_0CA1_97FF_41A3_4FA78BD81C25",
  "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_t.jpg",
 "label": "IMG_20220825_134928_00_526",
 "id": "panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "backwardYaw": -19.85,
   "yaw": -45.69,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
   "backwardYaw": -42.71,
   "yaw": 114.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EC113BCF_FF3B_EB1E_41E8_851AC777E9EB",
  "this.overlay_EB52C5C2_FF3B_7F06_41EE_3FCA88748D61",
  "this.overlay_ECA95279_FF39_1503_41D8_5C079C9AB314",
  "this.overlay_ED900D42_FF39_2F06_41D0_B9FD5D0EC0DA",
  "this.overlay_EB5C629C_FF3F_1501_41C8_5E6AE6F010B2",
  "this.overlay_E957125C_FFD7_1502_41E8_A806B05DA206",
  "this.overlay_E73FB609_FFC9_3D02_41DF_575A1F327DC9",
  "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B0447A2_0C62_90C0_41A1_BAA7580FD82A"
},
{
 "thumbnailUrl": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_t.jpg",
 "label": "IMG_20220825_122308_00_497",
 "id": "panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E1D308CB_FF4B_1506_41E3_75C75AB5CB55",
  "this.overlay_E10EC96D_FF49_1703_41E2_C6A5B4FDBEB1",
  "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B2C2774_0C62_9040_41AA_0118851C7D37"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_32F725B1_0C62_90C0_41A0_3B6ED605F0A2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -140.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_32356583_0C62_90C0_4182_49B1CAFED34A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_33A04527_0C62_91C0_4182_6E2CE3CE1FE1"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_camera"
},
{
 "thumbnailUrl": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_t.jpg",
 "label": "IMG_20220825_131539_00_515",
 "id": "panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "backwardYaw": 39.06,
   "yaw": 52.78,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "backwardYaw": 36.55,
   "yaw": -102.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2218E73F_026F_E8B1_4168_BAA4A44A6711",
  "this.overlay_236C03E8_026F_6FDE_417C_31493FF7D188",
  "this.overlay_2072A3C8_0269_6FDE_415A_5DBAA81A0C08",
  "this.overlay_23EBF596_0269_2873_4175_B376E1242C2C",
  "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_30A37446_0C62_9040_41A7_C8646DF01936"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 50,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "paddingTop": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "height": 641,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container"
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "right": "0%",
 "backgroundOpacity": 0.64,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": 0,
 "height": 118,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "class": "Container"
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": "0.06%",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 6,
 "width": "24.125%",
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "minHeight": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "37.622%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "paddingTop": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": "7.14%",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "visible": false,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "Entrance"
 },
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.23%",
 "width": 110,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "top": "4.76%",
 "borderSize": 3,
 "borderColor": "#000000",
 "minWidth": 1,
 "height": 47,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "visible": false,
 "paddingTop": 10,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Living Room"
 },
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "7.901%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "5.081%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Kitchen"
 },
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "4.946%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "4.973%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Bedroom 1"
 },
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "6.996%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "4.432%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Bedroom 2"
 },
 "id": "HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "6.996%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "4.432%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Bedroom 3"
 },
 "id": "HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "6.996%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "4.432%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Bathroom"
 },
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "data": {
  "name": "Hallway"
 },
 "id": "HTMLText_6D10649B_7332_5218_41D2_21101FE2809C",
 "left": "2.11%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "12.364%",
 "borderRadius": 0,
 "top": "5.19%",
 "propagateClick": false,
 "borderSize": 3,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Hallway</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "visible": false,
 "shadow": false,
 "class": "HTMLText"
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C, this.camera_332F34CA_0C62_9040_419A_83370F14980A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 77.51,
   "yaw": -113.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_0_1_0_map.gif",
      "width": 164,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E3A97C4D_FF4F_ED02_41B4_80871D640698",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.54,
   "yaw": -98.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18825A1A_0239_7873_4172_39E3A541F0FE",
   "yaw": -98.28,
   "pitch": -3.88,
   "hfov": 3.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E33B2936_FF4F_770E_41E5_5397A093F6A6",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 79.8,
   "yaw": -11.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_2_1_0_map.gif",
      "width": 136,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E2731514_FF77_1F02_41C1_DEA13ED93A3A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.12,
   "yaw": 10.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1882CA1B_0239_7871_4176_490E290CCA3B",
   "yaw": 10.18,
   "pitch": 6.82,
   "hfov": 4.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E20098BD_FF79_3503_41ED_B6DC2CBF62CF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8, this.camera_333494D5_0C62_9040_419E_B6BDD6DFFB88); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 107.06,
   "yaw": 84.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_4_1_0_map.gif",
      "width": 183,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E198D65C_FF49_1D01_41E6_8C376C8BB6B9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.56,
   "yaw": 77.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15ED6AFF_09F0_D52A_419D_E9CE44DF7FC5",
   "yaw": 77.41,
   "pitch": 15.57,
   "hfov": 4.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E1B06576_FF4F_1F0E_41E5_B5F700D49BA3",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8, this.camera_3B8A9846_0C62_9040_419F_36E8EC3CCEEB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 116.51,
   "yaw": -42.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_0_1_0_map.gif",
      "width": 176,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_DF536162_FF4B_1706_41E9_5DBE19D74F6A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": -35.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18858A1C_0239_7877_416B_5ACB07144C48",
   "yaw": -35.06,
   "pitch": 12.4,
   "hfov": 4.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF1D189E_FF4B_153E_41DB_587FC7604461",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95, this.camera_3B85A83C_0C62_9FC0_419A_B1F866664CCF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 94.35,
   "yaw": 92.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 138,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_DDDB6F5A_FF49_6B06_41D6_82CB9248FDBE",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.72,
   "yaw": 108.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_181BEB0C_0C66_B1C0_41A7_EDE3619436F4",
   "yaw": 108.26,
   "pitch": -4.32,
   "hfov": 4.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_12EE7DAC_09F0_4F2D_4187_FDD9174E7BFD",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 80.55,
   "yaw": 16.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 109,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2CF2191E_0CA2_91C0_41A5_A6ADBA298389",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -11.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -11.74,
   "hfov": 5.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_1_0.png",
      "width": 100,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2D93A152_0CA3_F040_41A8_EFE27C53870B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 70.01,
   "yaw": 103.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 122,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2C1526E5_0CA3_7040_41A7_19759B966580",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 79.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_252BD950_0C62_F040_41A7_6E3403AD9466",
   "yaw": 79.37,
   "pitch": 1.71,
   "hfov": 4.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2C92FCC2_0CA2_B040_418A_E3E9D10135B8",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_3B3A7796_0C62_90C0_4198_60CECD76E83E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 64.35,
   "yaw": -19.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 190,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E0DE279C_FF59_1B02_41E0_2B0917708254",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.82,
   "yaw": -12.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1884BA1D_0239_7871_4162_EB1B8842753A",
   "yaw": -12.17,
   "pitch": -4.07,
   "hfov": 4.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE87B9DA_FF5B_7706_41DF_6C794F219CB5",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_309E347F_0C62_9040_4175_F775758C0992); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 111.95,
   "yaw": -74.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_0_1_0_map.gif",
      "width": 148,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_10D250E0_0C9E_9040_417E_71C82D3DE870",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 110.76,
   "yaw": 125.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_1_1_0_map.gif",
      "width": 157,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_13E48E2E_0C9F_93C1_4143_C1E438B67980",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.44,
   "yaw": 87.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2524994E_0C62_F040_4167_1150F67C3C84",
   "yaw": 87.25,
   "pitch": -1.39,
   "hfov": 4.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_122BFD14_0C9F_71C1_4194_84A5C0F71C66",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.44,
   "yaw": 16.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2524C94E_0C62_F040_4195_D2EC3B9460D0",
   "yaw": 16.98,
   "pitch": -1.43,
   "hfov": 4.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_124BBAEC_0CA1_9041_4158_84F12D91B6BC",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001, this.camera_308AC473_0C62_9040_419E_A8DA7B21B5A5); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 56.92,
   "yaw": 22.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_13D84CF5_0CA1_F043_41A7_59E66B2D2697",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 8.85,
   "yaw": -107.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -107.73,
   "hfov": 8.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_5_0.png",
      "width": 150,
      "height": 150,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_12B55702_0CA3_B1C0_4194_1B5894DAA553",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581C873_FF39_6E82_41E5_2D1192608196_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB, this.camera_3B1527BA_0C62_90C0_4173_8C4F44302175); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_29D9F18A_0CAF_90C1_41A3_7924D0FB8A43",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577, this.camera_3B0447A2_0C62_90C0_41A1_BAA7580FD82A); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 102.41,
   "yaw": 129.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_1_1_6_map.gif",
      "width": 186,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2826236A_0CAE_B041_4180_66CA34CC4EE6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577, this.camera_3B0C87AE_0C62_90C0_41A7_372911502495); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 76.61,
   "yaw": -142.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_2_1_6_map.gif",
      "width": 146,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2A6C48D2_0CA1_7040_41A3_5648E161FB04",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.71,
   "yaw": -175.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_252F5953_0C62_F040_418A_48104B04AD3E",
   "yaw": -175.12,
   "pitch": -6.07,
   "hfov": 4.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_28699E27_0CA1_B3C0_419A_2939153B51CD",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -6.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_252F8953_0C62_F040_4165_651F7DF4CADC",
   "yaw": -6.55,
   "pitch": -1.05,
   "hfov": 4.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_29C9A930_0CA2_91C0_41A6_CC21BAB063F4",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36, this.camera_3A4B0883_0C62_90C0_4184_8638DD798136); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 89.36,
   "yaw": 77.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 191,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_19FC51D0_0CE6_B041_4163_FF4CF42C45C0",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": 71.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_255DB949_0C62_F040_41A1_FC7C4E159FD2",
   "yaw": 71.3,
   "pitch": 2.75,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_143E8516_0CE7_91C0_4180_283DCB816695",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1, this.camera_3A50188D_0C62_90C0_4182_B3571EBADCBE); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 107.17,
   "yaw": -127.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_2_1_0_map.gif",
      "width": 156,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1A5F80A8_0CE6_B0C1_4196_46807D0A4E8F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -148.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25220949_0C62_F040_418F_A27DE9C6D09E",
   "yaw": -148.57,
   "pitch": -0.86,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1B937A7E_0CE1_9040_41A3_4D9028D74E9B",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38, this.camera_32E665A5_0C62_90C0_419F_9527710BABD0); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 117.22,
   "yaw": -100.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 176,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_15ED2950_0CFE_B040_41A3_B9A625214FC9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -108.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2522E94A_0C62_F040_4182_3746B907C728",
   "yaw": -108.53,
   "pitch": -2.44,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1A445D72_0CFE_9041_41A2_D4D303A65715",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5, this.camera_32F725B1_0C62_90C0_41A0_3B6ED605F0A2); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 114.05,
   "yaw": 53.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 184,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_143F21DF_0CE1_907F_418D_67451AEE6971",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 65.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2523B94A_0C62_F040_41A8_C643C6AC975E",
   "yaw": 65.57,
   "pitch": -1.08,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1492E473_0CE2_9047_4194_9BA2A603CB82",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_33EE04FD_0C62_9043_41A5_3E6B05A4FF59); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 52.59,
   "yaw": 0.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 155,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E430214F_FF49_171E_41EF_232CEEC3471B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.54,
   "yaw": -2.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_189F1A19_0239_7871_417C_0E5B03C0EF02",
   "yaw": -2.81,
   "pitch": -4.59,
   "hfov": 3.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E5552A18_FF49_F502_41DD_F499097CF636",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 83.23,
   "yaw": 66.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_2_1_0_map.gif",
      "width": 162,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E4192837_FF4B_150F_41EC_8B3D51CBFADD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05b Right"
 },
 "maps": [
  {
   "hfov": 9.94,
   "yaw": 57.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_3_0_0_map.gif",
      "width": 48,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_189FFA19_0239_7871_4170_3A31CA91858C",
   "yaw": 57.21,
   "pitch": -17.07,
   "hfov": 9.94,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E32F5B63_FF49_2B06_41CB_4EA362AD0FED",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E03B02B6_FF49_350E_41D1_89E35A9709C1",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04a"
 },
 "maps": [
  {
   "hfov": 9.2,
   "yaw": -101.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_5_0_6_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18800A19_0239_7871_417B_DB698FAE9A24",
   "yaw": -101.32,
   "pitch": -34.35,
   "hfov": 9.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E03EFA70_FF4B_1502_41D4_56FE361EE955",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4, this.camera_3A3038AA_0C62_90C0_41A3_27A92F43F10A); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_154AA596_0CE2_90C0_417B_DC1BBD16260F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -93.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2527894D_0C62_F040_4199_BC1F5868A431",
   "yaw": -93.93,
   "pitch": 0.84,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_102DAA6E_0CE2_9040_419F_5089CEE95A76",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95, this.camera_3A27F897_0C62_90C0_41A7_037D8C1DDD02); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 56.16,
   "yaw": -56.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_0_1_0_map.gif",
      "width": 189,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1C7EF1AB_09D7_D72A_4181_81E16EDA0046",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71, this.camera_3A2CE8A0_0C62_90C0_4196_B1530FCA3035); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1EAA6443_09D0_5D5B_4192_140C9A7CD289",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 11.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15905B20_09D0_D4D6_4197_96727857527C",
   "yaw": 11.96,
   "pitch": -3.11,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1FA0CC4A_09D0_CD6A_4165_407B015F169D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -55.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_159FBB21_09D0_D4D6_4190_23A648548CD4",
   "yaw": -55.86,
   "pitch": -2.7,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1EC0B63B_09D0_5D2B_4176_734613D38E29",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344, this.camera_3BBE1831_0C62_9FC0_4185_7E44791F6574); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_15CD63E4_023B_2FD6_4160_891233A13A04",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 60.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_1_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247028F3_0279_39B2_4150_FD56337BB27E",
   "yaw": 60.85,
   "pitch": -16.89,
   "hfov": 10.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1A786F4C_0239_18D6_4166_24CDF666802B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E, this.camera_3BA92827_0C62_9FC0_416A_2B7CA395CCA1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 95.1,
   "yaw": -124.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_2_1_6_map.gif",
      "width": 169,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1B4DFF92_0239_1873_4166_540C39CB3EC7",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.05,
   "yaw": -120.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_3_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247188F3_0279_39B2_4176_CCA38C71AEB4",
   "yaw": -120.28,
   "pitch": -15.01,
   "hfov": 10.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1B7FAEEF_0239_79D1_4161_9B166A581908",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5, this.camera_33939546_0C62_9040_4192_BF0ED7DB9A0E); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 67.13,
   "yaw": 106.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_0_1_0_map.gif",
      "width": 135,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1EE806F9_0219_E9BE_4141_529AE28F8C8A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "hfov": 7.46,
   "yaw": 121.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_1_0_6_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247588FB_0279_39B2_416B_CE6F6B1181B3",
   "yaw": 121.09,
   "pitch": -14.28,
   "hfov": 7.46,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_23B2DA32_0269_78B2_416F_563237330E2C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5, this.camera_3263C550_0C62_9040_41AA_859A6258AA68); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 75.65,
   "yaw": 24.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_2_1_0_map.gif",
      "width": 154,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1C2F3C32_0269_78B2_4138_39CCF2A71514",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.5,
   "yaw": 2.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_3_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247518FC_0279_39B6_4149_8E3034F86130",
   "yaw": 2.94,
   "pitch": -19.78,
   "hfov": 10.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1D53939F_026B_2871_4125_2C3AA9984224",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38, this.camera_3273C55A_0C62_9040_4155_3ADB1EB1C30E); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 86.59,
   "yaw": -61.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_4_1_0_map.gif",
      "width": 160,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_17ABF096_0CE1_70C0_41A7_2BC2CE8F2505",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -22.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25582945_0C62_F040_41A5_301B20C72830",
   "yaw": -22.61,
   "pitch": 2.04,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_17D52562_0CE7_F041_41A0_FFFBAFB05535",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F581C873_FF39_6E82_41E5_2D1192608196, this.camera_3244A565_0C62_9040_417B_FAE4435C3D95); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 27.68,
   "yaw": 165.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_6_1_0_map.gif",
      "width": 100,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1713285D_0CE3_9043_4181_F723C49B4AD1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F581C873_FF39_6E82_41E5_2D1192608196, this.camera_3254A56F_0C62_9040_419E_86CB11A4CCB1); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 39.51,
   "yaw": -160.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_7_1_0_map.gif",
      "width": 137,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_17BEFE9E_0CE2_90C1_4193_55B1F0561FFB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": -153.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25592946_0C62_F040_4173_B6CD6723BFD3",
   "yaw": -153.67,
   "pitch": 4.05,
   "hfov": 4.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_10ED50E1_0CE2_F040_41A1_416A6E8E9F70",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024, this.camera_337FF4A1_0C62_90C0_41A4_A5DCC0D9F573); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 102.57,
   "yaw": -106.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 95,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_29D3C22A_0CA3_73C0_41A9_A0FADD7003E5",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB, this.camera_3343A4AB_0C62_90C0_41A9_1179507A92CF); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 72.91,
   "yaw": -4.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 104,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_29BCF9E2_0CA2_B041_419C_B0E91240900F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8, this.camera_3369C495_0C62_90C0_419E_6A8EFC4E74A7); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_2_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2979DD02_0CA2_91C0_4178_9232DCD18ACA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": 104.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3CDEEF77_0D9F_7040_4191_E9E3ADBBDB98",
   "yaw": 104.95,
   "pitch": -1.51,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_39485CF3_0DA1_9040_4188_E7730649CAA4",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.11,
   "yaw": -79.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3CDECF77_0D9F_7040_4197_B2817776C392",
   "yaw": -79.7,
   "pitch": -7.03,
   "hfov": 4.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_39C3EB43_0DA1_9040_4192_AFB9B112B820",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 73.04,
   "yaw": 89.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_0_1_0_map.gif",
      "width": 163,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_0E8EA230_01E9_284F_4150_39DCEAA4D128",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC, this.camera_32257579_0C62_9040_419A_47C4853408CF); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 65.98,
   "yaw": -92.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_1_1_0_map.gif",
      "width": 195,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_11F050AD_01EB_E856_4136_967B5F615FC6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 9.88,
   "yaw": -88.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_240D78F1_0279_39CE_417D_170A7ECBB166",
   "yaw": -88.88,
   "pitch": -18.28,
   "hfov": 9.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0E11B049_01E9_28DE_4143_5BA5F2A23AFD",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 9.72,
   "yaw": 94.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_240D38F1_0279_39CE_413E_C1B9491E1C76",
   "yaw": 94.89,
   "pitch": -16.88,
   "hfov": 9.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0E1A75EA_01E9_6BD2_4173_00E3BE872532",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2, this.camera_3A657859_0C62_9040_4193_0D1B28D304B2); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 79.78,
   "yaw": 36.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_0_1_0_map.gif",
      "width": 174,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_23F1F86F_026B_38D1_4174_EDF0BCAF864E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 7.01,
   "yaw": 34.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_1_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2479A8FE_0279_39B2_416D_C98A95BCB798",
   "yaw": 34.45,
   "pitch": -14.55,
   "hfov": 7.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26D08991_026B_184E_4168_AE78D2C15297",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 91.83,
   "yaw": -70.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 172,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_24B2A298_0269_287E_416F_34EF08B3E8CC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "hfov": 7.86,
   "yaw": -74.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_3_0_6_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247938FF_0279_39B2_416E_6058D024FC66",
   "yaw": -74.97,
   "pitch": -17.49,
   "hfov": 7.86,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_27BD9C0A_0269_3853_4161_0469CABDF2FF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38, this.camera_3B90684F_0C62_9040_41A7_93718E7C0FDB); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 81.42,
   "yaw": 138.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_4_1_0_map.gif",
      "width": 129,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_180859EB_0CA2_9040_41A7_92AD4B861D34",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.86,
   "yaw": 166.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_255CE949_0C62_F040_415C_F65D46D3F258",
   "yaw": 166.57,
   "pitch": 7.99,
   "hfov": 5.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19D11526_0CE1_B1C0_4196_AD0BDEFA4380",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4, this.camera_33D0051D_0C62_91C0_41A5_241407DFC1CC); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 89.83,
   "yaw": 135.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 188,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2F724C7A_0CA1_9040_4191_44420D0395EA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 155.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_252C4954_0C62_F040_417B_667E955DD8AC",
   "yaw": 155.24,
   "pitch": 3.72,
   "hfov": 4.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2B87D74C_0CAE_F040_4199_DA03B6C1FCB7",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D, this.camera_335C04C0_0C62_9040_41A7_5E74825EAF67); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1311F24C_0229_28D6_417B_1174D06C74E6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 11,
   "yaw": 37.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_240E88F1_0279_39CE_417F_4C2C6E9F7402",
   "yaw": 37.5,
   "pitch": -16.09,
   "hfov": 11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_137112A6_022F_2853_40EB_C82CE272D480",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C, this.camera_3349D4B6_0C62_90C0_41A3_A2786B6FAB0C); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_107FD52C_0229_2856_417F_9447627EDA96",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.28,
   "yaw": -139.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_4_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2DDA273C_09F0_BB2D_41A3_34D388A64077",
   "yaw": -139.12,
   "pitch": -34.1,
   "hfov": 10.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1404A2DF_09F1_B56A_4154_D12FA6EA3EA9",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8, this.camera_3B4F2731_0C62_91C0_4186_DE7FCCDAC53B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 108.01,
   "yaw": -27.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 104,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E1C75258_FF49_3502_41EB_469040BFA8A0",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.08,
   "yaw": -53.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1883FA1B_0239_7871_4175_E19CC5D5E5FF",
   "yaw": -53.12,
   "pitch": -3.47,
   "hfov": 4.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DB8A29FF_FF37_16FF_41B9_1DDFDC2B066C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71, this.camera_3B49173D_0C62_91C0_418A_33D8C92BC1CC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.93,
   "yaw": -161.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_2_1_0_map.gif",
      "width": 122,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1D916582_09CF_DFDA_418D_B65F55B15140",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -165.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15911B1F_09D0_D4EA_4197_E7FAD8FEE9ED",
   "yaw": -165.8,
   "pitch": -1.7,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1DDE5CD1_09D0_4D76_4183_C7B9C227DEC6",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71, this.camera_3B539748_0C62_9040_4195_240C5AEB96C8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 67.98,
   "yaw": 146.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_4_1_0_map.gif",
      "width": 132,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_119E6D0B_09D0_CCEA_41A0_E5A9EA29FC64",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38, this.camera_3B446726_0C62_91C0_41A7_7354AF8EB0B9); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 45.35,
   "yaw": -120.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_5_1_0_map.gif",
      "width": 151,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1C5F270B_09D1_DCEA_4193_6D5BD9679D63",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -120.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1592FB02_09F0_D4DA_416F_D6D9DA45A92A",
   "yaw": -120.95,
   "pitch": -3.06,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_11F0E92C_09D0_572E_4180_C8114B3E43D2",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C, this.camera_30AAF451_0C62_9040_4192_DFB7A5F09D7D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 70.57,
   "yaw": -30.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 185,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2D69E456_0CA2_9041_419F_DEF03A4DD1C1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 8.94,
   "yaw": -37.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -37.11,
   "hfov": 8.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_1_0.png",
      "width": 151,
      "height": 151,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2E34CDDB_0CA1_9047_418B_BD8913E26014",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4, this.camera_30855468_0C62_9040_4182_9C112C86DC8C); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 121.92,
   "yaw": 74.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 103,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2E5763E3_0CA2_9047_41A0_11C8B0D67A03",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 5,
   "yaw": 68.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25293951_0C62_F040_4185_3FD55B13888B",
   "yaw": 68.45,
   "pitch": 0.83,
   "hfov": 5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2D3B1157_0CA2_9040_419D_ABD01079701A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742, this.camera_30BFE45D_0C62_9040_41A7_56DF56D64D5A); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 88.02,
   "yaw": -136.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 140,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2FADBC9B_0CA3_90C0_4189_098D9402B8FD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 5,
   "yaw": -160.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2529F951_0C62_F040_4147_82BFA4F6C761",
   "yaw": -160.16,
   "pitch": -1.43,
   "hfov": 5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2F089316_0CA3_91C0_41A4_98C72F1CAE84",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742, this.camera_3217D599_0C62_90C0_41AA_952D9E5B4F94); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 112.71,
   "yaw": -101.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 87,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_3FF5134C_0C61_9040_41A1_07B7E37A2391",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.72,
   "yaw": -112.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_37489E52_0C61_B041_415B_77B698DD636F",
   "yaw": -112.06,
   "pitch": -4.57,
   "hfov": 4.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_39772289_0C62_B0C0_41A5_C3E1153CF1B6",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.53,
   "yaw": 161.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 196,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_3FBE74F4_0C63_9040_41A8_A23331120A6D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.74,
   "yaw": -170.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_3_1_0_map.gif",
      "width": 142,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_39E31725_0C63_91C0_4165_07F2DFECFE36",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 174.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_374F8E53_0C61_B047_41A6_5DC3DA27FEF2",
   "yaw": 174.08,
   "pitch": -0.55,
   "hfov": 4.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3935D994_0C62_90C1_415C_904EEDABEF84",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50, this.camera_331D14F3_0C62_9040_4196_657304EA3C4D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 94.1,
   "yaw": -54.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 106,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E85D5D3B_FFF9_6F07_41D6_55552E85C315",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 112.44,
   "yaw": 48.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E5DD4C03_FFFA_ED06_41EB_D42A7359B2C1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 64.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46D8808_FF57_1502_41DE_85F0F54C2131",
   "yaw": 64.66,
   "pitch": -1.24,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E6F0AA34_FFF9_F502_41DA_23651A767CFE",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -79.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46DA808_FF57_1502_41DB_5DE9323643D0",
   "yaw": -79.18,
   "pitch": -2.33,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E7785FDB_FFF9_6B06_41ED_401668077244",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38, this.camera_3B6F36E9_0C62_9040_4196_F6F41807836A); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_3_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_158DCCAF_0CE1_B0C0_41A3_7361D38E89D0",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": 64.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2526094C_0C62_F040_4169_5EEE28C6237A",
   "yaw": 64.25,
   "pitch": -0.75,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_10E4420C_0CE2_B3C0_4179_BCF9D7E77E61",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34, this.camera_3B6936F7_0C62_9040_41A3_0319AEF64E5B); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_16237C57_0CE2_9040_4198_473B4DD16FDF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -116.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2526C94D_0C62_F040_4196_E87115162426",
   "yaw": -116.17,
   "pitch": 3.34,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_16C78D09_0CE3_B1C3_41A5_1255355A22C3",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "id": "htmlText_E76B017E_FFCF_17FE_41E6_1B349F51464F",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 0,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 0,
 "height": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.11vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.48vh;\">Hello! Welcome to Kabba Holding company</SPAN>.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText29047"
 },
 "paddingTop": 10,
 "shadow": false,
 "class": "HTMLText"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96, this.camera_3B64F6DD_0C62_9040_4190_5B10CBAD88A1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 68.24,
   "yaw": -42.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 156,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_F1FF0DE3_FF5B_2F06_41D9_FFA6427B5FDB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -28.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF1F1D9D_FF49_2F03_41DD_17CFDC83B314",
   "yaw": -28.74,
   "pitch": -2.13,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_F1B2AE62_FF59_2D06_41E1_FB1767DF8912",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 73.83,
   "yaw": -116.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 168,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EEFF73C7_FF4F_1B0E_41D1_C58D6842B54B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "hfov": 11.88,
   "yaw": -80.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_3_0_0_map.gif",
      "width": 24,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C35E43_FFCB_2D06_41DD_DD10BAF11EA5",
   "yaw": -80.06,
   "pitch": -28.2,
   "hfov": 11.88,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EC1D4B40_FF39_6B02_4157_BBC20EA7FCC0",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 78,
   "yaw": 92.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 155,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E0BEDBEC_FF5F_EB01_41E0_89A818E0A9A9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.13,
   "yaw": 79.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18857A1C_0239_7877_416E_23CA2C8E9EB8",
   "yaw": 79.11,
   "pitch": -4.35,
   "hfov": 4.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DFC19158_FF5E_F702_41E6_B47D1983D700",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581CE96_FF39_6382_41E7_E2755B74444F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A, this.camera_3B66D6D0_0C62_9040_4191_FC5CE033F6B1); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 106.1,
   "yaw": 26.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_0_1_0_map.gif",
      "width": 194,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1A456073_0227_E8B2_4153_CBF266E55DBB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B, this.camera_32F8D5BD_0C62_90C0_41A9_80332CF57462); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 103.39,
   "yaw": -121.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 156,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1BDACC2B_0229_7852_4173_C793D7888FB2",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "hfov": 10.49,
   "yaw": -6.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_4_0_0_map.gif",
      "width": 24,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2472D8F4_0279_39B6_417A_8A53CB75B823",
   "yaw": -6.87,
   "pitch": -15.96,
   "hfov": 10.49,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1BBBF46A_0229_28D2_4169_63526AB437EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "hfov": 11.47,
   "yaw": -124.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_5_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247298F4_0279_39B6_417E_69D9FE01B00C",
   "yaw": -124.41,
   "pitch": -15.98,
   "hfov": 11.47,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1C4D1399_022B_687E_417A_2BF05E0E47C5",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 90.91,
   "yaw": -115.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_0_1_0_map.gif",
      "width": 174,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0EB9497D_01E9_18B1_4175_633D340286EF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 108.25,
   "yaw": -39.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_1_1_0_map.gif",
      "width": 173,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_11E89235_01E8_E8B6_4152_FC634BA8A8FA",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.62,
   "yaw": -44.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1885EA1D_0239_7871_4145_0152AC990E61",
   "yaw": -44.04,
   "pitch": -17.9,
   "hfov": 10.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0E0DC5D8_01E7_2BFE_4159_64D8B19BD568",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -123.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18858A1D_0239_7871_416F_0289D46C3D14",
   "yaw": -123.65,
   "pitch": -2.35,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0E079B7D_01E7_18B6_416F_279630E03C10",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38, this.camera_3B31578B_0C62_90C0_41A2_104FAC794FB2); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 54.36,
   "yaw": 151.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_0_1_0_map.gif",
      "width": 191,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1FFB39B4_09D1_B73D_4182_61025A0EBF6F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 162.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15935B1E_09D0_D4EA_4179_204A892872CA",
   "yaw": 162.46,
   "pitch": -2.92,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1F0DD58E_09D0_DFED_41A3_14227C2B22D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95, this.camera_3B368780_0C62_90C0_41A3_C50166A26968); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 86.17,
   "yaw": -127.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 138,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1F3F236B_09D0_5B2B_4160_DA24EC4D1772",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -119.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1592AB1E_09D0_D4EA_419D_72AEF8A0BED3",
   "yaw": -119.21,
   "pitch": -0.86,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1F681347_09D0_5B5A_417C_4C1A2D28E176",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E, this.camera_3307C4DF_0C62_9040_41AA_1747DA17D99C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_3_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1BB2E50A_0229_2852_4171_C1A6C865F894",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.78,
   "yaw": 87.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_1_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1E9E290D_0219_F856_4177_5D5B861AD1D3",
   "yaw": 87.23,
   "pitch": -19.16,
   "hfov": 10.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_188B5662_0229_28D2_4161_94FC3A034751",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E, this.camera_330B44E9_0C62_9040_41A3_3603F3A1A941); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1BAF9E01_0227_184E_4161_2BB5E56F7209",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 12.13,
   "yaw": -97.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_3_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1E9FD90D_0219_F856_416A_8C8821EE7ABD",
   "yaw": -97.92,
   "pitch": -20.16,
   "hfov": 12.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1840B10A_0227_2852_4175_1A8637B31D8F",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_3B7A071A_0C62_91C0_41A1_DCDE040C73B5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 120.58,
   "yaw": 118.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 154,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E18EFF23_FF57_2B06_41DF_8E22A2E227D2",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": 111.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18848A1C_0239_7877_4135_FB5233D400D0",
   "yaw": 111.48,
   "pitch": 2.26,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E0AB8398_FF57_1B02_41CD_0571F0A3A65A",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1, this.camera_3364048B_0C62_90C0_4190_D0DEF7F0D7BA); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 122.13,
   "yaw": -117.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 151,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1B21F2EF_0CE3_B040_41A3_F167E1D66066",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -139.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2520194B_0C62_F040_4171_B4EAF4F95FB6",
   "yaw": -139.63,
   "pitch": -1.75,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_14F3DF70_0CE3_9041_4199_5A63E0D1E046",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_3BE567D0_0C62_9040_41A4_487438E3B227); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_14EC7E06_0CE1_73C1_4181_CB5199DA1723",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4, this.camera_3B1D57C5_0C62_9040_417D_8CE6E52786AB); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 120.96,
   "yaw": 122.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_1_1_6_map.gif",
      "width": 200,
      "height": 137,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_16824197_0CE6_90C0_41A5_DFF3E8CE9D1A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 103.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2521694C_0C62_F040_417F_9E1C97B1084D",
   "yaw": 103.97,
   "pitch": 1.44,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_159B2F58_0CE7_9040_4198_076C0D18302F",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.23,
   "yaw": -29.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -29.44,
   "hfov": 5.23,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_3_0.png",
      "width": 88,
      "height": 88,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_15BB71DD_0CE1_9043_41A1_901BC011A198",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 43.37,
   "yaw": -160.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_0_1_0_map.gif",
      "width": 78,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E7C7CFC2_FFC9_6B06_41EC_9B42E860595D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -161.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46C6809_FF57_1502_41B3_DE6747219800",
   "yaw": -161.89,
   "pitch": 1.3,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E6741CAF_FFCB_2D1E_41D6_2B971E778D14",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 39.91,
   "yaw": -118.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_2_1_0_map.gif",
      "width": 152,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E5486F7A_FFCB_2B01_41D9_DADB009D96C3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E765417E_FFCF_17FE_41DF_8EED84DCE410, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 108.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46C2809_FF57_1502_41B5_BEBE2E3FE7D5",
   "yaw": 108.53,
   "pitch": 6.22,
   "hfov": 6.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E745B8A6_FFCF_1501_41C7_3B0EBF2424B8",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC, this.camera_3B58F75E_0C62_9040_41A5_0C88316A9ED0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 39.54,
   "yaw": -67.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_4_1_0_map.gif",
      "width": 186,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E66BE5D2_FFC9_1F01_41EF_CC4A22315273",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0, this.camera_3B238769_0C62_9040_41A3_9D00D59159B4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 20.58,
   "yaw": -33.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_5_1_0_map.gif",
      "width": 120,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E7355D83_FFC9_2F07_41CE_13EACB139F4C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C, this.camera_3B5E5752_0C62_9040_4196_E90E44EE0A97); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.96,
   "yaw": -11.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_6_1_0_map.gif",
      "width": 97,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E6974A6A_FFC9_7506_41DD_D0378E25AE7A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -62.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E465080E_FF57_151E_41E9_A9CF9511080D",
   "yaw": -62.26,
   "pitch": 0.11,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E709C0A9_FFCB_1502_41DD_BF0CFE10DD33",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -26.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E465280E_FF57_151E_41E5_DC525ED0598D",
   "yaw": -26.67,
   "pitch": 0.3,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E63FE5E1_FFCB_1F02_41E6_84803E41141A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -14.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E465C80E_FF57_151E_41D6_55F0941AE15E",
   "yaw": -14.02,
   "pitch": 0.04,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E68B5220_FFCA_F502_41E5_3D6F4923C07F",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9, this.camera_3B2C2774_0C62_9040_41AA_0118851C7D37); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 36.7,
   "yaw": 21.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_10_1_0_map.gif",
      "width": 188,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E6CC868A_FF49_7D06_41DC_D531E419854C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 25.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E465880F_FF57_151E_41DE_E248530E5EF7",
   "yaw": 25.92,
   "pitch": 1.3,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E728A4F0_FF4B_1D01_41E0_E64A76579FEA",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 89.08,
   "yaw": 59.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 130,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EC9DEACE_FF3B_F501_41E5_13F74E7D124A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96, this.camera_3A693864_0C62_9040_4184_17F22F425BD3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 65.18,
   "yaw": -19.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 110,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EB2B548F_FF3B_7D1E_41EF_A8A66778989A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -21.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C51E45_FFCB_2D02_41E9_FF87767A8ED5",
   "yaw": -21.36,
   "pitch": -1.55,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E9335AE4_FF39_1502_41E4_F0D2A0E71E96",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 27.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C5DE45_FFCB_2D02_41E6_9EEAB1D4E0A5",
   "yaw": 27.77,
   "pitch": -28.05,
   "hfov": 10.77,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E845A761_FF37_3B03_41D4_00577A8254A5",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50, this.camera_3A70A86E_0C62_9040_4190_D9FCEC6BFC33); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 98.38,
   "yaw": -103.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 158,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EAF4AE4F_FFC9_6D1E_419B_4D44AC2FADD2",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -106.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C45E45_FFCB_2D02_41E3_2656395E341F",
   "yaw": -106.42,
   "pitch": -3.12,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EAE05920_FFC9_3702_41C4_108C857F0D0F",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_3BFE97F1_0C62_9040_41A2_B2D37C489CF1); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1D11EE39_026B_38B1_4172_3C11B1168A24",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 11.52,
   "yaw": -142.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_1_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247648FC_0279_39B6_417B_69BE74C10EBD",
   "yaw": -142.39,
   "pitch": -21.92,
   "hfov": 11.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_205B82BD_0269_69B6_417E_C447E2ACD52F",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2, this.camera_3BF637E6_0C62_9040_419B_E8C9E9FA2BB0); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1DCF995A_0269_38F2_4180_FAD83E8B9E54",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.09,
   "yaw": 36.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_3_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247788FD_0279_39B6_4180_95FD4E0871A4",
   "yaw": 36.11,
   "pitch": -18.77,
   "hfov": 10.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_20DC66B5_0268_E9B1_4175_EC8CFC0251FB",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -18.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46EF806_FF57_150E_41EB_DD411C21D778",
   "yaw": -18.2,
   "pitch": -2.47,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E95977A3_FFCB_1B06_41E2_1970B2B6AD06",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04a"
 },
 "maps": [
  {
   "hfov": 9.51,
   "yaw": -28.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_1_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46EA806_FF57_150E_4177_A47011FCEBA4",
   "yaw": -28.34,
   "pitch": -29.2,
   "hfov": 9.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E9E6092C_FFC9_7702_41B1_5B25AFB25E4C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD, this.camera_33A04527_0C62_91C0_4182_6E2CE3CE1FE1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 114.66,
   "yaw": -17.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 130,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E8F6D31F_FFC9_1B3E_41ED_90771D56D3CF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 52.72,
   "yaw": -92.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 176,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E94680C5_FFCF_3502_41E2_8E561DACB48D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -106.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46D6807_FF57_150E_41D3_6EA9C85B7B88",
   "yaw": -106.67,
   "pitch": 1.03,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E9163482_FFCF_3D06_41C0_A0F70CB8ABD3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41, this.camera_33B2E531_0C62_91C0_41A6_159AA7DE2CAA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E9FC3BDC_FFCF_2B02_41D5_6CC7D919E89A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41, this.camera_3381353C_0C62_91C0_41A7_C21AB2A56EAC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 59.61,
   "yaw": -150.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_6_1_6_map.gif",
      "width": 73,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E7B4027B_FFFF_1506_41CD_594383504EBE",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 150.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_7_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E46D3808_FF57_1502_41D6_BC7EE7FA4AC7",
   "yaw": 150.89,
   "pitch": -1.47,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E717144D_FFF9_1D02_41EC_60776BEFCE16",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F581C873_FF39_6E82_41E5_2D1192608196, this.camera_3A45A879_0C62_9040_41A8_6AF0D4A82559); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_11235A0D_0CA2_93C0_41A3_DE1690A97B52",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 76.99,
   "yaw": 28.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_1_1_6_map.gif",
      "width": 200,
      "height": 167,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_13EA657D_0CA1_9040_41A0_F9AA034AB803",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -45.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_252A994F_0C62_F040_4161_4E698CDBDB55",
   "yaw": -45.53,
   "pitch": -2.01,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_135BA117_0CA6_91C0_4197_35BABF94B2F0",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -4.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -4.54,
   "hfov": 4.74,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_3_0.png",
      "width": 80,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_133D1AF4_0CA7_9040_4188_AF27A7B9BAE3",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C, this.camera_33FFE508_0C62_91C0_41A6_09BE505F799A); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 113.74,
   "yaw": -24.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 182,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_109E218B_022B_E852_4180_5FA72D9736DD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.15,
   "yaw": -26.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_240F78F2_0279_39B2_4177_5CDE1AE45108",
   "yaw": -26.11,
   "pitch": -20.48,
   "hfov": 10.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_17AE5928_0228_F85F_4178_02919FF21DBD",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A, this.camera_33CFE512_0C62_91C0_418A_D1A117D5C992); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 107.52,
   "yaw": 129.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_2_1_0_map.gif",
      "width": 152,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1518F8C5_023F_39D6_4164_A296A47029F4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.17,
   "yaw": 158.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2470C8F3_0279_39B2_4162_82262143A690",
   "yaw": 158.66,
   "pitch": -16.09,
   "hfov": 10.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1A433FE6_0238_F7D2_4164_1665B8234FC2",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE026B_FF39_2282_41B5_0F2204858344_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B, this.camera_3BEFE7DB_0C62_9040_416A_698AC8F7A4A1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1843489B_0219_3872_417D_E2176424A2EA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.89,
   "yaw": 104.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2474D8F5_0279_39B6_417A_51D8183B3E44",
   "yaw": 104.06,
   "pitch": -17.4,
   "hfov": 10.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1969D2AD_0219_2856_4153_AD6911A16674",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_19D90D79_0219_18B1_4180_449620FDE574",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 9.85,
   "yaw": -76.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247408F6_0279_39B2_4169_0E488F421C9F",
   "yaw": -76.07,
   "pitch": -18.78,
   "hfov": 9.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_194EB99E_021B_3873_4152_5EDB6F359E07",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_30A37446_0C62_9040_41A7_C8646DF01936); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 73.53,
   "yaw": -14.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_0_1_0_map.gif",
      "width": 191,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E4BD7A25_FF59_7502_41EA_7AD440D14BC8",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 69.99,
   "yaw": 73.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_1_1_0_map.gif",
      "width": 107,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E4567C35_FF59_2D02_41A8_C1C0499BDD42",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.23,
   "yaw": 151.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_2_1_0_map.gif",
      "width": 60,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E41FE2CD_FF59_1502_41E4_58915321C18A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.69,
   "yaw": 92.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18814A1A_0239_7873_4156_24EBF7108883",
   "yaw": 92.26,
   "pitch": 8.09,
   "hfov": 4.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E4148E91_FF5B_2D03_41E0_DA62496D5BDD",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.53,
   "yaw": 158.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E464C80F_FF57_151E_41ED_1C8BC1A08470",
   "yaw": 158.8,
   "pitch": 6.77,
   "hfov": 3.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E4415295_FF5B_7502_41DC_29DB4ABA25D3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -0.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E464E810_FF57_1502_41D0_25615415A6F8",
   "yaw": -0.61,
   "pitch": -3.57,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E44B5EC3_FF5B_2D06_41ED_0AF41A95AF15",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8, this.camera_30DD443B_0C62_97C0_419F_01D0CB9B70E6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 69.96,
   "yaw": -146.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_6_1_0_map.gif",
      "width": 117,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_115AD6B3_09D1_BD3B_415C_24D291A468DF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -173.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_12997C52_09D3_CD7A_4179_1D2590FD0DFD",
   "yaw": -173.13,
   "pitch": 2.82,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_10CFB141_09D0_B756_4194_C18B419FE5FA",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742, this.camera_3BC3E7FC_0C62_9040_41A2_9397AF428666); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 117.5,
   "yaw": 120.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 134,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2A8BCD82_0CA6_B0C0_4190_B5099F725DF9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 131.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25325955_0C62_F040_4172_39E047378E8B",
   "yaw": 131.62,
   "pitch": -2.31,
   "hfov": 4.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2B7FECF3_0CA6_B047_416C_5B030D326B2B",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "maxHeight": 37,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "right": 30,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "bottom": 8,
 "height": 75,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "shadow": false,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC, this.camera_3BC9A807_0C62_9FC0_41A3_CEC826F7FEDC); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 61.2,
   "yaw": 40.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_0_1_0_map.gif",
      "width": 194,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_128B0FEB_09F0_4B2B_419B_702ECCC5CA1B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "hfov": 13.82,
   "yaw": 40.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_29717C5B_09F7_CD6A_4197_77A9D346799E",
   "yaw": 40.07,
   "pitch": -23.55,
   "hfov": 13.82,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_13863286_09F3_F5DD_41A2_E52FC2D68533",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 10.56,
   "yaw": -71.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_29719C5C_09F7_CD6E_4154_08CE73AB87FA",
   "yaw": -71.8,
   "pitch": -22.3,
   "hfov": 10.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_124C3BD9_09F0_4B76_41A0_DC8749ACDC4B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344, this.camera_3BDEA812_0C62_9FC0_419D_78EF08CF41C0); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 31.47,
   "yaw": -67.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_3_1_0_map.gif",
      "width": 151,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_156B1852_09F0_D57A_4151_9E5885E440A2",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB, this.camera_3BA3B81C_0C62_9FC0_41A4_5B70ED9AF44E); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 91.93,
   "yaw": -130.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 152,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_24F4041B_0CBE_97C7_419E_6AF7CFDD4BF3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -117.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25511941_0C62_F040_41A5_703B24395552",
   "yaw": -117.83,
   "pitch": 1.13,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2EC5FC1F_0CA1_97FF_41A3_4FA78BD81C25",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156, this.camera_3B7FB70E_0C62_91C0_4193_78E66517DD58); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 58.64,
   "yaw": 114.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 162,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EC113BCF_FF3B_EB1E_41E8_851AC777E9EB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 121.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C3DE44_FFCB_2D02_41B3_7CB3151AD9B9",
   "yaw": 121.23,
   "pitch": 1.28,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EB52C5C2_FF3B_7F06_41EE_3FCA88748D61",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 48.98,
   "yaw": -155,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_2_1_0_map.gif",
      "width": 153,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_ECA95279_FF39_1503_41D8_5C079C9AB314",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD, this.camera_3B75A703_0C62_91C0_4195_F6C24C45595C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 114.42,
   "yaw": -45.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 113,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_ED900D42_FF39_2F06_41D0_B9FD5D0EC0DA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -43.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C2CE44_FFCB_2D02_41EA_1DD52B8E5958",
   "yaw": -43.65,
   "pitch": 0.67,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EB5C629C_FF3F_1501_41C8_5E6AE6F010B2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 3.55,
   "yaw": 165.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E8DF3692_FFC9_1D06_41CA_32C96EBD0A15",
   "yaw": 165.38,
   "pitch": 0.95,
   "hfov": 3.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E957125C_FFD7_1502_41E8_A806B05DA206",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 22.71,
   "yaw": 168.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_7_1_0_map.gif",
      "width": 87,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E73FB609_FFC9_3D02_41DF_575A1F327DC9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 66.26,
   "yaw": 94.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 158,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E1D308CB_FF4B_1506_41E3_75C75AB5CB55",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.13,
   "yaw": 70.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_18847A1C_0239_7877_4158_A2D9E7431F6C",
   "yaw": 70.28,
   "pitch": 4.27,
   "hfov": 4.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E10EC96D_FF49_1703_41E2_C6A5B4FDBEB1",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5, this.camera_32356583_0C62_90C0_4182_49B1CAFED34A); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2218E73F_026F_E8B1_4168_BAA4A44A6711",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 7.71,
   "yaw": 61.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_1_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2478F8FD_0279_39B6_4174_0AE776432956",
   "yaw": 61.46,
   "pitch": -13.25,
   "hfov": 7.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_236C03E8_026F_6FDE_417C_31493FF7D188",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36, this.camera_3205B58D_0C62_90C0_41A5_FC73C832A5C9); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 109.89,
   "yaw": -102.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_2_1_6_map.gif",
      "width": 152,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2072A3C8_0269_6FDE_415A_5DBAA81A0C08",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "hfov": 7.27,
   "yaw": -117.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_3_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_247878FE_0279_39B2_4178_71100BE1FB95",
   "yaw": -117.08,
   "pitch": -16.34,
   "hfov": 7.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_23EBF596_0269_2873_4175_B376E1242C2C",
 "class": "HotspotPanoramaOverlay"
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "height": 110,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container"
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "91.304%",
 "borderRadius": 0,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "height": "85.959%",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 0,
 "class": "Container"
},
{
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "bottom": "0%",
 "height": 51,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 0,
 "class": "Container"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18825A1A_0239_7873_4172_39E3A541F0FE",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1882CA1B_0239_7871_4176_490E290CCA3B",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_15ED6AFF_09F0_D52A_419D_E9CE44DF7FC5",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18858A1C_0239_7877_416B_5ACB07144C48",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_181BEB0C_0C66_B1C0_41A7_EDE3619436F4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_252BD950_0C62_F040_41A7_6E3403AD9466",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1884BA1D_0239_7871_4162_EB1B8842753A",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2524994E_0C62_F040_4167_1150F67C3C84",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2524C94E_0C62_F040_4195_D2EC3B9460D0",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_252F5953_0C62_F040_418A_48104B04AD3E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_252F8953_0C62_F040_4165_651F7DF4CADC",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_255DB949_0C62_F040_41A1_FC7C4E159FD2",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_25220949_0C62_F040_418F_A27DE9C6D09E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2522E94A_0C62_F040_4182_3746B907C728",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2523B94A_0C62_F040_41A8_C643C6AC975E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_189F1A19_0239_7871_417C_0E5B03C0EF02",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_3_0.png",
   "width": 720,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_189FFA19_0239_7871_4170_3A31CA91858C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_5_0.png",
   "width": 480,
   "height": 510,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18800A19_0239_7871_417B_DB698FAE9A24",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2527894D_0C62_F040_4199_BC1F5868A431",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_15905B20_09D0_D4D6_4197_96727857527C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_159FBB21_09D0_D4D6_4190_23A648548CD4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247028F3_0279_39B2_4150_FD56337BB27E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247188F3_0279_39B2_4176_CCA38C71AEB4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_1_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247588FB_0279_39B2_416B_CE6F6B1181B3",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247518FC_0279_39B6_4149_8E3034F86130",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_25582945_0C62_F040_41A5_301B20C72830",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_25592946_0C62_F040_4173_B6CD6723BFD3",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_3CDEEF77_0D9F_7040_4191_E9E3ADBBDB98",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_3CDECF77_0D9F_7040_4197_B2817776C392",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_240D78F1_0279_39CE_417D_170A7ECBB166",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_240D38F1_0279_39CE_413E_C1B9491E1C76",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2479A8FE_0279_39B2_416D_C98A95BCB798",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_3_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247938FF_0279_39B2_416E_6058D024FC66",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_255CE949_0C62_F040_415C_F65D46D3F258",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_252C4954_0C62_F040_417B_667E955DD8AC",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_240E88F1_0279_39CE_417F_4C2C6E9F7402",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2DDA273C_09F0_BB2D_41A3_34D388A64077",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1883FA1B_0239_7871_4175_E19CC5D5E5FF",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_15911B1F_09D0_D4EA_4197_E7FAD8FEE9ED",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_6_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1592FB02_09F0_D4DA_416F_D6D9DA45A92A",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_25293951_0C62_F040_4185_3FD55B13888B",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_5_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2529F951_0C62_F040_4147_82BFA4F6C761",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_37489E52_0C61_B041_415B_77B698DD636F",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_374F8E53_0C61_B047_41A6_5DC3DA27FEF2",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46D8808_FF57_1502_41DE_85F0F54C2131",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46DA808_FF57_1502_41DB_5DE9323643D0",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2526094C_0C62_F040_4169_5EEE28C6237A",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2526C94D_0C62_F040_4196_E87115162426",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_EF1F1D9D_FF49_2F03_41DD_17CFDC83B314",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_3_0.png",
   "width": 560,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E5C35E43_FFCB_2D06_41DD_DD10BAF11EA5",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18857A1C_0239_7877_416E_23CA2C8E9EB8",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_4_0.png",
   "width": 560,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2472D8F4_0279_39B6_417A_8A53CB75B823",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_5_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247298F4_0279_39B6_417E_69D9FE01B00C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1885EA1D_0239_7871_4145_0152AC990E61",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18858A1D_0239_7871_416F_0289D46C3D14",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_15935B1E_09D0_D4EA_4179_204A892872CA",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1592AB1E_09D0_D4EA_419D_72AEF8A0BED3",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1E9E290D_0219_F856_4177_5D5B861AD1D3",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_1E9FD90D_0219_F856_416A_8C8821EE7ABD",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18848A1C_0239_7877_4135_FB5233D400D0",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2520194B_0C62_F040_4171_B4EAF4F95FB6",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2521694C_0C62_F040_417F_9E1C97B1084D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46C6809_FF57_1502_41B3_DE6747219800",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46C2809_FF57_1502_41B5_BEBE2E3FE7D5",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E465080E_FF57_151E_41E9_A9CF9511080D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E465280E_FF57_151E_41E5_DC525ED0598D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_9_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E465C80E_FF57_151E_41D6_55F0941AE15E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_11_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E465880F_FF57_151E_41DE_E248530E5EF7",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E5C51E45_FFCB_2D02_41E9_FF87767A8ED5",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_3_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E5C5DE45_FFCB_2D02_41E6_9EEAB1D4E0A5",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_5_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E5C45E45_FFCB_2D02_41E3_2656395E341F",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247648FC_0279_39B6_417B_69BE74C10EBD",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247788FD_0279_39B6_4180_95FD4E0871A4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_0_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46EF806_FF57_150E_41EB_DD411C21D778",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_1_0.png",
   "width": 480,
   "height": 510,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46EA806_FF57_150E_4177_A47011FCEBA4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46D6807_FF57_150E_41D3_6EA9C85B7B88",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_7_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E46D3808_FF57_1502_41D6_BC7EE7FA4AC7",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_252A994F_0C62_F040_4161_4E698CDBDB55",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_240F78F2_0279_39B2_4177_5CDE1AE45108",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2470C8F3_0279_39B2_4162_82262143A690",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2474D8F5_0279_39B6_417A_51D8183B3E44",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247408F6_0279_39B2_4169_0E488F421C9F",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18814A1A_0239_7873_4156_24EBF7108883",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E464C80F_FF57_151E_41ED_1C8BC1A08470",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_5_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E464E810_FF57_1502_41D0_25615415A6F8",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_7_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_12997C52_09D3_CD7A_4179_1D2590FD0DFD",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_25325955_0C62_F040_4172_39E047378E8B",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_1_0.png",
   "width": 560,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_29717C5B_09F7_CD6A_4197_77A9D346799E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_29719C5C_09F7_CD6E_4154_08CE73AB87FA",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_25511941_0C62_F040_41A5_703B24395552",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E5C3DE44_FFCB_2D02_41B3_7CB3151AD9B9",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_5_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E5C2CE44_FFCB_2D02_41EA_1DD52B8E5958",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_6_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_E8DF3692_FFC9_1D06_41CA_32C96EBD0A15",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_18847A1C_0239_7877_4158_A2D9E7431F6C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2478F8FD_0279_39B6_4174_0AE776432956",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_247878FE_0279_39B2_4178_71100BE1FB95",
 "class": "AnimatedImageResource"
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 60,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/nani_construction_realestate/', '_blank')",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
}],
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getKey": function(key){  return window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "height": "100%",
 "class": "Player"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
