import React from "react";

import TemplateButton from "./template-button";
import BookOpen1 from "@/components/icons/book-open-1";
import Map1 from "@/components/icons/map-1";
import PenNib31 from "@/components/icons/pen-nib-3-1";

import lessonTemplate from "@/utils/constants/note/templates/lesson-template";
import tripTemplate from "@/utils/constants/note/templates/trip-template";
import articleTemplate from "@/utils/constants/note/templates/article-template";
import { JSONContent } from "@tiptap/react";

interface TemplatesListProps {
  onOuput: (template: JSONContent) => void;
}

export default function TemplatesList({ onOuput }: TemplatesListProps) {
  const handleOutput = (template: JSONContent) => {
    onOuput(template);
  };

  return (
    <div className="flex flex-col gap-2 max-w-full">
      <div className="text-muted-foreground">
        <h4 className="text-sm font-medium">Choose a template</h4>
      </div>

      <div className="flex gap-2 pb-4 flex-wrap">
        <TemplateButton
          icon={<BookOpen1 />}
          title="Lesson"
          description="Structured lesson plan"
          onClick={() => handleOutput(lessonTemplate)}
        />
        <TemplateButton
          icon={<Map1 />}
          title="Trip"
          description="Travel itinerary"
          onClick={() => handleOutput(tripTemplate)}
        />
        <TemplateButton
          icon={<PenNib31 />}
          title="Article"
          description="Basic blog article"
          onClick={() => handleOutput(articleTemplate)}
        />
      </div>
    </div>
  );
}
