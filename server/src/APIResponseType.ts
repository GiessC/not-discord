export default interface APIResponseType<T> {
    status: number;
    message?: string;
    data?: T;
}
