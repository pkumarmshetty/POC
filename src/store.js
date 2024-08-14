import { create } from "zustand";

export const useStore = create((set) => ({
  records: [
    {
      id: 1,
      imageUrls: "https://i.ibb.co/G7jhFjR/Website.png",
      formDetails: {
        Name: "",
        Email: "",
        Pan: "",
        Message: "",
      },
    },
    {
      id: 2,
      imageUrls: "https://i.ibb.co/G7jhFjR/Website.png",
      formDetails: {
        Name: "",
        Age: "",
        Address: "",
        Phone: "",
      },
    },
    {
      id: 3,
      imageUrls: "https://i.ibb.co/G7jhFjR/Website.png",
      formDetails: {
        Name: "",
        Age: "",
        Address: "",
      },
    },
    {
      id: 4,
      imageUrls: "https://i.ibb.co/G7jhFjR/Website.png",
      formDetails: {
        Name: "",
        Age: "",
        Address: "",
      },
    },
    {
      id: 5,
      imageUrls: "https://i.ibb.co/G7jhFjR/Website.png",
      formDetails: {
        Name: "",
        Email: "",
        Message: "",
      },
    },
    {
      id: 6,
      imageUrls: "https://i.ibb.co/G7jhFjR/Website.png",
      formDetails: {
        Name: "",
        Email: "",
        Message: "",
        Pan: "",
      },
    },
  ],
}));
