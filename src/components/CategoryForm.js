import React, { Component } from 'react';

class CategoryForm extends Component {
    state = { 
        category : 'general'
    }

    handleCategoryChange = e => {
        this.setState({
            category : e.target.value
        }, () => {
            //callback function 
            this.props.handleGetNews(this.state.category);
        })
    }

    render() { 
        return ( 
            <div className="search-engine row">
                <div className="col s12 m8 offset-2">
                    <form action="">
                        <h3>Find news by Category</h3>
                        
                        <div className="input-field col s12 m8 offset-2">
                            <select 
                                onChange={this.handleCategoryChange}
                            >
                                <option value="general"> General </option>
                                <option value="business"> Business </option>
                                <option value="entertainment"> Entertainment </option>
                                <option value="health"> Health </option>
                                <option value="science"> Science </option>
                                <option value="sports"> Sports </option>
                                <option value="technology"> Technology </option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default CategoryForm;