export default interface APIErrorResponse<T> {
    status: number;
    message?: string;
    data?: T;
}
