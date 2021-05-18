import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const Dashboard = () => {
    const history = useHistory();
    const logout = () => {
        console.log('s')
        localStorage.removeItem('token')

        history.push('/')

    }

    const fetchData = () => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-04-18&sortBy=publishedAt&apiKey=e312b920029441008b7f30a84c125522')
            .then(articles => {
                // const articles = articles.data.articles
                console.log('articles', articles.data.articles)
                const result = articles.data.articles
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <h1>Hello..{localStorage.getItem('username')}<br /></h1>
            <button type="button" onClick={logout}>Logout</button>

        </div>
    )
}

export default Dashboard
