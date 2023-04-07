/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3d6d59c0114dacdfda04449cd059ba27"
  },
  {
    "url": "a320ttm/31/32/amm313200.html",
    "revision": "4104988ba6f74858f72d6a23a599af7d"
  },
  {
    "url": "a320ttm/31/index.html",
    "revision": "0d3fb6e13cc9728f38c452390cce1bbe"
  },
  {
    "url": "airbus/airbusabbreviations.html",
    "revision": "6a0b316706c13252155d29fd769e73f3"
  },
  {
    "url": "airbus/bite.html",
    "revision": "fb37088767c3030d09a340257521c22f"
  },
  {
    "url": "assets/css/0.styles.5995f1ae.css",
    "revision": "566674b27f1d22a88494f702ea57891c"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/330.b3207b52.jpg",
    "revision": "b3207b52878792937a3ac2cfc6cf2802"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/P31_21_00_12800.fd74b849.png",
    "revision": "fd74b84909ff2d715986e7a656df82fb"
  },
  {
    "url": "assets/img/P31_21_00_19000.f72cc1c0.png",
    "revision": "f72cc1c0df40a7a891168aff96e48863"
  },
  {
    "url": "assets/img/P31_32_00_16000.4008fa9c.png",
    "revision": "4008fa9c50dd3193123b0b9a7d070669"
  },
  {
    "url": "assets/js/1.6c79a2e1.js",
    "revision": "f57178feadb1ebe7f485dfdf3d09331b"
  },
  {
    "url": "assets/js/10.290972c9.js",
    "revision": "8080cb14559d582ad91b49f6d480ccb4"
  },
  {
    "url": "assets/js/11.2a5e72fb.js",
    "revision": "b525b5d1faf27cad03011b03be5223e8"
  },
  {
    "url": "assets/js/12.d35d0197.js",
    "revision": "c52b0cb59810ed06fdb8ebd0c22ff688"
  },
  {
    "url": "assets/js/13.2c866ff7.js",
    "revision": "d2519df3438d890be38f95a06a10d5e7"
  },
  {
    "url": "assets/js/14.ee541801.js",
    "revision": "e67b625724101f82bce64a02a414ba58"
  },
  {
    "url": "assets/js/15.ef1c9152.js",
    "revision": "83a014f16e1f1b657b575b7ce5526f6f"
  },
  {
    "url": "assets/js/16.5a01dd4d.js",
    "revision": "5927a70f5c89c8db89c5e34f0750454c"
  },
  {
    "url": "assets/js/17.a004d16d.js",
    "revision": "663b08f51a5de113e8cf4e8e530f1009"
  },
  {
    "url": "assets/js/3.44800a8a.js",
    "revision": "83521eae35b43310e6f6328ae9762ec1"
  },
  {
    "url": "assets/js/4.918b6b47.js",
    "revision": "a8f517199af53220d8b4744e97a5dc30"
  },
  {
    "url": "assets/js/5.8aa49ca2.js",
    "revision": "28252d0f5aac77bfe4da0d35c37add26"
  },
  {
    "url": "assets/js/6.268beac8.js",
    "revision": "b19d851d88dd92ceec0a5194bd6be11e"
  },
  {
    "url": "assets/js/7.88b88af5.js",
    "revision": "da40ab6c6359c98888bff4384a29377b"
  },
  {
    "url": "assets/js/8.ef8af529.js",
    "revision": "706f123b265d3911b0584e1befa868a1"
  },
  {
    "url": "assets/js/9.636ee5bc.js",
    "revision": "f21b22143f34f9d917ab28291804edb1"
  },
  {
    "url": "assets/js/app.6be36d4d.js",
    "revision": "8b9036464265a4132c616710a5eb5276"
  },
  {
    "url": "avatar.jpg",
    "revision": "8fc483a63db7c89a1d5ce74be9f9f365"
  },
  {
    "url": "categories/A320FM-ATA31/index.html",
    "revision": "569af553c89261032bf67a31bfa17c0f"
  },
  {
    "url": "categories/index.html",
    "revision": "6e020b88afdf0255eba1c333f3930d53"
  },
  {
    "url": "categories/空客/index.html",
    "revision": "3b0b11b348542a610cc578b3a357975b"
  },
  {
    "url": "ge-ren-jian-jie/ge-ren-jian-jie.html",
    "revision": "54cbdf9841c80ce8c6f28143e0b8f157"
  },
  {
    "url": "index.html",
    "revision": "5b67cb035aeed8f4e3d910076aa2aba1"
  },
  {
    "url": "tag/A320FM/index.html",
    "revision": "721a4d13dff13a59e1f848e6e35181dc"
  },
  {
    "url": "tag/index.html",
    "revision": "426856fe3b4347d4f08427efc4c7aa1d"
  },
  {
    "url": "tag/指示/记录系统/index.html",
    "revision": "8b8bf461c4f830b630813df3ceb9e412"
  },
  {
    "url": "tag/缩写/index.html",
    "revision": "ad85126b55df336fae119822fdf13c77"
  },
  {
    "url": "timeline/index.html",
    "revision": "849cd38abf877bc6d0a2e8f4f61d4e5e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
