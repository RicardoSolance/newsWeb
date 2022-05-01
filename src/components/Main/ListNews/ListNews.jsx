import React, { Component } from "react";
import Aside from '../Aside';
import axios from "axios";
import Card from './Card';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = { ListNews: this.props.defaultList , news :''}
    console.log('CONSTRUCTOR VACIO' )
  }
  async componentDidMount(){
    //Petición HTTP
    // const APIKEY = process.env.API_KEY;
    
    const resp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DB81RCd7mBPnCwvNINC9wPiRLfWwnWS5`);
    const data = await resp.data.response.docs.slice(0, 6);
    
    
    console.log('sin slice',data[0]);
    const selectedData = data.map(article => {
      return {
          title: article.headline.main,
          info: article.abstract,
          author: article.byline.original,
          source: article.source,
          url: article.web_url
      }
  })
    this.setState({ListNews:selectedData});
  
  this.updateNews = (News) => {
    this.setState({
      ListNews: [...selectedData, News],
    });
  }
  }
 

  render() {
    return <section className="listNews">
      <div className="cardlist">
      {
          this.state.ListNews.map((News, i) => 
          
            <Card value={News} key={i} />
            
        )
      }
      </div>
      <Aside/>
      
    </section>;
  }
}
ListNews.defaultProps = {
  defaultList: [],
};

export default ListNews;
