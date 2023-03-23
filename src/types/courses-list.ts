export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string | Date;
	duration: number;
	authors: string[];
}

export type CoursesList = Course[];
