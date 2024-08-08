"use client";

import React, { JSXElementConstructor } from "react";

interface TemplateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  icon?: React.ReactElement;
}

export default function TemplateButton({
  title,
  description,
  icon,
  ...props
}: TemplateButtonProps) {
  const Icon = icon;

  return (
    <button
      className="rounded-lg border shadow-sm p-2 h-12 flex-grow-0 flex items-center self-start text-left gap-2 max-w-60 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-colors"
      {...props}
    >
      <div className="w-auto h-8 aspect-square rounded-md bg-gradient-to-tr from-indigo-400 to-accent-darker text-accent-foreground grid place-content-center border border-accent-foreground/50 shadow-md shadow-accent/40">
        {Icon && React.cloneElement(Icon, { className: "h-5 w-5 m-2" })}
      </div>
      <div className="text-sm flex flex-col pr-1 overflow-hidden">
        <h4 className="font-medium leading-4">{title}</h4>
        <p className="text-muted-foreground truncate">{description}</p>
      </div>
    </button>
  );
}
