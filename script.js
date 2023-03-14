// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
const timeTaken = {};

		const fetchApiData = async (url) => {
			const startTime = Date.now();
			const response = await fetch(url);
			const data = await response.json();
			const endTime = Date.now();
			return { data, time: endTime - startTime };
		}

		// Promise.all
		const promiseAllStartTime = Date.now();
		await Promise.all(apiUrls.map(fetchApiData));
		const promiseAllEndTime = Date.now();
		timeTaken.promiseAll = promiseAllEndTime - promiseAllStartTime;
		document.getElementById('output-all').innerText = timeTaken.promiseAll;

		// Promise.any
		const promiseAnyStartTime = Date.now();
		await Promise.any(apiUrls.map(fetchApiData));
		const promiseAnyEndTime = Date.now();
		timeTaken.promiseAny = promiseAnyEndTime - promiseAnyStartTime;
		document.getElementById('output-any').innerText = timeTaken.promiseAny;
	
// You can write your code here
