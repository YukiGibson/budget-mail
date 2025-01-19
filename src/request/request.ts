
type QueryParameters = Record<string, string> | string[][];

type Body = ReadableStream<Uint8Array<ArrayBufferLike>>

type RequestResponse<T> = {
  toJson: () => Promise<T>;
  body: Body | null;
  status: number;
}

type BaseUrl = string | URL

async function retry<T>(fn: Promise<T>,retryTimes: number = 1, error = new Error()) {
  if (retryTimes > 3) {
    throw new Error(`Reached retry limit: ${error.message}`);
  }
  let results: T;
  try {
    results = await fn;
  } catch (error) {
    setTimeout(() => {
      // just wait
    }, 1000 * retryTimes);
    retry(fn, retryTimes + 1, error) ;
  }
  return results
}

async function request<T>(baseUrl: BaseUrl, queryParameters: QueryParameters, body: RequestInit): Promise<RequestResponse<T>> {
  const query = new URLSearchParams(queryParameters);
  const url = new URL(`/path?${query.toString()}`, baseUrl);
  const fetchPromise = fetch(url.href, body);
  const response = await retry(fetchPromise)
  if (!response.ok) {
    throw new Error(`Request to path '${baseUrl}' failed with status ${response.status}`); 
  }
  // use the abort controller if we need to cancel requests
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
export async function get<T>(baseUrl: BaseUrl, queryParameters: QueryParameters): Promise<T> {
  const body = {method: 'GET'};
  const response = await request<T>(baseUrl, queryParameters, body)
  const jsonResponse = await response.toJson();
  return jsonResponse; 
}

export async function post<T>(baseUrl: BaseUrl, queryParameters: QueryParameters, body: BodyInit) {
  const requestBody = {method: 'POST', body};
  const response = await request<T>(baseUrl, queryParameters, requestBody);
  return response.body;
}
