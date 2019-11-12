import React from 'react';
import {shallow, mount} from 'enzyme';
import {render, unmountComponentAtNode} from "react-dom";
import PostTemplate from "./index";
import {act} from "react-dom/test-utils";
import Comments from "../../organisms/comments";
import Loading from "../../organisms/loading";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("shows the loading indicator", () => {

    const wrapper = shallow(<PostTemplate loading={true}/>, container);
    expect(wrapper.find(Comments)).toHaveLength(0);
    expect(wrapper.find(Loading)).toHaveLength(1);


});