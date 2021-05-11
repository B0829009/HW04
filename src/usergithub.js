import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const usergit=()=>
{
    class UserGithub extends React.Component 
    {     
      constructor(props) 
      {         
        super(props);         
        this.state = 
        {           
          login: '',
          username: '',           
          githubtUrl: '',           
          avatarUrl: '',
          ID: '',
          followersnum: '',
          Followersurl: '',
          followingnum: '',
          Followingurl: '',
          Gists: '',  
          email: '',      
        }     
      }     
      componentDidMount() 
      {         
        $.get(this.props.source, (result) => 
        {             
          console.log(result);             
          const data = result;             
          if (data) 
          {               
            this.setState({                     
              Login: data.login,
              username: data.name,                     
              githubtUrl: data.html_url,                     
              avatarUrl: data.avatar_url ,
              ID: data.id,
              Url: data.url,
              followersnum: data.followers,
              Followersurl: data.followers_url,
              followingnum: data.followingnum,
              Followingurl: data.following_url,
              Gists: data.gists_url,
              email: data.email, 
            });             
          }         
        });     
      }     
      
      render() 
      {         
        return (           
          <div>             
            <h3>{this.state.login}</h3>
            <h3>{this.state.username}</h3>             
            <img src={this.state.avatarUrl} />             
            <a href={this.state.githubtUrl}>Github Link</a>
            <h3>{this.state.ID}</h3>
            <h3>{this.followersnum}</h3>
            <a href={this.state.Followersurl}>Followers</a>
            <h3>{this.followingnum}</h3>
            <a href={this.state.Followingurl}>Following</a>
            <h3>    </h3>
            <a href={this.state.Gists}>Gists</a>
            <h3>{this.email}</h3>           
          </div>         
        );     
      } 
    } 
    
    ReactDOM.render(<UserGithub source="https://api.github.com/users/B0829009" />, document.getElementById('root'));

}
    
export default usergit;

