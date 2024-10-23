var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3493801660833997
      },
      "linkHotspots": [
        {
          "yaw": 0.3428850725128445,
          "pitch": -0.27509187549782155,
          "rotation": 7.0685834705770345,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7338525392874367,
          "pitch": -0.07828469092876844,
          "title": "Welcome to Engineering!",
          "text": "yadda yadda"
        },
        {
          "yaw": 2.980820051613696,
          "pitch": 0.03531762585551945,
          "title": "UCC",
          "text": "Text"
        },
        {
          "yaw": -1.9176108923099022,
          "pitch": -0.018459669235900478,
          "title": "Road to NUS<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.457264140006359,
          "pitch": 0.1475904441201248,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0803017595926363,
          "pitch": -0.16173756599287614,
          "title": "Spinelli Coffee Company",
          "text": "Now is Hebrews"
        },
        {
          "yaw": -2.0989059322579884,
          "pitch": 0.01819955468938872,
          "title": "Sufferings",
          "text": "Text"
        },
        {
          "yaw": -3.0556600836122456,
          "pitch": -0.18557167247253403,
          "title": "Into the light",
          "text": ""
        },
        {
          "yaw": 1.4374272129444785,
          "pitch": 0.3350667139856487,
          "title": "Swimming pool",
          "text": ""
        },
        {
          "yaw": 0.9334203296615051,
          "pitch": -0.0019756432656237166,
          "title": "Stress",
          "text": ""
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0551950321595314,
          "pitch": -0.01207620581676494,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.08540290815112073,
          "pitch": 0.034627725097216455,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Faculty of Engineering ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
