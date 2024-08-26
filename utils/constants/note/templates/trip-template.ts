import { JSONContent } from "@tiptap/react";

const tripTemplate: JSONContent = {
  "type": "doc",
  "content": [{
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "[Trip Destination]: [Trip Title]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 4, "textAlign": "left" },
    "content": [{ "text": "Date: [Insert Date]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "1. Overview", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Purpose:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{
      "text": "Briefly summarize the reason for the trip.",
      "type": "text",
    }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Travel Companions:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- [Companion 1]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- [Companion 2]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "2. Itinerary", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Day 1:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Activities:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "  - [Activity 1]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "  - [Activity 2]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Details]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Day 2:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Activities:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "  - [Activity 1]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "  - [Activity 2]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Details]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "3. Highlights", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Highlight 1:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Description:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [What made this special?]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Highlight 2:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Description:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [What made this special?]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "4. Accommodations", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Hotel/Stay 1:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Location:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Address/Details]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Impressions/Comments]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Hotel/Stay 2:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Location:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Address/Details]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Impressions/Comments]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "5. Meals", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Restaurant/Meal 1:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Location:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Address/Details]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Dish:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [What you ate]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Taste/Experience]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Restaurant/Meal 2:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Location:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Address/Details]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Dish:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [What you ate]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Taste/Experience]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "6. Expenses", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Category 1:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Amount:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Total spent]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Details/Comments]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 3, "textAlign": "left" },
    "content": [{ "text": "Category 2:", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Amount:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Total spent]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Notes:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Details/Comments]", "type": "text" }],
  }, {
    "type": "heading",
    "attrs": { "level": 2, "textAlign": "left" },
    "content": [{ "text": "7. Final Thoughts", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Favorite part of the trip:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Summary]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "What could have been better:",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Reflection]", "type": "text" }],
  }, {
    "type": "paragraph",
    "attrs": { "textAlign": "left" },
    "content": [{ "text": "- ", "type": "text" }, {
      "text": "Would you go again?",
      "type": "text",
      "marks": [{ "type": "bold" }],
    }, { "text": " [Yes/No and why]", "type": "text" }],
  }, { "type": "paragraph", "attrs": { "textAlign": "left" } }],
};

export default tripTemplate;
