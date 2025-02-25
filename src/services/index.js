
export const retrieveBlog = async (blogSlug) => {
    try {
        const res = await fetch(`http://localhost:3000/blog/${blogSlug}`)
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (err) {
        throw new Error(err)
    }
}

export const loginUser = async (body) => {
    // token
    // 1. JWT (JSON Web token) = <header>.<payload>.<signature>  
    // 2. Normal Token = <>
    // Frontend
    // Header: Authorization 

    // cookie
    // Frontend
    // Just hit the api

    try {
        const res = await fetch("http://localhost:3000/login", {
            body: JSON.stringify(body),
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (err) {
        throw new Error(err)
    }
}

export const logout = async () => {
    try {
        const res = await fetch("http://localhost:3000/login")
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (err) {
        throw new Error(err)
    }
}


export const postBlog = async (body) => {
    try {
        const res = await fetch("http://localhost:3000/blog", {
            body: JSON.stringify(body),
            method: "POST",
            headers: { "Content-Type": "application/json", authorization: `Bearer ${localStorage.getItem('token')}` }
        })

        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (err) {
        throw new Error(err)
    }
}

export const patchBlog = async (blogSlug, body) => {
    try {
        const res = await fetch(`http://localhost:3000/blog/${blogSlug}`, {
            body: JSON.stringify(body),
            method: "PUT",
            headers: { "Content-Type": "application/json", authorization: `Bearer ${localStorage.getItem('token')}` }
        })

        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (err) {
        throw new Error(err)
    }
}
