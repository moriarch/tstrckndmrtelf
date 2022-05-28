
export default function RequestToApi(url){
    return fetch(url)
    .then(result=>result.json())
    .catch(error=>console.log(error))
}