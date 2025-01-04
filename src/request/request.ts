
type QueryParameters = Record<string, string> | string[][];

type Body = ReadableStream<Uint8Array<ArrayBufferLike>>

type RequestResponse<T> = {
  toJson: () => Promise<T>;
  body: Body | null;
  status: number;
}

async function request<T>(baseUrl: string, queryParameters: QueryParameters, body: RequestInit): Promise<RequestResponse<T>> {
  const query = new URLSearchParams(queryParameters);
  const url = new URL(`/path?${query.toString()}`, baseUrl);
  const response = await fetch(url.href, body);  
  if (!response.ok) {
    throw new Error(`Request to path '${baseUrl}' failed with status ${response.status}`); 
  }
  return {
    toJson: async () => await response.json() as T,
    body: response.body,
    status: response.status
  }
}

/**
 * 
 * @param baseUrl 
 * @param queryParameters 
 * @returns 
 */
export async function get<T>(baseUrl: string, queryParameters: QueryParameters): Promise<T> {
  const body = {method: 'GET'};
  const response = await request<T>(baseUrl, queryParameters, body)
  const jsonResponse = await response.toJson();
  return jsonResponse; 
}

export async function post<T>(baseUrl: string, queryParameters: QueryParameters, body: BodyInit) {
  const requestBody = {method: 'POST', body};
  const response = await request<T>(baseUrl, queryParameters, requestBody);
  return response.body;
}
