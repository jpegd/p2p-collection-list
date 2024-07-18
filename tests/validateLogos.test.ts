import fs from "fs";
import { expect } from "@jest/globals";
import sizeOf from "image-size";

const LOGO_PATH = "logos";

test("Image size is valid and extension should be in png", () => {
  let keyMapping: Record<string, string> = {};
  const collectionList = require(`../collections.json`);

  keyMapping = collectionList.reduce(
    (prev: any, curr: any) => ({ ...prev, [curr.key]: true }),
    {},
  );

  fs.readdir(LOGO_PATH, (error: any, logos: string[]) => {
    if (error) {
      throw error;
    }
    for (const file of logos) {
      const [filename, extention] = file.split(".");
      const { width, height } = sizeOf(LOGO_PATH + "/" + file);

      try {
        expect(extention).toBe("png");
      } catch {
        throw Error(`${filename} should have a png extension`);
      }

      try {
        expect(keyMapping[filename]).toBe(true);
      } catch {
        throw Error(`${filename} doesnt exist as a key`);
      }

      try {
        expect(width).toBe(240);
      } catch {
        throw Error(`${filename} should have a width of 240`);
      }

      try {
        expect(height).toBe(240);
      } catch {
        throw Error(`${filename} should have a height of 240`);
      }
    }
  });
});
