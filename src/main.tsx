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
    Radio, // Added Radio
    Alert, // Added Alert
    Tabs, // Added Tabs
    Tooltip, // Added Tooltip
    Spinner,
    Card, // Added Spinner
} from "./index";

// import assate1 from "./assets/assate.jpg"
// import assate2 from "./assets/assate2.png"

// const p = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga ipsam unde ratione libero quae repellendus nam rem ducimus, beatae ipsa, odit consectetur! Eius, ducimus quidem deserunt veniam natus nesciunt!"

interface Option {
    value: string;
    label: string;
}

const App: React.FC = () => {
    // State for Input
    const [inputValue, setInputValue] = useState<string>("");

    // State for DropDown
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const dropdownOptions: Option[] = [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
        { value: "3", label: "Option 3" },
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
        { value: "3", label: "Option 3" },
    ];
    const Options: Option[] = [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
    ];

    const [checkedItems, setCheckedItems] = useState<{
        [key: string]: boolean;
    }>({});

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };

    // State for Radio
    const [selectedRadioOption, setSelectedRadioOption] =
        useState<string>("radio1");
    const radioOptions: Option[] = [
        { value: "radio1", label: "Radio Option 1" },
        { value: "radio2", label: "Radio Option 2" },
        { value: "radio3", label: "Radio Option 3" },
    ];

    // Tabs data
    const tabData: { label: string; content: React.ReactNode }[] = [
        { label: "Tab 1", content: <p>Content for Tab 1</p> },
        { label: "Tab 2", content: <p>Content for Tab 2</p> },
        { label: "Tab 3", content: <p>Content for Tab 3</p> },
    ];

    // const numbers = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="body">
            <h1>Mezmer UI Components</h1>
            <h2>Checkbox</h2>
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
                {Options.map((option) => (
                    <Checkbox
                        key={option.value}
                        theme="dark"
                        label={option.label}
                        name={option.value}
                        value={option.value}
                        checked={checkedItems[option.value] || false}
                        onChange={handleCheckboxChange}
                    />
                ))}
                <p>Checked items: {JSON.stringify(checkedItems)}</p>
            </div>

            <h2>Radio Buttons</h2>
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
                {radioOptions.map((option) => (
                    <Radio
                        key={option.value}
                        theme="dark"
                        label={option.label}
                        name="radioGroup"
                        value={option.value}
                        checked={selectedRadioOption === option.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSelectedRadioOption(e.target.value)
                        }
                    />
                ))}
                <p>Selected Radio: {selectedRadioOption}</p>
            </div>

            <h2>Alerts</h2>
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
                <Alert
                    message="This is an info alert!"
                    type="info"
                    theme="light"
                />
                <Alert
                    message="This is a success alert!"
                    type="success"
                    theme="dark"
                />
                <Alert
                    message="This is a warning alert!"
                    type="warning"
                    theme="light"
                />
                <Alert
                    message="This is an error alert!"
                    type="error"
                    theme="dark"
                    onClose={() => console.log("Error alert closed")}
                />
            </div>

            <h2>Tabs</h2>
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
                <Tabs tabs={tabData} theme="dark" />
            </div>

            <h2>Tooltip</h2>
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
                <Tooltip content="This is a tooltip!" theme="dark">
                    <button>Hover me</button>
                </Tooltip>
                <Tooltip
                    content={<span>Another tooltip example</span>}
                    theme="light"
                >
                    <span>Focus or hover over this text</span>
                </Tooltip>
            </div>

            <h2>Spinner</h2>
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
                <Spinner size="sm" theme="dark" />
                <Spinner size="md" theme="light" />
                <Spinner size="lg" theme="dark" />
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
                    h sdfklh kcfjdkl fkls dk ldjfdkl ;sjfld;sjfklsdjf; lks
                    djflsdkjfl;sdkfjsdkl;fjsdklfj sd;klfjsdkljf
                </Text>
                <Text textType="p" theme="dark">
                    h sdfklh kcfjdkl fkls dk ldjfdkl ;sjfld;sjfklsdjf; lks
                    djflsdkjfl;sdkfjsdkl;fjsdklfj sd;klfjsdkljf
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                    }
                />
                <Input
                    id="name-dark"
                    label="Name (Dark)"
                    theme="dark"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                    }
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
                    onSelect={(option: Option) =>
                        setSelectedOption(option.value)
                    }
                    label="Select (Light)"
                />
                <DropDown
                    theme="dark"
                    options={dropdownOptions}
                    selected={selectedOption}
                    onSelect={(option: Option) =>
                        setSelectedOption(option.value)
                    }
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
            <h2>card</h2>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "600px",
                }}
            >
                <Card
                    theme="dark"
                    pic="https://via.placeholder.com/150"
                    title="Card Title"
                    para="Card Paragraph"
                />
            </div>
        </div>
    );
};

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found!");
}
ReactDOM.createRoot(rootElement as Element).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
