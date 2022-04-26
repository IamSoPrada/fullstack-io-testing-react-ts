import { fireEvent } from "@testing-library/react";
import { CartWidget } from "./CartWidget";
import { useCartContext } from "../CartContext";

jest.mock("../CartContext", () => ({
  useCartContext: jest.fn(),
}));

const useCartContextMock = useCartContext as unknown as jest.Mock<
  Partial<ReturnType<typeof useCartContext>>
>;

describe("CartWidget", () => {
  it.todo("shows the amount of products in the cart");
  it.todo("navigates to cart summary page on click");

  it("navigates to cart summary page on click", () => {
    useCartContextMock.mockReturnValue({
      products: [],
    });
    const { getByRole, history } = renderWithRouter(() => <CartWidget />);
    fireEvent.click(getByRole("link"));
    expect(history.location.pathname).toEqual("/cart");
  });
});
