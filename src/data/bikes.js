export const bikes = [
  {
    id: "talaria-komodo",
    name: "Talaria Komodo 32kW",
    price: "$5,199",
    originalPrice: "$5,495",
    type: "High-Performance Electric Dirt Bike",
    description: "Built for riders who crave power, agility, and endurance. Packing a peak 32kW motor delivering 754Nm of torque, sprinting from 0-60 mph in 4.5 seconds.",
    image: "/images/ebike_talaria_komodo.jpg",
    features: ["32kW Peak Motor Power", "754Nm Torquey Acceleration", "0-60 mph in 4.5s", "87.2V 45Ah Battery", "70 Miles Range", "21''/18'' Off-Road Wheels"],
    specs: {
      motor: "32kW Peak Brushless Motor (754Nm Torque)",
      batteryLife: "70 Miles (87.2V 45Ah)",
      topSpeed: "60+ mph",
      brakes: "Quad-Piston Hydraulic Disc",
      suspension: "Advanced Off-Road Long Travel",
      weight: "135 lbs"
    },
    recommended: true,
    sales: "6,400+ Units",
    rating: 5.0,
    topSeller: true,
    badge: "32kW Dirt Monster"
  },
  {
    id: "tst-r002",
    name: "TST® R002 Full Suspension",
    price: "$799",
    originalPrice: "$2,199",
    type: "Moped-Style E-Bike",
    description: "20'' 1500W Peak Full Suspension Moped-style Electric Bike. Engineered with high-torque motor, fat tires, dual shock absorbers, and aggressive moped styling.",
    image: "/images/ebike_tst_r002.png",
    features: ["1500W Peak Power Motor", "20'' x 4.0'' Fat Tires", "Full Dual Suspension", "Hydraulic Disc Brakes", "Save $1,400 Special Sale", "428+ 5-Star Reviews"],
    specs: {
      motor: "1500W Peak High Torque Motor",
      batteryLife: "60+ Miles",
      topSpeed: "28+ mph",
      brakes: "Dual Hydraulic Disc Brakes",
      suspension: "Front & Rear Full Suspension",
      weight: "72 lbs"
    },
    recommended: true,
    sales: "8,900+ Units",
    rating: 4.8,
    topSeller: true,
    badge: "Save $1,400 — $799"
  },
  {
    id: "super73-zx-se",
    name: "SUPER73-ZX SE",
    price: "$2,995",
    type: "Urban Moto Commander",
    description: "Turning the corner from commuter to commander with up to 30% more acceleration, adjustable front suspension, 2-piston hydraulic brakes, and MAXXIS Supersucker tires.",
    image: "/images/ebike_super73.jpg",
    features: ["28+ mph Top Speed", "50+ Miles Range", "30% More Acceleration", "MAXXIS Supersucker Tires", "2-Piston Hydraulic Brakes", "Adjustable Front Suspension"],
    specs: {
      motor: "1350W Peak Evolved Powertrain",
      batteryLife: "50+ Miles",
      topSpeed: "28+ mph",
      brakes: "2-Piston Hydraulic Disc",
      suspension: "Adjustable Front Suspension",
      weight: "63 lbs"
    },
    recommended: true,
    sales: "15,200+ Units",
    rating: 4.9,
    topSeller: true,
    badge: "Trending Commander"
  },
  {
    id: "lite",
    name: "Kinetix Lite",
    price: "$1,499",
    type: "City Cruiser",
    description: "The perfect entry-level e-bike for city dwellers. Lightweight, nimble, and reliable.",
    image: "/images/ebike_commuter_1788575102126.jpg", // reusing commuter image
    features: ["20mph Top Speed", "40 Miles Range", "35 lbs Weight", "Basic LED Display", "Mechanical Disc Brakes"],
    specs: {
      motor: "350W Hub Motor",
      batteryLife: "40 Miles",
      topSpeed: "20 mph",
      brakes: "Mechanical Disc",
      suspension: "Rigid Fork",
      weight: "35 lbs"
    },
    recommended: false,
    sales: "4,200+ Units",
    rating: 4.5,
    topSeller: false
  },
  {
    id: "metro",
    name: "Kinetix Metro",
    price: "$2,299",
    type: "Urban Commuter",
    description: "The ultimate urban commuter. Sleek, lightweight, and perfect for navigating city streets.",
    image: "/images/ebike_commuter_1788575102126.jpg",
    features: ["28mph Top Speed", "65 Miles Range", "42 lbs Weight", "Smart App Integration", "Hydraulic Disc Brakes", "Integrated Lights"],
    specs: {
      motor: "500W Mid-Drive",
      batteryLife: "65 Miles",
      topSpeed: "28 mph",
      brakes: "Hydraulic Disc",
      suspension: "Front Suspension 60mm",
      weight: "42 lbs"
    },
    recommended: true,
    sales: "9,800+ Units",
    rating: 4.8,
    topSeller: true,
    badge: "Most Popular City"
  },
  {
    id: "apex",
    name: "Kinetix Apex",
    price: "$3,499",
    type: "Off-Road Performance",
    description: "Our flagship mountain conqueror. Built for rugged terrain with unmatched torque.",
    image: "/images/ebike_mountain_1788575116777.jpg",
    features: ["45mph Top Speed", "120 Miles Range", "48 lbs Weight", "Full Suspension", "Carbon Fiber Frame", "Advanced Telemetry", "Fast Charging (2hr)"],
    specs: {
      motor: "1000W Peak Mid-Drive",
      batteryLife: "120 Miles",
      topSpeed: "45 mph",
      brakes: "Quad-Piston Hydraulic",
      suspension: "Full Suspension 140mm Travel",
      weight: "48 lbs"
    },
    recommended: false,
    sales: "12,450+ Units",
    rating: 4.9,
    topSeller: true,
    badge: "#1 Top Seller"
  },
  {
    id: "cargo",
    name: "Kinetix Cargo",
    price: "$2,899",
    type: "Utility & Transport",
    description: "Heavy-duty electric cargo bike. Carry your groceries, gear, or kids effortlessly.",
    image: "/images/ebike_cargo.jpg",
    features: ["20mph Top Speed", "80 Miles Range", "Dual Battery System", "300lbs Payload Capacity", "Heavy Duty Kickstand"],
    specs: {
      motor: "750W Hub Motor (High Torque)",
      batteryLife: "80 Miles (Dual Battery)",
      topSpeed: "20 mph",
      brakes: "Hydraulic Disc 203mm",
      suspension: "Rigid Heavy-Duty Fork",
      weight: "75 lbs"
    },
    recommended: false,
    sales: "3,100+ Units",
    rating: 4.7,
    topSeller: false
  },
  {
    id: "fold",
    name: "Kinetix Fold",
    price: "$1,899",
    type: "Compact Commuter",
    description: "Compact folding electric commuter bike. Fits under your desk or in your trunk.",
    image: "/images/ebike_fold.jpg",
    features: ["20mph Top Speed", "35 Miles Range", "10-Second Fold", "Belt Drive System", "Hidden Battery"],
    specs: {
      motor: "250W Front Hub Motor",
      batteryLife: "35 Miles",
      topSpeed: "20 mph",
      brakes: "Hydraulic Disc",
      suspension: "Rear Elastomer",
      weight: "32 lbs"
    },
    recommended: false,
    sales: "5,500+ Units",
    rating: 4.6,
    topSeller: false
  }
];
