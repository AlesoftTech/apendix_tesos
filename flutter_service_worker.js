'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cef4590a9ad58006448a6aa34a3e8177",
"index.html": "afb1b409e99884e4cbba6a2eb55557b5",
"/": "afb1b409e99884e4cbba6a2eb55557b5",
"main.dart.js": "dbca78b5bb4fbb28bbce7118d5b103ae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c542ef79655e2eca0584dc22528b6e96",
".git/config": "ca439ca9581f1b200da4d025f4eb4779",
".git/objects/95/8834c5baa98ba9089e528c1dcaceb9efa95c2f": "126ece63cd1662d70551c47bbdd92134",
".git/objects/59/19ff2e457774fca2543c502bfeaa4272914316": "f90016c93f781171a242114928051f5d",
".git/objects/0c/ddf025842f89f78e44661f3992a814fe129c2b": "4f31effc6b9dc7491d5ac29457b34404",
".git/objects/50/1756a0eba3e87422e3635c6633f9fe6889fd07": "76e0d44e6b0334d97e716fdafe41589d",
".git/objects/3b/aa7b775cb71fa182bbca0ef3a3d190b17c2432": "c563a5a2bca4130049f0e231539db2ff",
".git/objects/03/8c50eeab5638a797e5c665939a1e1882fb5ed7": "c5b425ab44eadae6d3bb68775fe747ab",
".git/objects/9b/75bf0c1983074dfda9be2951dccfb6fbacb96b": "7f097c23f82ad13cf4f8f47b5887e5ef",
".git/objects/04/ad3429f89614be346283bb2a233a7db9b6b197": "8f85d5e1218db053a3c97afda1db34db",
".git/objects/6a/ef91c385842c3a808b8e96af9570d6b5be5f09": "0cc481e7cf44f5fa11040237ee6d2577",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/aa0b0f69fb8cfd15e311332d33eb0d69435fe0": "288e4d5cc4e7f88de80db54d45ede1a9",
".git/objects/69/44b386afde3139032354e8bc3c87eefd5bff2d": "f8431b8b9656b8fb49d29618b4785f77",
".git/objects/3c/1b596877d15191c15db3d68a5422c675cb159c": "a623ab91688328639b9762f93aae8b87",
".git/objects/3c/5bb127d3adb5352382cc7bff273ed3fd56b0e0": "f5a94a930c1b385671a674ed77286e19",
".git/objects/3c/d5357f12bc72bbeda694a6b6fa71bd7eabc654": "e5e2ffe4c949c8f8245d0e0f1e5b7fa7",
".git/objects/56/2d659b18312b90dff8753789cd340159f5be34": "6ff89445ec0b6f3f65471db27257f231",
".git/objects/51/ce4338655cb0ac6e2237b40cdce0c8193c0a91": "3db1556c07d81e4b6880353b21ac3168",
".git/objects/58/8138fac0e4e0b88351dbb656d584d8baaf326a": "ec719e6008f00d04c054a7f81ff4a37b",
".git/objects/0b/962803ebbaca7faa1623f946dec303bde36f6c": "d2af9775fffcdd3e0b6ed1e07d2fedc3",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/5a/46a2eca30d33a439b1f3f912472833396a3e08": "5b2e7aad2384ef8fcc9a479b70869020",
".git/objects/5f/608da3743fc45f0443b6b4f938e3526361986b": "586333d839f7d27c5ba3566fb377751c",
".git/objects/33/0ff0f591b74ce7ac9735943614a9ea2b9e8ea2": "03afd899c633d7ad832c7fa70be46ce6",
".git/objects/05/52d89969f7bf95b3413eb80402da0cc89499bd": "d6aeca705b9280a79765f5b0a43c0d3d",
".git/objects/9c/682ba4ef936375e8795a09fc8591b7136c9389": "9172561ce5970d0d4ebe20d09670798c",
".git/objects/a4/024deb3c05db24499e671fc19c02342451bbd1": "cf2357b5026c5ef0072e1644fb197d00",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b2/b798b464628de25e8ba1e647d92fbccc9f0627": "f6d64a8232d1034ad88c52faf0d1e657",
".git/objects/ad/c6038553a1362be0bb606bf9e4193446ee6367": "b4f706a59fcb2a8dff655ca6bffdf8f4",
".git/objects/bb/c4d76a11bbe6523bad5bacbe87c934bdd58c4c": "0363d6d34212e2ae5c7cb6600078cf12",
".git/objects/bb/5e9c84c7a9cb12aac24791c289e3ad5fcb1d05": "3b5edad228c3ba1d8c793716a69d365b",
".git/objects/d0/a5d9df4319e033f0e0abab5c8c14ff924ae72e": "5b455169356569eba63b259aac926d7f",
".git/objects/da/07f2095cc97791f13d190e3dc3c22e6907fffc": "81e6a48e4c47c152591ff12e82f207db",
".git/objects/b4/5453bf7627917626713da66d6062d82491480c": "bc696441e07346fa5130432f7d0031be",
".git/objects/a5/2e1458975c73f5c487eb8ba1b7bdf30b22963f": "499c161a107ed46f740fc54680f3d25d",
".git/objects/bd/3a969e1f0024d0c7e62e60c79baf59a36c54b7": "e03e5f2dfc74c6e8043f55c62b242468",
".git/objects/bd/5636bb084f821436f96b63a23ca5e77b4a22f2": "e0f1c69557d1502eeabcded96ed477d8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/aba6bfb0eb63f0708593dd194a6fb411feb990": "bf9cff396fa03c2b7f1ed2350056c6dd",
".git/objects/ab/45a75d0618d2163f6131591b58e7b86ad471e1": "3abf1a970b4d65f4e12d482255503993",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/58651c03aa9f7a1411fcb9f5ba5278ecc03227": "abf1375cd024ba1ac491701a7e59ab02",
".git/objects/eb/d75ca3142f6b751431973361fa8634c0c7b052": "f4e4e873219f35660a85009329503996",
".git/objects/ee/21d5488604d33ab2ff2d78774c45a5b8fc40f8": "ea06b6f17e239a9b3f5f1b3a0b4032ef",
".git/objects/c9/3b035522340465190abf21021281501aead965": "d12c6ced1ff16d03323853c7b64658ce",
".git/objects/c9/d103b2159c0b33b2f45df8edf947fe954f2c38": "57e196fad446dc52879af6c8f6f0dec2",
".git/objects/fd/5b84d2f91c89107605d488fbdd502e0c2ea393": "9791bd960c391e5895a809ca9dd714ea",
".git/objects/f2/60137caf9b06ec6d945ade648368de71361f46": "c9421b44689ec12a77d22ec7ace0a25e",
".git/objects/f2/8603f07fdd4ad5a9922948c00248110af6e753": "05267a17ef7945c5a37a9b1a25579082",
".git/objects/f2/8684fcd5d3cc761d9ef94ab930706b14c5ad5d": "bb24d0d1bab936621a398070edd9d005",
".git/objects/f5/3516ecb79692dde50cbb62b9412fe71d9b9d8d": "e43a5a9d37fdfcabbcbe9b3b3a9b826b",
".git/objects/ca/5cb95119224d9456bec087485631ee76239a89": "93746043c67b3d90c8e3f0d27155e373",
".git/objects/ca/02f78a3327dba10fe997a8e5571ddb3545b190": "47a7727da7e900671f7a7d9f5daf47e2",
".git/objects/e4/4e20fa5f4c62137331ad9d606f3f3bb0af8232": "5ef76dba6d4624b9beb773b195a0e037",
".git/objects/c8/1699903cb24ab1e08008ac5c128545885f6612": "310c267952e88dad1ef8c0046ca71cf4",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fb/c17695a8a58101c556ac05a386fe91127911b4": "72731189515b303cfa9e85dc179bd5c0",
".git/objects/ed/2a5b591d3006a356ef87ded635a4788805b5d6": "c8e1e3858e74f1ceacdcb1675e75330d",
".git/objects/c1/24457bea35c3bc0c992257689d16f0aa433db6": "19f33a09304b54d163d211800fce0a31",
".git/objects/c6/af5e2c3cda45b2bd37fdcc5d2cc4c8985e122c": "791d34ebff21eb391c9c464e58ba5327",
".git/objects/c6/9e79f224b1f6382c5963be42fcbce55f246908": "7e6db4d465cdb82d04954077ea4bd43e",
".git/objects/ec/d5bcaa9ab67e4a23ff554dbb8841e687c95053": "a9ffc50bf3dd63e62d9e9d349b79c5e6",
".git/objects/18/25b09c9c7b72e62bede6e1a90483b7177cb1d9": "403530227c5cf19d6df5bb98da32d3b2",
".git/objects/18/993327c41204342d246f70ea20b0f92adab0b4": "815ee2e7e9be6ad734ea6abb6660c61e",
".git/objects/27/121523850994ef0a83dc2f749def9711207ec6": "cba0f2cca4efd53e775a05e10dea525e",
".git/objects/27/7909a50b891d98e2e529be04c30f4c301b70be": "8965468c22e0c8409ee99fdb83272fff",
".git/objects/4b/6ecd74b407739506d8b9645a26556d3d78a8ee": "d160a4698b6880e4baab3d33339146cd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/869f3b0ff25cd587e6edb6080c80d2480ea564": "c071a4667d82ecb0b1a84c7818aa7ff9",
".git/objects/11/c3db8f84eec6e20115b5b279e4c94a06a165e8": "edb2b8c7956b437b8c17abb622e83fb9",
".git/objects/16/1949f094a47e6652aa3a528a576b5cd5890982": "c75db57867ebb2b293369fe3be4a00a6",
".git/objects/16/b3352c09957572d19b714d674267ba7f036f78": "0826daf65074a19a99f60fe0440c596b",
".git/objects/42/33817cf90fc185cec5412b9e5676d2ccd7c682": "2981df8b96ebd04c681e7ef73159286b",
".git/objects/45/9ae1324e931e11dedc51452f4b21f8e6037624": "031c3586dfc805a8d9c73685b0e53edd",
".git/objects/73/f62716c416d69e5da1cfd435a5d62f09568d18": "db72ed03f67139ae85e03ce4cf4bec45",
".git/objects/87/be6e7f39ffca750dead91b32d83a011e11940f": "2111a26c89e82f89ba539ca89ee8dd71",
".git/objects/74/71d755641e5185e25894b201dbece59354b481": "e2f1a54baafb075b0661cbf08a7c231e",
".git/objects/28/de77ea409b1c4e37de36dcf9dda893c9ecc533": "e2ee4aa65974ecf6e4546ce1fb27aa7d",
".git/objects/28/6478766d4c1ef20f50801564e728c2915746bf": "73d209a1a6df27d25f39d42289732800",
".git/objects/28/167b3a0bbc399d3e7c0b3e3078b09f53f5ac3b": "c5ac4000faa5cd3241a559b2510092e0",
".git/objects/8a/519acbd8f70361eca8d8c0f92d7fd923f709b0": "2708984ebec9ae3474dc94f10e86b599",
".git/objects/8a/458f8ee1f38220b8822d16fd92a547ea57e17a": "101b2f99f3fc6d6e14bf98ebd44f5f45",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1b15c54975dbf360130d840c18de12032d0fd6": "32c4bc42eb112b9479c851bdc677cabf",
".git/objects/19/eff3cface24f3d8d622da58d7cd10a9e7ac1d9": "56943282f145160506a566aef2abaac6",
".git/objects/4c/f4209496ff30d926aff23f12e14d1ae75cb87c": "7506070e34c279ffd81a4ae09be968b6",
".git/objects/86/b5c7a928ee35d5942269b494cba5b4e7bca687": "8633d88be73a651e353c85b628cdf327",
".git/objects/44/f0331c133454d97a2bbee85869966075b7c20f": "ca13037c98369515cd70486682a0795e",
".git/objects/44/81bec2a78f3a3dc1cd5e105a4440171fa48dde": "6f8318546136d826605dbc88f69add82",
".git/objects/2a/f7ca4e0da6bbfd785446a7a1e7cd75b565a466": "301e70c4733d5ec1e14645dddd885d02",
".git/objects/2f/ee6840c432bd9418f686f658eeda02d33460a1": "f36aceff74d6ff76fb705f0da2331266",
".git/objects/2f/1834592cdcbe05ac5cbd051f603b0373c388a1": "1bfc9cfffeb92b74fba87fc69087aab6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/846cfa3e4f7656c3db4436f3f4eef03d72b9da": "61ce2b58adb077382a55a114abf0a8eb",
".git/objects/00/946ccb710c717b5d034344d89016f33f3a9d85": "be6d72cd83ec747649298002e2e1b68c",
".git/objects/00/11cf3d5a24b03aa00cede29f1b64b88e4893f7": "c330f65c17731e5053c8cdc0a712f95a",
".git/objects/6e/cf4adc4bb797d33aab61a908e37cd1718e4e07": "d4c4d1621fb92bbfdb9f434ca52a2685",
".git/objects/9a/66368a2d132fb067846a9864aa55bb2dbe35e8": "37fa08457e7d6619c871fdd000cab792",
".git/objects/9a/56ce5c1da939a7600095b80d2752a4b6e50670": "4b3858190e5855c6c5a45bf09ed31035",
".git/objects/36/947d72d15c12f3ab7a842496068ed9b4f18d2c": "641e26fb3f5f471912428c7a5a851d7c",
".git/objects/5c/1273dafc69846500f000d5f4f2205c5dec0100": "813eb598087ecd2866088de30c5cd0c0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/93eea5e042bb173f32991a78f2a151a0d846ae": "fb83387998caa5b6281500dfaa425ceb",
".git/objects/5d/ba05d8a97883572fc48fb32b29e483413e1907": "7ccc73a7573c2e6dc2e91e9ae263a59d",
".git/objects/91/43e2fb060485d81695e1f64ae5f3b9efd5d319": "b35028acb962fe245a4bf967837b602c",
".git/objects/3a/e59f87ea0b47334d2e4aa89494096628941fec": "1b9e2849da42674d3335583f1eec8995",
".git/objects/3f/29e750d8f107b42708203294ed5d92aacf1965": "f0805b5d73e6ba6b6259c0ea84483eac",
".git/objects/30/15dc87afbfaf156251d9e64e90896655bdd34b": "a098c7ebcf9afe40652cd03062bc4a39",
".git/objects/5e/ce19c78ad8063fa313e92995039400da159a04": "b5848b31c96b0b0eab43be1714f90b0a",
".git/objects/5e/36eb1222b955d10ab06b618692c81a73e364d4": "82a82fb13ad6efa1ee69250b6f869f22",
".git/objects/5b/02008b9a00acb90106f3bbeb548c24efe4a113": "e0f42379771bfc0117452ab3d07f6a52",
".git/objects/5b/51b05b9d26c59a4f71c0eabbc8def3214ede41": "12bd73ecc79ccd661a7f7f7a1121189b",
".git/objects/37/24ae45ce16c892291b30d1a8b7289d8ff9d250": "070a884c5c07c774bc53e62149a419bf",
".git/objects/08/89ff951c00dd66f507f836736820396b9d98c5": "684a5cf24e276f34204a79d403bceeb8",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/97/525ddc5cb75610f32a1136d012cb8d8b902f53": "1e9760559d01855fd0211fa4deb7a71b",
".git/objects/97/3a3553248fad6a55a8fbac722aaccaa017a038": "7774baea5b95aabdc84cdfce6ccd38d2",
".git/objects/63/b8aa4693b744b7be728a8fc86d3564b4f69a49": "cef349b1030d5afe9c73077248b3cd74",
".git/objects/63/842c16678ecf2e1ceab44e06421c668631be3d": "7c0173f5570194c2e04dca99173d16c0",
".git/objects/63/8e0b879c07e1bfd68e3203160ee086e08e1550": "aa6fc1590202c91512204aa52ea54efb",
".git/objects/0a/573c5c5a61948320a4218971483f81ee903c04": "9e622d1b0f37df645bfd7a3e093ef5e9",
".git/objects/90/b685bb3902db737efec59f7bf10238d18bd412": "cf216ddd27f9b77bb303258c60b74092",
".git/objects/bf/afc69737aba12c3089a2ac73777ba6e264dd9f": "428a9f4df2fd6aa1765fb9f3e7521aa9",
".git/objects/d3/323e777246a3da3a0ac756afd41ed3adee39b2": "75e5169e8f0cbbf4af0cd43621325d98",
".git/objects/d3/de3559d209e9076c2481b998fd5e861ab145bf": "2de59b31185c8c06215293b13c4d66e4",
".git/objects/d4/f330de7acfce5e4f6ce81f9cc2f290d8c82caa": "6ac38c1327e29f5013516424ae1a535a",
".git/objects/ba/253fe6443392fd42bcfb8b98d69703ce7d58e5": "8926edf3709271b473136afdd8bcbfa8",
".git/objects/ba/b7f6f25b5a32b0549592fc1a0a6217fc0f423c": "5d917f6cec3af2da3fc5f7999270ddff",
".git/objects/a0/bdd5fe13f842ebb1e5de2374183472d6451b16": "9a83018bcb48ce84dca1fd7a9e1662e1",
".git/objects/a7/c08a4d9e323086ff84ca60bd1ed702c8e36b3d": "89a661a1025a8d363bbc354891522f6f",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b1/44de718fa74192d628fb3de4e6384b6846e475": "47bc0f316b21cd9f6497c091948209dc",
".git/objects/dd/294743b243480b728a6ec5e8a8e809f4d50b56": "a1e143f8492edf122cafa49ca2c5ddbd",
".git/objects/b6/6f35456db4baa4219427f6c07bfebaf0dd5a79": "15ecdd2848c6f19bfb5f137f887512ef",
".git/objects/aa/8de7f717d334b23069f3e317ca10000722a4b1": "ae8de14c31c9ae6e3e4187d327cb85a7",
".git/objects/af/4d2d3d7dbe11d5ad08a0c983a2e8ff7f5a666a": "fbf7f58c420ec57e366bc5c62b5613b6",
".git/objects/af/a0df67b0e653d4722e4f3ad0a5039c11e50b67": "a3c9b0dfdf9f80d5dbbb0e8e70abf33a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/1cd837c10b08022f5bca5301b95605562a81c3": "58c56abccbda530b50c80f0e25219d4d",
".git/objects/db/7ddd57cc2a5fa4b3dbbc280f743c26074c8771": "1f1aa9b9a1acf1eb186190f3f7a1b41a",
".git/objects/a8/213c05f95b2ed24b3fbb2df71c317fa6b1c004": "013d4554fb603690c695103bd3417d2f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/01fafbdc38826ed4774a547d9946e9e96a6a98": "a4bb10bf6375cdffc106f1b549c6763a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/474866a90158b776f9aecff0b909a9e32c29d2": "d346fc8e48c518ab15e7667062658ef3",
".git/objects/c4/7e0fca49acd60e91d48172d57456626b318615": "e5c0845e6f0ef9c1a788f007d7f1c840",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/72e8882367d4102155979bd40ae628212c7206": "9cbae810077b5f56382fa58ba063ab1d",
".git/objects/cc/7aef7a66f2acba27444fea89154589ea22ed26": "c85fad55915a708bf5fb0483cfe28c3c",
".git/objects/f9/f052813829049cf7effa9c90d5f01efea6e1eb": "080f4f42bea77867850a5f7d45a3f6e7",
".git/objects/fa/a5bf62549d375e8f4e4685d5a50a1d8e7fd46a": "619db9f3a638b8860e949954c8162bd6",
".git/objects/ff/7b49caf2abd704cdf6f55e011b8c453d36e16d": "18f3de17e0afe1e019d44589535b23de",
".git/objects/f6/2801af5ad8f82bb0d337b4b307edcb724df21f": "735306c6bf210c791dbd10c7d32e3cfe",
".git/objects/e7/72b59c95b9484eb38b332f92eda8acca14c949": "225f025506fe0bd529617386ba559101",
".git/objects/f8/4640f8473e205f06fa0ad609e3e675e9332b1e": "39b95457551dd36ee1bff9a97e4073f4",
".git/objects/f8/008df8644c6334cd5cc78c8a2c6277c258ab25": "81f4b9ca22c1ddcf163dc8b8eaeb12b6",
".git/objects/ce/55ee67b35cc905b91284fddbd0dd155bbd8706": "1773bb71b397e59a9462c4b20a9f5d01",
".git/objects/ce/8568d8b6191e9385ea77f6d0b784ce53ebd5ae": "aab75c2a7f4a41eaf39b3c2d9ea4b316",
".git/objects/ce/19e9520f9ba28fb821ad7b9a2c5e30348e68b5": "6262501850912f87cbc5359bb0d78d1f",
".git/objects/e0/e0ac502b621970704eda8572f22a3e2435a4f0": "dae8866ae5195b17ec6965df10f3bd30",
".git/objects/79/7ea411463940e0b7e6b548874b991004db8bf6": "dc0d7e0552d23b0abdf010f344424554",
".git/objects/41/727517e07422ee4ed63cb413f599440d90cb29": "87df78b7729812545772b07990312c77",
".git/objects/41/e39d1fae02b41210a836084c320b354ad1f1a2": "db312604b52b551f24c99d4f97cbd1e1",
".git/objects/1e/d13b4eb4d43053b89a3e571ac13e25c5b9eca8": "cbb515f492295649977d30c3741b4800",
".git/objects/84/5c3eaaa288440db7405255d50c426765671a10": "436e52aaa53af4dbf14b284488358f22",
".git/objects/24/254edf6cd9dd27b02621c71c4364163352bda6": "5bf650bcdd7108dfcd1392177416b19d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/eb35e2709446c0665f78589a0cc8ffe016f626": "c495066346016b9c0e9d2e8e8549741a",
".git/objects/8d/5a26171f846f192c79ba41d56b952b2717de58": "aa24c61c1f9da54283e7a09176777c12",
".git/objects/8d/18c1a9ddefcfe94cb3ea17f8eda188bc63d2ca": "97892c6b6f3d2c338f34b1cc8ed05146",
".git/objects/8c/1caf129a196e33348bc90d141801ff3d1a7c35": "1a140b7d5a316d967bd03ab9060e7496",
".git/objects/85/d5585385e7ee2e2063cf8fa89d63c3a752786d": "649122b5d4a1421a97f98ed64cbf1fe3",
".git/objects/85/fcdf8d339b061e5055c7ad76b78aaeae2fcfce": "a4948c4bc25c2d1d6cbefd19323d0d62",
".git/objects/71/52a1483cc01e7c3e8ed9b803c7f7278003a684": "6aed425c0bb1b9306b8401374d0fac17",
".git/objects/76/db11c6b484beaa385187ac0555f2310e64a2c4": "e87dd4e822da624952ba53a5cd431323",
".git/objects/76/036e5a0fa699818a6caef2ac1427965eb5e98b": "c768e56764725ac2198c3769f2de2e13",
".git/objects/1c/cb4e5ec057c26bab1db13a358980466d1e7789": "5a193398e7ef5a8dc920377bb467665f",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/49/afcaf80ce0b73cde846be2aca5f9105ad24c48": "2a86ad7f8cf4555ad6f33ec778375916",
".git/objects/49/bc9ea77c323533f18a39d880e198ee2df497cc": "beb152eb879c034cd417062ef54c0a8a",
".git/objects/40/a39e48f5c88a6b21f90d6f05967f9675e6aef9": "0f14b1bb6c54720cb82fdb257b45ae62",
".git/objects/40/8ad313e3b1b05ff27b73a08d724a204d23748e": "0f3194acb383dafa235c4020b7a01aec",
".git/objects/2b/fbd45782d60c9efe6643cecae243494e1ef0b7": "1e9fe3fa51efbcabdacf4a067b79390b",
".git/objects/78/16f2ca0e275d3dbcd716893a8c21ecfe0c244e": "ab20d144d2dca772f7b4088333640496",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/5e574df3fe79ed051369260725981793b750ed": "749c752a33cf94b3474d1c4c10302910",
".git/objects/7f/826a396421320a86bfd7ce5449ac6d5dee88ec": "2d84bc2e3554f8301211086c51a3b05a",
".git/objects/7f/eaff242347283754a27a7dd0ec42945c88c9d9": "f0c8a2fffb18297c07c0e7741f7165b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a23c8730dd5f2c5a31e119d33508ca2b",
".git/logs/refs/heads/main": "d3843e341bfc071e55de3a9c4fd1c759",
".git/logs/refs/remotes/origin/main": "b70b775921864933b4a88be4345cdd8d",
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
".git/refs/heads/main": "feeeb14a8ace052dedc7dc30403fd9db",
".git/refs/remotes/origin/main": "feeeb14a8ace052dedc7dc30403fd9db",
".git/index": "2817de5eae0f9f17a86434e76a1fa45f",
".git/COMMIT_EDITMSG": "ad9235abb88576f2f435d1507b1a2866",
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
