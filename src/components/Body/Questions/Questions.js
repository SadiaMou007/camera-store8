import React from "react";
import "./Questions.css";
import { BsQuestionOctagon } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";
const Questions = () => {
  return (
    <div className="bg-white rounded p-2 m-5">
      <h5 className=" p-2">
        <BsQuestionOctagon className="icon"/> Q1: How React Works?
      </h5>
      <h6 className=" p-2">
        <RiQuestionAnswerLine className="icon"/> React use virtual DOM to identify the change in
        states using diff algorithm. Virtual DOM store a tree data structure
        according to the real DOM element. After change something it identify
        the change by comparing with real DOM. For ensure the minimal change in
        operation virtual DOM use react algorithm to find the optimal way of
        change anything in real DOM element.And because of React's declarative,
        component base, easy to customize feature it is the most popular
        JavaScript Library.
      </h6>
      <h5 className="mt-4 p-2">
        <BsQuestionOctagon className="icon"/> Q2: Props vs State
      </h5>
      <h6 className=" p-2">
        <RiQuestionAnswerLine className="icon"/>
        <table className="table">
          <thead></thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Props</th>
            <th scope="col">State</th>
          </tr>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th>Props is Immutable.(cannot be modified).</th>
              <th>State is Mutable.(can modify value).</th>
            </tr>
            <tr>
              <th scope="row">2</th>
              <th>Props are used for read only.</th>
              <th>State can both read and write.</th>
            </tr>
            <tr>
              <th scope="row">3</th>
              <th>
                Props are used to pass data from one component to another.
              </th>
              <th>State update the state values in the component.</th>
            </tr>
          </tbody>
        </table>
      </h6>
      <h5 className=" p-2 mt-4">
        <BsQuestionOctagon className="icon"/> Q3: How UseState Works?
      </h5>
      <h6 className=" p-2">
        <RiQuestionAnswerLine className="icon"/> React useState Hook works for change any state to the component. It contains a state variable and a function. State variable can contain any parameter like object, array or variables. Each time state change the state function updated . Then, it pass the changed value to state variable.
      </h6>
    </div>
  );
};

export default Questions;
