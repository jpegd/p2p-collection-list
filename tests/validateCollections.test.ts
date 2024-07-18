import { schema } from "../schema";
import { expect } from "@jest/globals";
import { getAddress } from "@ethersproject/address";
import addFormats from "ajv-formats";
import Ajv from "ajv";

const ajv = new Ajv();
addFormats(ajv);
const validator = ajv.compile(schema);

describe("Test collection data", () => {
  const collectionList = require(`../collections.json`);

  it("validates", () => {
    for (let collection of collectionList) {
      const result = validator(collection);
      expect(result === true);
    }
  });

  it("all addresses are valid and checksummed", () => {
    for (let collection of collectionList) {
      expect(getAddress(collection.address) === collection.address);
    }
  });

  it("contains no duplicate collection keys", () => {
    const map: any = {};
    for (let collection of collectionList) {
      const key = collection.key;
      if (map[key]) {
        console.log("duplicate address found");
      }
      expect(typeof map[key] === "undefined");
      map[key] = true;
    }
  });

  it("contains no duplicate addresses", () => {
    const map: any = {};
    for (let collection of collectionList) {
      const key = collection.address;
      if (map[getAddress(key)]) {
        console.log("duplicate key found");
      }
      expect(typeof map[key] === "undefined");
      map[getAddress(key)] = true;
    }
  });

  it("contains no duplicate os slug", () => {
    const map: any = {};
    for (let collection of collectionList) {
      const key = collection.osSlug;
      if (map[key]) {
        console.log("duplicate key found");
      }
      expect(typeof map[key] === "undefined");
      map[key] = true;
    }
  });

  it("contains no duplicate blur slug", () => {
    const map: any = {};
    for (let collection of collectionList) {
      const key = collection.blurSlug;
      if (map[key]) {
        console.log("duplicate key found");
      }
      expect(typeof map[key] === "undefined");
      map[key] = true;
    }
  });
});
