import React from "react"
import { render,fireEvent } from "@testing-library/react"
import TextField from "../TextField";

describe("Check if TextField works properly", () =>{
    test("Check if TextField rendered correctly",()=>{
        const {getByTestId} = render(<TextField />);

        const element = getByTestId('textField-test-id');


        expect(element).toBeTruthy()
    })
    
    test("Check if value displayed properly",()=>{
        const value="value";
        const onChange = jest.fn();

        
        const { getByDisplayValue } = render(<TextField value={value} onChange={onChange}/>)
        getByDisplayValue(value)

    })
    test("Check if label displayed properly",()=>{
        const label="label";
        
        const { getByLabelText } = render(<TextField label={label}/>)


    })
    test("Check if placeholder displayed properly",()=>{
        const placeholder = "placeholder";
        
        const { getByPlaceholderText } = render(<TextField placeholder={placeholder}/>)

        getByPlaceholderText(placeholder)

    })

    test("Check if onChange is triggerred", () => {
        const onChange = jest.fn();

        const {getByTestId} = render(<TextField onChange={onChange}/>);
        const element = getByTestId('textField-test-id');

        fireEvent.change(element);

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    test("Check is snapshots is matched properly",() => {
        const onChange = jest.fn();
        const value="value";
        const placeholder = "placeholder";
        const type = "type";

        const { asFragment } = render(<TextField value={value} type={type} placeholder={placeholder} onChange={onChange}/>);

        expect(asFragment()).toMatchSnapshot();
    })
})