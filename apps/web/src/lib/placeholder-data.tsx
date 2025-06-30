export const users = [
    {id: 1, name: "s4msec", password: "SHA256"}
];

export const splits = [
    {id: 1, userId: 1, category: "Empréstimo", contry: 3, slug: "loan"},
    {id: 2, userId: 1, category: "Empréstimo", contry: 3, slug: "personal-loan", pixelId: ""}
]

export const links = [
    {id: 1, splitId: 1, url: "https://www.google.com/", type: 1, prob: 0.6, ecpm: 313},
    {id: 2, splitId: 1, url: "https://www.google.com/", type: 1, prob: 0.2, ecpm: 442},
    {id: 3, splitId: 1, url: "https://www.google.com/", type: 1, prob: 0.2, ecpm: 442},
    {id: 3, splitId: 2, url: "https://www.google.com/", type: 1, prob: 1, ecpm: 442}
]

export const linkTypes = [
    "Landing Page",
    "Article",
    "Article List"
]

export const countries = [
    "Brasil",
    "Canadá",
    "Austrália",
    "Nova Zelândia"
]

export const projects = [
    {
        id: "1",
        name: "Google",
        description: "Splits de redirecionamento do Facebook Ads para automação n8n.",
        countries: ["Estados Unidos", "Nova Zelândia", "Canadá", "Itália", "França"],
        icon: "c6a753e1-8d85-4a9a-a777-1d926c29107e.webp",
        splits: [
            {
                splitId: 11,
                whichSplitIs: 1,
                colorCode: "#ff4142",
                category: "Empréstimos",
                country: {
                    contryId: 1,
                    name: "Brasil",
                    pixelId: "313913",
                    redirectMessage: "Você está sendo redirecionado, aguarde..."
                },
            },
            {
                splitId: 12,
                whichSplitIs: 1,
                colorCode: "#ff4154",
                category: "Empréstimos",
                country: {
                    contryId: 2,
                    name: "Brasil",
                    pixelId: "313913",
                    redirectMessage: "Você está sendo redirecionado, aguarde..."
                },
            },
            {
                splitId: 16,
                whichSplitIs: 2,
                colorCode: "#acff41",
                category: "Empréstimos",
                country: {
                    contryId: 1,
                    name: "Brasil",
                    pixelId: "313913",
                    redirectMessage: "Você está sendo redirecionado, aguarde..."
                },
            }
        ]
    },
    {
        id: "2",
        name: "Facebook",
        description: "Splits de redirecionamento do Facebook Ads para automação n8n.",
        countries: ["Estados Unidos", "Nova Zelândia", "Canadá", "Itália", "França"],
        icon: "c6a753e1-8d85-4a9a-a777-1d926c29107e.webp",
        splits: [
            {
                splitId: 11,
                whichSplitIs: 1,
                colorCode: "#ff4142",
                category: "Empréstimos",
                country: {
                    contryId: 1,
                    name: "Brasil",
                    pixelId: "313913",
                    redirectMessage: "Você está sendo redirecionado, aguarde..."
                },
            },
            {
                splitId: 16,
                whichSplitIs: 2,
                colorCode: "#acff41",
                category: "Empréstimos",
                country: {
                    contryId: 1,
                    name: "Brasil",
                    pixelId: "313913",
                    redirectMessage: "Você está sendo redirecionado, aguarde..."
                },
            }
        ]
    }
  ];
