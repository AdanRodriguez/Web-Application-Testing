import React from "react";
import {render} from "@testing-library/react";
import Display from './Display';
import Dashboard, {strike, setStrike} from "./Dashboard";


test("renders header strike", () => {
    const {getByTestId} = render(<Display/>);
    getByTestId(/board-strike/i);
});

test("renders header ball", () => {
    const {getByTestId} = render(<Display/>);
    getByTestId(/board-ball/i);
});

test("renders dashboard", () => {
    render(<Dashboard/>);
});

test("renders strike count", () => {
    if (strike === 1) expect(setStrike(1)).toBe(2);
    if (strike === 0) expect(setStrike(1)).toBe(1);
})