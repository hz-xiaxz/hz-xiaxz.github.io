interface Window {
  postServer(
    url: string,
    opts?: { headers?: Record<string, string>; body?: any }
  ): Promise<any>;
}
