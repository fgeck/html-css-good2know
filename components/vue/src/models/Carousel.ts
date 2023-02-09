export class Carousel {
  items: CarouselItem[] = [];

  constructor(items: CarouselItem[]) {
    this.items = items;
  }
}

export class CarouselItem {
  testimonial: string = "";
  name: string = "";
  jobDescription: string = "";
  imagePath: string = "";

  constructor(
    testimonial: string,
    name: string,
    jobDescription: string,
    imagePath: string
  ) {
    this.testimonial = testimonial;
    this.name = name;
    this.jobDescription = jobDescription;
    this.imagePath = imagePath;
  }
}
