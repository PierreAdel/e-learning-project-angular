import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getCourses() {
    return [
      {
        id: 1,
        name: 'Backend dev',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        teacher: 'Mossad',
      },
      {
        id: 2,
        name: 'Design patterns',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        teacher: 'Omar Salem',
      },
      {
        id: 3,
        name: 'Learn how to learn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        teacher: 'Omar Salem',
      },
      {
        id: 4,
        name: 'Frontend dev',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        teacher: 'Pierre Adel',
      },
    ];
  }
}
