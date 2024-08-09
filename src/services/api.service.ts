export const getAllUsers = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return response
}

export const getAllPosts = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    return response
}

export const getAllComments = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
    return response
}

export const getPostsOfUser = async (id: number) => {
       let postOfUser = await fetch('http://jsonplaceholder.typicode.com/users/'+ id + '/posts')
           .then(value => value.json());
       return postOfUser
}

export const getCommentsOfPost = async (id: number) => {
    let commentOfPost = await fetch('http://jsonplaceholder.typicode.com/posts/'+ id + '/comments')
        .then(value => value.json());
    return commentOfPost
}