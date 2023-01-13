import React from 'react';
import PageContent from './PageContent';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { capitalizeFirstLetter } from '../../src/utils/helpers';

function Page({ currentTab }) {
  const bodyMarg = {marginLeft: '3%'}
 


  const renderPage = () => {
    switch (currentTab.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section className={bodyMarg}>
      <h2 >{capitalizeFirstLetter(currentTab.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;