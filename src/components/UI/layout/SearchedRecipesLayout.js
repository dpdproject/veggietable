import React from 'react'

import Title from '../atoms/Title'
import Search from '../molecules/Search/Search'
import RecipesList from '../organisms/RecipesList'

const SearchedRecipesLayout = (props) => {
    return (
        <section className="recipes">
            <div className="recipes--container">
                <div className="recipes--container--title">
                    <Title title={`# ${props.query}`} />
                    <Search />
                </div>
                <RecipesList data={props.data} />
            </div>
        </section>
    )
}

export default SearchedRecipesLayout