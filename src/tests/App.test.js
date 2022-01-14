import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "../utilities/test-utils";
import App from "../App";
import * as redux from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("App Component", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;
  const gistsMock = [
    {
      url: "https://api.github.com/gistsMock/45a4808a6c743ff4ce630276845cee97",
      forks_url:
        "https://api.github.com/gistsMock/45a4808a6c743ff4ce630276845cee97/forks",
      commits_url:
        "https://api.github.com/gistsMock/45a4808a6c743ff4ce630276845cee97/commits",
      id: "45a4808a6c743ff4ce630276845cee97",
      node_id: "MDQ6R2lzdDQ1YTQ4MDhhNmM3NDNmZjRjZTYzMDI3Njg0NWNlZTk3",
      git_pull_url:
        "https://gist.github.com/45a4808a6c743ff4ce630276845cee97.git",
      git_push_url:
        "https://gist.github.com/45a4808a6c743ff4ce630276845cee97.git",
      html_url: "https://gist.github.com/45a4808a6c743ff4ce630276845cee97",
      files: {
        "crash.txt": {
          filename: "crash.txt",
          type: "text/plain",
          language: "Text",
          raw_url:
            "https://gist.githubusercontent.com/natanfudge/45a4808a6c743ff4ce630276845cee97/raw/25baccdb12b105d5889158ddfb0a104d06c7e045/crash.txt",
          size: 42772,
        },
      },
      public: true,
      created_at: "2021-04-17T03:22:06Z",
      updated_at: "2021-04-17T03:22:07Z",
      description: null,
      comments: 0,
      user: null,
      comments_url:
        "https://api.github.com/gistsMock/45a4808a6c743ff4ce630276845cee97/comments",
      owner: {
        login: "natanfudge",
        id: 25990014,
        node_id: "MDQ6VXNlcjI1OTkwMDE0",
        avatar_url: "https://avatars.githubusercontent.com/u/25990014?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/natanfudge",
        html_url: "https://github.com/natanfudge",
        followers_url: "https://api.github.com/users/natanfudge/followers",
        following_url:
          "https://api.github.com/users/natanfudge/following{/other_user}",
        gistsMock_url:
          "https://api.github.com/users/natanfudge/gistsMock{/gist_id}",
        starred_url:
          "https://api.github.com/users/natanfudge/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/natanfudge/subscriptions",
        organizations_url: "https://api.github.com/users/natanfudge/orgs",
        repos_url: "https://api.github.com/users/natanfudge/repos",
        events_url: "https://api.github.com/users/natanfudge/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/natanfudge/received_events",
        type: "User",
        site_admin: false,
      },
      truncated: false,
    },
  ];
  const mockState = { gists: gistsMock };

  beforeEach(() => {
    // Mock useSelector hook
    spyOnUseSelector = jest.spyOn(redux, "useSelector");
    spyOnUseSelector.mockReturnValue(mockState);
    // Mock useDispatch hook
    spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    // Mock dispatch function returned from useDispatch
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    spyOnUseSelector.mockClear();
    spyOnUseDispatch.mockClear();
  });

  it("should render correctly", () => {
    const { queryByTestId } = render(<App />, mockState);
    const appComponent = queryByTestId("app");
    expect(appComponent).toBeTruthy();
  });

  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId("app");
    expect(linkElement).toBeInTheDocument();
  });

  it("should render and match snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
