export interface IQuestionList {
    result: IQuestion[],
    loading: boolean,
    loaded: boolean,
    error: unknown | null
}

export interface IQuestion {
    id: number,
    userId: number,
    title: string,
    body: string,
    time: string,
    date: string,
    commentsCount: number,
}