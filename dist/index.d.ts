export declare function greet(world: string): string;
/**
 * Parameters for the fetchData function.
 *
 * @typeparam T - The type of data expected to be returned from the fetch operation.
 * @param {string} url - The URL to fetch from.
 * @param {string} [query] - Optional query string to append to the URL.
 * @param {string} [method='GET'] - HTTP method to use for the request.
 * @param {T} [data] - Data to be sent with the request; relevant for POST, PUT, DELETE methods.
 * @param {(data: T) => void} [onSuccess] - Callback function that is called with the data on a successful fetch.
 * @param {(error: Error) => void} [onError] - Callback function that is called with the error if the fetch fails.
 */
export interface FetchDataParams<T = any> {
    url: string;
    query?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';
    data?: T;
    onSuccess?: (data: T) => void;
    onError?: (data: Error) => void;
}
/**
 * Fetches data from the specified URL and handles responses. It is designed to be flexible,
 * allowing for various HTTP methods and handling both success and error cases.
 *
 * @typeparam T - The type of data expected to be returned from the fetch operation.
 * @param {FetchDataParams<T>} params - The parameters for the fetch operation, including URL, data, and callbacks.
 * @returns {Promise<void>} A Promise that resolves when the fetch operation is complete.
 */
export declare function fetchData<T = any>({ url, query, method, data, onSuccess, onError, }: FetchDataParams<T>): Promise<void>;
export interface ElementAttributes {
    [key: string]: string | undefined;
    content?: string;
}
/**
 * Creates an HTML element with specified attributes and appends it to a parent element.
 *
 * @param {keyof HTMLElementTagNameMap} type - The type of the HTML element to create.
 * @param {ElementAttributes} attributes - Attributes to set on the element. 'content' is used for innerText.
 * @param {Element | null} parent - The parent element to append the new element to.
 * @returns {HTMLElement} The created and potentially appended element.
 */
export declare function createAndAppendElement(type: keyof HTMLElementTagNameMap, attributes: ElementAttributes | null, parent: Element | null): HTMLElement;
/**
 * Validates an email address using a simple regex pattern.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export declare function validateEmail(email: string): boolean;
/**
 * Validates a password based on specified criteria to ensure it meets security standards.
 * - Minimum 10 characters long
 * - Contains at least one uppercase letter
 * - Contains at least one lowercase letter
 * - Contains at least two digit
 * - Contains at least one special character
 *
 * @param {string} password The password to validate.
 * @returns {boolean} True if the password meets all criteria, false otherwise.
 */
export declare function validatePwd(password: string): boolean;
export type DateInput = Date | string | number;
export declare enum OutputFormat {
    ISO = "ISO",
    Unix = "Unix",
    UTC = "UTC",
    Local = "Local",
    Custom = "Custom"
}
export interface DateConvertOptions {
    locale?: string;
    options?: Intl.DateTimeFormatOptions;
}
/**
 * Converts dates between various formats.
 * @param {DateInput} inputDate The date to convert. Can be a Date object, ISO string, or Unix timestamp.
 * @param {OutputFormat} outputFormat The format to output the date as. Supported formats: 'ISO', 'Unix', 'UTC', 'Local', 'Custom'.
 * @param {DateConvertOptions} [formatOptions] Optional parameters for custom formatting.
 * @returns {string | number} The converted date.
 */
export declare function convertDate(inputDate: DateInput, outputFormat: OutputFormat, formatOptions?: DateConvertOptions): string | number;
