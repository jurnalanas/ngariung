import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
// import posts, { _posts, _titles } from '@ngariung/posts';
// TODO: Somehow Jest doesn't recognize mocks module. Deal with this later
// import Posts from '../posts/pages/Posts';

afterEach(cleanup);

// test("SearchParams", async () => {
//   const {
//     getByTestId,
//   } = render( <Posts /> );

//   const postCards = getByTestId("posts-count");
//   expect(postCards.children.length).toEqual(_titles.length);
// });

