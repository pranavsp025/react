import React from "react"
import { render,fireEvent } from "@testing-library/react"
import Button from '../Button';

describe("Check if Button works properly", () =>{
    test("Check if Button rendered correctly",()=>{
        const {getByTestId} = render(<Button />);

        const element = getByTestId('button-test-id');


        expect(element).toBeTruthy()
    })
    
    test("Check if text displayed properly",()=>{
        const text="Click";
        
        const { getByText } = render(<Button text={text}/>)

        getByText(text);
    })

    test("Check if onClick is triggerred", () => {
        const onClick = jest.fn();

        const {getByTestId} = render(<Button onClick={onClick}/>);
        const element = getByTestId('button-test-id');

        fireEvent.click(element);

        expect(onClick).not.toHaveBeenCalledTimes(1)
    })

    test("Check is snapshots is matched properly",() => {
        const onClick = jest.fn();
        const text = "Click";

        const { asFragment } = render(<Button text={text} onClick={onClick}/>);

        expect(asFragment()).toMatchSnapshot();
    })
})