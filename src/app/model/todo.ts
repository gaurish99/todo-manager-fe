export class Todo {
    constructor(
        public id: string = '',
        public title: string = '',
        public summary: string = '',
        public complete: boolean = false
    ) { }
}