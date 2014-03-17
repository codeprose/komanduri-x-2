/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.0.0.js"; />

(function () {
    var myVideos = [
        { name: "Esophageal Adenocarcinoma: Wallflex Stent placement", src: "_iAkYvRl7FM" },
        { name: "RFA for GAVE (Halo ULTRA)", src: "kRwliAyFJ6U" },
        { name: "Band Ligation EMR for Barrett's w IMC", src: "VGx7h_cFrNU" }
    ];

    var library = ko.observableArray([
        { key: 'My Procedures', items: [] },
        { key: 'Photo Gallery', items: [] },
        { key: 'Video Gallery', items: [] },
        { key: 'Guidelines/Algorithm/PPT Gallery', items: [] },
        { key: 'My Links', items: [] }
    ]);

    var favorites = [
        { key: 'procedures', items: ko.observableArray([]) },
        { key: 'photos', items: ko.observableArray([]) },
        { key: 'videos', items: ko.observableArray([]) },
        { key: 'guidelines', items: ko.observableArray([]) },
        { key: 'links', items: ko.observableArray([]) }
    ];

    //    1. Esophagus
    //    2. Stomach
    //    3. Small Intestine
    //    4. Colon
    //    5. Biliary
    //    6. Pancreas
    //    7. Miscellaneous

    var demoCategories = [
        { key: 'Esophagus', items: [
            {
                text: "RFA for Barrett's Esophagus",
                id: 'esophagus',
                links: [
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713026266' },
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016508513015965' },
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713021408' }
                ],
                photos: [
                    'https://dl.dropboxusercontent.com/s/kyboq2qf561275o/CRIM-NBI.JPEG',
                    'https://dl.dropboxusercontent.com/s/0ho8ky7pyx94cx9/CRIM.JPEG',
                    'https://dl.dropboxusercontent.com/s/ebmrhz9pjlipyq4/GAVE-p-RFA-1.JPEG',
                    'https://dl.dropboxusercontent.com/s/k66vj7q52mtfw2n/GAVE-post-1.JPEG',
                    'https://dl.dropboxusercontent.com/s/v6arubt0p0ihbjj/GAVE-Pre-1.JPEG',
                    'https://dl.dropboxusercontent.com/s/n5e7ckvvplgo0dy/image-1.jpeg',
                    'https://dl.dropboxusercontent.com/s/8ozo1ad3dlmp6el/image.jpeg',
                    'https://dl.dropboxusercontent.com/s/o90hon1s1y8aoyh/jc-post-1.JPEG',
                    'https://dl.dropboxusercontent.com/s/krgpklvoy8pgly5/jc-post2.JPEG',
                    'https://dl.dropboxusercontent.com/s/r9rv16vmfnqq9n1/JC-pre-2.JPEG',
                    'https://dl.dropboxusercontent.com/s/ydfscqpbbtvq8wz/JC-pre1.JPEG'
                ],
                videos: [
                    'https://dl.dropboxusercontent.com/s/1ckj20x6zkt64nx/esophagus.mp4',
                    'https://dl.dropboxusercontent.com/s/1ckj20x6zkt64nx/esophagus.mp4',
                    'https://dl.dropboxusercontent.com/s/1ckj20x6zkt64nx/esophagus.mp4'
                ],
                guidelines: [
                    'https://dl.dropboxusercontent.com/s/1jadkygm2uvvafp/Slide01.jpg',
                    'https://dl.dropboxusercontent.com/s/ezfdj0d6lltglsk/Slide02.jpg',
                    'https://dl.dropboxusercontent.com/s/bzsw2gd5u5oaen9/Slide03.jpg',
                    'https://dl.dropboxusercontent.com/s/npqxgik46amdebz/Slide04.jpg',
                    'https://dl.dropboxusercontent.com/s/p51se5k11hfx013/Slide05.jpg',
                    'https://dl.dropboxusercontent.com/s/ol38fek5jesml9l/Slide06.jpg',
                    'https://dl.dropboxusercontent.com/s/uaz4n3fxouz78nq/Slide07.jpg',
                    'https://dl.dropboxusercontent.com/s/w6nj4f188qoggcf/Slide08.jpg',
                    'https://dl.dropboxusercontent.com/s/elr3cqzck6f6tom/Slide09.jpg',
                    'https://dl.dropboxusercontent.com/s/5vlqrejfsaqhfdx/Slide10.jpg',
                    'https://dl.dropboxusercontent.com/s/wtvteg0hkarnga6/Slide11.jpg',
                    'https://dl.dropboxusercontent.com/s/gmimqzl8xrivo9l/Slide12.jpg',
                    'https://dl.dropboxusercontent.com/s/1e4xiznvr2uh7bu/Slide13.jpg',
                    'https://dl.dropboxusercontent.com/s/qksl1tsr75vbnwk/Slide14.jpg',
                    'https://dl.dropboxusercontent.com/s/3jgzlt97k30fkh8/Slide15.jpg',
                    'https://dl.dropboxusercontent.com/s/ugf5lpjstxcl2t2/Slide16.jpg',
                    'https://dl.dropboxusercontent.com/s/1sh2wikhmensjmi/Slide17.jpg',
                    'https://dl.dropboxusercontent.com/s/cwl1calizlied4y/Slide18.jpg',
                    'https://dl.dropboxusercontent.com/s/um09qn76n3o9t22/Slide19.jpg',
                    'https://dl.dropboxusercontent.com/s/vx1xq2in4s06264/Slide20.jpg',
                    'https://dl.dropboxusercontent.com/s/q5mdtbup99xal7u/Slide21.jpg',
                    'https://dl.dropboxusercontent.com/s/hqtibj4jskakwlm/Slide22.jpg',
                    'https://dl.dropboxusercontent.com/s/awlijpgsfdguakh/Slide23.jpg',
                    'https://dl.dropboxusercontent.com/s/sr95ilxw9j1y7vk/Slide24.jpg',
                    'https://dl.dropboxusercontent.com/s/00ip8wue5x3txkw/Slide25.jpg',
                    'https://dl.dropboxusercontent.com/s/bt2vuk6smol8rbh/Slide26.jpg',
                    'https://dl.dropboxusercontent.com/s/vs0a7s11d4h9nc2/Slide27.jpg',
                    'https://dl.dropboxusercontent.com/s/bs158rb7uhlfti7/Slide28.jpg',
                    'https://dl.dropboxusercontent.com/s/aj46j3zxfjfk62h/Slide29.jpg',
                    'https://dl.dropboxusercontent.com/s/2anzywv8xtisqms/Slide30.jpg',
                    'https://dl.dropboxusercontent.com/s/dhnddb6y9chcaqa/Slide31.jpg',
                    'https://dl.dropboxusercontent.com/s/ay70bb8hqvg967o/Slide32.jpg',
                    'https://dl.dropboxusercontent.com/s/zzkcaqnr6esb1h6/Slide33.jpg',
                    'https://dl.dropboxusercontent.com/s/vde5sq6jsdfixnt/Slide34.jpg',
                    'https://dl.dropboxusercontent.com/s/y7uwyh7x7arx84j/Slide35.jpg',
                    'https://dl.dropboxusercontent.com/s/64hqkkoo099k9te/Slide36.jpg'
                    //{ name: 'EET 2014 (pdf)', url: '/content/procedures/esophagus/guidelines/EET%202014.pdf' }
                ]
            }
        ]
        },
        { key: 'Stomach', items: [] },
        { key: 'Small Intestine', items: [] },
        { key: 'Colon', items: [
            {
                text: 'EMR for Complex Polyps',
                id: 'polyps',
                links: [
                        { url: 'http://www.sciencedirect.com/science/article/pii/S1542356513014547' },
                        { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713001909' },
                        { url: 'http://www.sciencedirect.com/science/article/pii/S001651071200226X' }
                    ],
                photos: [
                        'https://dl.dropboxusercontent.com/s/2fq82vhyd74eneu/channel%20colon%2023.JPEG',
                        'https://dl.dropboxusercontent.com/s/dwzzsx7bb0z8ing/channel%20colon%20final.JPEG',
                        'https://dl.dropboxusercontent.com/s/0fffb7cen9f657u/channel%20colon.JPEG',
                        'https://dl.dropboxusercontent.com/s/uu3fogsxo828ghq/colon%20emr%201.JPEG',
                        'https://dl.dropboxusercontent.com/s/yhacn5w8gtgeu3z/colon%20emr%202.JPEG',
                        'https://dl.dropboxusercontent.com/s/r72spk945s7givq/colon%20emr%20closure%20cook%20clips.JPEG',
                        'https://dl.dropboxusercontent.com/s/d4g5vwh7debfq7k/colon%20emr%20defect.JPEG',
                        'https://dl.dropboxusercontent.com/s/tuwf3jxp6xrt01k/polyp%20jan%2014.JPEG',
                        'https://dl.dropboxusercontent.com/s/gb4bqkfdzsk3h9c/post%20emr%20jan%202014.JPEG'
                    ],
                videos: [
                    ],
                guidelines: [
                        { name: 'ASGE Colon EMR Talk (pdf)', url: '/content/procedures/ercp/guidelines/ASGE%20Colon%20EMR%20Talk.pdf' }
                    ]
            }
        ]
        },
        { key: 'Biliary', items: [] },
        { key: 'Pancreas', items: [
            {
                text: 'Difficult ERCP',
                id: 'ercp',
                links: [
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713023523' },
                    { url: 'http://www.ncbi.nlm.nih.gov/pubmed/24409076' },
                    { url: 'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3882422/' },
                    { url: 'http://www.nejm.org/doi/full/10.1056/NEJMct1208450' }
                ],
                photos: [
                    'https://dl.dropboxusercontent.com/s/jvvqnp8r77evuuv/image.png',
                    'https://dl.dropboxusercontent.com/s/tjyd1pp372xzibl/image-1.png',
                    'https://dl.dropboxusercontent.com/s/ugvv6uxh8k9zbn9/image-2.png',
                    'https://dl.dropboxusercontent.com/s/9fqlst03tagl0qz/image-3.png',
                    'https://dl.dropboxusercontent.com/s/j90fdcwdvxu5iwn/image-4.png',
                    'https://dl.dropboxusercontent.com/s/pkf8ylda0nunn0g/image-5.png',
                    'https://dl.dropboxusercontent.com/s/4q99oznpfxrteci/image-6.png',
                    'https://dl.dropboxusercontent.com/s/nr6eun95lk6w9jj/image-7.png'
                ],
                videos: [],
                guidelines: [
                    { name: 'Chicago Live SK ERCP 2012 (pdf)', url: '/content/procedures/ercp/guidelines/Chicago%20Live%20SK%20ERCP%202012.pdf' }
                ]
            }
        ]
        },
        { key: 'Miscellaneous', items: [] }
    ];

    var categories = [
        {
            key: "Enteral and Esophageal Stenting",
            items: [
                { name: "Esophageal Adenocarcinoma: Wallflex Stent placement", src: "_iAkYvRl7FM" },
                { name: "Duodenal Stent Placement (Evolution) for Malignant Obstruction", src: "CPDxUtmA0R8" },
                { name: "Malignant Colonic Obstruction: Evolution Stent Placement", src: "RWXLNQTH0qw" }
            ]
        },
        {
            key: "GI Bleed",
            items: [
                { name: "GI bleed post jumbo biopsy unroofing of GIST", src: "cwbp1I4ROe8" },
                { name: "GI Bleed: Diuelafoy lesion with hemoclip", src: "xMRfJy5292c" },
                { name: "RFA for GAVE (Halo ULTRA)", src: "kRwliAyFJ6U" },
                { name: "RFA of Bleeding AVM", src: "eFvgxCAjTUI" },
                { name: "Barrett's EMR Bleed", src: "DNvNVrHx3BA" }
            ]
        },
        {
            key: "Barrett's Endotherapy",
            items: [
                { name: "Band Ligation EMR for Barrett's w IMC", src: "VGx7h_cFrNU" },
                { name: "Focal Barrx 90 RFA Technique", src: "-KxpZ0Dn8Qs" },
                { name: "Barrett's Esophagus 360 RFA", src: "_8leijapLQA" }
            ]
        }
    ];

    var getProcedureById = function (procedureId) {
        for (var groupIndex = 0; groupIndex < MyApp.db.demoCategories.length; groupIndex++) {
            for (var itemIndex = 0; itemIndex < MyApp.db.demoCategories[groupIndex].items.length; itemIndex++) {
                var item = MyApp.db.demoCategories[groupIndex].items[itemIndex];
                if (item.id === procedureId) {
                    return item;
                }
            }
        }

        return { text: 'Unidentified Procedure', id: procedureId };
    };

    window.MyApp.db = {
        library: library,
        ryansLibrary: favorites,
        categories: new DevExpress.data.ArrayStore(categories),
        demoCategories: demoCategories,
        getProcedureById: getProcedureById,

        addImageToFavorites: function (imageUrl) {
            favorites[1].items.push(imageUrl);
            favorites[1].items.apply();
        }
    };

    console.log('db initiated');
})();