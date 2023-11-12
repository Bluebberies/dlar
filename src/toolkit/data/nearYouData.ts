import { ThemeUtil } from "../../util/ThemeUtil.ts";

export type PropertiesDataProps = {
  id: string;
  images: string[];
  title: string;
  location: string;
  type: string;
  amount?: string;
  property_description?: string[];
  about_property?: string;
  agent_details?: any;
  property_details?: any;
  landmarks?: string[];
  tags?: string[];
};
// export type BasePropertiesData = {
//     id: string,
//     image: string[],
//     title: string,
//     location: string,
//     type: string,
//     amount: string,
// }

export const PropertiesData: PropertiesDataProps[] = [
  {
    id: "e76fqyvybevu8qwu88",
    images: [
      ThemeUtil.image.simone,
      ThemeUtil.image.matteo,
      ThemeUtil.image.andrea,
    ],
    title: "My Odessy Lodge",
    location: "Ifite Awka.",
    type: "Selfcon",
    amount: "150, 000",
    property_description: [
      "Beautiful and lovely Selfcon + A shop to rent",
      "Spacious Rooms",
      "240k per year",
      " 20k Fee ",
      "10% Legal  Fee",
      "10% Agency Fee",
    ],
    about_property:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1. Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.",
    agent_details: {
      id: "9876545678",
      name: "Mr. Anthony",
      phone: ["07084421497"],
      registered_at: "2 years ago",
    },
    property_details: {
      status: "Available",
      property_type: "Self Con",
      furnishing: "furnished",
      date_posted: "3 days ago",
      servicing: "Serviced",
    },
    tags: [
      "Steady Light",
      "Pre-paid meter",
      "Kitchen Cabinets",
      "Tiled Floor",
      "Wardrobe",
    ],
    landmarks: [
      "Unizik ifite school gate",
      "Dynamo Junction",
      "Wintess Hotel and Suits",
      "St. Anthony Parish",
    ],
  },
  {
    id: "nildbnjksbjhuyyhile",
    images: [
      ThemeUtil.image.lance,
      ThemeUtil.image.matteo,
      ThemeUtil.image.andrea,
    ],
    title: "Harmony Lodge.",
    location: "Second Market Ifite Awka.",
    type: "Selfcon",
    amount: "100, 000",
    property_description: [
      "Beautiful and lovely Selfcon + A shop to rent",
      "Spacious Rooms",
      "240k per year",
      " 20k Fee ",
      "10% Legal  Fee",
      "10% Agency Fee",
    ],
    about_property:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1. Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.",
    agent_details: {
      id: "9876545678",
      name: "Mr. Anthony",
      phone: ["07084421497"],
      registered_at: "2 years ago",
    },
    property_details: {
      status: "Available",
      property_type: "Self Con",
      furnishing: "furnished",
      date_posted: "3 days ago",
      servicing: "Serviced",
    },
    tags: [
      "Steady Light",
      "Pre-paid meter",
      "Kitchen Cabinets",
      "Tiled Floor",
      "Wardrobe",
    ],
    landmarks: [
      "Unizik ifite school gate",
      "Dynamo Junction",
      "Wintess Hotel and Suits",
      "St. Anthony Parish",
    ],
  },
  {
    id: "nildbnjksbjhuyyhile",
    images: [
      ThemeUtil.image.lance,
      ThemeUtil.image.matteo,
      ThemeUtil.image.andrea,
    ],
    title: "St. John’s Residence.",
    location: "Book Foundation, Ifite Awka.",
    type: "Selfcon",
    amount: "150, 000",
    property_description: [
      "Beautiful and lovely Selfcon + A shop to rent",
      "Spacious Rooms",
      "240k per year",
      " 20k Fee ",
      "10% Legal  Fee",
      "10% Agency Fee",
    ],
    about_property:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1. Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.",
    agent_details: {
      id: "9876545678",
      name: "Mr. Anthony",
      phone: ["07084421497"],
      registered_at: "2 years ago",
    },
    property_details: {
      status: "Available",
      property_type: "Self Con",
      furnishing: "furnished",
      date_posted: "3 days ago",
      servicing: "Serviced",
    },
    tags: [
      "Steady Light",
      "Pre-paid meter",
      "Kitchen Cabinets",
      "Tiled Floor",
      "Wardrobe",
    ],
    landmarks: [
      "Unizik ifite school gate",
      "Dynamo Junction",
      "Wintess Hotel and Suits",
      "St. Anthony Parish",
    ],
  },
];
