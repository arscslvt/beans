import { JSONContent } from "@tiptap/react";

const articleTemplate: JSONContent = {
  "type": "doc",
  "content": [{
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "[Article Title]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 4, "textAlign": "left" },
    "content": [{ "text": "Author: [Author's Name]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 4, "textAlign": "left" },
    "content": [{ "text": "Date: [Insert Date]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "1. Introduction", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text": "Briefly summarize the main idea or argument of the article.",
      "type": "text",
    }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "2. Key Points", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Key Point 1:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Summary of key point]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Key Point 2:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Summary of key point]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Key Point 3:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Summary of key point]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "3. Supporting Evidence", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Evidence 1:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text": "- [Quote or reference from the article]",
      "type": "text",
    }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text": "- Explanation: [Explain how this supports the key point]",
      "type": "text",
    }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Evidence 2:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text": "- [Quote or reference from the article]",
      "type": "text",
    }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text": "- Explanation: [Explain how this supports the key point]",
      "type": "text",
    }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "4. Analysis", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text":
        "Discuss the implications of the article's arguments and evidence. What do they mean? How do they support the main idea?",
      "type": "text",
    }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "5. Conclusion", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text":
        "Summarize the overall conclusions of the article and any final thoughts you have on the topic.",
      "type": "text",
    }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "6. Further Reading", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Reference 1:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Title/Author]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Reference 2:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Title/Author]", "type": "text" }],
  }, { "type": "paragraph", "attrs": { "textAlign": "left" } }],
};

export default articleTemplate;
