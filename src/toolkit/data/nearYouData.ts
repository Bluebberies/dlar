import {ThemeUtil} from "../../util/ThemeUtil.ts";

export type NearYouDataProps = {
    image: string[],
    title: string,
    location: string,
    type: string,
    amount: string,
}
export type BasePropertiesData = {
    image: string[],
    title: string,
    location: string,
    type: string,
    amount: string,
}


export const nearYouData: NearYouDataProps[] =[
    {
        image: [
            ThemeUtil.image.daniel,
            ThemeUtil.image.simone,
        ],
        title: "My Odessy Lodge",
        location: "Ifite Awka.",
        type: "Selfcon",
        amount: "300, 000"
    },
    {
        image: [
            ThemeUtil.image.lance,
            ThemeUtil.image.matteo,
            ThemeUtil.image.andrea,
        ],
        title: "St. John’s Residence.",
        location: "Book Foundation, Ifite Awka.",
        type: "Selfcon",
        amount: "150, 000"
    },
    {
        image: [
            ThemeUtil.image.mathew,
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