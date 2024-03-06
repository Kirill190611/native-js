const ages = [18, 20, 22, 1, 100, 90, 15, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

type CoursesProps = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}
];
// < 160
const cheapPredicate = (course: CoursesProps) => {
    return course.price < 160;
}

const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "react", price: 150},
]