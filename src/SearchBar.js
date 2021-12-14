import React from "react";


class SearchBar extends React.Component {

    state = {searchText: ''};

    onInputChange = (e) => {
        this.setState({searchText: e.target.value});
    };

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchFormSubmit(this.state.searchText)
        //make sure we call calback from parent component

    }

    render(){

        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.formSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchText}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;