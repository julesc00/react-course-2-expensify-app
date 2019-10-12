import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixture/expense";

test("Should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseLIst expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
})