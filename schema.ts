export const schema = {
  type: "object",
  properties: {
    address: { type: "string" },
    label: { type: "string" },
    key: { type: "string" },
    imageBaseUrl: { type: "string", format: "uri" },
    logoUrl: { type: "string", format: "uri" },
    isERC721: { type: "boolean" },
    osSlug: { type: "string" },
    blurSlug: { type: "string" },
    ext: { type: "string" },
  },
  required: ["address", "label", "key", "imageBaseUrl", "logoUrl", "isERC721"],
};
