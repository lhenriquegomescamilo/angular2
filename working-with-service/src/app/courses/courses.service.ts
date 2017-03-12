import { Injectable } from "@angular/core";


@Injectable()
export class CoursesService {
    constructor() {
        console.log("Iai veio, fui injetado")
    }
    getCourses(): string[] {
        return ['Angular2', 'Java', 'Android', 'JEE'];
    }
}