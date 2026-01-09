export interface Property {
    id: string;
    name: string;
    image: string;
    priceThb: number;
    area: number;
    location: string;
}

export const PROPERTIES: Property[] = [
    {
        id: "1",
        name: "Современная вилла с бассейном",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        priceThb: 15000000,
        area: 250,
        location: "Пхукет, Раваи",
    },
    {
        id: "2",
        name: "Уютный кондоминиум у моря",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800",
        priceThb: 4500000,
        area: 45,
        location: "Пхукет, Карон",
    },
    {
        id: "3",
        name: "Роскошный пентхаус",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        priceThb: 12000000,
        area: 120,
        location: "Бангламунг, Паттайя",
    },
    {
        id: "4",
        name: "Тропический дом с садом",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        priceThb: 8900000,
        area: 180,
        location: "Самуи, Маенам",
    },
    {
        id: "5",
        name: "Апартаменты в центре города",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
        priceThb: 6200000,
        area: 65,
        location: "Бангкок, Сукхумвит",
    },
    {
        id: "6",
        name: "Стильная студия",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
        priceThb: 3100000,
        area: 32,
        location: "Пхукет, Патонг",
    },
];
