import { describe, it } from "vitest";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import { render } from "@testing-library/react";

    
    describe('Header', () => {
    it('should be rendered', () => {
        render(<Header />)
    })
});
    describe('Footer', () => {
    it('should be rendered', () => {
        render(<Footer />)
    })
});