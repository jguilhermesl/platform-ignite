import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t53ujq2xrx01wb24ry271f/master?query=query%20lessons%20%7B%0A%20%20lessons%20%7B%0A%20%20%09id%20%0A%20%20%09title%0A%20%20%7D%0A%20%20%0A%7D&operationName=lessons',
	cache: new InMemoryCache()
})