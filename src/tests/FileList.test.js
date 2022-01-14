import React from "react";
import renderer from "react-test-renderer";
import FileList from "../components/FileList";

it("should render correctly", () => {
  const filesFixture = {
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
  };
  const tree = renderer
    .create(
      <FileList
        fileKeys={Object.keys(filesFixture)}
        files={Object.values(filesFixture)}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
