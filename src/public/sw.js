if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"oJLvZVNjKCrD5prMEQsbA"},{url:"/_next/static/chunks/0f8f667f4806a769489da250f7ca23b166e33fed.b691eb91446a67c4f405.js",revision:"a31bb98e5b6bc17d5f29a97c945ce1f7"},{url:"/_next/static/chunks/38.36de89c5ef7f949723c0.js",revision:"b0931125408604ca26e30fc79a411a1f"},{url:"/_next/static/chunks/39.4ab8b4c1583abf4b6827.js",revision:"c458bb49bbdc10c3fba90d25d06ef8d7"},{url:"/_next/static/chunks/39ef8e8e4cc33f88efa9fa263f80bdd4ab587f0d.cee58de2edfbc760b179.js",revision:"1ed5a59d8afbf20dc6d886e700c11c81"},{url:"/_next/static/chunks/3f6d22f79c7a5f51308e3efdf241597682481acf.0be11941576443856279.js",revision:"81604c145ffa61883cdc673ef0ee9779"},{url:"/_next/static/chunks/64a5c902a0a32e8692e7692274438f57e8502fa3.37f522c296b2724a955e.js",revision:"52aba50222d71e68f989200db1ada36e"},{url:"/_next/static/chunks/6c4da83ab37dfe877beb28a2114736c98d5e9922.14e7b4136fc01ab9c435.js",revision:"93344d3b5854ab0d8c700ded2078cd11"},{url:"/_next/static/chunks/782195252ab29759d6d17c25633a1284e7136573.63d1822194f5a6ba083b.js",revision:"f1eafb9acc7eb787b1aed40cd3cef50b"},{url:"/_next/static/chunks/8e71f73457e4556b5a806707c5bb652d71819598.34fb4d195fcd27b48a94.js",revision:"78d7b232e8f53002625a25a88b9e3a15"},{url:"/_next/static/chunks/8edd97df90f06120db650efea539391bb53a2eb8.243cdd19e79a1548147c.js",revision:"3bfc8d059c2a6bfefe7d066897b02504"},{url:"/_next/static/chunks/commons.0a7274c3d341073ea106.js",revision:"f72423664cba8364266bbce279fd9079"},{url:"/_next/static/chunks/e27b2ac2648387f62565839027caae849947dc4c.d97ff42a86fd10f18f33.js",revision:"15b3a57ca3fbab6639b4e3e74243ab26"},{url:"/_next/static/chunks/eed8c017be27d1fbed085864c157270e05fa7f39.047f907a51444e59d23a.js",revision:"cc2b3e988337a31a8ebff38176906055"},{url:"/_next/static/chunks/framework.dcb13c6c2896e64b7ea5.js",revision:"a37d65686e62f5f64a0d2955e91ea690"},{url:"/_next/static/chunks/polyfills-core-js.1ddf99f133f35800e692.js",revision:"7ddd05902a78c2cb70dc449f0fad178d"},{url:"/_next/static/chunks/polyfills-css-shim.a0e477e6817ceeccef1d.js",revision:"e335c4cab41748f24d7e819211da7288"},{url:"/_next/static/chunks/polyfills-dom.515820f2007424892dc3.js",revision:"f11bfde2bae208fe8031d6b2dd69da41"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/_buildManifest.js",revision:"0cae913ea768f575f9a34e930cfc6123"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/404.js",revision:"8a80c29b1addddca4d361752549ff705"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/_app.js",revision:"40f2a0df50c00aa16969565f50510df1"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/_error.js",revision:"0653906197ee3851aa3e192f28f96f63"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/catchcalc.js",revision:"9d1ab61ac2965bd7aba002df8155088b"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/contact.js",revision:"0017357d0dd5f35114059db0db17ac29"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/convertbot.js",revision:"fdd3571cbc5a1df0b5ac6dcd4e55f49b"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/converter.js",revision:"d738f4c57873edc2933e0d737fcac4b6"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/create-djsbot.js",revision:"7eef626b64e9d8bdc492fb0da165ba74"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/crypto.js",revision:"65acab20cf97462cc6d779827ab925ef"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/dexa.js",revision:"12b12aad801035a44b10e774c3843efd"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/graphql-pokemon.js",revision:"5c40c2e5cdb0822f0f67a5d77417ee3e"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/index.js",revision:"1fbb72ceb66d2e9dfd1765addd132265"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/querystring.js",revision:"56ca212b9f847a3d43fffbe6710a4fb2"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/ribbon.js",revision:"885735996af61ef946eea4f179903b91"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/seedchecker.js",revision:"0e3060baa5e6bb3063880c7086cbdf20"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/skyra.js",revision:"bd761c21f35630c0bf71a7bf2af846c3"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/tava.js",revision:"838b1661810ea52449a3fae93c410895"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/unescape.js",revision:"d7ecead42bb50f5d44b901aab5400dd1"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/yamlreader.js",revision:"2a6df970d62e154e1a01248b35f7c5ee"},{url:"/_next/static/oJLvZVNjKCrD5prMEQsbA/pages/zalgo.js",revision:"ae52892075d16520e7cb06cc81bc1647"},{url:"/_next/static/runtime/main-017c3e7b73ae1a4c3562.js",revision:"3a167b80425fa8d39d1b5843e036261c"},{url:"/_next/static/runtime/polyfills-e96690649d0f0342106b.js",revision:"aefd3c687d62e3e2f1ac0d28dcdfc708"},{url:"/_next/static/runtime/webpack-2aef6daf2adf413aae38.js",revision:"dfd39c08eb54eda68f564d9116485767"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
