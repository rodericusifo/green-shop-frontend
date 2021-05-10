interface IResponse {
  success: boolean;
  message: string;
  data?: any;
  status: string;
  statusCode: number;
}

export { IResponse };
