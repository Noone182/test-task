async function apiRequest() {
  const response = await fetch('https://my-json-server.typicode.com/Vespand/crmm-tasks/users');

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}

apiRequest().catch(error => {
  error.message;
});
export {
	apiRequest
}
