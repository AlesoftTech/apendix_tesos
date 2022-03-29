'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cef4590a9ad58006448a6aa34a3e8177",
"index.html": "564256f7cc281c314545d02f7544ef59",
"/": "564256f7cc281c314545d02f7544ef59",
"main.dart.js": "9ba9f5ecc20d9ea36e22aa4bb108734c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c542ef79655e2eca0584dc22528b6e96",
".git/config": "ca439ca9581f1b200da4d025f4eb4779",
".git/objects/59/19ff2e457774fca2543c502bfeaa4272914316": "f90016c93f781171a242114928051f5d",
".git/objects/04/ad3429f89614be346283bb2a233a7db9b6b197": "8f85d5e1218db053a3c97afda1db34db",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/aa0b0f69fb8cfd15e311332d33eb0d69435fe0": "288e4d5cc4e7f88de80db54d45ede1a9",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/a5/2e1458975c73f5c487eb8ba1b7bdf30b22963f": "499c161a107ed46f740fc54680f3d25d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/aba6bfb0eb63f0708593dd194a6fb411feb990": "bf9cff396fa03c2b7f1ed2350056c6dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/8603f07fdd4ad5a9922948c00248110af6e753": "05267a17ef7945c5a37a9b1a25579082",
".git/objects/ca/5cb95119224d9456bec087485631ee76239a89": "93746043c67b3d90c8e3f0d27155e373",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/18/25b09c9c7b72e62bede6e1a90483b7177cb1d9": "403530227c5cf19d6df5bb98da32d3b2",
".git/objects/4b/6ecd74b407739506d8b9645a26556d3d78a8ee": "d160a4698b6880e4baab3d33339146cd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/c3db8f84eec6e20115b5b279e4c94a06a165e8": "edb2b8c7956b437b8c17abb622e83fb9",
".git/objects/45/9ae1324e931e11dedc51452f4b21f8e6037624": "031c3586dfc805a8d9c73685b0e53edd",
".git/objects/73/f62716c416d69e5da1cfd435a5d62f09568d18": "db72ed03f67139ae85e03ce4cf4bec45",
".git/objects/28/6478766d4c1ef20f50801564e728c2915746bf": "73d209a1a6df27d25f39d42289732800",
".git/objects/8a/519acbd8f70361eca8d8c0f92d7fd923f709b0": "2708984ebec9ae3474dc94f10e86b599",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/56ce5c1da939a7600095b80d2752a4b6e50670": "4b3858190e5855c6c5a45bf09ed31035",
".git/objects/36/947d72d15c12f3ab7a842496068ed9b4f18d2c": "641e26fb3f5f471912428c7a5a851d7c",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5e/ce19c78ad8063fa313e92995039400da159a04": "b5848b31c96b0b0eab43be1714f90b0a",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/97/525ddc5cb75610f32a1136d012cb8d8b902f53": "1e9760559d01855fd0211fa4deb7a71b",
".git/objects/97/3a3553248fad6a55a8fbac722aaccaa017a038": "7774baea5b95aabdc84cdfce6ccd38d2",
".git/objects/bf/afc69737aba12c3089a2ac73777ba6e264dd9f": "428a9f4df2fd6aa1765fb9f3e7521aa9",
".git/objects/d3/323e777246a3da3a0ac756afd41ed3adee39b2": "75e5169e8f0cbbf4af0cd43621325d98",
".git/objects/d4/f330de7acfce5e4f6ce81f9cc2f290d8c82caa": "6ac38c1327e29f5013516424ae1a535a",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/aa/8de7f717d334b23069f3e317ca10000722a4b1": "ae8de14c31c9ae6e3e4187d327cb85a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/7aef7a66f2acba27444fea89154589ea22ed26": "c85fad55915a708bf5fb0483cfe28c3c",
".git/objects/e7/72b59c95b9484eb38b332f92eda8acca14c949": "225f025506fe0bd529617386ba559101",
".git/objects/ce/55ee67b35cc905b91284fddbd0dd155bbd8706": "1773bb71b397e59a9462c4b20a9f5d01",
".git/objects/e0/e0ac502b621970704eda8572f22a3e2435a4f0": "dae8866ae5195b17ec6965df10f3bd30",
".git/objects/1e/d13b4eb4d43053b89a3e571ac13e25c5b9eca8": "cbb515f492295649977d30c3741b4800",
".git/objects/84/5c3eaaa288440db7405255d50c426765671a10": "436e52aaa53af4dbf14b284488358f22",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/76/db11c6b484beaa385187ac0555f2310e64a2c4": "e87dd4e822da624952ba53a5cd431323",
".git/objects/76/036e5a0fa699818a6caef2ac1427965eb5e98b": "c768e56764725ac2198c3769f2de2e13",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/49/afcaf80ce0b73cde846be2aca5f9105ad24c48": "2a86ad7f8cf4555ad6f33ec778375916",
".git/objects/2b/fbd45782d60c9efe6643cecae243494e1ef0b7": "1e9fe3fa51efbcabdacf4a067b79390b",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/7f/826a396421320a86bfd7ce5449ac6d5dee88ec": "2d84bc2e3554f8301211086c51a3b05a",
".git/objects/7f/eaff242347283754a27a7dd0ec42945c88c9d9": "f0c8a2fffb18297c07c0e7741f7165b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "375685c601316be298f1c7d5c064ee6d",
".git/logs/refs/heads/main": "00f505a29a544964ade84c4686eba029",
".git/logs/refs/remotes/origin/main": "c3d1873cca862ac30fff9c86c2b43f3e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "16caba8e3c44f04a1849eb283710bc87",
".git/refs/remotes/origin/main": "16caba8e3c44f04a1849eb283710bc87",
".git/index": "239ba5ecaa520237bc1e854f67399cf8",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "c0bcdcbe58cde9cd2dcfeaf4ce400b3a",
"assets/NOTICES": "64c40dcc37c1da73d004bae237b443cd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/tks_q10_graphic.png": "10fda4989c5f07c6e053afa7ff01d625",
"assets/assets/images/armenia_q8_table.png": "2c275631aefa8f39bffce3be52ab6b8e",
"assets/assets/images/armenia_q18_graphic.png": "936d3ba85ceb04eeb40d51071f18c480",
"assets/assets/images/armenia_q14_table.png": "b5ea0d6855ab0568bbb9271635ea272e",
"assets/assets/images/medellin_q2_graphic.png": "4be10d2054ddcbd03d61095d30b43457",
"assets/assets/images/armenia_q21_table.png": "7bf7b84ca742c805035efc1f6decc423",
"assets/assets/images/cali_q15_table.png": "e408c512095a5f9f01efe1d82f83cdfe",
"assets/assets/images/medellin_q7_table.png": "af5ef6a391218267005a6a7962033c01",
"assets/assets/images/armenia_q9_graphic.png": "d716ef5fb5287b3396580f0a1bc58fc1",
"assets/assets/images/tks_q11_table.png": "9bfa9d70cfb20e30641be0be85ae8f6d",
"assets/assets/images/armenia_q5_table.png": "99abfacfd8d9c6dd20e8b7024de6501b",
"assets/assets/images/cali_q7_graphic.png": "3ce956dfd5db8ad55028bc25cdab9a23",
"assets/assets/images/cali_q3_table.png": "4da0a558885ab6cc2c4c9d60262047a0",
"assets/assets/images/armenia_q19_table.png": "2f8f8557566a2930869cb46d80afc3aa",
"assets/assets/images/armenia_q11_graphic.png": "9ab7810b6e45ccac10af05e074f2ea20",
"assets/assets/images/tks_q7_graphic.png": "6a815a2a3571a633429b5f635aa11451",
"assets/assets/images/medellin_q14_table.png": "4bd400f5ecec4f0e3a77ce16c6b4f209",
"assets/assets/images/armenia_q14_graphic.png": "dda5b20dd3f133529606e1440919fc88",
"assets/assets/images/cali_q13_table.png": "5d6b3c2bcb8a46c00eceedf827eebda3",
"assets/assets/images/cali_q2_graphic.png": "babe778d06173f796b40b8af9566913b",
"assets/assets/images/armenia_q5_graphic.png": "7b2342f1e5ef7f80b0a759655887354b",
"assets/assets/images/medellin_q13_graphic.png": "b3d60fc46569c29cc2e7268fbc028501",
"assets/assets/images/cali_q8_table.png": "9a5e650fd28f57b9d4b98dcb1273031a",
"assets/assets/images/armenia_q12_table.png": "7b6264d8d94ad5aefd2cbb00c2dd3af8",
"assets/assets/images/tks_q2_graphic.png": "2615ec9b72719fd3941d94fb876ba8a8",
"assets/assets/images/8.png": "1a640ea7304e90ea0882fb41117b2b67",
"assets/assets/images/medellin_q12_table.png": "e7b5f7e664644941fdb1531e025dec0e",
"assets/assets/images/cali_q5_table.png": "ad9cc92a28b8526ef15f37855aa25441",
"assets/assets/images/armenia_q3_table.png": "fa901add2d6ed0e8e59f80115397a939",
"assets/assets/images/tks_q6_table.png": "c14c783803cce58948f12f0d5f20c848",
"assets/assets/images/medellin_q7_graphic.png": "5c398dd11e2c9cb3cd32ac42fd98e3bc",
"assets/assets/images/9.png": "d327801faaa2898f13433a3e349be899",
"assets/assets/images/cali_q12_graphic.png": "1ed3f9c884a10f03e52b19f2c84ba13a",
"assets/assets/images/medellin_q4_graphic.png": "c6355f734ce7f76e001a1c684c58a21c",
"assets/assets/images/tks_q8_graphic.png": "38eccd92ec156b2bada225c5188836dd",
"assets/assets/images/14.png": "3880fff2fbd026557aa60a78c0d9f0b3",
"assets/assets/images/armenia_q15_table.png": "1e32b614f3602153e593971b53029897",
"assets/assets/images/cali_q11_graphic.png": "0fb4128a626680de0a97af0d1b7ca10d",
"assets/assets/images/armenia_q9_table.png": "8a106d32ad6490210c645152a2dc742a",
"assets/assets/images/cali_q14_table.png": "8e16493db6a9fd1d577fe1a3eff9a1fc",
"assets/assets/images/armenia_q20_table.png": "fa0508fbce79bf2db33f9ae577702cc9",
"assets/assets/images/cali_q8_graphic.png": "b69a11d3542ddffadc59b429c41fde5a",
"assets/assets/images/medellin_q6_table.png": "a48a89741f0a8c449d731861a93b4bb6",
"assets/assets/images/tks_q10_table.png": "31b24be823744a2122e17ae04c4a2df7",
"assets/assets/images/tks_q1_table.png": "ec9cf38e05cc92ab97931fc02826e087",
"assets/assets/images/tks_q1_graphic.png": "14b85b07d39a8d03b4777f512e7ba6c2",
"assets/assets/images/armenia_q18_table.png": "3bb207f0357ce729d0d0f416483a2bc2",
"assets/assets/images/cali_q2_table.png": "a76d167e3f967a3f92b7ae7ec8f86a13",
"assets/assets/images/armenia_q4_table.png": "28a8f2124bf3a65537ac0f3124f5d599",
"assets/assets/images/armenia_q6_graphic.png": "56411a814f196a96b60ebc736c8cc88f",
"assets/assets/images/medellin_q10_graphic.png": "b58c0ac3439b01e58a76a51ce5d4c5ae",
"assets/assets/images/medellin_q15_table.png": "8e80e68880f8276ed64e41e0ad18d736",
"assets/assets/images/armenia_q17_graphic.png": "658d7d67823e735e518187dcbc396d20",
"assets/assets/images/armenia_q20_graphic.png": "87c6f1530486f09ee38d9faed9f1c53a",
"assets/assets/images/medellin_q15_graphic.png": "9b7af0b1e3e317fc76c674ccec1eb30e",
"assets/assets/images/armenia_q3_graphic.png": "09aa0a12273c99818d33e68e4167a0a0",
"assets/assets/images/cali_q12_table.png": "1aeeba6ec6f1785730920bbb26ca3a7c",
"assets/assets/images/12.png": "12ecb60a13474e0a983e67ecdaf649ed",
"assets/assets/images/tks_q4_graphic.png": "fbb823e9cc8bc8f732abdeefa567291f",
"assets/assets/images/medellin_q8_graphic.png": "0ad1951120922355a1e76eaca5ac3e60",
"assets/assets/images/armenia_q13_table.png": "6f73cda50f9620668e263d3d5c4a395c",
"assets/assets/images/armenia_q12_graphic.png": "76b3a78d64ebe84781053fec890a3d54",
"assets/assets/images/13.png": "14be21710bb9eee7b26b3111deccb380",
"assets/assets/images/cali_q4_graphic.png": "dc3dd92c342e3162459ab39d45a42e5f",
"assets/assets/images/cali_q9_table.png": "ac2e07b9aa6eb9d2e4569e1645780d2b",
"assets/assets/images/medellin_q13_table.png": "36aceb6e29118391ebd568e3b920bd98",
"assets/assets/images/11.png": "20b9be254c8962276f8efff43c0a6a0e",
"assets/assets/images/cali_q14_graphic.png": "d1b54a224daf0ed5455420a40edc8ff5",
"assets/assets/images/tks_q7_table.png": "e0d8ee51a2904d1a0838480617965bf4",
"assets/assets/images/10.png": "20b9be254c8962276f8efff43c0a6a0e",
"assets/assets/images/tks_q13_graphic.png": "27992a81195b32ba751e732e13473efd",
"assets/assets/images/armenia_q2_table.png": "0887affb2c87aed753f8cbb051db13c3",
"assets/assets/images/cali_q4_table.png": "de75cb88691e13ec8132d6c7fe629518",
"assets/assets/images/medellin_q5_table.png": "6d518cad89c2cb4e71e0868e9188701b",
"assets/assets/images/cali_q13_graphic.png": "a8d56fbedf0d994025500a1c0f302fcd",
"assets/assets/images/medellin_q6_graphic.png": "27cccca706446695c86f6782dc212994",
"assets/assets/images/tks_q13_table.png": "4b4e863a0a37dc7b56ab8e4d70f52fa5",
"assets/assets/images/protesoswhite.png": "6c0fa772c0a6fdc273c93bbf2b2754e3",
"assets/assets/images/armenia_q16_table.png": "12651ef67b290ad24366701b4ca78695",
"assets/assets/images/armenia_q4_graphic.png": "2fab93ea082ba0d214a28c25a2535205",
"assets/assets/images/medellin_q12_graphic.png": "ab9b5f2d20d7fa72798a12c4f5418ff3",
"assets/assets/images/tks_q3_graphic.png": "6c47dd1dca6ddf22c1fbef657f737a44",
"assets/assets/images/medellin_q8_table.png": "a0bfeabd3c77cc15f9f291f1bc53c576",
"assets/assets/images/armenia_q7_table.png": "93f50af7b06aad26798747897fac7031",
"assets/assets/images/armenia_q15_graphic.png": "85bd722ff13fed96b040befd3b132c51",
"assets/assets/images/cali_q3_graphic.png": "fd3e9805299d42f58cb9b717539644de",
"assets/assets/images/tks_q2_table.png": "a2312935e00db854a503f01210556d3e",
"assets/assets/images/tks_q6_graphic.png": "9aa6b914ea0a45f397c7c4ee8118d750",
"assets/assets/images/armenia_q10_table.png": "3b6585206b83e7a29b6db6beb37e2eae",
"assets/assets/images/tks_q9_table.png": "29414e00cc67dd9342ebd6b9c53cec19",
"assets/assets/images/12Table.png": "f0100183470ff44608727bcc0a6b7256",
"assets/assets/images/13Table.png": "73267b3c8d3ce0db27c824ecc31f4426",
"assets/assets/images/armenia_q22_graphic.png": "6ae5048b4e2c6b3f35be834d02794c4f",
"assets/assets/images/cali_q6_graphic.png": "63775d8885d20c030d8bd648a82a2936",
"assets/assets/images/armenia_q10_graphic.png": "2b965d8f4a463b73251b09922544adc7",
"assets/assets/images/medellin_q3_table.png": "a0bc220c6cfdd739a85a3ca9600f99c5",
"assets/assets/images/cali_q11_table.png": "27f35720077ecebedf270be04fdebad6",
"assets/assets/images/medellin_q3_graphic.png": "2048f351914e2c68fa64b57bc20fb535",
"assets/assets/images/cali_q7_table.png": "846b157b2f61515d43507518da110476",
"assets/assets/images/tks_q4_table.png": "eee4a2c4297ba4d70a49bcec4d85e11b",
"assets/assets/images/armenia_q8_graphic.png": "e3747b493df0805962f5018e0d9e2d98",
"assets/assets/images/location.png": "3e088effd3e2bd0f93a3272336a26eef",
"assets/assets/images/tks_q11_graphic.png": "c0997ae3eea5a61855c2fdc929dd6948",
"assets/assets/images/medellin_q10_table.png": "a25c7a30d1eb2349f37ae1bba5d56967",
"assets/assets/images/armenia_q19_graphic.png": "0f98a66742e3bd55450b2bc3899066c8",
"assets/assets/images/medellin_q4_table.png": "582a6e63e5b16046860470ec808ad830",
"assets/assets/images/armenia_q22_table.png": "08929e89d038b57625efa2bc7203c61d",
"assets/assets/images/4.png": "5b99897bfcd859f67db827281856189d",
"assets/assets/images/tks_q12_table.png": "1f1be034eb97f840571c9785e9573192",
"assets/assets/images/14Table.png": "12ae577dea7e234135e5e7b5d5c50c22",
"assets/assets/images/tks_q12_graphic.png": "e7425ec7c4dde8834c0d55438c43fd90",
"assets/assets/images/armenia_q17_table.png": "847fafc1cad76980ea8deea1da39d7f3",
"assets/assets/images/tesos%2520white.png": "346b408db0abc69f60a2e9a2b7a1f92d",
"assets/assets/images/5.png": "c189decf8bedf97c11f0f35d3f5eea51",
"assets/assets/images/cali_q15_graphic.png": "2f15dadd0be8affea398f5f57000159d",
"assets/assets/images/medellin_q9_table.png": "410ef3392dccd17265ac2b19826622d0",
"assets/assets/images/armenia_q13_graphic.png": "d0db848121997c30e5044895aa0b688d",
"assets/assets/images/7.png": "9635334a095ced739947b65aacd2361a",
"assets/assets/images/cali_q5_graphic.png": "4c3e8858a56aaac1060aea757507b470",
"assets/assets/images/isotipoAzul.png": "690b2cbad51e837f67e2784e8b535443",
"assets/assets/images/tks_q3_table.png": "c5744e8fe490864d7c6dc0401dfdcc83",
"assets/assets/images/armenia_q21_graphic.png": "b830a412b370ca7d7e199dca4f73d6d1",
"assets/assets/images/medellin_q14_graphic.png": "c87bbc6930549732a0268fb68ce7e049",
"assets/assets/images/armenia_q2_graphic.png": "6f5ab70950425afbb954a48f174913ab",
"assets/assets/images/6.png": "11b6d1d72bfd637b054c1d74d129c71c",
"assets/assets/images/armenia_q6_table.png": "8879ee61dcaafbe4035a5e6c6c19bf48",
"assets/assets/images/medellin_q9_graphic.png": "06a9dbfca82149b38c5ee989ea726960",
"assets/assets/images/tks_q5_graphic.png": "b93a01a2338c50582f6780af3c7b1824",
"assets/assets/images/tks_q8_table.png": "093c4d11388e94ad7f2971ff0f3c0e8e",
"assets/assets/images/armenia_q11_table.png": "4717e10e89475475e364edf252c129f9",
"assets/assets/images/2.png": "4975316b5e147c9728c7ef9ae8e38e73",
"assets/assets/images/tesosazul.png": "0444058b8dda0082312002d6f6608cf1",
"assets/assets/images/armenia_q16_graphic.png": "32d68c5bcfa902a81505d0830a66399e",
"assets/assets/images/medellin_q2_table.png": "743e6c39d912847630bd2e15c96f586b",
"assets/assets/images/cali_q10_table.png": "7521fb5ed79b2c17204c38ff5421e18b",
"assets/assets/images/3.png": "bd964f96051d5d2535247f63bb7d2ceb",
"assets/assets/images/armenia_q7_graphic.png": "1b98d8e23fa4597aa28b8fc24e217e77",
"assets/assets/images/medellin_q11_graphic.png": "d078b6870212f18679caa2237f9590c2",
"assets/assets/images/tks_q5_table.png": "c1b9b2204045ce9d8a11d166d8f9d6b1",
"assets/assets/images/cali_q9_graphic.png": "7002a8fecd4a26e8860c2b36442a6d3b",
"assets/assets/images/1.png": "ddbbef809cffc2109bf531b0ae696fa2",
"assets/assets/images/cali_q6_table.png": "e903810fdd54dee932ce57fc043359c4",
"assets/assets/images/cali_q10_graphic.png": "9d7e0a147f07d5812ddd7ea4c23c57de",
"assets/assets/images/medellin_q11_table.png": "be966b1d7164488c67b1855528d3dd11",
"assets/assets/images/tks_q9_graphic.png": "a623c70c25a70573055ebff8f170ae82",
"assets/assets/images/medellin_q5_graphic.png": "8c9e100a10bafcaecc8218450c825531"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
