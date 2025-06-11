
let executives = {
    4: {
        5: {
            6: {
                7: {
                    8: {
                        9: {
                            10: {
                                11: {
                                    // Add more executives here
                                }
                            },
                        },
                    },
                },
            },
        }
    }
}

let foremanJarif = {
    14: '',
    15: '',
    16: '',
    17: '',
    18: '',
}
let foremanSohan = {
    19: '',
    20: '',
    21: '',
    22: '',
    23: '',
    24: '',
}

let tree = {
    1: {
        2: executives,
        3: {
            12: foremanJarif,
            13: foremanSohan,
        },
    },
};

let params = {
    1: { trad: 'Hashimukh', styles: { 'font-size': '2rem' } },
    2: { trad: 'Executives', styles: { 'font-size': '2rem' } },
    3: { trad: 'Foreman' },
    4: { trad: 'Sifat Al Rashid' },
    5: { trad: 'Abu Shoaib' },
    6: { trad: 'Azraf Taohid Akib' },
    7: { trad: 'Fahim Muhtamim' },
    8: { trad: 'Jihad Hossain' },
    9: { trad: 'Md. Ashfaq Rahman (Ayan)' },
    10: { trad: 'Md. Shafin Khan' },
    11: { trad: 'Udoy Ahmed' },
    12: { trad: 'Ajmain Ahnaf Jarif' },
    13: { trad: 'Md. Shihabul Islam Sohan' }
};

treeMaker(tree, {
    id: 'my_tree',
    card_click: function (element) {
        console.log(element);
    },
    treeParams: params,
    'link_width': '2px',
    'link_color': '#2199e8',
});