import React from "react";
import {act} from "react-dom/test-utils";
import {mount} from "enzyme";
import PostScene from "./index";
import PostTemplate from "../../components/templates/post";

it("sets loading to false after a successful fetch", async () => {
    const fakePost = {
        id: 1,
        title: "This is a post linking to google",
        points: 100,
        user: "Robin",
        time: 1489082904,
        time_ago: "3 years ago",
        type: "link",
        content: "",
        comments: [
            {
                id: 2,
                user: "Marc",
                time: 1489085547,
                time_ago: "3 years ago",
                type: "comment",
                comments: [],
                comments_count: 0,
            }
        ],
        comments_count: 1,
        url: "https://google.com",
        domain: "google.com"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve({data: fakePost})
        })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        const wrapper = mount(<PostScene postId={1}/>);

        expect(wrapper.find(PostTemplate).prop("loading")).toBeFalsy();
    });

    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
});