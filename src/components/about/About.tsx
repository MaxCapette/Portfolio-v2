/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import "./about.css";
import { experiences } from "@/Data/experiencesDatas";
export default function About() {
  if (experiences.length === 0) {
    return <div className="aboutContainer">No experience available.</div>;
  }
  const reversedExperiences = [...experiences].reverse();
  return (
    <div className="aboutContainer">
      
      <div className="xps">
        {reversedExperiences.map((xp) => (
            
          <div className="xp" key={xp.id}>
            {xp.bool ? 
            <div className="meImage">
              <img  src="/moi.gif" alt={xp.title} width={100} height={100} /> </div>
            
           : 
           ( <div className="xpDetails">
            <p className="font-bold" >{xp.date}</p>
              <h3 className="font-bold italic text-lg">{xp.title}</h3>
              <p className="font-bold">{xp.description}</p>
              </div>)
        }
            
            {/* <Image
              className="xpImage"
              src={xp.image}
              alt={xp.title}
              width={250}
              height={250}
            /> */}
            <img className="xpImage" src={xp.image} alt={xp.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
