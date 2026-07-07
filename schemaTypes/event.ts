import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Datum",
      type: "datetime",
    }),

    defineField({
      name: "caption",
      title: "Kurzbeschreibung",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});