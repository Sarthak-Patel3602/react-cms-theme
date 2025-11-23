import React, { useEffect, useState } from "react";
import Style from './style.module.css';
import { logInfo } from '@hubspot/cms-components';

export function Component(props) {
const {} = props;
const [showModal, setShowModal] = useState(false);

const MyModal = () => {
    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);
    return (
     <>
        <div
          className={Style.modal_wrapper}
          onClick={() => {
            setShowModal(false);
          }}
        ></div>
        <div className={Style.modal_container}>
          <h1>This is a heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at quo
            minima vel, iste sed tenetur? Cupiditate suscipit accusantium alias.
          </p>
          <button
            className={Style.modal_btn}
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close Button
          </button>
        </div>
      </>
    );
  };

//   logInfo(props, 'props');
return (
    <>
<button
        className={Style.modal_btn}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>
      <div className={Style.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quisquam
          sed consequuntur ullam amet, quo corrupti aliquid voluptate ex
          consectetur, quibusdam, facere cupiditate neque a mollitia? Natus, hic
          commodi. Ut, eveniet inventore dolorem magni vel laudantium quasi,
          voluptates fugit numquam est accusantium maiores repellat adipisci
          labore commodi! Id, ab minus?
        </p>
      </div>
      {showModal && <MyModal />}
    </>
);
}

export { fields } from './fields.jsx';

export const meta = {
label: 'Modal Example',
};