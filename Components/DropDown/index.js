import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import usaf from "../../public/usaf.png";


const AppDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Image width="28px" height="23px" className="me-2" src={usaf} />
        <span>English</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AppDropDown;
