export interface INewComment {
    id: number,
    firstname: string,
    lastname: string,
    body: string,
    date: string,
    time: string,
}

export interface IComment extends INewComment {
    isUseful: number,
    isNotUseful: number
}