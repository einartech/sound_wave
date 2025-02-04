import { describe, expect, it } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";

    
describe('Header', () => {
    it('should render properly', () => {
        render(<Header />);
        });
});

describe('Footer', () => {
    it('should render properly', () => {
        render(<Footer />);
    });
});
