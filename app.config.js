 module.exports = {
    expo : {
    name : "Dizlify",
    slug : "dizlify",
    version : "2.0.8",
    scheme : "dizlify",
    icon: "./assets/logo.png",
    splash: {
    image : "./assets/spalesh-icon.png",
    resizeMode : "contain",
    backgroundColor: "#000000"
    },    
    android: {
      package: "com.Dizlify.app",
      softwareKeyboardLayoutMode : "pan",
      googleServicesFile: process.env.GoogleServices || "./google_services.json",
      // "googleServicesFile":  "/credentials/android/google-services.json",

      permissions: [
        "INTERNET",
      ],
      versionCode: 36,

      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#FFFFFF"
      },
      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [
               {
                 scheme: "dizlify"
            }
          ],
          
          category: [
            "BROWSABLE",
            "DEFAULT"
          ]
        },
         {
          action: "VIEW",
          data: [
            {
              scheme: "https",
              host: "dizlifywebsite.chottu.link",
              pathPrefix: "/"
            }
          ],
          category: ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    ios: {
      bundleIdentifier: "com.Dizlify.app",
      buildNumber: "1",
      supportsTablet: true,
      icon: "./assets/logo.png",
     infoPlist: {
        ITSAppUsesNonExemptEncryption: false
      }
    },
    web: {
      favicon: "./assets/logo.png",
      bundler: "metro", 
      output: "static"
    },
    plugins: [
      "expo-router",
      "expo-web-browser",
       ["./withNotificationColorFix"],
      [
        "expo-video",
        {
          "supportsBackgroundPlayback": true,
          "supportsPictureInPicture": true
        }
    ],
    
      [
        "expo-notifications",
        {
          icon: "./assets/logo.png",
          color: "#ffffff"
        }
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/spalesh-icon.png",
          resizeMode: "contain",
          backgroundColor: "#000000",
          dark: {
            backgroundColor: "#000000"
          }
        }
      ],
      "expo-font",
      "expo-localization"
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    },
    owner: "dizlify-inc",
    extra: {
      router: {},
      eas: {
        projectId: "275e9bb4-c297-4750-9427-57bb6ea5637d"
      }
    }
  }  
}
