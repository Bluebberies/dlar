type propertyFiltersProps = {
    title: string;
    items: string[]
}

export const propertyFilters: propertyFiltersProps[] = [
  {
    title: "Type of property",
    items: ["All", "Selfcon", "Apartment", "Duplex", "Lodges", "Hotel"],
  },
  {
    title: "Type of Furnishing",
    items: ["All", "Unfurnished", "Furnished", "Semi-furnished"],
  },
  {
    title: "Condition",
    items: ["All", "Newly built", "Renovated", "Fairly used", "New"],
  },
  {
    title: "When Uploaded",
    items: [
      "Anytime",
      "3 days ago",
      "24 hours ago",
      "1 week ago",
      "2 weeks ago",
      "1 month ago",
    ],
  },
];
