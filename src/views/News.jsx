import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class News extends Component {
    state = {
        news:[{
            id:1001,
            title:"曲终离场，Kindle这盘棋到底输在哪里？"
        },{
            id:1002,
            title:"2021咖啡健康化趋势洞察报告"
        },{
            id:1003,
            title:"年亏188亿，没有了增长的快手未来在哪里"
        }]
    }
  render() {
    return (
      <div>
        <h2>News</h2>
        <ol>
            {
                this.state.news.map((ele)=>{
                    return <li key={ele.id}>
                        <Link to={`/details/${ele.title}`}> {ele.title}</Link>
                    </li>
                })
            }
        </ol>
      </div>
    )
  }
}
