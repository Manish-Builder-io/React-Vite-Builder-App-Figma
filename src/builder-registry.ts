import { Builder } from "@builder.io/react";
import BuilderPage from "./App";
import Counter from "./components/Counter/Counter";
import Heading from "./components/Heading/Heading";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(
    Heading,
  {
    name: "Heading",
    inputs: [{ name: "title", type: "text" }],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

