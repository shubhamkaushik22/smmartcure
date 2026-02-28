import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/founder.jpg";
import productParacetamol from "@/assets/product-paracetamol.jpg";
import productAmoxicillin from "@/assets/product-amoxicillin.jpg";
import productMultivitamin from "@/assets/product-multivitamin.jpg";

export const siteData = {
  company: {
    name: "SmmartCure Pharma",
    tagline: "Smarter Solutions. Healthier Lives.",
    about: `SmmartCure Pharma was founded in 2023 by Mr. Shubham Kaushik, following the unprecedented challenges of the COVID-19 pandemic. Having worked with a reputed multinational company in Gurugram, Mr. Kaushik witnessed firsthand the struggles faced by countless families in accessing affordable medicines during those difficult times. Inspired by a vision to serve the people of India with compassion and integrity, he set out to create a company that could make quality healthcare accessible to all.`,

    mission: `From its humble beginnings in Haridwar, SmmartCure Pharma has grown steadily, driven by a commitment to affordability, innovation, and patient well-being. Today, we proudly serve customers across 10 cities and extend our reach online through Tata 1mg, ensuring that essential medicines are available to those who need them most.

Our mission is to provide affordable, high-quality pharmaceutical products that improve health outcomes and enhance the quality of life for our customers. We are dedicated to innovation, safety, and customer satisfaction, striving to be a trusted partner in healthcare for families across India.`,

    vision: `At SmmartCure Pharma, we believe healthcare is not just about curing illness as it is about caring for people. Our formulations are developed through rigorous research and manufactured under stringent quality standards, reflecting our dedication to safety and trust.

Every step we take is guided by the belief that good health should never be a privilege, but a right for everyone.`,

    bannerHeadline: "Committed to Smarter Healthcare Solutions",
    bannerSubheading:
      "Aam Nagrik ki Pharma Company - Quality Medicines, Affordable Prices, Trusted Care.",

    bannerImage: heroBg,

    footerText:
      "SmmartCure Pharma is committed to delivering trusted pharmaceutical products with innovation, safety, and care. Your health is our priority.",

    copyright: "© 2026 SmmartCure Pharma. All Rights Reserved.",
  },

  founder: {
    name: "Shubham Kaushik",
    title: "Founder & Director",
    image: founderImg,
    journey: `At just 27 years old, Mr. Shubham Kaushik was building a successful career with leading multinational companies in Gurugram. However, the COVID-19 pandemic opened his eyes to a harsh reality as millions of people across India, especially those from economically weaker backgrounds, were struggling to afford essential medicines.

Moved by the suffering he witnessed, Mr. Kaushik made it his mission to change this. He envisioned a company that would serve customers with affordable prices and uncompromising quality, ensuring that healthcare was not a luxury but a right accessible to all.`,
  },

  contact: {
    email: "info@smmartcurepharma.com",
    socialLinks: {
      instagram: "https://www.instagram.com/smmartcure_pharma",
      linkedin: "https://www.linkedin.com/company/smmartcurepharma",
      facebook: "https://www.facebook.com/smmartcurepharma",
    },
  },

  whyChooseUs: [
    {
      title: "Quality Assured",
      description:
        "Every product undergoes rigorous quality checks and meets international pharmaceutical standards as we have WHO certified manufacturing firms.",
      icon: "shield-check",
    },
    {
      title: "Trusted Formulations",
      description:
        "Our formulations are developed by experienced pharmacists using proven, research-backed ingredients.",
      icon: "heart-pulse",
    },
    {
      title: "Advanced Research",
      description:
        "We invest in cutting-edge R&D to bring innovative and effective healthcare solutions to market.",
      icon: "microscope",
    },
    {
      title: "Customer Focused",
      description:
        "Patient well-being is at the center of everything we do, from formulation to delivery.",
      icon: "users",
    },
  ],

  products: [
    {
      id: "Acepacure SP Tablets",
      name: "Acepacure SP Tablets",
      category: "Pain relief antibiotics",
      shortDescription:
        "Acepacure-SP Tablet is a combination medicine that relieves muscle, joint, and postoperative pain. It effectively alleviates pain and inflammation in conditions like rheumatoid arthritis, ankylosing spondylitis, and osteoarthritis.",
      fullDescription: `Acepacure-SP Tablet should be taken at the dose and duration advised by your doctor. It should be taken with food or milk to prevent stomach upset. Taking the medicine regularly at the correct times increases its effectiveness. It is important to continue taking it until your doctor tells you it is safe to stop.

Nausea, vomiting, stomach pain, indigestion, heartburn, increased liver enzymes, dizziness, drowsiness, and diarrhea are some common side effects that might be observed on taking this medicine. Your doctor may regularly monitor your kidney function, liver function, and blood component levels if you take this medicine for long-term treatment. Long-term use may lead to serious complications such as stomach bleeding and kidney problems. Acepacure-SP Tablet is not recommended if you are pregnant or breastfeeding.`,
      composition: "Each tablet contains Aceclofenac (100mg) + Paracetamol (325mg) + Serratiopeptidase (15mg)",
      indications:
        "Relief of mild to moderate pain including headache, toothache, backache, muscle pain, menstrual pain, and reduction of fever.",
      dosage:
        "Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Acepacure-SP Tablet should be taken with or after food.",
      packaging: "Strip of 10 tablets | Box of 10 strips",
      image: productParacetamol,
      buyLink: "https://www.1mg.com/drugs/acepacure-sp-tablet-903202",
    },
    {
      id: "Rabmacure DSR Capsules",
      name: "Rabmacure DSR Capsules",
      category: "Gastritis and Acid Reflux",
      shortDescription:
        "Rabmacure-DSR Capsule is a combination medicine used to treat gastroesophageal reflux disease (acid reflux). It works by relieving the symptoms of acidity, such as heartburn, stomach pain, or irritation. It also neutralizes the acid and promotes easy passage of gas to reduce stomach discomfort.. Prescription required.",
      fullDescription: `Rabmacure-DSR Capsule is a combination medicine used to treat gastroesophageal reflux disease (acid reflux). It works by relieving the symptoms of acidity, such as heartburn, stomach pain, or irritation. It also neutralizes the acid and promotes easy passage of gas to reduce stomach discomfort.`,
      composition:
        "Each capsule contains Domperidone (30mg) + Rabeprazole (20mg)",
      indications:
        "Rabmacure-DSR Capsule should be taken on an empty stomach in the dose and duration advised by your doctor. The exact dose will depend on your condition and response to treatment. Continue taking it for as long as prescribed, even if your symptoms improve, as stopping early may cause them to return or worsen. Inform your healthcare provider about all other medicines you are taking, as some may interact with Rabmacure-DSR Capsule.",
      dosage:
        "Rabmacure-DSR Capsule is a combination of two medicines: Domperidone and Rabeprazole. Domperidone is a prokinetic which works on the upper digestive tract to increase the movement of the stomach and intestines, allowing the food to move more easily through the stomach. Rabeprazole is a proton pump inhibitor (PPI) which works by reducing the amount of acid in the stomach, which helps in the relief of acid-related indigestion and heartburn.",
      packaging: "Strip of 10 capsules | Box of 10 strips",
      image: productAmoxicillin,
      buyLink: "https://www.1mg.com/drugs/rabmacure-dsr-capsule-903149",
    },
    {
      id: "Montelure LC Tablets",
      name: "Montelure LC Tablets",
      category: "Antibiotics",
      shortDescription:
        "Montelure-LC Tablet is a combination medicine used in the treatment of allergic symptoms such as runny nose, stuffy nose, sneezing, itching, swelling, watery eyes, and congestion or stuffiness. It also reduces inflammation in the airways and makes breathing easier.",
      fullDescription: `Montelure-LC Tablet is taken with or without food in a dose and duration as advised by the doctor. The dose you are given will depend on your condition and how you respond to the medicine. You should keep taking this medicine for as long as your doctor recommends. If you stop treatment too early, your symptoms may come back and your condition may worsen. Let your healthcare team know about all other medications you are taking, as some may affect, or be affected by, this medicine.`,
      composition:
        "Levocetirizine (5mg) + Montelukast (10mg)",
      indications:
        "Montelure LC Tablet is used to treat allergic rhinitis and runny nose.",
      dosage:
        "",
      packaging: "Strip of 10 tablets | Box of 10 strips",
      image: productMultivitamin,
      buyLink: "https://www.1mg.com/drugs/montelure-lc-tablet-940956",
    },
  ],
};