import React from "react";

const CATEGORIES = [
    {category: 'all', title: 'all'},
    {category: 'dashboard', title: '대시보드'},
    {category: 'system', title: '시스템'},
    {category: 'web', title: '웹페이지'}
]

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFocused: false}
        this.handleFocus = this.handleFocus.bind(this)
    }

    handleFocus() {
        this.setState(state => ({
            isFocused: true
        }))
    }

    render() {
        const category = this.props.category
        const title = this.props.title

        return (
            <li
                className={this.state.isFocused ? 'active' : ''}
                onClick={this.handleFocus} data-groups={category}>
                {title}
            </li>
        )
    }
}

class Categories extends React.Component {

    render() {
        const items = []

        this.props.categories.forEach((category) => {
            items.push(
                <Category
                    category={category.category}
                    title={category.title}
                />
            )
        })
        return (
            <nav className="category">
                <ul className="filter-options">
                    {items}
                </ul>
            </nav>
        )
    }
}

class Link extends React.Component {
    render() {
        const link = this.props.link
        const category = this.props.category
        const linkURL = this.props.linkURL
        const title = link.title
        const imageURL = link.imageURL
        const description = link.description

        return (
            <li className="link" data-groups={category}>
                <a href={linkURL} target="_blank">
                    <h4 className="link-title">{title}</h4>
                    <img src={imageURL}/>
                    <div className="link-description">{description}</div>
                </a>
            </li>
        );
    }
}

class Links extends React.Component {
    render() {
        const filterText = this.props.filterText
        const items = []

        this.props.links.forEach((link) => {
            if (link.category.indexOf(filterText) === -1) {
                return
            }
            if (link.title.indexOf(filterText) === -1) {
                return
            }
            items.push(
                <Link
                    key={link.title}
                    category={link.category}
                    link={link}
                    linkURL={link.linkURL}
                    title={link.title}
                    imageURL={link.imageURL}
                    descript={link.description}/>
            )
        });

        return (
            <section>
                <ul id="grid" className="links">
                    {items}
                </ul>
            </section>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    render() {
        return (
            <div className="search">
                <svg x="0px" y="0px" viewBox="0 0 24 24" width="20px" height="20px">
                    <g strokeLinecap="square" strokeLinejoin="miter" stroke="currentColor">
                        <line fill="none" strokeMiterlimit="10" x1="22" y1="22" x2="16.4" y2="16.4"/>
                        <circle fill="none" stroke="currentColor" strokeMiterlimit="10" cx="10" cy="10" r="9"/>
                    </g>
                </svg>
                <label htmlFor="search-input">Search</label>
                <input
                    type="search"
                    id="search-input"
                    placeholder="project name ..."
                    value={this.props.filter}
                    onChange={this.handleFilterTextChange}/>
            </div>
        )
    }
}

class FilterableLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}/>
                <Links
                    links={this.props.links}
                    filterText={this.state.filterText}/>
            </div>
        )
    }
}

const LINKS = [
    {
        category: 'dashboard',
        linkURL: 'http://www.naver.com',
        title: 'apex',
        imageURL: '/images/icons/009-microorganisms.png',
        description: '네이버'
    },
    {
        category: 'system',
        linkURL: 'http://www.naver.com',
        title: 'ns-db',
        imageURL: '/images/icons/012-report.png',
        description: '네이버'
    },
    {
        category: 'dashboard',
        linkURL: 'http://www.naver.com',
        title: 'vass',
        imageURL: '/images/icons/014-medical report.png',
        description: '네이버'
    },
    {
        category: 'web',
        linkURL: 'http://www.naver.com',
        title: 'dqts',
        imageURL: '/images/icons/018-intellectual.png',
        description: '네이버'
    },
    {
        category: 'system',
        linkURL: 'http://www.naver.com',
        title: 'mel',
        imageURL: '/images/icons/019-molecules.png',
        description: '네이버'
    },
    {
        category: 'web',
        linkURL: 'http://www.naver.com',
        title: 'budon',
        imageURL: '/images/icons/036-laboratory.png',
        description: '네이버'
    },
    {
        category: 'system',
        linkURL: 'http://www.naver.com',
        title: 'quicklinks',
        imageURL: '/images/icons/037-science book.png',
        description: '네이버'
    },
    {
        category: 'web',
        linkURL: 'http://www.naver.com',
        title: 'naver',
        imageURL: '/images/icons/041-dna.png',
        description: '네이버'
    },
    {
        category: 'web',
        linkURL: 'http://www.naver.com',
        title: 'naver2',
        imageURL: '/images/icons/046-chemical.png',
        description: '네이버'
    }
]

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <h1>통합 메인 화면</h1>
                <Categories categories={CATEGORIES}/>
                <FilterableLinks links={LINKS}/>
            </div>
        )
    }

}

export default Content