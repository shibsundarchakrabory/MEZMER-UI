import React, { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
    Checkbox,
    // PlainButton,
    // Card,
    // ShadowButton,
    Container,
    DropDown,
    Input,
    Modal,
    Text,
} from "./index";

// import assate1 from "./assets/assate.jpg"
// import assate2 from "./assets/assate2.png"

// const p = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga ipsam unde ratione libero quae repellendus nam rem ducimus, beatae ipsa, odit consectetur! Eius, ducimus quidem deserunt veniam natus nesciunt!"

const App = () => {
    // State for Input
    const [inputValue, setInputValue] = useState("");

    // State for DropDown
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownOptions = [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
        { value: "3", label: "Option 3" },
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
        { value: "3", label: "Option 3" },
    ];

    return (
        <div className="body">
            <h1>Mezmer UI Components</h1>
            <h2>text</h2>
            <div
                style={{
                    
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                }}
            >
              <Checkbox/>
            
            </div>
            <h2>text</h2>
            <div
                style={{
                    
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                }}
            >
               <Text textType="h1" theme="light">
                h sdfklh kcfjdkl fkls dk ldjfdkl ;sjfld;sjfklsdjf; lks djflsdkjfl;sdkfjsdkl;fjsdklfj sd;klfjsdkljf
               </Text>
               <Text textType="p" theme="dark">
                h sdfklh kcfjdkl fkls dk ldjfdkl ;sjfld;sjfklsdjf; lks djflsdkjfl;sdkfjsdkl;fjsdklfj sd;klfjsdkljf
               </Text>
            
            </div>
            <h2>Input Fields</h2>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "600px",
                }}
            >
                <Input
                    id="name-light"
                    label="Name (Light)"
                    theme="light"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                    id="name-dark"
                    label="Name (Dark)"
                    theme="dark"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <h2>Dropdowns</h2>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "600px",
                }}
            >
                <DropDown
                    theme="light"
                    options={dropdownOptions}
                    selected={selectedOption}
                    onSelect={(option) => setSelectedOption(option.value)}
                    label="Select (Light)"
                />
                <DropDown
                    theme="dark"
                    options={dropdownOptions}
                    selected={selectedOption}
                    onSelect={(option) => setSelectedOption(option.value)}
                    label="Select (Dark)"
                />
            </div>
            <h2>container</h2>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "600px",
                }}
            >
                <Container direction="row">
                  <div>jksdfhsjk</div>
                  <div>jksdfhsjk</div>
                  <div>jksdfhsjk</div>
                  <div>jksdfhsjk</div>
                </Container>
            
            </div>
            <h2>Modal</h2>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "600px",
                }}
            >
               {/* <Modal theme="dark" >
                <h1>jkdsklf</h1> 
                <h1>jkdsklf</h1>
                <h1>jkdsklf</h1>
               </Modal> */}
            
            </div>
            
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
