import {ThemeUtil} from "../../util/ThemeUtil.ts";

export type PropertiesDataProps = {
    id: string,
    image: string[],
    title: string,
    location: string,
    type: string,
    amount: string,
}
// export type BasePropertiesData = {
//     id: string,
//     image: string[],
//     title: string,
//     location: string,
//     type: string,
//     amount: string,
// }

let a = "fola"

export const nearYouData: PropertiesDataProps[] =[
    {
        id: "e76fqyvybevu8qwu88",
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
        id: "nildbnjksbjhuyyhile",
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
        id: "jscbjklbajkjjbsfjlksf",
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