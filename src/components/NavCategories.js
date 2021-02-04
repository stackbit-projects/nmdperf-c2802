import React from 'react';
import _ from 'lodash';

import {getPages, Link, withPrefix, classNames} from '../utils';

export default class NavCategories extends React.Component {
    render() {
        let site = _.get(this.props, 'site', null);
        let page = _.get(this.props, 'page', null);
        let category_pages = _.orderBy(getPages(this.props.pages, '/category'), 'order');
        return (
            <ul className="store__nav-items">
                {_.map(category_pages, (item, item_idx) => {
                    let isCurrentPage = (_.get(page, 'stackbit_url_path', null) === _.get(item, 'stackbit_url_path', null)) ? (true) : false;
                    return (<React.Fragment key={item_idx + '.1'}>
                        <li key={item_idx} className="store__nav-item">
                            <Link href={withPrefix(_.get(item, 'stackbit_url_path', null))} className={classNames('store__nav-item-link', {'store__nav-item-link--active': isCurrentPage})}>
                                {_.get(item, 'title', null)}
                            </Link>
                        </li>
                    </React.Fragment>)
                })}
            </ul>
        );
    }
}
