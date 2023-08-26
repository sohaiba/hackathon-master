import { defineField, defineType } from "sanity"

// schemas/pet.js
export default defineType ({
    name: 'products',
    type: 'document',
      title: 'Products',
    fields: [
      defineField(
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        }),
        defineField(
        {      
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "title", // field to fetch slugify value from (in this case the title)
              maxLength: 50,   // max length of the output string
            },
        }),
        defineField({
          name: "description",
          type: "string",
          title:"Description"
        }),
        defineField({
          name: "price",
          type: "number",
          title:"Price"
        }),
        defineField({
          name: "image",
          type: "image",
          title:"Image"
        }),
        defineField({
          name: "category",
          type: "string",
          title:"Category",
          options: {
            list: [
              {title:"Mens", value:"Mens"},
              {title:"Womens", value:"Womens"},
              {title:"Kids", value:"Kids"}
            ]
          }
        }),
      
    ]
  })