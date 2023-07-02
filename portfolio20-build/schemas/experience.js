import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paginfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
      defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
    }),
    defineField({  
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type: "reference", to: {type:"skill"}}]
    }),
    defineField({ 
      name: 'datestarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({ 
      name: 'dateended',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({ 
      name: 'currentlyWorking',
      title: 'CurrentlyWorking',
      type: 'date',
    }),
    defineField({ 
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type:"string" }],
    }),
  ],
})
