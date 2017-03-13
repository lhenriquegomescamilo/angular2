import { Injectable, EventEmitter } from "@angular/core";


@Injectable()
export class CoursesService {
    private courses: string[] = ['Angular2', 'Java', 'Android', 'JEE'];

    private static emitterCourseCreated: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        console.log("Iai veio, fui injetado")
    }

    getCourses(): string[] {
        return this.courses;
    }

    notifyToAdd(course: string): void {
        CoursesService.emitterCourseCreated.emit(course);
    }
    addCourse(course: string): void {
        this.courses.push(course);
    }
    getEmitterCourseCreated(): EventEmitter<string> {
        return CoursesService.emitterCourseCreated;
    }


}