import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {

  return (
    <div className="border border-black my-5 p-2 bg-white rounded-md">
      <h1 className="py-2 text-xl font-bold text-orange-500">
        {title}
      </h1>
      {
        isVisible ? <button onClick={() => setIsVisible(false)}>Hide..</button> : <button onClick={() => setIsVisible(true)}>Show..</button>
      }
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about")

  return (
    <div className="mt-24 px-5 md:px-8 lg:px-10 py-5 bg-orange-50">
      <h1 className="text-3xl font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        desc={
          "This is the about section of Instamart. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur adipisci dolores fugiat laborum, inventore cupiditate illum ad! Corporis ad quis eius voluptates ipsam ducimus similique sit id fuga tenetur illo nesciunt quidem ex, ratione fugiat esse quo facere nulla iste quae, qui neque eum. Molestias sit corrupti nihil consequatur magnam."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Team Instamart"}
        desc={
          "This is the Team section of Instamart. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur adipisci dolores fugiat laborum, inventore cupiditate illum ad! Corporis ad quis eius voluptates ipsam ducimus similique sit id fuga tenetur illo nesciunt quidem ex, ratione fugiat esse quo facere nulla iste quae, qui neque eum. Molestias sit corrupti nihil consequatur magnam."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      <Section
        title={"Careers"}
        desc={
          "This is the Career section of Instamart. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur adipisci dolores fugiat laborum, inventore cupiditate illum ad! Corporis ad quis eius voluptates ipsam ducimus similique sit id fuga tenetur illo nesciunt quidem ex, ratione fugiat esse quo facere nulla iste quae, qui neque eum. Molestias sit corrupti nihil consequatur magnam."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
