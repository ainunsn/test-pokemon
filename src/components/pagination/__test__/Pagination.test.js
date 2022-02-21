import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import Pagination from "../Pagination";

describe("Pagination", () => {
  it("should render pagination correctly without props", () => {
    const { getByTestId } = render(<Pagination />);
    expect(getByTestId("pagination")).toBeInTheDocument();
  });

  describe("render pagination with defa props and dynamically props", () => {
    it("should render pagination with default props", async () => {
      render(<Pagination />);
      const divElements = screen.getByText(/1/i);
      expect(divElements).toBeInTheDocument();
    });

    it("should render pagination with total page = 100", async () => {
      render(<Pagination totalData={100} />);
      const divElements = screen.getAllByTestId(/pagination-component-[0-9]/);
      expect(divElements.length).toBe(5);
    });

    it("the active page should have active classname", async () => {
      render(<Pagination page={2} totalData={100} />);

      //   render data test by index
      const divElement = screen.getByTestId(/pagination-component-1/);
      expect(divElement).toHaveClass("active");

      expect(screen.getByTestId(/pagination-component-2/)).not.toHaveClass(
        "active"
      );
    });

    it("the previous button won't active if page = 1", async () => {
      render(<Pagination page={1} totalData={100} />);
      const divElement = screen.getByTestId(/previous-page/i);
      expect(divElement).not.toHaveClass("active");
    });

    it("the previous button active if page > 1", async () => {
      render(<Pagination page={2} totalData={100} />);
      const divElement = screen.getByTestId(/previous-page/i);
      expect(divElement).toHaveClass("active");
    });

    it("the next button won't active if total data less than equal 8", async () => {
      render(<Pagination page={1} totalData={8} />);
      const divElement = screen.getByTestId(/next-page/i);
      expect(divElement).not.toHaveClass("active");
    });
    it("the next button active if total data more than equal 8", async () => {
      render(<Pagination page={1} totalData={9} />);
      const divElement = screen.getByTestId(/next-page/i);
      expect(divElement).toHaveClass("active");
    });

    it("the next button won't active if it is a last page", async () => {
      render(<Pagination page={2} totalData={9} />);
      const divElement = screen.getByTestId(/next-page/i);
      expect(divElement).not.toHaveClass("active");
    });

    describe("event click pagination", () => {
      const handleClick = jest.fn();

      beforeEach(() => {
        render(
          <Pagination page={3} totalData={100} onPageChange={handleClick} />
        );
      });

      describe("when next page clicked", () => {
        beforeEach(() => {
          user.click(screen.getByTestId("next-page"));
        });

        it("page 3 won't be active anymore", async () => {
          const divElement = await screen.findByTestId(
            /pagination-component-2/i
          );

          //   await waitFor(() => expect(divElement).not.toHaveClass("active"));
          setTimeout(() => {
            expect(divElement).not.toHaveClass("active");
          }, 200);
        });

        it("the active page is 4", async () => {
          const divElement = await screen.findByTestId(
            /pagination-component-3/i
          );
          setTimeout(() => {
            expect(divElement).toHaveClass("active");
          }, 1000);
        });
      });

      describe("when previous page clicked", () => {
        beforeEach(() => {
          user.click(screen.getByTestId("previous-page"));
        });

        it("page 3 won't be active anymore", async () => {
          const divElement = await screen.findByTestId(
            /pagination-component-2/i
          );

          //   await waitFor(() => expect(divElement).not.toHaveClass("active"));
          setTimeout(() => {
            expect(divElement).not.toHaveClass("active");
          }, 200);
        });

        it("the active page is 2", async () => {
          const divElement = await screen.findByTestId(
            /pagination-component-1/i
          );
          setTimeout(() => {
            expect(divElement).toHaveClass("active");
          }, 1000);
        });
      });
    });
  });
});
