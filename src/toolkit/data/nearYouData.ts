export type NearYouDataProps = {
    image: string[],
    title: string,
    location: string,
    type: string,
    amount: string,
}


export const nearYouData: NearYouDataProps[] =[
    {
        image: [
            "/src/assets/image/daniel.jpg",
            "/src/assets/image/andrea.jpg",
        ],
        title: "My Odessy Lodge",
        location: "Ifite Awka.",
        type: "Selfcon",
        amount: "300, 000"
    },
    {
        image: [
            "/src/assets/image/lance.jpg",
            "/src/assets/image/simone.jpg",
            "/src/assets/image/andrea.jpg",
        ],
        title: "St. John’s Residence.",
        location: "Book Foundation, Ifite Awka.",
        type: "Selfcon",
        amount: "150, 000"
    },
    {
        image: [
            "/src/assets/image/matthew.jpg",
            "/src/assets/image/grant.jpg",
            "/src/assets/image/simone.jpg",
            "/src/assets/image/andrea.jpg",
        ],
        title: "Harmony Lodge.",
        location: "Second Market Ifite Awka.",
        type: "Selfcon",
        amount: "100, 000"
    },
]