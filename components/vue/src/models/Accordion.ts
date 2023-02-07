import { h } from "vue";

export class AccordionItem {
  title: string = "";
  description: string = "";
  bulletPoints: string[] = [];
  hidden: boolean = true;

  constructor(
    title: string,
    description: string,
    bulletPoints: string[],
    hidden: boolean
  ) {
    this.title = title;
    this.description = description;
    this.bulletPoints = bulletPoints;
    this.hidden = hidden;
  }
}

export class Accordion {
  items: AccordionItem[] = [];

  constructor(items: AccordionItem[]) {
    this.items = items;
  }
}
