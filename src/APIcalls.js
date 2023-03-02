export const getArticles = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=NSEAxjEQ9oAZ3Bvgkxsr6N68vVSDAkG9`)
  .then(response => {
    if(!response.ok) {
      throw new Error(`${response.status}`)
    }
    return response.json()
  })
}

