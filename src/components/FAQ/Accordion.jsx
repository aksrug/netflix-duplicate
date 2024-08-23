import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`accordion ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div className="panel" style={{ display: isOpen ? "block" : "none" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Accordion = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <AccordionItem
        title="What is Netflix?"
        content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <AccordionItem
        title="How much does Netflix cost?"
        content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts."
      />
      <AccordionItem
        title="Where can I watch?"
        content="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
      />
      <AccordionItem
        title="How do I cancel?"
        content="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <AccordionItem
        title="What can I watch on Netflix?"
        content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />
      <AccordionItem
        title="Is Netflix good for kids?"
        content="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
      />
      <AccordionItem
        title="Why am I seeing this language?"
        content="Your browser preferences determine the language shown here."
      />
    </div>
  );
};

export default Accordion;
