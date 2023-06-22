import { v4 as uuidv4 } from "uuid";
import "./PartnersList.scss";

const PartnersList = () => {
  const partners = [
    "Rigas Tehniska Universitate (Riga, Latvia)",
    "Vilnius Gediminas Technical University (Vilnius, Lithuania)",
    "Andijan machine-building institute (Coordinator, Uzbekistan),",
    "Turin Polytechnic University in Tashkent (Tashkent, Uzbekistan)",
    "Kimyo International University in Tashkent (Tashkent, Uzbekistan)",
    "Tashkent University of Information Technology (Tashkent, Uzbekistan)",
    "Bukhara State Medical Institute (Buhkara, Uzbekistan)",
    "Bukhara Engineering Technological Institute (Buhkara, Uzbekistan)",
    "Ministry of Higher and Secondary Specialised Education System of Uzbekistan (Tashkent, Uzbekistan)",
    "Center of development of medical education Ministry of public health of the republic of Uzbekistan (Tashkent, Uzbekistan)",
    "Tibbiyot texnikalariga xizmat ko’rsatish o’quv ishlab chiqarish markazi (Tashkent, Uzbekistan)",
    "“MAKRO FARM ANDIJAN” Ltd (Asaka, Uzbekistan)",
  ];
  return (
    <ul className="partners-list">
      {partners.map((partner) => (
        <li key={uuidv4()} className="text">
          &#8226; <span className="text">{partner}</span>
        </li>
      ))}
    </ul>
  );
};

export default PartnersList;
