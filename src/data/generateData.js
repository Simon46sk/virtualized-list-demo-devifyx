// src/data/generateData.js
import { format } from "date-fns";
import { faker } from "@faker-js/faker";

export function generateData(count = 10000) {
  return Array.from({ length: count }, (_, id) => ({
    id,
    name: faker.person.fullName(),
    date: faker.date.past(),
    description: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
    selected: false,
  })).map((item) => ({
    ...item,
    dateFormatted: format(item.date, "dd MMM yyyy"),
  }));
}
