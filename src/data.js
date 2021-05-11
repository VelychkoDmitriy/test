export class Data {
    getData() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => data.json())
            .then(res => console.log(res))
    }
}