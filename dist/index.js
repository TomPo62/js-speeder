var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Lib EntryPoint
export function greet(world) {
    return `Hello, ${world}!`;
}
/**
 * Fetches data from the specified URL and handles responses. It is designed to be flexible,
 * allowing for various HTTP methods and handling both success and error cases.
 *
 * @typeparam T - The type of data expected to be returned from the fetch operation.
 * @param {FetchDataParams<T>} params - The parameters for the fetch operation, including URL, data, and callbacks.
 * @returns {Promise<void>} A Promise that resolves when the fetch operation is complete.
 */
export function fetchData({ url, query, method = 'GET', data, onSuccess, onError, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${url}${query ? `?${query}` : ''}`, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: method !== 'GET' && method !== 'HEAD'
                    ? JSON.stringify(data)
                    : undefined,
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = yield response.json();
            if (onSuccess)
                onSuccess(responseData);
        }
        catch (error) {
            if (onError)
                onError(error);
            else
                console.error('Fetch error:', error);
            throw error;
        }
    });
}
/**
 * Creates an HTML element with specified attributes and appends it to a parent element.
 *
 * @param {keyof HTMLElementTagNameMap} type - The type of the HTML element to create.
 * @param {ElementAttributes} attributes - Attributes to set on the element. 'content' is used for innerText.
 * @param {Element | null} parent - The parent element to append the new element to.
 * @returns {HTMLElement} The created and potentially appended element.
 */
export function createAndAppendElement(type, attributes, parent) {
    const element = document.createElement(type);
    if (attributes) {
        Object.keys(attributes).forEach((key) => {
            const value = attributes[key];
            if (key === 'content' && value !== undefined) {
                element.innerText = value;
            }
            else if (value !== undefined) {
                element.setAttribute(key, value);
            }
        });
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}
/**
 * Validates an email address using a simple regex pattern.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
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
export function validatePwd(password) {
    const minLengthRegex = /.{10,}/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const digitRegex = /(.*[0-9]){2}/;
    const specialCharRegex = /[\W_]/;
    return (minLengthRegex.test(password) &&
        upperCaseRegex.test(password) &&
        lowerCaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password));
}
export var OutputFormat;
(function (OutputFormat) {
    OutputFormat["ISO"] = "ISO";
    OutputFormat["Unix"] = "Unix";
    OutputFormat["UTC"] = "UTC";
    OutputFormat["Local"] = "Local";
    OutputFormat["Custom"] = "Custom";
})(OutputFormat || (OutputFormat = {}));
/**
 * Converts dates between various formats.
 * @param {DateInput} inputDate The date to convert. Can be a Date object, ISO string, or Unix timestamp.
 * @param {OutputFormat} outputFormat The format to output the date as. Supported formats: 'ISO', 'Unix', 'UTC', 'Local', 'Custom'.
 * @param {DateConvertOptions} [formatOptions] Optional parameters for custom formatting.
 * @returns {string | number} The converted date.
 */
export function convertDate(inputDate, outputFormat, formatOptions = {}) {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date input');
    }
    switch (outputFormat) {
        case OutputFormat.ISO:
            return date.toISOString();
        case OutputFormat.Unix:
            return Math.floor(date.getTime() / 1000);
        case OutputFormat.UTC:
            return date.toUTCString();
        case OutputFormat.Local:
            return date.toLocaleString(formatOptions.locale, formatOptions.options);
        case OutputFormat.Custom:
            if (!formatOptions.options) {
                throw new Error('Options must be provided for custom date formatting');
            }
            return new Intl.DateTimeFormat(formatOptions.locale, formatOptions.options).format(date);
        default:
            throw new Error('Unsupported output format');
    }
}
//# sourceMappingURL=index.js.map