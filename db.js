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

    var ryansStuff = [
        { key: 'procedures', items: ko.observableArray([]) },
        { key: 'photos', items: ko.observableArray([]) },
        { key: 'videos', items: ko.observableArray([]) },
        { key: 'guidelines', items: ko.observableArray([]) },
        { key: 'links', items: ko.observableArray([]) }
    ];

    var demoCategories = [
        { key: 'Category 1', items: [
            {
                text: "RFA for Barrett's Esophagus",
                id: 'esophagus',
                links: [
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713026266' },
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016508513015965' },
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713021408' }
                ],
                photos: [
                    '/content/procedures/esophagus/images/CRIM-NBI.JPEG',
                    '/content/procedures/esophagus/images/CRIM.JPEG',
                    '/content/procedures/esophagus/images/GAVE-p-RFA-1.JPEG',
                    '/content/procedures/esophagus/images/GAVE-post-1.JPEG',
                    '/content/procedures/esophagus/images/GAVE-Pre-1.JPEG',
                    '/content/procedures/esophagus/images/image-1.JPEG',
                    '/content/procedures/esophagus/images/image.JPEG',
                    '/content/procedures/esophagus/images/jc-post-1.JPEG',
                    '/content/procedures/esophagus/images/jc-post2.JPEG',
                    '/content/procedures/esophagus/images/JC-pre-2.JPEG',
                    '/content/procedures/esophagus/images/JC-pre1.JPEG'
                ],
                videos: [
                    'https://www.dropbox.com/s/1ckj20x6zkt64nx/esophagus.mp4',
                    'https://www.dropbox.com/s/1ckj20x6zkt64nx/esophagus.mp4',
                    'https://www.dropbox.com/s/1ckj20x6zkt64nx/esophagus.mp4'
                ],
                guidelines: [
                    { name: 'EET 2014 (pdf)', url: '/content/procedures/esophagus/guidelines/EET%202014.pdf' }
                ]
            }
        ]
        },
        { key: 'Category 2', items: [
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
                    '/content/procedures/ercp/images/image.png',
                    '/content/procedures/ercp/images/image-1.png',
                    '/content/procedures/ercp/images/image-2.png',
                    '/content/procedures/ercp/images/image-3.png',
                    '/content/procedures/ercp/images/image-4.png',
                    '/content/procedures/ercp/images/image-5.png',
                    '/content/procedures/ercp/images/image-6.png',
                    '/content/procedures/ercp/images/image-7.png'
                ],
                videos: [],
                guidelines: [
                    { name: 'Chicago Live SK ERCP 2012 (pdf)', url: '/content/procedures/ercp/guidelines/Chicago%20Live%20SK%20ERCP%202012.pdf' }
                ]
            },
            {
                text: 'EMR for Complex Polyps',
                id: 'polyps',
                links: [
                    { url: 'http://www.sciencedirect.com/science/article/pii/S1542356513014547' },
                    { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713001909' },
                    { url: 'http://www.sciencedirect.com/science/article/pii/S001651071200226X' }
                ],
                photos: [
                    '/content/procedures/polyps/images/channel%20colon%2023.jpeg',
                    '/content/procedures/polyps/images/channel colon final.jpeg',
                    '/content/procedures/polyps/images/channel colon.jpeg',
                    '/content/procedures/polyps/images/colon emr 1.jpeg',
                    '/content/procedures/polyps/images/colon emr 2.jpeg',
                    '/content/procedures/polyps/images/colon emr closure cook clips.jpeg',
                    '/content/procedures/polyps/images/colon emr defect.jpeg',
                    '/content/procedures/polyps/images/polyp jan 14.jpeg',
                    '/content/procedures/polyps/images/post emr jan 2014.jpeg'
                ],
                videos: [
                ],
                guidelines: [
                    { name: 'ASGE Colon EMR Talk (pdf)', url: '/content/procedures/ercp/guidelines/ASGE%20Colon%20EMR%20Talk.pdf' }
                ]
            }
        ]
        }
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
        ryansLibrary: ryansStuff,
        categories: new DevExpress.data.ArrayStore(categories),
        demoCategories: demoCategories,
        getProcedureById: getProcedureById
    };

})();