import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { AddItem } from "../addItem/AddItem";

describe("AddItem component", () => {
    it("Should render app without crashing", () => {
        const component = render(<AddItem />);
    })
    it("Should have an empty placeholder", () => {
        const component = render(<AddItem />);
        const itemName = component.getByLabelText("Item Name")
        expect(itemName.placeholder).toBe("")
    })
})
