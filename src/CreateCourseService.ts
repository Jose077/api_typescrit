
interface Course {
    name?: string;
    duration: number;
    educator: string;
}

class CreateCourseService {
    execute({name = "default", duration, educator}: Course){
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService;