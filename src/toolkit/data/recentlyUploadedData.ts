import {ThemeUtil} from "../../util/ThemeUtil.ts";

export type RecentlyUploadedDataProps = {
    id: string,
    image: string[],
    title: string,
    location: string,
    type: string,
    amount: string,
}


export const recentlyUploadedData: RecentlyUploadedDataProps[] =[
    {
        id: "nadjbjkbfjkbjksf",
        image: [
            ThemeUtil.image.matteo,
            ThemeUtil.image.andrea,
        ],
        title: "My Odessy Lodge",
        location: "Ifite Awka.",
        type: "Selfcon",
        amount: "300, 000"
    },
    {
        id: "njdbjkqsbuiuiqqw",
        image: [
            ThemeUtil.image.simone,
            ThemeUtil.image.matteo,
            ThemeUtil.image.andrea,
        ],
        title: "St. John’s Residence.",
        location: "Book Foundation, Ifite Awka.",
        type: "Selfcon",
        amount: "150, 000"
    },
    {
        id: "niofeiahhrh9h89qwer",
        image: [
            ThemeUtil.image.grant,
            ThemeUtil.image.simone,
            ThemeUtil.image.matteo,
            ThemeUtil.image.andrea,
        ],
        title: "Harmony Lodge.",
        location: "Second Market Ifite Awka.",
        type: "Selfcon",
        amount: "100, 000"
    },
]