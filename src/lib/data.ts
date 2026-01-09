import { getAssetPath } from "./utils";

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
        image: getAssetPath("/rent.jpeg"),
        priceThb: 15000000,
        area: 250,
        location: "Пхукет, Раваи",
    },
    {
        id: "2",
        name: "Уютный кондоминиум у моря",
        image: getAssetPath("/rent.jpeg"),
        priceThb: 4500000,
        area: 45,
        location: "Пхукет, Карон",
    },
    {
        id: "3",
        name: "Роскошный пентхаус",
        image: getAssetPath("/rent.jpeg"),
        priceThb: 12000000,
        area: 120,
        location: "Бангламунг, Паттайя",
    },
    {
        id: "4",
        name: "Тропический дом с садом",
        image: getAssetPath("/rent.jpeg"),
        priceThb: 8900000,
        area: 180,
        location: "Самуи, Маенам",
    },
    {
        id: "5",
        name: "Апартаменты в центре города",
        image: getAssetPath("/rent.jpeg"),
        priceThb: 6200000,
        area: 65,
        location: "Бангкок, Сукхумвит",
    },
    {
        id: "6",
        name: "Стильная студия",
        image: getAssetPath("/rent.jpeg"),
        priceThb: 3100000,
        area: 32,
        location: "Пхукет, Патонг",
    },
];
