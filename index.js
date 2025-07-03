let dataContacts = [
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
  {
    id: 3,
    name: "Steve Jobs",
    age: 56,
    email: "steve@apple.com",
    phone: "+1-555-123-456",
    website: "https://apple.com",
    labels: ["work"],
    address: {
      street: "1 Infinite Loop",
      city: "Cupertino",
      state: "California",
      country: "United States",
    },
    isFavorited: true,
  },
];

function deleteContact(id) {
  const updatedContacts = dataContacts.filter((contact) => contact.id !== id);
  dataContacts = updatedContacts;
  renderContacts(dataContacts);
}

function renderContacts(contacts) {
  const contactsListElement = document.getElementById("contacts-list");

  const contactsElements = contacts
    .map((contact) => {
      return `<li>
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <button onclick="deleteContact(${contact.id})">Delete</button>
      </li>`;
    })
    .join("");

  contactsListElement.innerHTML = contactsElements;
}

renderContacts(dataContacts);
