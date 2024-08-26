import { JSONContent } from "@tiptap/react";

const lessonTemplate: JSONContent = {
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "[Course Title]: [Lesson Topic]", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 4, "textAlign": "left" },
      "content": [{ "text": "Date: [Insert Date]", "type": "text" }],
    },
    { "type": "paragraph", "attrs": { "textAlign": "left" } },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "1. Introduction", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 3, "textAlign": "left" },
      "content": [{ "text": "Overview:", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{
        "text": "Briefly summarize the lesson topic.",
        "type": "text",
      }],
    },
    {
      "type": "heading",
      "attrs": { "level": 1, "textAlign": "left" },
      "content": [{ "text": "Objectives:", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Objective 1]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Objective 2]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Objective 3]", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "2. Key Concepts", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- ", "type": "text" }, {
        "text": "Concept 1:",
        "type": "text",
        "marks": [{ "type": "bold" }],
      }, { "text": " ", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- ", "type": "text" }, {
        "text": "Concept 2:",
        "type": "text",
        "marks": [{ "type": "bold" }],
      }, { "text": " ", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- ", "type": "text" }, {
        "text": "Concept 3:",
        "type": "text",
        "marks": [{ "type": "bold" }],
      }, { "text": " ", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "3. Detailed Notes", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 3, "textAlign": "left" },
      "content": [{ "text": "Topic 1:", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "[Add detailed notes here.]", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 3, "textAlign": "left" },
      "content": [{ "text": "Topic 2:", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "[Add detailed notes here.]", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "4. Examples", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- ", "type": "text" }, {
        "text": "Example 1:",
        "type": "text",
        "marks": [{ "type": "bold" }],
      }, { "text": " ", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{
        "text": "  - Description: [Brief explanation of the example.]",
        "type": "text",
      }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "  - Steps:", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "    1. [Step 1]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "    2. [Step 2]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "  ", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- ", "type": "text" }, {
        "text": "Example 2:",
        "type": "text",
        "marks": [{ "type": "bold" }],
      }, { "text": " ", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{
        "text": "  - Description: [Brief explanation of the example.]",
        "type": "text",
      }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "  - Steps:", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "    1. [Step 1]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "    2. [Step 2]", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "5. Summary", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{
        "text": "- Recap the key points discussed in the lesson.",
        "type": "text",
      }],
    },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "6. Assignments/Exercises", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Assignment/Exercise 1]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Assignment/Exercise 2]", "type": "text" }],
    },
    {
      "type": "heading",
      "attrs": { "level": 2, "textAlign": "left" },
      "content": [{ "text": "7. Additional Resources", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Resource 1 - Title/Link]", "type": "text" }],
    },
    {
      "type": "paragraph",
      "attrs": { "textAlign": "left" },
      "content": [{ "text": "- [Resource 2 - Title/Link]", "type": "text" }],
    },
  ],
};

export default lessonTemplate;
