import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from '../shared/log.service';
@Injectable()

export class CoursesService {
    private courses: string[] = ['Angular2', 'Java', 'Android', 'JEE'];

    private static emitterCourseCreated: EventEmitter<string> = new EventEmitter<string>();

    constructor(private logService: LogService) {
        console.log("Iai veio, fui injetado")
    }

    getCourses(): string[] {
        this.logService.info('get courses');
        return this.courses;
    }

    notifyToAdd(course: string): void {
        CoursesService.emitterCourseCreated.emit(course);
    }

    addCourse(course: string): void {
        this.logService.info(`add new course: ${course}`);
        this.courses.push(course);
    }

    getEmitterCourseCreated(): EventEmitter<string> {
        return CoursesService.emitterCourseCreated;
    }


}