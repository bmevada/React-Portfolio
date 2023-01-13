import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../src/utils/helpers';

function Nav(props) {

  const  {
        pages=[],
        currentTab,
        setTabChange,

    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);

    //Add links to the navigation bar - About; Portfolio; Contact and Resume
    return (    
        <nav>
          <ul className="flex-row">
            {pages.map((Page) => (
              <li
                className={`mx-5  ${
                  currentTab.name === Page.name && 'navActive'
                  }`}
                key={Page.name}
              >
                <span
                  onClick={() => setTabChange(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
    );
  }

export default Nav;