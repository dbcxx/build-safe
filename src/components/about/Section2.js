import React from "react";
import "./section2.css";
import home1 from "../../assets/home1.jpeg";
import home2 from "../../assets/home-2.jpg";

const Section2 = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="heading">
          <h2 className="section-heading">
            Occupiers Liability Insurance in a nutshell
          </h2>
          <p className="sub-heading">
            The Insurance Act 2003 makes it compulsory for all public buildings
            to be insured including buildings under construction exceeding two
            floors. <br /> <br /> Section 65 of the Insurance Act (2003) makes
            it mandatory for all public buildings to be insured. These include
            buildings such as hotels, markets, business and office premises
            (private, corporate and government), petrol stations, hospitals,
            health centres and clinics, schools and training institutions as
            well as residential buildings that are tenanted.
            <br /> <br /> The policy provides covers to the insured ranging from
            compulsory compensation for property damage, death of users,
            licensee or members of the public who die as a result of fire,
            flood, storm, earthquake or collapse of the building, optional one
            year rent of an alternative accommodation for a displaced occupier
            and/or his family and optional compensation for permanent disability
            or death of the occupier and/or his family up for up to N5,000,000
            in aggregate.
          </p>
        </div>
        <div className="row-container">
          <div className="row">
            <div className="img-col">
              <img alt="" src={home1} />
            </div>
            <div className="text-col">
              <h3>Benefits of Insuring your property</h3>
              <p>
                Building insurance offers liability coverage. This provides you
                protection against financing risk from lawsuits and claims in
                that regard. It protects you against third-party claims as it
                covers every form of bodily injury sustained as a result of
                damage to the property.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="text-col">
              <h3>Penalty for non-compliance</h3>
              <p>
                An occupier or owner of premises who is in default of compliance
                commits an offence and is liable on conviction to a fine of not
                more than N100,000 or to imprisonment for one year or both.
              </p>
            </div>
            <div className="img-col n-margin">
              <img alt="" src={home2} />
            </div>
          </div>
        </div>
        {/* <div className="text-col">
          <h3>Occupiers Liability Insurance in a nutshell</h3>
          <p>the content is with felicia</p>
        </div> */}
      </div>
    </section>
  );
};
export default Section2;
