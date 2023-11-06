import { useState } from "react";

import ContactModal from "../components/ContactModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const _onButtonClick = () => {
    setShowModal(true);
  };

  const _onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <h3>default page</h3>
      <button onClick={_onButtonClick}>Open Modal</button>
      {showModal && <ContactModal onClose={_onClose} />}
    </>
  );
};

export default Home;
