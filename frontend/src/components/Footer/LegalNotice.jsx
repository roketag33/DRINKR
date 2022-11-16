import React from "react";

import Titleblock from "../titleblock/Titleblock";

const LegalNotice = () => {
  return (
    <div className="LegalNotice">
      <Titleblock />
      <div className="LegalNotice_container">
        <h2> Mention Legal </h2>
        <h3>1. INTRODUCTION</h3>
        <p>
          {" "}
          This Privacy Policy applies to each company listed in Section 9 below
          ("Company", "us" or "we"). It explains how we collect, use and
          disclose information about you. This Privacy Policy applies to
          information which identifies you, or from which you can reasonably be
          identified, such as your full name or name and postal address
          ("personal information"). This Policy describes how we handle the
          personal information we collect when you engage with us including when
          you engage with us as a job applicant, a supplier or a customer of any
          of our services. Our services include: home delivery subscription,
          digital services subscription, advertising, websites, mobile sites,
          applications ("apps"), and widgets, competitions and customer surveys.
          In this policy, when we refer to Company Services we mean all of our
          services including considering you for jobs you apply for and dealing
          with you as a supplier (collectively, "Company Services"). This
          Privacy Policy does not apply to personal information collected by our
          journalists and photographers for the purpose of gathering news. We
          handle the information we collect in the course of journalism in
          accordance with the Australian Press Council Privacy Standards, which
          can be found at: http://www.presscouncil.org.au/privacy-principles/.
          This Privacy Policy otherwise applies to information about anyone who
          interacts with us, including advertisers, subscribers and people who
          use Company Services (both registered and unregistered users).
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;
