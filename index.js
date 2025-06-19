const contacts = [
  {
    id: 1,
    name: "M Haidar Hanif",
    age: 30,
    email: "me@mhaidarhanif.com",
    phone: "+62-812-345-678",
    website: "https://mhaidarhanif.com",
    labels: ["friend", "work"],
    address: {
      street: "Jl. Mana",
      city: "Bandung",
      state: "West Java",
      country: "Indonesia",
    },
    isFavorited: true,
  },
  {
    id: 2,
    name: "Elon Musk",
    age: 50,
    email: "elon@tesla.com",
    phone: "+1-234-567-890",
    website: "https://tesla.com",
    labels: ["work"],
    address: {
      street: "",
      city: "Austin",
      state: "Texas",
      country: "United States",
    },
    isFavorited: false,
  },
];

console.log(contacts);
