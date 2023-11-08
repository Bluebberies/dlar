export type ReadUserByIdResponseProps = {
    responseCode: string,
    responseMessage: string,
    responseData: ResponseDataProps
}

type ResponseDataProps = {
    userId: string
}