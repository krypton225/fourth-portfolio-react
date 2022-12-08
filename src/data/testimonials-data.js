import insert from "./generateIDs";

import {
    ImageTestimonials1,
    ImageTestimonials2,
    ImageTestimonials3,
    ImageTestimonials4,
    ImageTestimonials5,
    ImageTestimonials6
} from "./imgs-imports";

const testimonialsData = [
    {
        imagePerson: ImageTestimonials1,
        imageAltText: "john doe",
        personName: "john doe",
        personJob: "software engineer",
        personComment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem",
    },
    {
        imagePerson: ImageTestimonials2,
        imageAltText: "silas jaxson",
        personName: "silas jaxson",
        personJob: "front end web developer",
        personComment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem",
    },
    {
        imagePerson: ImageTestimonials3,
        imageAltText: "luka milo",
        personName: "luka milo",
        personJob: "back end developer",
        personComment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem",
    },
    {
        imagePerson: ImageTestimonials4,
        imageAltText: "easton kai",
        personName: "easton kai",
        personJob: "javascript developer",
        personComment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem",
    },
    {
        imagePerson: ImageTestimonials5,
        imageAltText: "elijah liam",
        personName: "elijah liam",
        personJob: "android developer",
        personComment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem",
    },
    {
        imagePerson: ImageTestimonials6,
        imageAltText: "james owen",
        personName: "james owen",
        personJob: "IOS developer",
        personComment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem",
    },
];

(() => insert(testimonialsData))();

export default testimonialsData;