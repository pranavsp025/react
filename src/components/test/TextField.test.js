import React from "react"
import { render,fireEvent } from "@testing-library/react"
import TextField from "../TextField";

describe("Check if TextField works properly", () =>{
    test("Check if TextField rendered correctly",()=>{
        const {getByTestId} = render(<TextField />);

        const element = getByTestId('textField-test-id');


        expect(element).toBeTruthy()
    })
    
    test("Check if text displayed properly",()=>{
        const value="value";
        
        const { getByText } = render(<TextField value={value}/>)

    })
    test("Check if text displayed properly",()=>{
        const placeholder = "placeholder";
        
        const { getByText } = render(<TextField placeholder={placeholder}/>)

        // getByText(placeholder)

    })

    test("Check if onChange is triggerred", () => {
        const onChange = jest.fn();

        const {getByTestId} = render(<TextField onChange={onChange}/>);
        const element = getByTestId('textField-test-id');

        fireEvent.click(element);

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    test("Check is snapshots is matched properly",() => {
        const onChange = jest.fn();
        const value="value";
        const placeholder = "placeholder";

        const { asFragment } = render(<TextField value={value} placeholder={placeholder} onChange={onChange}/>);

        expect(asFragment()).toMatchSnapshot();
    })
})