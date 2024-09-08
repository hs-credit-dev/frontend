// Minimalistic API client implementation that's not production ready.
// Its purpose is to demonstrate some basics only.

export default class APIClient {

	constructor(baseURL) {
        	this.baseURL = baseURL;
		this.token = null;
	}

	async request(url, options = {}) {
		const {params, ...options} = options;
		// Build URL from API path
		if (!url.match(/^https?:\/\//i)) {
			url = `${this.baseURL}${url}`
		}
		url += params ? ('?' + new URLSearchParams(params).toString()) : '';

		if (this.token) {
			options.headers = {
                        	Authorization: `Bearer ${this.token}`,
				...options.headers,
			};
                }
		return await fetch(url, options)
			.then(response => {
				if (!response.ok) {
					throw response;
				}
				return response.json();
			});
	}

	async login(email, password) {
                return await this.request('auth/login', {
			method: 'POST',
			body: JSON.stringify({email, password}),
		}).then(response => {
				this.token = response.token;
			});
        }

	async refresh_token() {
		// Tokens expire so we should keep refreshing them periodically.
		// Please note that current token has to be still valid. Expired token cannot be refreshed.
		return await this.request('auth/refresh_token', {
			method: 'POST',
			body: JSON.stringify({token: this.token}),
		}).then(response => {
				this.token = response.token;
			});
	}

	async logout() {
		// This invalidates current token
		return await this.request('auth/logout', {
			method: 'POST',
		}).then(() => { this.token = null });
        }
};

//
// Following are few examples of using the API.
// The `api` variable is APIClient instance that has been already logged in
// with credentials of user that has permissions to make those API calls 
// otherwise API will respond with 403 status code.
//

async function get_credits(page=0) {
	// API endpoints that return multiple entries are paginated.
	// Paginated response has the following structure:
	// {
	// 	count: <total-count-of-entries>,
	// 	next: <url-to-next-page>,
	// 	previous: <url-to-previous-page>,
	// 	results: <array-of-entries>
	// }
	// Page number is 0-based.
	//
	// You can also use `next` and `previous` URL's from response.
	// Empty URL means there is no next or previous page.
	// `next` and `previous` are full urls, e.g. "http://localhost:8000/api/credits/?page=3"
	return await api.request('api/credits/', {
		params: { page },
	});
};

async function get_all_credits() {
	return await get_credits().then(async (response) => {
		const credits = [response.results];
                while (response.next) {
                        response = await api.request(response.next);
                        credits.push(...response.results);
                }
                return credits;
	});
};

async function create_credit(data) {
	// API endpoints have role based permissions, e.g. only credit owners can create credits.
	return await api.request('api/credits/', {
		method: 'POST',
		body: JSON.stringify(data),
	})
};

async function update_credit(id, options) {
	// `options.body` can be JSON-encoded data. In that case 
	// `options.headers['content-type']` must be set to 'application/json'.
	// Alternatively, FormData instance can be used.
	// DO NOT SET `options.headers['content-type']` in that case.
	// `FormData` is mostly used to upload images like credit logos. See `upload_credit_logo`.
	return await api.request(`api/credits/${id}/`, {
		method: 'PATCH',
		...options,
	});
};

async function upload_credit_logo(id, fileInput) {
	const body = new FormData();
	body.append('logo', fileInput);
	return await api.update_credit(id, { body });
};

async function publish_credit(id) {
	return await this.request(`credits/${id}/publish/`);
};
