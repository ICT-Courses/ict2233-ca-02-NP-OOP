// src/config/projectsData.js
import linkManager from "../assets/projects/link-manager.png";
import cafeInventory from "../assets/projects/cafe-inventory.png";
import ciscoLab from "../assets/projects/cisco-lab.png";

const projectsData = [
  {
    title: "Link Manager App",
    description:
      "A desktop application built with C# and .NET to organize, manage, and search saved links. Includes CRUD functionality and export features.",
    image: linkManager,
    github: "https://github.com/yourusername/link-manager",
    demo: null,
  },
  {
    title: "Cafe Inventory System - Mobile App",
    description:
      "A mobile-first web app providing an inventory management solution for cafes. Built with React and Tailwind CSS, featuring real-time stock updates and reporting.",
    image: cafeInventory, // make sure this matches the import
    github: "https://github.com/yourusername/cafe-inventory-app",
    demo: "https://yourusername.github.io/cafe-inventory-app",
  },
  {
    title: "Cisco Network Lab",
    description:
      "A collection of network simulations and topologies designed in Cisco Packet Tracer. Demonstrates routing, switching, and network security basics.",
    image: ciscoLab,
    github: "https://github.com/yourusername/cisco-network-lab",
    demo: null,
  },
];

export default projectsData;
