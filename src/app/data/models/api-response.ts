export class ApiResponse {
  message: string;
  statusCode: number;
  data: any;
  error: null;

  constructor(data: any, message?: string, statusCode?: number, error?: null ) {
    this.message = message  || '';
    this.statusCode = statusCode || 0;
    this.data = data;
    this.error = error || null;
  }
}
