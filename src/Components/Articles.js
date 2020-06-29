import React from 'react';

export default class Articles extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            articles: null,
            tags : null,
            filteredtag : null
            
        };

    }

    handleTagClick = (tag) => {
        console.log(tag);
        fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=${tag}`)
        .then(res => res.json())
        .then((data) => {
           return this.setState({articles : data.articles, filteredtag : tag})
        });
        var globalButton = document.querySelector(".globalFeed");
        var tagButton = document.querySelector(".filterFeed");
        if( tagButton){
            globalButton.classList.remove('active');
            tagButton.classList.add('active');
            
        }
        else{
            
            globalButton.classList.add('active');

        }

        
};

    
    
    
    componentDidMount() {

        
        fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
        .then((res) => res.json())
        .then((data) => {
           this.setState({articles : data.articles});
        })

        fetch(`https://conduit.productionready.io/api/tags`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({tags : data.tags});
        })
            
    }

    render() {
        
        return (
            <>
            <div className='container article-flex'>
            <div className=' article-div '>
                <button className='globalFeed active'><a href='#'>Global Feed</a></button>
              {this.state.filteredtag ?
                    <button className='filterFeed'><a href='#'>{this.state.filteredtag}</a></button> : null } 
                

            {this.state.articles ? this.state.articles.map((article) =>  
                <div className='articleCard'>
                    <div className='authorPicture pictureflex'>
                    <img src={article.author.image} alt={article.author.username} className='authorDp'></img>
                    <ul className='authorTime'>
                    <h3 className='articleAuthor'>Author: {article.author.username}</h3>
                    <p>{ new Date(article.createdAt).toDateString()}</p>

                    </ul>
                    
                    </div>
                    <h2 className='articleTitle'>{article.title}</h2>
                    
                    <p className='articledes'>Description: {article.description}</p>
                    
                </div>
                
            ): <h2>Loading</h2>}
            
            </div>
            <div className='container tags-div '>
               
                <h4 className='popularTags'>Popular Tags</h4>
                {this.state.tags ? this.state.tags.map((data, i) =>
                    <button key={i}  onClick= {() => this.handleTagClick(data)}>{data}</button> ) : <h2>Loading</h2>}
                 
                

            </div>
            </div>
            
            </>
        )
        
        }
  
}