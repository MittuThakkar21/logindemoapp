import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const Dashboard = () => {
    const history = useHistory();
    const logout = () => {

        localStorage.removeItem('token')
        history.push('/')

    }

    const [apidata, setApiData] = useState();

    const fetchData = () => {
        axios.get('https://newsapi.org/v2/everything?q=apple&from=2021-05-18&to=2021-05-18&sortBy=popularity&apiKey=e312b920029441008b7f30a84c125522')
            .then(res => {
                const articles = res.data.articles
                // console.log('articles', articles.data.articles)
                // const result = articles.data.articles
                setApiData(articles)
                console.log('resdsadsa0', articles);

            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    const style = {
        color: 'black',
        fontSize: 50,
        font: 'bold'
    };

    return (

        <>

            <h2>Hello..{localStorage.getItem('username')}</h2>
            <h2 style={style}>List of News</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Author</th>
                    </tr>

                    {

                        apidata && apidata.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.title}</td>
                                        <td>{ele.description}</td>
                                        <td>{ele.author}</td>
                                    </tr>


                                </>
                            )
                        })
                    }
                </thead>
                <tbody>
                </tbody>
            </table>




            <button type="button" onClick={logout}>Logout</button>

        </>
    )
}

export default Dashboard
