export interface HTTPresponse<T> {
    statusCode: number,
    body: T | string
}